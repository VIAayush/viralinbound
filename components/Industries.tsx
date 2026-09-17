"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { INDUSTRIES } from "@/lib/content";
import { StatTile, MockTable, CardGrid } from "./ui/mock";
import { IconArrowRight } from "./ui/icons";

function IndustryVisual({ visual }: { visual: "stats" | "workflow" | "grid" }) {
  if (visual === "stats") {
    return (
      <div className="grid grid-cols-3 gap-2">
        <StatTile label="Students" value="1,240" />
        <StatTile label="Attendance" value="96%" />
        <StatTile label="Classes" value="18" />
      </div>
    );
  }
  if (visual === "workflow") {
    return (
      <MockTable
        columns={["Stage", "Status"]}
        rows={[
          ["Catalogue viewed", "Complete"],
          ["Client quote", "In progress"],
          ["Order tracking", "Pending"],
        ]}
      />
    );
  }
  return (
    <CardGrid
      items={[
        { title: "Product A", subtitle: "In stock" },
        { title: "Product B", subtitle: "In stock" },
        { title: "Product C", subtitle: "Low stock" },
        { title: "Product D", subtitle: "In stock" },
      ]}
    />
  );
}

export default function Industries() {
  const [activeKey, setActiveKey] = useState(INDUSTRIES[0].key);
  const active = INDUSTRIES.find((i) => i.key === activeKey) ?? INDUSTRIES[0];

  return (
    <section id="industries" className="scroll-mt-16 border-b border-border bg-surface">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="Industries"
          title="Solutions designed around your business context."
          description="Select an industry — the problem, the recommendation and the visual all update to match."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {INDUSTRIES.map((ind) => {
            const isActive = ind.key === activeKey;
            return (
              <button
                key={ind.key}
                type="button"
                onClick={() => setActiveKey(ind.key)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-[transform,background-color,border-color,color] duration-300 ease-[var(--ease-float)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 ${
                  isActive ? "border-ink bg-ink text-paper" : "border-border text-ink-soft hover:border-border-strong"
                }`}
              >
                {ind.name}
              </button>
            );
          })}
        </div>

        <Reveal key={active.key} className="mt-8 grid grid-cols-1 gap-6 rounded-2xl border border-border bg-paper p-6 sm:p-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h3 className="text-xl text-ink">{active.name}</h3>
            <p className="mt-2 text-sm text-ink-soft">{active.problem}</p>
            <div className="mt-4 rounded-lg border border-border bg-surface px-3.5 py-3">
              <div className="font-mono-ui text-[10px] uppercase tracking-wide text-data">{active.solutionLabel}</div>
              <div className="mt-1 text-sm text-ink">{active.solutionDescription}</div>
            </div>
            <Link
              href={active.href}
              className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-accent-strong [&>svg]:transition-transform [&>svg]:duration-300 hover:[&>svg]:translate-x-1"
            >
              {active.ctaLabel}
              <IconArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5">
            <div className="mb-3 font-mono-ui text-[10px] uppercase tracking-wide text-ink-faint">Illustrative preview</div>
            <IndustryVisual visual={active.visual} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
