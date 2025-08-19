import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email) return NextResponse.json({ error: "Missing email" }, { status: 400 });

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const NEWSLETTER_LIST_ID = process.env.NEWSLETTER_LIST_ID; // If using Resend Contacts/Lists

    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { ok: true, message: "Newsletter signup received (email service not configured yet). Set RESEND_API_KEY to enable sending." },
        { status: 200 }
      );
    }

    // If you have a list, add to contacts
    if (NEWSLETTER_LIST_ID) {
      const contactRes = await fetch("https://api.resend.com/contacts", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, unsubscribed: false, audience_id: NEWSLETTER_LIST_ID }),
      });
      if (!contactRes.ok) {
        const text = await contactRes.text();
        return NextResponse.json({ error: "Failed to add contact", details: text }, { status: 502 });
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
