import Link from "next/link";

const stats = [
  { value: "10+", label: "Projekte abgeschlossen" },
  { value: "3+", label: "Jahre Erfahrung" },
  { value: "100%", label: "Kundenzufriedenheit" },
  { value: "5+", label: "Zufriedene Kunden" },
];

const services = [
  {
    icon: "🌐",
    title: "Unternehmenswebsites",
    description:
      "Professionelle, moderne Websites für kleine und mittelständische Unternehmen – optimiert für Suchmaschinen und alle Endgeräte.",
  },
  {
    icon: "⚙️",
    title: "Webanwendungen",
    description:
      "Maßgeschneiderte Fullstack-Anwendungen mit Datenbank, Backend-Logik und intuitivem Frontend – von der Idee bis zum Launch.",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description:
      "Jede Website sieht auf Smartphone, Tablet und Desktop perfekt aus – mit modernem UI und flüssiger User Experience.",
  },
  {
    icon: "🚀",
    title: "Performance & SEO",
    description:
      "Schnelle Ladezeiten, sauberer Code und technische SEO-Optimierung sorgen für bessere Rankings und zufriedene Besucher.",
  },
];

const techStack = [
  { name: "React", color: "text-cyan-400" },
  { name: "Next.js", color: "text-white" },
  { name: "TypeScript", color: "text-blue-400" },
  { name: "Node.js", color: "text-green-400" },
  { name: "Tailwind CSS", color: "text-sky-400" },
  { name: "SQLite", color: "text-orange-400" },
  { name: "Express.js", color: "text-slate-300" },
  { name: "HTML / CSS", color: "text-pink-400" },
];

const recentProjects = [
  {
    title: "Fahrschule Nazar",
    description: "Website mit Online-Anmeldung, Theorie-Kalender & Mehrsprachigkeit",
    icon: "🚗",
    color: "from-yellow-500 to-orange-600",
    url: "https://www.fahrschulenazar.de",
  },
  {
    title: "Bäckerei Forddamm",
    description: "Unternehmenswebsite mit 4,6★ Google-Bewertung",
    icon: "🥖",
    color: "from-amber-500 to-yellow-600",
    url: "https://forddamm-baeckerei.de",
  },
  {
    title: "Rechnungssystem",
    description: "Vollständiges Rechnungsportal mit PDF-Export & Dashboard",
    icon: "🧾",
    color: "from-purple-600 to-pink-600",
    url: null,
  },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-700/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-700/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 text-center px-6 animate-slide-up max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 text-sm text-slate-400 mb-8 border border-purple-500/20">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Verfügbar für neue Projekte
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-none">
            <span className="text-white">Hi, ich bin</span>
            <br />
            <span className="gradient-text">Mikail Öztürk</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 font-light mb-4">
            Webentwickler & Softwareentwickler aus Berlin
          </p>
          <p className="text-slate-500 max-w-xl mx-auto mb-12 leading-relaxed">
            Ich entwickle moderne, performante Webanwendungen – von der Idee bis
            zur fertigen Lösung. Fullstack mit React, Next.js, Node.js & mehr.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
            <Link href="/projects" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-purple-500/25 text-sm">
              Meine Projekte ansehen
            </Link>
            <Link href="/contact" className="glass-card gradient-border text-white font-semibold px-8 py-4 rounded-full transition-all hover:bg-white/10 text-sm">
              Kontakt aufnehmen
            </Link>
          </div>

          <div className="flex flex-col items-center gap-2 text-slate-600 text-xs">
            <span>Mehr entdecken</span>
            <div className="w-px h-12 bg-gradient-to-b from-slate-600 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl p-6 text-center border border-white/8 hover:border-purple-500/30 transition-colors">
              <p className="text-3xl md:text-4xl font-black gradient-text mb-2">{stat.value}</p>
              <p className="text-slate-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── LEISTUNGEN ── */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="text-center mb-14">
          <p className="text-purple-400 font-medium text-sm tracking-widest uppercase mb-3">Was ich mache</p>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Meine <span className="gradient-text">Leistungen</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((s) => (
            <div key={s.title} className="glass-card rounded-2xl p-7 border border-white/8 hover:border-purple-500/30 transition-colors group">
              <span className="text-3xl mb-4 block">{s.icon}</span>
              <h3 className="text-white font-bold text-lg mb-3 group-hover:gradient-text transition-colors">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-purple-400 font-medium text-sm tracking-widest uppercase mb-3">Technologien</p>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Mein <span className="gradient-text">Tech-Stack</span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech) => (
            <span key={tech.name} className={`glass-card border border-white/8 hover:border-purple-500/40 px-5 py-3 rounded-xl text-sm font-semibold ${tech.color} transition-colors cursor-default`}>
              {tech.name}
            </span>
          ))}
        </div>
      </section>

      {/* ── AUSGEWÄHLTE PROJEKTE ── */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="text-center mb-14">
          <p className="text-purple-400 font-medium text-sm tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Ausgewählte <span className="gradient-text">Projekte</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {recentProjects.map((p) => (
            <div key={p.title} className="glass-card rounded-2xl p-6 border border-white/8 hover:border-white/20 transition-all group relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
              <span className="text-4xl mb-4 block">{p.icon}</span>
              <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.description}</p>
              {p.url && (
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-purple-400 transition-colors flex items-center gap-1">
                  <span>↗</span> {p.url.replace("https://", "")}
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/projects" className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors border border-white/10 hover:border-white/30 px-6 py-3 rounded-full">
            Alle Projekte ansehen →
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="glass-card rounded-3xl p-12 md:p-16 border border-white/8 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          <div className="relative z-10">
            <p className="text-purple-400 font-medium text-sm tracking-widest uppercase mb-4">Kontakt</p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
              Haben Sie ein <span className="gradient-text">Projekt?</span>
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed">
              Ob neue Website, Webanwendung oder Verbesserung eines bestehenden Projekts –
              ich freue mich über jede Anfrage und melde mich schnell zurück.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-purple-500/25 text-sm">
                Jetzt Kontakt aufnehmen
              </Link>
              <a href="mailto:mikail12355@yahoo.de" className="glass-card text-slate-300 hover:text-white font-medium px-8 py-4 rounded-full transition-all hover:bg-white/10 text-sm border border-white/10">
                mikail12355@yahoo.de
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
