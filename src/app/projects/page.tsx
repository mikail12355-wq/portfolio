const projects = [
  {
    title: "Fahrschule Nazar",
    description:
      "Professionelle Website für eine Berliner Fahrschule – mit Online-Anmeldeformular, interaktivem Theorie-Kalender und mehrsprachiger Oberfläche (Deutsch/Türkisch). Responsives Design, gehostet auf GitHub Pages.",
    tags: ["HTML", "CSS", "JavaScript", "Mehrsprachig", "GitHub Pages"],
    color: "from-yellow-500 to-orange-600",
    icon: "🚗",
    type: "Unternehmenswebsite",
    status: "Live",
    url: "https://www.fahrschulenazar.de",
  },
  {
    title: "Bäckerei & Café Forddamm",
    description:
      "Moderne Unternehmenswebsite für eine Berliner Bäckerei mit 4,6 ★ Google-Bewertung (297+ Rezensionen). Vollständiges Onlineauftritt mit Hero-Sektion, Angebots-Übersicht, Anfahrtsbeschreibung und mobilem Menü.",
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    color: "from-amber-500 to-yellow-600",
    icon: "🥖",
    type: "Unternehmenswebsite",
    status: "Live",
    url: "https://forddamm-baeckerei.de",
  },
  {
    title: "Änderungsschneiderei Lankwitz",
    description:
      "Website für eine Änderungsschneiderei in Berlin-Lankwitz. Klares, professionelles Design mit Leistungsübersicht, Kontaktdaten und Öffnungszeiten – optimiert für lokale Suchanfragen.",
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    color: "from-rose-500 to-pink-600",
    icon: "🧵",
    type: "Unternehmenswebsite",
    status: "Live",
    url: "https://anderungsschneiderei-lankwitz.de",
  },
  {
    title: "Bäckerei Forddamm – Rechnungssystem",
    description:
      "Vollständiges, passwortgeschütztes Rechnungsportal für eine Berliner Bäckerei. Inklusive Kunden- und Artikeldatenbank, PDF-Download mit exaktem Rechnungslayout, Umsatz-Dashboard und Deploy auf Render.com.",
    tags: ["Node.js", "Express.js", "SQLite", "EJS", "PDFKit"],
    color: "from-purple-600 to-pink-600",
    icon: "🧾",
    type: "Webanwendung",
    status: "Live",
    url: null,
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-20">
        <p className="text-purple-400 font-medium text-sm tracking-widest uppercase mb-3">
          Portfolio
        </p>
        <h1 className="text-4xl md:text-6xl font-black gradient-text mb-6">
          Meine Projekte
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto">
          Eine Auswahl meiner bisherigen Arbeiten – von Unternehmenswebsites bis
          hin zu komplexen Webanwendungen.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-6" />
      </div>

      {/* Projects */}
      <div className="grid gap-8">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className="glass-card rounded-3xl overflow-hidden border border-white/8 hover:border-white/15 transition-all group"
          >
            <div className="grid md:grid-cols-5">
              {/* Left accent */}
              <div
                className={`hidden md:flex md:col-span-1 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity items-center justify-center`}
              >
                <span className="text-6xl">{project.icon}</span>
              </div>

              {/* Content */}
              <div className="md:col-span-4 p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl md:hidden">{project.icon}</span>
                      <span className="text-xs font-medium text-slate-500 uppercase tracking-widest">
                        {project.type}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                      project.status === "Live"
                        ? "bg-green-500/15 text-green-400 border border-green-500/20"
                        : "bg-slate-500/15 text-slate-400 border border-slate-500/20"
                    }`}
                  >
                    {project.status === "Live" && (
                      <span className="inline-block w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 align-middle animate-pulse" />
                    )}
                    {project.status}
                  </span>
                </div>

                <p className="text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-medium px-3 py-1.5 rounded-lg bg-gradient-to-r ${project.color} bg-opacity-10 border border-white/10 text-slate-300`}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-xs font-semibold text-slate-400 hover:text-white border border-white/10 hover:border-white/30 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <span>↗</span> {project.url.replace("https://", "")}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Mehr Projekte */}
        <div className="grid sm:grid-cols-3 gap-4 mt-2">
          {[
            { icon: "🍦", label: "Eiscafé-Website", tags: ["HTML", "CSS", "JS"] },
            { icon: "🍺", label: "Gastro-Website", tags: ["HTML", "CSS", "JS"] },
            { icon: "📋", label: "Branchen-Manager", tags: ["Node.js", "SQLite"] },
          ].map((item) => (
            <div
              key={item.label}
              className="glass-card rounded-2xl p-5 border border-white/5 border-dashed flex items-center gap-4 opacity-60"
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <p className="text-slate-400 text-sm font-medium">{item.label}</p>
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {item.tags.map((t) => (
                    <span key={t} className="text-xs text-slate-600 bg-white/5 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-600 text-sm mt-4">
          … und viele weitere Projekte auf Anfrage
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <div className="glass-card rounded-3xl p-12 border border-white/8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Haben Sie ein Projekt?
            </h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              Ich freue mich über neue Herausforderungen. Schreiben Sie mir und
              wir besprechen Ihre Idee.
            </p>
            <a
              href="/contact"
              className="inline-flex bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-purple-500/25 text-sm"
            >
              Jetzt Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
