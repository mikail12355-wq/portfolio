export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Mikail Öztürk. Alle Rechte vorbehalten.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a
            href="mailto:mikail12355@yahoo.de"
            className="text-slate-500 hover:text-white transition-colors text-sm"
          >
            mikail12355@yahoo.de
          </a>
        </div>
      </div>
    </footer>
  );
}
