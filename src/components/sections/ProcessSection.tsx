import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Kennenlernen & Analyse",
    description:
      "Wir sprechen über deinen Betrieb, aktuelle Abläufe und wo Software wirklich helfen kann.",
  },
  {
    number: "02",
    title: "Konzept & Angebot",
    description:
      "Du bekommst einen klaren Vorschlag mit Umfang, Zeitplan und transparenten Kosten.",
  },
  {
    number: "03",
    title: "Umsetzung",
    description:
      "Entwicklung in überschaubaren Etappen, mit regelmäßigen Zwischenständen zum Testen.",
  },
  {
    number: "04",
    title: "Übergabe & Support",
    description:
      "Einweisung deines Teams, Livegang und danach zuverlässiger Support bei Fragen.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Ablauf"
          title="So läuft die Zusammenarbeit ab"
          description="Ein klarer Prozess ohne Überraschungen – vom ersten Gespräch bis zur fertigen Lösung."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="text-sm font-semibold text-accent">{step.number}</span>
              <h3 className="mt-2 text-base font-semibold text-zinc-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
