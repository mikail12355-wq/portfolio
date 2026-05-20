"use client";

import { useState } from "react";

const contactInfo = [
  {
    icon: "✉️",
    label: "E-Mail",
    value: "mikail12355@yahoo.de",
    href: "mailto:mikail12355@yahoo.de",
  },
  {
    icon: "📍",
    label: "Standort",
    value: "Berlin, Deutschland",
    href: null,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const body = `Hallo Mikail,\n\nNachricht von: ${name}\nE-Mail: ${email}\n\n${message}`;
    window.location.href = `mailto:mikail12355@yahoo.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-20">
        <p className="text-purple-400 font-medium text-sm tracking-widest uppercase mb-3">
          Kontakt
        </p>
        <h1 className="text-4xl md:text-6xl font-black gradient-text mb-6">
          Schreib mir
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto">
          Haben Sie ein Projekt, eine Frage oder möchten Sie einfach Hallo
          sagen? Ich freue mich auf Ihre Nachricht.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-6" />
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        {/* Contact Info */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-xl font-bold text-white mb-6">Kontaktdaten</h2>
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="glass-card rounded-2xl p-5 border border-white/8 hover:border-purple-500/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-white text-sm hover:text-purple-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            </div>
          ))}

          <div className="glass-card rounded-2xl p-5 border border-green-500/20 bg-green-500/5 mt-6">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
              <p className="text-green-400 text-sm font-medium">
                Verfügbar für neue Projekte
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-3">
          <div className="glass-card rounded-3xl p-8 border border-white/8">
            {sent ? (
              <div className="text-center py-12">
                <span className="text-5xl">🚀</span>
                <h3 className="text-xl font-bold text-white mt-4 mb-2">
                  E-Mail-Client wird geöffnet…
                </h3>
                <p className="text-slate-400 text-sm">
                  Ihr Standard-E-Mail-Client öffnet sich mit der vorausgefüllten
                  Nachricht.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">
                      Ihr Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Max Mustermann"
                      className="w-full bg-white/5 border border-white/10 focus:border-purple-500/60 text-white placeholder:text-slate-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">
                      Ihre E-Mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="max@beispiel.de"
                      className="w-full bg-white/5 border border-white/10 focus:border-purple-500/60 text-white placeholder:text-slate-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">
                    Betreff
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Projektanfrage / Frage / …"
                    className="w-full bg-white/5 border border-white/10 focus:border-purple-500/60 text-white placeholder:text-slate-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">
                    Nachricht
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Erzählen Sie mir von Ihrem Projekt oder Ihrer Frage…"
                    className="w-full bg-white/5 border border-white/10 focus:border-purple-500/60 text-white placeholder:text-slate-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-purple-500/25"
                >
                  Nachricht senden ✉️
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
