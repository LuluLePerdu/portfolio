"use client";

import { type FormEvent, useRef, useState } from "react";
import type { Dictionary } from "@/content/dictionary";
import { links } from "@/content/path";
import type { Locale } from "@/lib/i18n";
import { Arrow } from "./Icons";

type Status = "idle" | "sending" | "sent" | "error" | "invalid";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm({ t, locale }: { t: Dictionary["contact"]; locale: Locale }) {
  const [status, setStatus] = useState<Status>("idle");
  // Bots tend to submit instantly; the function rejects anything sent within a few seconds of load.
  const openedAt = useRef(Date.now());

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    if (!data.name?.trim() || !EMAIL.test(data.email ?? "") || !data.message?.trim()) {
      setStatus("invalid");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale, elapsed: Date.now() - openedAt.current }),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const message =
    status === "sent" ? t.sent : status === "invalid" ? t.invalid : status === "error" ? t.error : "";

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__row">
        <label className="field">
          <span className="label">{t.name}</span>
          <input name="name" autoComplete="name" required maxLength={120} placeholder={t.namePh} />
        </label>
        <label className="field">
          <span className="label">{t.email}</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={200}
            placeholder={t.emailPh}
          />
        </label>
      </div>
      <label className="field">
        <span className="label">{t.subject}</span>
        <input name="subject" maxLength={160} placeholder={t.subjectPh} />
      </label>
      <label className="field">
        <span className="label">{t.message}</span>
        <textarea name="message" required maxLength={5000} rows={6} placeholder={t.messagePh} />
      </label>

      {/* Honeypot: hidden from people, tempting for bots */}
      <div className="form__hp" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="form__foot">
        <p
          className="form__status"
          role="status"
          aria-live="polite"
          data-tone={status === "sent" ? "ok" : status === "error" || status === "invalid" ? "error" : undefined}
        >
          {message}
          {status === "error" && (
            <>
              {" "}
              <a className="link" href={`mailto:${links.email}`}>
                {links.email}
              </a>
              .
            </>
          )}
        </p>
        <button className="btn btn--solid" type="submit" disabled={status === "sending"}>
          {status === "sending" ? t.sending : t.send}
          <Arrow className="arrow" />
        </button>
      </div>
    </form>
  );
}
