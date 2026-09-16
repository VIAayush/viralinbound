"use client";

import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import StrategyNote from "./StrategyNote";
import Reveal from "./ui/Reveal";
import { useAppState } from "@/lib/app-context";
import { AI_CONCEPTS } from "@/lib/content";

export default function AISection() {
  const { proposedFeatures } = useAppState();
  if (!proposedFeatures) return null;

  return (
    <section className="border-b border-border bg-surface">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="Roadmap"
          title="Digital experiences that understand what your business needs next."
          description="Directional concepts for where the site and products could go — not commitments on a delivery date."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {AI_CONCEPTS.map((concept, i) => (
            <Reveal
              key={concept.title}
              delay={i * 50}
              className="card-lift-soft flex items-start justify-between gap-4 rounded-2xl border border-border bg-paper p-5"
            >
              <div>
                <h3 className="text-base font-semibold text-ink">{concept.title}</h3>
                <p className="mt-1.5 text-sm text-ink-soft">{concept.description}</p>
              </div>
              <StrategyNote status={concept.status} className="shrink-0" />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
