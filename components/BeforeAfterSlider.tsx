"use client";

import { useState } from "react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import StrategyNote from "./StrategyNote";
import Reveal from "./ui/Reveal";

function BeforeLayout() {
  return (
    <div className="flex h-full w-full flex-col gap-3 bg-surface p-5">
      <div className="flex items-center gap-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="h-2.5 w-10 rounded-sm bg-surface-2" />
        ))}
      </div>
      <div className="flex flex-1 gap-3">
        <div className="flex-1 space-y-2">
          <div className="h-4 w-3/4 rounded-sm bg-surface-2" />
          <div className="h-2.5 w-full rounded-sm bg-surface-2" />
          <div className="h-2.5 w-11/12 rounded-sm bg-surface-2" />
          <div className="h-2.5 w-4/5 rounded-sm bg-surface-2" />
          <div className="mt-3 h-2.5 w-full rounded-sm bg-surface-2" />
          <div className="h-2.5 w-3/5 rounded-sm bg-surface-2" />
          <div className="mt-3 h-6 w-20 rounded-sm bg-border-strong" />
        </div>
        <div className="w-24 space-y-2">
          <div className="h-16 rounded-sm bg-surface-2" />
          <div className="h-2 w-full rounded-sm bg-surface-2" />
          <div className="h-2 w-3/4 rounded-sm bg-surface-2" />
        </div>
      </div>
    </div>
  );
}

function AfterLayout() {
  return (
    <div className="flex h-full w-full flex-col gap-4 bg-surface p-5">
      <div className="flex items-center justify-between">
        <div className="h-3 w-16 rounded-sm bg-ink" />
        <div className="flex gap-3">
          <div className="h-2.5 w-10 rounded-sm bg-surface-2" />
          <div className="h-2.5 w-10 rounded-sm bg-surface-2" />
          <div className="h-2.5 w-10 rounded-sm bg-surface-2" />
        </div>
      </div>
      <div className="flex flex-1 flex-col items-start justify-center gap-3">
        <div className="h-5 w-3/5 rounded-sm bg-ink" />
        <div className="h-2.5 w-4/5 rounded-sm bg-surface-2" />
        <div className="h-2.5 w-3/5 rounded-sm bg-surface-2" />
        <div className="mt-2 h-8 w-32 rounded-full bg-accent" />
      </div>
    </div>
  );
}

export default function BeforeAfterSlider() {
  const [percent, setPercent] = useState(50);

  return (
    <section className="border-b border-border bg-surface">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="Website experience"
          title="What a redesign actually changes."
          description="Drag to compare a cluttered, low-hierarchy layout against a focused, conversion-oriented one."
          action={<StrategyNote status="demo" label="Concept illustration" />}
        />

        <Reveal className="mt-10">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-md)] sm:aspect-[16/7]">
            <div className="absolute inset-0">
              <AfterLayout />
            </div>
            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}>
              <BeforeLayout />
            </div>
            <div
              className="pointer-events-none absolute top-0 bottom-0 w-px bg-ink"
              style={{ left: `${percent}%` }}
            >
              <div className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface shadow-[var(--shadow-md)]">
                <span className="h-3 w-px bg-ink-faint" />
                <span className="mx-0.5 h-3 w-px bg-ink-faint" />
              </div>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={percent}
              onChange={(e) => setPercent(Number(e.target.value))}
              aria-label="Compare before and after website layout"
              className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
            />
            <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-surface/90 px-2.5 py-1 text-[11px] font-semibold text-ink-soft">
              Before
            </span>
            <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-surface/90 px-2.5 py-1 text-[11px] font-semibold text-ink-soft">
              After
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <div className="text-sm font-semibold text-ink">Before</div>
              <ul className="mt-2 flex flex-col gap-1.5 text-sm text-ink-soft">
                <li>Cluttered navigation</li>
                <li>Difficult hierarchy</li>
                <li>Weak call to action</li>
                <li>No clear next step</li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-ink">After</div>
              <ul className="mt-2 flex flex-col gap-1.5 text-sm text-ink-soft">
                <li>Clear, focused journey</li>
                <li>Strong, singular call to action</li>
                <li>Better information architecture</li>
                <li>Conversion-focused layout</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
