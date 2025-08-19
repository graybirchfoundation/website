"use client";

import { FormEvent, useEffect, useState } from "react";
import { generateToken } from "../lib/contactSecurityClient";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  // Honeypot field (should remain empty)
  const [company, setCompany] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [tokenBundle, setTokenBundle] = useState<{ token: string; sig: string } | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function init() {
      try {
        // Fetch server-issued CSRF token if enabled; fallback to local token if endpoint disabled
        const res = await fetch('/api/contact/csrf', { cache: 'no-store', credentials: 'include' });
        if (res.ok) {
          const data = await res.json();
          if (!cancelled && data?.token && data?.sig) {
            setTokenBundle({ token: data.token, sig: data.sig });
            return;
          }
        }
      } catch {}
      if (!cancelled) {
        setTokenBundle(generateToken());
      }
    }
    init();
    return () => { cancelled = true; };
  }, []);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Basic client-side validation to avoid avoidable 400s
    if (name.trim().length < 2) {
      setError("Name must be at least 2 characters.");
      setStatus("error");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("Enter a valid email address.");
      setStatus("error");
      return;
    }
    if (message.trim().length < 10) {
      setError("Message must be at least 10 characters.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setError(null);
    try {
      const headers: Record<string,string> = { "Content-Type": "application/json" };
      if (tokenBundle) {
        headers["x-contact-token"] = tokenBundle.token;
        headers["x-contact-sig"] = tokenBundle.sig; // placeholder (would be HMAC if secret shared; server currently ignores if secret absent)
      }
      const res = await fetch("/api/contact", {
        method: "POST",
        headers,
        credentials: 'include',
        body: JSON.stringify({ name, email, message, company }),
      });
      if (!res.ok) {
        let msg = "Request failed";
        try {
          const data = await res.json();
            if (data?.issues) {
              // data.issues is an object: { field: [messages] }
              const firstField = Object.keys(data.issues)[0];
              if (firstField && Array.isArray(data.issues[firstField]) && data.issues[firstField].length) {
                msg = data.issues[firstField][0];
              }
            } else if (data?.error) {
              msg = data.error;
            }
        } catch {}
        throw new Error(msg);
      }
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      setStatus("error");
      let msg = "Something went wrong. Please try again.";
      if (err && typeof err === "object" && 'message' in err && typeof (err as any).message === 'string') {
        msg = (err as any).message;
      }
      setError(msg);
    }
  };

  if (status === "success") {
    return (
      <div className="w-full max-w-lg text-center py-12">
        <h2 className="text-2xl font-semibold">Thanks! We’ll be in touch.</h2>
      </div>
    );
  }

  return (
    <form className="grid gap-6 w-full max-w-lg" onSubmit={onSubmit}>
      {/* Honeypot - hidden from users */}
      <input
        type="text"
        name="company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
  <label className="grid gap-2">
    <span className="text-base md:text-lg uppercase tracking-wide">Name</span>
  <input className="w-full px-5 py-4 text-lg md:text-xl border border-black/40 bg-transparent text-[#383838] outline-none" placeholder="Your name" required minLength={2} value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label className="grid gap-2">
    <span className="text-base md:text-lg uppercase tracking-wide">Email</span>
  <input type="email" className="w-full px-5 py-4 text-lg md:text-xl border border-black/40 bg-transparent text-[#383838] outline-none" placeholder="you@example.org" required value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className="grid gap-2">
    <span className="text-base md:text-lg uppercase tracking-wide">Message</span>
  <textarea rows={8} className="w-full px-5 py-4 text-lg md:text-xl border border-black/40 bg-transparent text-[#383838] outline-none" placeholder="How can we help?" required minLength={10} value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
  <div className="flex items-center gap-6">
    <button className="btn w-max text-lg md:text-xl px-8 py-4" disabled={status === "loading"}>{status === "loading" ? "Sending..." : "Send"}</button>
    {status === "error" && <span className="text-base md:text-lg" role="alert">{error}</span>}
  </div>
    </form>
  );
}