export const siteConfig = {
  name: "Mikail Öztürk",
  role: "Softwareentwickler",
  tagline: "Webseiten & Business-Software für Handwerk, Gastronomie und Verwaltung",
  description:
    "Ich entwickle moderne Webseiten und maßgeschneiderte Business-Software für lokale Unternehmen – von der ersten Idee bis zur fertigen, wartbaren Lösung.",
  url: "https://www.mikailoeztuerk.de/portfolio",
  email: "mikail12355@yahoo.de",
  location: "Deutschland",
  links: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
  },
} as const;

export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Startseite" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/projekte", label: "Projekte" },
  { href: "/kontakt", label: "Kontakt" },
];
