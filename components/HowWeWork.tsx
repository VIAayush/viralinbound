"use client";

import { useEffect, useRef, useState } from "react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/content";

export default function HowWeWork() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.index);
          if (entry.isIntersecting) {
            setActiveIndex((prev) => Math.max(prev, idx));
          }
        });
      },
      { threshold: 0.5, rootMargin: "0px 0px -20% 0px" }
    );
    refs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="border-b border-border bg-paper">
      <Container className="py-20 sm:py-24">
        <SectionHeading eyebrow="How we work" title="A consistent process, not a one-off engagement." />

        <div className="mt-12 flex flex-col">
          {PROCESS_STEPS.map((step, i) => {
            const active = i <= activeIndex;
            const isLast = i === PROCESS_STEPS.length - 1;
            return (
              <div
                key={step.index}
                ref={(node) => {
                  refs.current[i] = node;
                }}
                data-index={i}
                className="flex gap-6 py-2 sm:gap-10"
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border font-mono-ui text-sm font-semibold transition-colors duration-500 ${
                      active ? "border-accent bg-accent text-white" : "border-border-strong bg-surface text-ink-faint"
                    }`}
                  >
                    {step.index}
                  </div>
                  {!isLast && (
                    <div className="my-1 w-px flex-1 bg-border-strong" style={{ minHeight: 56 }}>
                      <div
                        className={`w-full bg-accent transition-[height] duration-700 ease-[var(--ease-float)] ${active ? "h-full" : "h-0"}`}
                      />
                    </div>
                  )}
                </div>
                <div className={`flex-1 pb-9 transition-opacity duration-500 ${active ? "opacity-100" : "opacity-60"}`}>
                  <h3 className="text-xl text-ink">{step.title}</h3>
                  <p className="mt-1.5 text-sm font-medium text-ink-soft">{step.summary}</p>
                  <p className="mt-1 max-w-lg text-sm text-ink-faint">{step.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
