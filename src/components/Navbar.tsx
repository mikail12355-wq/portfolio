"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Über mich" },
  { href: "/projects", label: "Projekte" },
  { href: "/contact", label: "Kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg gradient-text">
          MÖ
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "gradient-text"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm font-medium px-5 py-2 rounded-full transition-all"
        >
          Kontakt aufnehmen
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href ? "gradient-text" : "text-slate-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
