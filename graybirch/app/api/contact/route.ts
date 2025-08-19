import { NextRequest, NextResponse } from "next/server";
import fs from 'fs/promises';
import path from 'path';
import { Resend } from "resend";
import { z } from "zod";
import { verifyToken } from "@/lib/contactSecurity";

// Simple in-memory rate limiting: 5 submissions per hour per IP
const WINDOW_MS = 1000 * 60 * 60; // 1 hour window
const MAX_PER_WINDOW = 5;
const ipHits: Record<string, { ts: number; count: number }> = {};

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(5000),
  company: z.string().max(0).optional(), // honeypot must stay empty
});

const resendKey = process.env.RESEND_API_KEY;
const resend = resendKey ? new Resend(resendKey) : null;

export async function POST(req: NextRequest) {
  // Setup logging
  const logDir = path.join(process.cwd(), 'logs');
  async function writeLog(entry: any) {
    await fs.mkdir(logDir, { recursive: true });
    const file = path.join(logDir, 'contact_log.jsonl');
    await fs.appendFile(file, JSON.stringify(entry) + '\n');
  }
  let body: unknown;
  try {
    body = await req.json();
  } catch (e) {
    const headers = Object.fromEntries(req.headers.entries());
    await writeLog({ ts: new Date().toISOString(), type: 'error', error: 'Invalid JSON', headers, body: null });
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  // Log incoming request
  await writeLog({ ts: new Date().toISOString(), type: 'request', headers: Object.fromEntries(req.headers.entries()), body });

  // Enforce allowed origin & host (stricter)
  const allowed = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "");
  const origin = req.headers.get("origin")?.replace(/\/$/, "");
  const hostHeader = req.headers.get('host');
  try {
    if (allowed) {
      const allowedUrl = new URL(allowed);
      if (origin && origin !== allowed) {
        return NextResponse.json({ error: "Origin not allowed" }, { status: 403 });
      }
      // Referer check: only the origin must match
      const refererHeader = req.headers.get('referer');
      if (refererHeader) {
        try {
          const refOrigin = new URL(refererHeader).origin.replace(/\/$/, '');
          if (refOrigin !== allowed) {
            return NextResponse.json({ error: "Referer not allowed" }, { status: 403 });
          }
        } catch {}
      }
      if (hostHeader && hostHeader !== allowedUrl.host) {
        return NextResponse.json({ error: "Host mismatch" }, { status: 403 });
      }
    }
  } catch {}

  // Optional: signed anti-replay token (client must send x-contact-token + x-contact-sig headers)
  const secret = process.env.CONTACT_FORM_SECRET;
  if (secret) {
    const token = req.headers.get("x-contact-token");
    const sig = req.headers.get("x-contact-sig");
    if (!verifyToken(token || "", sig || "", secret)) {
      return NextResponse.json({ error: "Invalid token" }, { status: 403 });
    }
    // CSRF double-submit: token must also match HttpOnly cookie
    const csrfCookie = req.cookies.get('contact_csrf')?.value;
    if (!csrfCookie || csrfCookie !== token) {
      return NextResponse.json({ error: "CSRF validation failed" }, { status: 403 });
    }
  }

  // Rate limit
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  const now = Date.now();
  const node = ipHits[ip];
  if (!node || now - node.ts > WINDOW_MS) {
    ipHits[ip] = { ts: now, count: 1 };
  } else {
    node.count++;
    if (node.count > MAX_PER_WINDOW) {
      return NextResponse.json({ error: "Too many submissions. Try again later." }, { status: 429 });
    }
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed", issues: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  const { name, email, message } = parsed.data;

  const CONTACT_TO = process.env.CONTACT_TO;
  const MAIL_FROM = process.env.MAIL_FROM || "contact@graybirchfoundation.org"; // should be verified domain
  const CONTACT_BCC = process.env.CONTACT_BCC;

  if (!resend || !CONTACT_TO) {
  const resBody = { ok: true, simulated: true, note: "Email service not fully configured" };
  await writeLog({ ts: new Date().toISOString(), type: 'response', status: 200, response: resBody });
  const resSim = NextResponse.json(resBody, { status: 200 });
  resSim.cookies.set('contact_csrf', '', { path: '/', maxAge: 0 });
  return resSim;
  }

  try {
    const friendlyFrom = `Gray Birch Foundation Contact <${MAIL_FROM}>`;
    const result = await resend.emails.send({
      from: friendlyFrom,
      to: CONTACT_TO,
      ...(CONTACT_BCC ? { bcc: CONTACT_BCC } : {}),
      reply_to: `${name} <${email}>`,
      subject: `Contact form message from ${name}`,
      html: buildHtml({ name, email, message }),
      text: buildText({ name, email, message }),
      headers: {
        // Mild nudge: helps some filters understand this is transactional / site-originated
        'X-Entity-Type': 'contact-form',
      },
    });

    if (result.error) {
  console.error("Resend error", result.error);
  const err = { error: "Failed to send email" };
  await writeLog({ ts: new Date().toISOString(), type: 'response', status: 502, response: err });
  return NextResponse.json(err, { status: 502 });
    }
  // Success: log and return
  const okBody = { ok: true };
  await writeLog({ ts: new Date().toISOString(), type: 'response', status: 200, response: okBody });
  const resSuccess = NextResponse.json(okBody, { status: 200 });
  resSuccess.cookies.set('contact_csrf', '', { path: '/', maxAge: 0 });
  return resSuccess;
  } catch (e) {
    console.error("Resend exception", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

function buildHtml({ name, email, message }: { name: string; email: string; message: string }) {
  // Keep HTML simple & lightweight – fewer styles lowers spam similarity.
  return `<!DOCTYPE html><html><body style="font-family:Arial,Helvetica,sans-serif;line-height:1.4;margin:0;padding:16px;background:#ffffff;color:#222;">
  <h2 style="margin:0 0 12px 0;font-size:18px;font-weight:600;">New website contact message</h2>
  <p style="margin:4px 0;"><strong>Name:</strong> ${escapeHtml(name)}</p>
  <p style="margin:4px 0;"><strong>Email:</strong> ${escapeHtml(email)}</p>
  <p style="margin:12px 0 4px 0;font-weight:600;">Message:</p>
  <pre style="white-space:pre-wrap;font-family:inherit;margin:0;background:#f6f6f6;padding:12px;border:1px solid #e0e0e0;border-radius:4px;">${escapeHtml(message)}</pre>
  <p style="margin-top:24px;font-size:12px;color:#555;">Sent from https://graybirchfoundation.org contact form.</p>
  </body></html>`;
}

function buildText({ name, email, message }: { name: string; email: string; message: string }) {
  return [
    'New website contact message',
    `Name: ${name}`,
    `Email: ${email}`,
    'Message:',
    message,
    '',
    'Sent from https://graybirchfoundation.org contact form.',
  ].join('\n');
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
