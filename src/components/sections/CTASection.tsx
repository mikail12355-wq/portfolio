import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-zinc-900 px-8 py-16 text-center sm:px-16">
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-br from-indigo-600/40 via-zinc-900 to-zinc-900"
          />
          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Bereit für eine Software, die zu deinem Betrieb passt?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-300">
              Schreib mir kurz, worum es geht – ich melde mich zeitnah mit einer
              ehrlichen Einschätzung zurück.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/kontakt" size="lg">
                Jetzt Kontakt aufnehmen
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
