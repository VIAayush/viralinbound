"use client";

import { useState } from "react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { ECOSYSTEM } from "@/lib/content";
import { IconArrowRight } from "./ui/icons";

export default function SolutionEcosystem() {
  const [activeKey, setActiveKey] = useState(ECOSYSTEM[0].key);
  const active = ECOSYSTEM.find((c) => c.key === activeKey) ?? ECOSYSTEM[0];

  return (
    <section id="solutions" className="scroll-mt-16 border-b border-border bg-surface">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="How we help"
          title="One partner. Multiple ways to move your business forward."
          description="Select a category to see how it breaks down — services and products work from the same underlying approach."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {ECOSYSTEM.map((cat) => {
            const isActive = cat.key === activeKey;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveKey(cat.key)}
                aria-pressed={isActive}
                className={`rounded-2xl border p-6 text-left transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-[var(--ease-float)] hover:-translate-y-[5px] active:translate-y-0 ${
                  isActive
                    ? "border-ink bg-ink text-paper shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-hover)]"
                    : "border-border bg-paper text-ink hover:border-border-strong hover:shadow-[var(--shadow-hover-soft)]"
                }`}
              >
                <div className={`text-xl font-semibold ${isActive ? "text-paper" : "text-ink"}`}>{cat.label}</div>
                <p className={`mt-2 text-sm ${isActive ? "text-paper/75" : "text-ink-soft"}`}>{cat.summary}</p>
              </button>
            );
          })}
        </div>

        <Reveal className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3" key={active.key}>
          {active.items.map((item) => (
            <div
              key={item.name}
              className="group/eco flex flex-col gap-2 bg-surface p-6 transition-colors duration-300 hover:bg-accent-soft"
            >
              <div className="flex items-center gap-2 text-base font-semibold text-ink">
                {item.name}
                <IconArrowRight className="h-3.5 w-3.5 text-ink-faint transition-transform duration-300 group-hover/eco:translate-x-1 group-hover/eco:text-accent-strong" />
              </div>
              <p className="text-sm text-ink-soft">{item.description}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
