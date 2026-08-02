import { Calendar, Globe, LayoutDashboard, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/services";

const icons = {
  globe: Globe,
  "layout-dashboard": LayoutDashboard,
  wrench: Wrench,
  "calendar-check": Calendar,
} as const;

export function ServicesOverview() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Leistungen"
          title="Alles aus einer Hand – von der Webseite bis zur Fachsoftware"
          description="Ob Onlineauftritt oder komplexe Abläufe im Betrieb: ich begleite dein Projekt von der ersten Idee bis zum laufenden Betrieb."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <div
                key={service.slug}
                className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-light text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600">{service.summary}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/leistungen" variant="secondary">
            Alle Leistungen im Detail
          </Button>
        </div>
      </Container>
    </section>
  );
}
