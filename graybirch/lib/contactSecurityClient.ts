// Client-side lightweight token generator (NOT a secret). The server validates
// only if CONTACT_FORM_SECRET is set; otherwise headers are ignored.
// This mimics structure of server token so replay windows can be narrowed if you later
// implement server-issued tokens via an endpoint.

export function generateToken() {
  const ts = Date.now();
  const rand = Math.random().toString(36).slice(2);
  // In a hardened version, the signature would be fetched from server or computed with a pepper.
  // For now we just mirror token as a stand-in so header presence can still be used as a soft signal.
  return { token: `${ts}:${rand}`, sig: rand };
}
