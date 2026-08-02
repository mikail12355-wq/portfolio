import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Nimm Kontakt zu ${siteConfig.name} auf – für Webseiten und individuelle Business-Software.`,
};

export default function KontaktPage() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Kontakt"
          title="Lass uns über dein Projekt sprechen"
          description="Ein kurzer erster Austausch reicht, um herauszufinden, ob und wie ich dir weiterhelfen kann."
        />

        <div className="mt-14">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
