import crypto from 'crypto';

const DEFAULT_TTL_MS = 1000 * 60 * 60 * 2; // 2 hours

export function generateToken(secret: string) {
  const raw = `${Date.now()}:${crypto.randomUUID()}`;
  const sig = sign(raw, secret);
  return { token: raw, sig };
}

export function verifyToken(token: string, sig: string, secret: string, ttlMs: number = DEFAULT_TTL_MS) {
  if (!token || !sig) return false;
  const expected = sign(token, secret);
  if (!timingSafeEqual(expected, sig)) return false;
  const ts = Number(token.split(':')[0]);
  if (!Number.isFinite(ts)) return false;
  if (Date.now() - ts > ttlMs) return false;
  return true;
}

function sign(value: string, secret: string) {
  return crypto.createHmac('sha256', secret).update(value).digest('base64url');
}

function timingSafeEqual(a: string, b: string) {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ba.length !== bb.length) return false;
  return crypto.timingSafeEqual(ba, bb);
}
