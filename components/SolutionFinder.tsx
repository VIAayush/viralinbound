"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import StrategyNote from "./StrategyNote";
import Reveal from "./ui/Reveal";
import { FINDER_OPTIONS } from "@/lib/content";
import { useAppState } from "@/lib/app-context";
import { IconArrowRight } from "./ui/icons";

export default function SolutionFinder() {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const { setLeadPrefill } = useAppState();
  const selected = FINDER_OPTIONS.find((o) => o.key === selectedKey) ?? null;

  return (
    <section className="border-b border-border bg-paper">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="Solution finder"
          title="What are you trying to solve?"
          description="Choose the statement closest to your situation for a recommended starting point."
          action={<StrategyNote status="proposed" />}
        />

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {FINDER_OPTIONS.map((opt) => {
            const isActive = opt.key === selectedKey;
            return (
              <button
                key={opt.key}
                type="button"
                onClick={() => setSelectedKey(opt.key)}
                aria-pressed={isActive}
                className={`rounded-xl border px-5 py-4 text-left text-sm font-medium transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-[var(--ease-float)] hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] ${
                  isActive
                    ? "border-accent bg-accent-soft text-accent-strong shadow-[var(--shadow-hover-soft)]"
                    : "border-border bg-surface text-ink hover:border-border-strong hover:shadow-[var(--shadow-hover-soft)]"
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        {selected && (
          <Reveal key={selected.key} className="mt-8">
            <div className="card-lift flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:p-8">
              <div>
                <div className="font-mono-ui text-[11px] uppercase tracking-wide text-data">Recommended</div>
                <h3 className="mt-2 text-xl text-ink">{selected.recommendationTitle}</h3>
                <p className="mt-2 max-w-lg text-sm text-ink-soft">{selected.recommendationDescription}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selected.tags.map((t) => (
                    <span key={t} className="rounded-full bg-surface-2 px-2.5 py-1 text-xs font-medium text-ink-soft">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href="/#contact"
                onClick={() => setLeadPrefill(selected.helpOption)}
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper shadow-[var(--shadow-sm)] transition-[transform,box-shadow,background-color] duration-300 ease-[var(--ease-float)] hover:-translate-y-[3px] hover:bg-accent-strong hover:shadow-[var(--shadow-hover)] active:translate-y-0 active:scale-[0.97] [&>svg]:transition-transform [&>svg]:duration-300 hover:[&>svg]:translate-x-1"
              >
                Talk to a Specialist
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
