import Link from "next/link";
import { Mail } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-surface">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="text-base font-semibold text-zinc-900">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-zinc-600">{siteConfig.tagline}</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dark"
          >
            <Mail className="h-4 w-4" />
            {siteConfig.email}
          </a>
        </div>

        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-600 hover:text-zinc-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>

      <div className="border-t border-zinc-100 py-6">
        <Container className="flex flex-col gap-2 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Alle Rechte vorbehalten.</p>
          <p>Entwickelt mit Next.js in Deutschland.</p>
        </Container>
      </div>
    </footer>
  );
}
