import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProjectMockup } from "@/components/ui/ProjectMockup";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/lib/projects";

export function ProjectsHighlight() {
  const highlighted = projects.slice(0, 3);

  return (
    <section className="bg-surface py-24">
      <Container>
        <SectionHeading
          eyebrow="Projekte"
          title="Aktuelle Arbeiten aus Handwerk, Gastronomie und Verwaltung"
          description="Ein Auszug aus Kunden- und Konzeptprojekten – als Beispiel, wie individuelle Software in der Praxis aussehen kann."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {highlighted.map((project) => (
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
                <h3 className="mt-3 text-lg font-semibold text-zinc-900">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-zinc-600">{project.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Case Study ansehen
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/projekte" variant="secondary">
            Alle Projekte ansehen
          </Button>
        </div>
      </Container>
    </section>
  );
}
