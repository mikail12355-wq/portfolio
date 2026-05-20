const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML / CSS"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: ["Node.js", "Express.js", "REST APIs", "SQLite", "SQL", "EJS"],
  },
  {
    category: "Tools & Deploy",
    icon: "🛠️",
    items: ["Git", "GitHub", "GitHub Pages", "Render.com", "VSCode", "PDFKit"],
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-20">
        <p className="text-purple-400 font-medium text-sm tracking-widest uppercase mb-3">
          Über mich
        </p>
        <h1 className="text-4xl md:text-6xl font-black gradient-text mb-6">
          Wer bin ich?
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
      </div>

      {/* Bio */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        {/* Avatar placeholder */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl rotate-6 opacity-30" />
            <div className="relative glass-card rounded-3xl w-full h-full flex items-center justify-center border border-white/10">
              <span className="text-8xl select-none">👨‍💻</span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">
            Mikail Öztürk – Fullstack Developer aus Berlin
          </h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              Ich bin leidenschaftlicher Webentwickler und Softwareentwickler mit dem
              Fokus auf moderne, benutzerfreundliche Anwendungen. Meine Stärke liegt
              darin, Ideen in funktionierende digitale Produkte umzusetzen – von der
              Konzeption bis zum Launch.
            </p>
            <p>
              Mein Technologie-Stack umfasst sowohl Frontend-Technologien wie React und
              Next.js als auch Backend-Entwicklung mit Node.js und Express. Ich lege
              großen Wert auf sauberen Code, gute User Experience und performante Lösungen.
            </p>
            <p>
              Bisher habe ich unter anderem ein vollständiges Rechnungssystem sowie
              professionelle Unternehmenswebsites entwickelt – stets mit dem Ziel,
              echten Mehrwert für meine Kunden zu schaffen.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            {["Berlin, Deutschland", "Fullstack", "Freelance"].map((tag) => (
              <span
                key={tag}
                className="glass-card px-4 py-1.5 rounded-full text-sm text-slate-300 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Mein <span className="gradient-text">Tech-Stack</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="glass-card rounded-2xl p-6 border border-white/8 hover:border-purple-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-white font-semibold text-lg">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white/5 border border-white/10 text-slate-300 text-sm px-3 py-1.5 rounded-lg hover:border-purple-500/40 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
