export type ProjectCategory = "Verwaltung" | "Handwerk" | "Gastronomie";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  type: "Kundenprojekt" | "Konzeptprojekt";
  summary: string;
  description: string[];
  stack: string[];
  highlights: string[];
  gradient: string;
  accentIcon: "building" | "hammer" | "utensils";
};

export const projects: Project[] = [
  {
    slug: "hausverwaltung-eiteneuer",
    title: "Übergabeprotokoll-App für Eiteneuer Immobilien",
    category: "Verwaltung",
    type: "Kundenprojekt",
    summary:
      "Native iPad-App für digitale Wohnungsübergabe- und -abnahmeprotokolle, im täglichen Einsatz bei der Hausverwaltung.",
    description: [
      "Eine Hausverwaltung protokollierte Wohnungsübergaben bisher auf Papier – fehleranfällig, langsam und schwer zu archivieren. Ich habe eine native iPad-Anwendung entwickelt, mit der Hausmeister und Verwalter Übergaben direkt vor Ort digital erfassen: Räume, Zählerstände, Mängel und Fotos in einer strukturierten, rechtssicheren Dokumentation.",
      "Protokolle werden von allen Parteien direkt auf dem iPad unterschrieben und automatisch gesperrt, sobald alle Unterschriften vorliegen. Für spätere Nachabnahmen gibt es eine Nachtrags-Funktion, die nachträgliche Mängel sauber mit dem Originalprotokoll verknüpft.",
      "Die App funktioniert vollständig offline und synchronisiert im Hintergrund zwischen mehreren iPads, sodass mehrere Mitarbeitende zeitgleich auf demselben Datenstand arbeiten. Fertige Protokolle lassen sich als PDF exportieren und direkt per E-Mail an Mieter und Eigentümer verschicken.",
    ],
    stack: ["React", "TypeScript", "Capacitor (iOS)", "Supabase", "Dexie/IndexedDB", "jsPDF"],
    highlights: [
      "Offline-first mit automatischer Mehrgeräte-Synchronisierung",
      "Rechtssichere, digital signierte Übergabeprotokolle",
      "PDF-Export und E-Mail-Versand direkt aus der App",
      "Läuft als native App auf physischen iPads im Alltagseinsatz",
    ],
    gradient: "from-indigo-500 via-indigo-400 to-sky-400",
    accentIcon: "building",
  },
  {
    slug: "handwerk-terminplanung",
    title: "Auftrags- & Terminplanung für Handwerksbetriebe",
    category: "Handwerk",
    type: "Konzeptprojekt",
    summary:
      "Konzept- und Demo-Anwendung, die zeigt, wie Handwerksbetriebe Aufträge, Materialbedarf und Kundentermine an einem Ort verwalten können.",
    description: [
      "Viele kleine Handwerksbetriebe koordinieren Aufträge noch über Zettel, Excel und Telefonate. In diesem Beispielprojekt zeige ich, wie eine schlanke Weboberfläche aussehen kann, mit der ein Betrieb Aufträge anlegt, Mitarbeitenden zuweist und den Status live im Blick behält.",
      "Kunden erhalten automatisch eine Terminbestätigung per E-Mail, während im Backoffice eine übersichtliche Wochenansicht zeigt, wer wann bei welchem Kunden vor Ort ist.",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    highlights: [
      "Übersichtliche Wochenplanung für Teams",
      "Automatische Terminbestätigung per E-Mail",
      "Responsive Bedienung auch auf dem Smartphone vor Ort",
    ],
    gradient: "from-amber-500 via-orange-400 to-rose-400",
    accentIcon: "hammer",
  },
  {
    slug: "gastronomie-bestellsystem",
    title: "Digitales Bestell- & Reservierungssystem für Restaurants",
    category: "Gastronomie",
    type: "Konzeptprojekt",
    summary:
      "Beispielkonzept für ein schlankes Bestell- und Reservierungssystem, das Restaurants ohne teure Kassensoftware-Verträge einsetzen könnten.",
    description: [
      "Für kleinere Restaurants und Cafés lohnen sich oft keine großen Kassensystem-Verträge. Dieses Konzept zeigt eine einfache Web-App, über die Gäste per QR-Code am Tisch bestellen können und das Personal Bestellungen live in der Küche sieht.",
      "Ergänzt wird das System um eine simple Reservierungsverwaltung, mit der das Restaurant Tischbelegung und Reservierungszeiten im Blick behält – ganz ohne zusätzliche Hardware.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    highlights: [
      "Bestellung per QR-Code direkt am Tisch",
      "Live-Ansicht für die Küche",
      "Einfache Reservierungsverwaltung ohne Zusatz-Hardware",
    ],
    gradient: "from-emerald-500 via-teal-400 to-cyan-400",
    accentIcon: "utensils",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
