import { Building2, Hammer, UtensilsCrossed } from "lucide-react";
import { Project } from "@/lib/projects";

const icons = {
  building: Building2,
  hammer: Hammer,
  utensils: UtensilsCrossed,
} as const;

export function ProjectMockup({
  project,
  className = "",
}: {
  project: Pick<Project, "gradient" | "accentIcon" | "title">;
  className?: string;
}) {
  const Icon = icons[project.accentIcon];

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-zinc-100 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
      </div>
      <div
        className={`flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${project.gradient}`}
      >
        <Icon className="h-16 w-16 text-white/90" strokeWidth={1.5} />
      </div>
    </div>
  );
}
