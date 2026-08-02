"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GradientBlob } from "@/components/ui/GradientBlob";

const trustPoints = [
  "Feste Ansprechperson vom Start bis zum Livegang",
  "Läuft zuverlässig auf Handy, Tablet und Desktop",
  "Klare Kommunikation ohne Tech-Fachchinesisch",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      <GradientBlob className="-top-40 -right-40 h-[32rem] w-[32rem]" />
      <GradientBlob className="top-40 -left-52 h-[26rem] w-[26rem]" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm font-medium text-zinc-600 shadow-sm">
            Software für Handwerk, Gastronomie & Verwaltung
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-6xl">
            Digitale Lösungen, die dein Unternehmen wirklich weiterbringen
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600">
            Ich entwickle moderne Webseiten und maßgeschneiderte Business-Software
            für lokale Unternehmen – verständlich, zuverlässig und auf dein
            Tagesgeschäft zugeschnitten.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/kontakt" size="lg">
              Projekt anfragen
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/projekte" variant="secondary" size="lg">
              Projekte ansehen
            </Button>
          </div>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mx-auto mt-16 grid max-w-3xl gap-4 sm:grid-cols-3"
        >
          {trustPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2.5 rounded-2xl border border-zinc-100 bg-white/60 p-4 text-sm text-zinc-700 shadow-sm"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {point}
            </li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
