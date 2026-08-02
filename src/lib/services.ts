export type Service = {
  slug: string;
  title: string;
  summary: string;
  details: string[];
  icon: "globe" | "layout-dashboard" | "wrench" | "calendar-check";
};

export const services: Service[] = [
  {
    slug: "webseiten",
    title: "Webseiten & Onlineauftritte",
    summary:
      "Moderne, schnelle Webseiten, die auf jedem Gerät gut aussehen und bei Google gefunden werden.",
    details: [
      "Individuelles Design statt Baukasten-Vorlage",
      "Suchmaschinenoptimierung (SEO) von Anfang an mitgedacht",
      "Schnelle Ladezeiten und saubere technische Umsetzung",
      "Einfache Pflege für Texte, Bilder und Angebote",
    ],
    icon: "globe",
  },
  {
    slug: "business-software",
    title: "Individuelle Business-Software",
    summary:
      "Maßgeschneiderte Anwendungen für Abläufe, die mit Standardsoftware nicht abgebildet werden können.",
    details: [
      "Digitalisierung von Papierprozessen (Formulare, Protokolle, Checklisten)",
      "Zentrale Verwaltung von Aufträgen, Kunden und Terminen",
      "Anbindung an bestehende Systeme, wo sinnvoll",
      "Auch als native App für iPad/iPhone möglich",
    ],
    icon: "layout-dashboard",
  },
  {
    slug: "wartung-support",
    title: "Wartung & Weiterentwicklung",
    summary:
      "Bestehende Webseiten und Software zuverlässig am Laufen halten und schrittweise ausbauen.",
    details: [
      "Regelmäßige Updates und Sicherheits-Checks",
      "Schnelle Reaktion bei Problemen im laufenden Betrieb",
      "Neue Funktionen nach Bedarf, ohne alles neu zu bauen",
      "Klare, planbare Kosten statt Überraschungen",
    ],
    icon: "wrench",
  },
  {
    slug: "beratung",
    title: "Beratung & Konzeption",
    summary:
      "Gemeinsam herausfinden, wo Digitalisierung im Betrieb wirklich Zeit und Nerven spart.",
    details: [
      "Analyse bestehender Abläufe vor Ort oder remote",
      "Realistische Einschätzung von Aufwand und Nutzen",
      "Klarer Fahrplan statt vager Versprechen",
      "Unabhängige Empfehlung, auch wenn Standardsoftware ausreicht",
    ],
    icon: "calendar-check",
  },
];
