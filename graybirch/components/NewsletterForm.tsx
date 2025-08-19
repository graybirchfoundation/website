"use client";

import { FormEvent, useState } from "react";

export default function NewsletterForm({ id = "email", buttonLabel = "Subscribe", placeholder = "Email address", className = "" }: { id?: string; buttonLabel?: string; placeholder?: string; className?: string }) {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValue("");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className={`flex flex-col sm:flex-row gap-4 max-w-xl ${className}`}>
      <label className="sr-only" htmlFor={id}>Email</label>
      <input
        id={id}
        type="email"
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="flex-1 px-3 py-3 border border-black/40 bg-transparent text-[#383838] outline-none"
      />
      <button className="btn" disabled={status === "loading"}>{status === "loading" ? "Submitting..." : buttonLabel}</button>
      {status === "success" && <span className="text-sm" role="status">Thanks for subscribing!</span>}
      {status === "error" && <span className="text-sm" role="alert">Something went wrong. Please try again.</span>}
    </form>
  );
}
