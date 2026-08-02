import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Über mich",
  description: `Lerne ${siteConfig.name} kennen – Softwareentwickler für Webseiten und Business-Software für lokale Unternehmen.`,
};

const values = [
  {
    title: "Verständlich statt kompliziert",
    description:
      "Ich erkläre technische Entscheidungen so, dass sie auch ohne IT-Hintergrund nachvollziehbar sind.",
  },
  {
    title: "Praxisnah statt theoretisch",
    description:
      "Software soll den Arbeitsalltag konkret erleichtern – nicht nur auf dem Papier gut aussehen.",
  },
  {
    title: "Zuverlässig statt anonym",
    description:
      "Eine feste Ansprechperson während des gesamten Projekts, auch nach dem Launch.",
  },
];

const techStack = [
  "React & Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Supabase / PostgreSQL",
  "Capacitor (native iOS/Android)",
];

export default function UeberMichPage() {
  return (
    <>
      <section className="relative overflow-hidden py-24">
        <GradientBlob className="-top-24 -right-32 h-[28rem] w-[28rem]" />
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                Über mich
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
                Softwareentwicklung mit Blick für den Alltag lokaler Unternehmen
              </h1>
              <p className="mt-6 text-lg text-zinc-600">
                Ich bin {siteConfig.name}, Softwareentwickler mit Fokus auf
                Webseiten und individuelle Business-Software für kleine und
                mittlere Unternehmen – vom Handwerksbetrieb über die
                Gastronomie bis zur Hausverwaltung.
              </p>
              <p className="mt-4 text-lg text-zinc-600">
                Mich interessiert dabei weniger die Technologie um ihrer
                selbst willen, sondern das konkrete Problem dahinter: Wo
                kostet ein Prozess unnötig Zeit? Wo gehen Informationen
                verloren? Genau dort setzt gute Software an.
              </p>
              <div className="mt-8">
                <Button href="/kontakt">Lass uns sprechen</Button>
              </div>
            </div>

            <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center rounded-3xl bg-gradient-to-br from-accent via-indigo-400 to-sky-300 shadow-lg">
              <div className="absolute inset-4 rounded-2xl border border-white/30" />
              <span className="text-6xl font-semibold text-white/90">
                {siteConfig.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-zinc-100 bg-surface py-24">
        <Container>
          <SectionHeading
            eyebrow="Arbeitsweise"
            title="Worauf es mir bei jedem Projekt ankommt"
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-zinc-100 bg-white p-6 text-center shadow-sm"
              >
                <h3 className="text-base font-semibold text-zinc-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Tech-Stack"
                title="Moderne, bewährte Technologien"
                description="Ich setze auf Technologien, die sich in echten Projekten bewährt haben – wartbar, performant und zukunftssicher."
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech}
                  className="rounded-xl border border-zinc-100 bg-white px-4 py-3 text-sm font-medium text-zinc-700 shadow-sm"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
