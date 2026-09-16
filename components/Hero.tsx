"use client";

import { useEffect, useRef, useState } from "react";
import Container from "./ui/Container";
import Button from "./ui/Button";
import FlowLines from "./ui/FlowLines";
import { IconArrowRight } from "./ui/icons";

const NODES = [
  { label: "Viral Inbound", detail: "One partner" },
  { label: "Strategy", detail: "Business context first" },
  { label: "Design", detail: "Brand & experience" },
  { label: "Technology", detail: "Websites & products" },
  { label: "Products", detail: "VILMS · SuperShowroom · Gifting" },
  { label: "Growth", detail: "SEO & optimization" },
];

function EcosystemVisual() {
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = setInterval(() => {
      if (!pausedRef.current) setActive((a) => (a + 1) % NODES.length);
    }, 1900);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="relative rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-lg)] transition-[transform,box-shadow] duration-500 ease-[var(--ease-float)] hover:-translate-y-2 hover:shadow-[var(--shadow-hover)] sm:p-8"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div className="mb-5 font-mono-ui text-[11px] font-medium uppercase tracking-wide text-ink-faint">
        Viral Inbound ecosystem
      </div>
      <div className="flex flex-col">
        {NODES.map((node, i) => {
          const isActive = i === active;
          const isLast = i === NODES.length - 1;
          return (
            <div key={node.label} className="flex gap-4">
              <div className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-all duration-300 hover:scale-110 active:scale-95 ${
                    isActive
                      ? "border-accent bg-accent text-white scale-110 shadow-[0_6px_16px_-4px_rgba(51,69,158,0.5)]"
                      : "border-border-strong bg-paper text-ink-faint hover:border-accent hover:text-accent-strong"
                  }`}
                >
                  {i === 0 ? "VI" : i}
                </button>
                {!isLast && (
                  <div
                    className={`w-px flex-1 transition-colors duration-300 ${
                      i < active ? "bg-accent" : "bg-border-strong"
                    }`}
                    style={{ minHeight: 26 }}
                  />
                )}
              </div>
              <div className={`pb-6 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-70"}`}>
                <div className={`text-sm font-semibold ${isActive ? "text-ink" : "text-ink-soft"}`}>{node.label}</div>
                <div className="text-xs text-ink-faint">{node.detail}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <FlowLines
        className="[mask-image:linear-gradient(to_bottom,black,transparent_92%)] opacity-90"
        lineRgb="51, 69, 158"
        count={6}
      />
      <Container className="relative z-10 grid grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-28">
        <div>
          <span className="font-mono-ui text-[11px] font-medium uppercase tracking-[0.14em] text-data">
            Strategy · Design · Technology · Products
          </span>
          <h1 className="mt-4 text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]">
            Build. Digitize. Automate. Grow.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft">
            From brand experiences and high-converting websites to business products and digital
            solutions, Viral Inbound helps businesses turn ideas into scalable digital experiences.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/#solutions" size="lg">
              Explore Our Solutions
              <IconArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/#contact" size="lg" variant="secondary">
              Book a Strategy Call
            </Button>
          </div>
        </div>
        <EcosystemVisual />
      </Container>
    </section>
  );
}
