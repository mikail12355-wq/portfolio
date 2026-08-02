import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectMockup } from "@/components/ui/ProjectMockup";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Projekte",
  description: `Kunden- und Konzeptprojekte von ${siteConfig.name} aus Handwerk, Gastronomie und Verwaltung.`,
};

export default function ProjektePage() {
  return (
    <>
      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Projekte"
            title="Einblicke in echte Kundenprojekte und Konzepte"
            description="Manche Projekte sind live im Einsatz bei echten Kunden, andere zeigen als Konzept, wie eine Lösung für eine Branche aussehen könnte."
          />
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projekte/${project.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <ProjectMockup project={project} className="rounded-none border-0" />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2">
                    <Badge>{project.category}</Badge>
                    <span className="text-xs text-zinc-500">{project.type}</span>
                  </div>
                  <h2 className="mt-3 text-lg font-semibold text-zinc-900">
                    {project.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-zinc-600">
                    {project.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                    Case Study ansehen
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
