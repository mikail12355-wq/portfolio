"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const company = String(formData.get("company") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = `Projektanfrage von ${name}`;
    const bodyLines = [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      company ? `Unternehmen: ${company}` : null,
      "",
      message,
    ].filter((line) => line !== null);

    const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailtoUrl;
    setSent(true);
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr,1.3fr]">
      <div>
        <h2 className="text-2xl font-semibold text-zinc-900">
          Erzähl mir von deinem Projekt
        </h2>
        <p className="mt-3 text-zinc-600">
          Ob konkrete Anfrage oder erste Idee – ich melde mich in der Regel
          innerhalb von zwei Werktagen zurück.
        </p>

        <div className="mt-8 space-y-4">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-3 text-sm font-medium text-zinc-700 hover:text-accent"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-light text-accent">
              <Mail className="h-4 w-4" />
            </span>
            {siteConfig.email}
          </a>
          <div className="flex items-center gap-3 text-sm font-medium text-zinc-700">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-light text-accent">
              <MapPin className="h-4 w-4" />
            </span>
            {siteConfig.location} · Remote &amp; vor Ort
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-3xl border border-zinc-100 bg-white p-8 shadow-sm"
      >
        <p className="text-xs text-zinc-500">
          Beim Absenden öffnet sich dein E-Mail-Programm mit einer
          vorausgefüllten Nachricht an mich.
        </p>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-zinc-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1.5 w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent-light"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-zinc-700">
              E-Mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1.5 w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent-light"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="text-sm font-medium text-zinc-700">
            Unternehmen <span className="text-zinc-400">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="mt-1.5 w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent-light"
          />
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-medium text-zinc-700">
            Nachricht
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="mt-1.5 w-full resize-none rounded-xl border border-zinc-200 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent-light"
          />
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dark sm:w-auto"
        >
          <Send className="h-4 w-4" />
          Nachricht senden
        </button>

        {sent && (
          <p className="text-sm font-medium text-emerald-600">
            Dein E-Mail-Programm sollte sich jetzt mit deiner Nachricht öffnen.
          </p>
        )}
      </form>
    </div>
  );
}
