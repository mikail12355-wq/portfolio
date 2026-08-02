import type { Metadata } from "next";
import { Calendar, Check, Globe, LayoutDashboard, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Leistungen",
  description: `Webseiten, individuelle Business-Software, Wartung und Beratung – die Leistungen von ${siteConfig.name} im Überblick.`,
};

const icons = {
  globe: Globe,
  "layout-dashboard": LayoutDashboard,
  wrench: Wrench,
  "calendar-check": Calendar,
} as const;

export default function LeistungenPage() {
  return (
    <>
      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Leistungen"
            title="Passgenaue Software statt Software von der Stange"
            description="Jedes Unternehmen arbeitet anders. Deshalb biete ich keine starren Pakete, sondern Leistungen, die sich an deinem tatsächlichen Bedarf orientieren."
          />
        </Container>
      </section>

      <section className="pb-24">
        <Container className="space-y-8">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <div
                key={service.slug}
                className="grid gap-8 rounded-3xl border border-zinc-100 bg-white p-8 shadow-sm lg:grid-cols-[auto,1fr] lg:items-start lg:p-10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-light text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-1 text-2xl font-semibold text-zinc-900">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-zinc-600">{service.summary}</p>
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-zinc-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
