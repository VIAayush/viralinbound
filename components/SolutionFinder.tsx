"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import StrategyNote from "./StrategyNote";
import Reveal from "./ui/Reveal";
import { FINDER_GOALS, FINDER_BUSINESS_TYPES, getFinderRecommendation } from "@/lib/content";
import { useAppState } from "@/lib/app-context";
import { IconArrowRight, IconCheck } from "./ui/icons";

export default function SolutionFinder() {
  const [goal, setGoal] = useState<string | null>(null);
  const [businessType, setBusinessType] = useState<string | null>(null);
  const { setLeadPrefill } = useAppState();

  const recommendation = goal && businessType ? getFinderRecommendation(goal, businessType) : null;
  const step = businessType ? 3 : goal ? 2 : 1;

  function reset() {
    setGoal(null);
    setBusinessType(null);
  }

  return (
    <section className="border-b border-border bg-paper">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="Solution finder"
          title="What are you trying to solve?"
          description="Two quick questions, then a recommended starting point — not a generic list."
          action={<StrategyNote status="proposed" />}
        />

        {/* Step indicator */}
        <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-3 sm:gap-x-3">
          {["Goal", "Business", "Recommendation"].map((label, i) => {
            const idx = i + 1;
            const active = idx === step;
            const done = idx < step;
            return (
              <div key={label} className="flex items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono-ui text-[11px] font-semibold transition-colors duration-300 ${
                      done
                        ? "bg-good text-white"
                        : active
                          ? "bg-accent text-white"
                          : "bg-surface-2 text-ink-faint"
                    }`}
                  >
                    {done ? <IconCheck className="h-3 w-3" /> : idx}
                  </span>
                  <span className={`text-xs font-medium sm:text-sm ${active || done ? "text-ink" : "text-ink-faint"}`}>{label}</span>
                </div>
                {idx < 3 && <span className={`h-px w-4 shrink-0 sm:w-8 ${done ? "bg-good" : "bg-border-strong"}`} />}
              </div>
            );
          })}
        </div>

        {/* Step 1 — Goal */}
        <Reveal key="step-1" className="mt-8">
          <div className="text-sm font-semibold text-ink-soft">Step 1 — What are you trying to achieve?</div>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {FINDER_GOALS.map((g) => {
              const isActive = g.key === goal;
              return (
                <button
                  key={g.key}
                  type="button"
                  onClick={() => {
                    setGoal(g.key);
                    setBusinessType(null);
                  }}
                  aria-pressed={isActive}
                  className={`rounded-xl border px-5 py-4 text-left transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-[var(--ease-float)] hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] ${
                    isActive
                      ? "border-accent bg-accent-soft text-accent-strong shadow-[var(--shadow-hover-soft)]"
                      : "border-border bg-surface text-ink hover:border-border-strong hover:shadow-[var(--shadow-hover-soft)]"
                  }`}
                >
                  <div className="text-base font-semibold">{g.label}</div>
                  <div className={`mt-1 text-xs ${isActive ? "text-accent-strong/80" : "text-ink-faint"}`}>{g.description}</div>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Step 2 — Business type */}
        {goal && (
          <Reveal key={`step-2-${goal}`} className="mt-8">
            <div className="text-sm font-semibold text-ink-soft">Step 2 — What type of business?</div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {FINDER_BUSINESS_TYPES.map((b) => {
                const isActive = b.key === businessType;
                return (
                  <button
                    key={b.key}
                    type="button"
                    onClick={() => setBusinessType(b.key)}
                    aria-pressed={isActive}
                    className={`rounded-xl border px-4 py-3.5 text-sm font-medium transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-[var(--ease-float)] hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] ${
                      isActive
                        ? "border-accent bg-accent-soft text-accent-strong shadow-[var(--shadow-hover-soft)]"
                        : "border-border bg-surface text-ink hover:border-border-strong hover:shadow-[var(--shadow-hover-soft)]"
                    }`}
                  >
                    {b.label}
                  </button>
                );
              })}
            </div>
          </Reveal>
        )}

        {/* Step 3 — Recommendation */}
        {recommendation && (
          <Reveal key={`rec-${goal}-${businessType}`} className="mt-8">
            <div className="card-lift flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:p-8">
              <div>
                <div className="font-mono-ui text-[11px] uppercase tracking-wide text-data">Recommended starting point</div>
                <h3 className="mt-2 text-xl text-ink">{recommendation.title}</h3>
                <p className="mt-2 max-w-lg text-sm text-ink-soft">{recommendation.description}</p>
                <div className="mt-3 rounded-lg border border-border bg-paper px-3.5 py-3">
                  <div className="font-mono-ui text-[10px] uppercase tracking-wide text-ink-faint">Why this solution?</div>
                  <p className="mt-1 text-sm text-ink-soft">{recommendation.why}</p>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {recommendation.tags.map((t) => (
                    <span key={t} className="rounded-full bg-surface-2 px-2.5 py-1 text-xs font-medium text-ink-soft">
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-4 text-xs font-medium text-ink-faint underline-offset-2 hover:text-ink hover:underline"
                >
                  Start over
                </button>
              </div>
              <div className="flex shrink-0 flex-col gap-2.5">
                <Link
                  href={recommendation.href}
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper shadow-[var(--shadow-sm)] transition-[transform,box-shadow,background-color] duration-300 ease-[var(--ease-float)] hover:-translate-y-[3px] hover:bg-accent-strong hover:shadow-[var(--shadow-hover)] active:translate-y-0 active:scale-[0.97] [&>svg]:transition-transform [&>svg]:duration-300 hover:[&>svg]:translate-x-1"
                >
                  Explore Solution
                  <IconArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/#contact"
                  onClick={() => setLeadPrefill(recommendation.helpOption)}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
                >
                  Talk to a Specialist
                </Link>
              </div>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
