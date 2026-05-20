import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-700/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-700/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-slide-up">
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
          Webentwickler & Softwareentwickler
        </p>
        <p className="text-slate-500 max-w-xl mx-auto mb-12 leading-relaxed">
          Ich entwickle moderne, performante Webanwendungen – von der Idee bis
          zur fertigen Lösung. Fullstack mit React, Next.js, Node.js & mehr.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/projects"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-purple-500/25 text-sm"
          >
            Meine Projekte ansehen
          </Link>
          <Link
            href="/contact"
            className="glass-card gradient-border text-white font-semibold px-8 py-4 rounded-full transition-all hover:bg-white/10 text-sm"
          >
            Kontakt aufnehmen
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 text-slate-600 text-xs">
          <span>Mehr entdecken</span>
          <div className="w-px h-12 bg-gradient-to-b from-slate-600 to-transparent" />
        </div>
      </div>
    </div>
  );
}
