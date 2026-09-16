"use client";

import { useEffect, useRef, useState } from "react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import StrategyNote from "./StrategyNote";
import { PRODUCTS } from "@/lib/content";
import { PRODUCT_PANELS } from "./productPanels";

const STEP_DURATION = 2400;

export default function InteractiveProductDemo() {
  const [demo, setDemo] = useState({ productIndex: 0, stepIndex: 0 });
  const pausedRef = useRef(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;
    const id = setInterval(() => {
      if (pausedRef.current) return;
      setDemo((prev) => {
        const product = PRODUCTS[prev.productIndex];
        const nextStep = prev.stepIndex + 1;
        if (nextStep >= product.workflow.length) {
          return { productIndex: (prev.productIndex + 1) % PRODUCTS.length, stepIndex: 0 };
        }
        return { ...prev, stepIndex: nextStep };
      });
    }, STEP_DURATION);
    return () => clearInterval(id);
  }, []);

  const product = PRODUCTS[demo.productIndex];
  const Panel = PRODUCT_PANELS[product.slug];
  const activeStep = product.workflow[demo.stepIndex]?.label ?? product.workflow[0].label;

  function selectProduct(index: number) {
    setDemo({ productIndex: index, stepIndex: 0 });
  }
  function selectStep(index: number) {
    setDemo((prev) => ({ ...prev, stepIndex: index }));
  }

  return (
    <section className="border-b border-border bg-surface">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="Product demonstration"
          title="See how each product actually works."
          description="Step through a real workflow for each product. Sample data below is illustrative."
          action={<StrategyNote status="demo" label="Demo — sample data" />}
        />

        <div
          className="group/demo mt-10"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-paper p-2 sm:p-3">
            <div className="flex flex-wrap gap-2">
              {PRODUCTS.map((p, i) => (
                <button
                  key={p.slug}
                  type="button"
                  onClick={() => selectProduct(i)}
                  aria-pressed={i === demo.productIndex}
                  className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-[transform,background-color,color] duration-200 ease-[var(--ease-float)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 ${
                    i === demo.productIndex ? "bg-ink text-paper shadow-[var(--shadow-sm)]" : "text-ink-soft hover:bg-surface-2"
                  }`}
                >
                  {p.shortName}
                </button>
              ))}
            </div>
            <span className="hidden items-center gap-2 pr-2 font-mono-ui text-[10px] uppercase tracking-wide text-ink-faint sm:flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-good opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-good" />
              </span>
              Auto-playing — hover to pause
            </span>
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-md)] sm:p-8">
            <div className="flex flex-wrap gap-2">
              {product.workflow.map((step, i) => (
                <button
                  key={step.label}
                  type="button"
                  onClick={() => selectStep(i)}
                  aria-pressed={i === demo.stepIndex}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-[transform,background-color,border-color,color] duration-200 ease-[var(--ease-float)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 ${
                    i === demo.stepIndex
                      ? "border-accent bg-accent-soft text-accent-strong"
                      : "border-border text-ink-soft hover:border-border-strong"
                  }`}
                >
                  {step.label}
                </button>
              ))}
            </div>

            <div className="relative mt-6 min-h-[220px] overflow-hidden rounded-xl border border-border bg-paper p-5">
              <div key={`${product.slug}-${activeStep}`} className="fade-step">
                <Panel step={activeStep} />
              </div>
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-border">
                <div
                  key={`${product.slug}-${demo.stepIndex}`}
                  className="h-full bg-accent [animation:demo-progress_linear_forwards] group-hover/demo:[animation-play-state:paused]"
                  style={{ animationDuration: `${STEP_DURATION}ms` }}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
