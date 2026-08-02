import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ProjectsHighlight } from "@/components/sections/ProjectsHighlight";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <ProjectsHighlight />
      <ProcessSection />
      <CTASection />
    </>
  );
}
