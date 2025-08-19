import { NextRequest, NextResponse } from 'next/server';
import { generateToken } from '@/lib/contactSecurity';

// Issues a short-lived CSRF token + sets a HttpOnly cookie with same value for double-submit pattern.
// This prevents blind POSTs unless attacker can read cookie (they can't with HttpOnly) OR guess token.
// Rotate on each fetch to reduce replay window.

const TTL_MS = 1000 * 60 * 30; // 30 minutes

export async function GET(req: NextRequest) {
  const secret = process.env.CONTACT_FORM_SECRET;
  if (!secret) {
    return NextResponse.json({ disabled: true });
  }
  const { token, sig } = generateToken(secret);
  const res = NextResponse.json({ token, sig, ttl: TTL_MS });
  // Store token (not signature) in HttpOnly cookie for double submit verification
  res.cookies.set('contact_csrf', token, {
    httpOnly: true,
    sameSite: 'strict',
    secure: true,
    maxAge: TTL_MS / 1000,
    path: '/',
  });
  return res;
}
