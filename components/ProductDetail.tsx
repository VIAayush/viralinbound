"use client";

import { useState } from "react";
import Container from "./ui/Container";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import StrategyNote from "./StrategyNote";
import { PRODUCT_PANELS } from "./productPanels";
import type { Product } from "@/lib/content";
import { IconArrowRight, IconCheck } from "./ui/icons";

export default function ProductDetail({ product }: { product: Product }) {
  const [stepIndex, setStepIndex] = useState(0);
  const Panel = PRODUCT_PANELS[product.slug];
  const activeStep = product.workflow[stepIndex]?.label ?? product.workflow[0].label;

  return (
    <>
      <section className="border-b border-border bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono-ui text-[11px] font-medium uppercase tracking-[0.14em] text-data">
              {product.tagline}
            </span>
            <StrategyNote status={product.status} />
          </div>
          <h1 className="mt-4 max-w-2xl text-4xl text-ink sm:text-5xl">{product.name}</h1>
          <p className="mt-5 max-w-xl text-lg text-ink-soft">{product.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {product.audience.map((a) => (
              <span key={a} className="rounded-full bg-surface-2 px-3 py-1 text-xs font-medium text-ink-soft">
                {a}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/#contact" size="lg">
              Talk to a Specialist
              <IconArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/#products" size="lg" variant="secondary">
              Back to Products
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-paper">
        <Container className="py-16 sm:py-20">
          <h2 className="text-2xl text-ink sm:text-3xl">What it covers</h2>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {product.capabilities.map((c) => (
              <div
                key={c}
                className="card-lift-soft flex items-start gap-2.5 rounded-xl border border-border bg-surface p-4"
              >
                <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-good" />
                <span className="text-sm text-ink">{c}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl text-ink sm:text-3xl">Workflow walkthrough</h2>
            <StrategyNote status="demo" label="Demo — sample data" />
          </div>
          <Reveal className="mt-8 rounded-2xl border border-border bg-paper p-5 shadow-[var(--shadow-md)] sm:p-8">
            <div className="flex flex-wrap gap-2">
              {product.workflow.map((step, i) => (
                <button
                  key={step.label}
                  type="button"
                  onClick={() => setStepIndex(i)}
                  aria-pressed={i === stepIndex}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-[transform,background-color,border-color,color] duration-200 ease-[var(--ease-float)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 ${
                    i === stepIndex
                      ? "border-accent bg-accent-soft text-accent-strong"
                      : "border-border text-ink-soft hover:border-border-strong"
                  }`}
                >
                  {step.label}
                </button>
              ))}
            </div>
            <div className="mt-6 min-h-[220px] rounded-xl border border-border bg-surface p-5">
              <Panel step={activeStep} />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-border bg-paper">
        <Container className="py-16 sm:py-20">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl text-ink sm:text-3xl">Pricing</h2>
          </div>
          {product.pricing ? (
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {product.pricing.map((tier) => (
                <div
                  key={tier.name}
                  className="card-lift flex flex-col rounded-2xl border border-border bg-surface p-6"
                >
                  <div className="text-sm font-semibold text-ink">{tier.name}</div>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-2xl font-semibold text-ink">{tier.price}</span>
                    {tier.cadence && <span className="text-sm text-ink-faint">{tier.cadence}</span>}
                  </div>
                  <p className="mt-3 text-sm text-ink-soft">{tier.detail}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-border-strong bg-surface p-8 text-center">
              <p className="text-sm text-ink-soft">Custom quotation based on catalogue size and order volume.</p>
            </div>
          )}
          <p className="mt-5 text-xs text-ink-faint">{product.pricingNote}</p>
        </Container>
      </section>

      <section className="bg-ink">
        <Container className="py-16 text-center sm:py-20">
          <h2 className="mx-auto max-w-xl text-3xl text-paper">Ready to explore {product.name} for your business?</h2>
          <div className="mt-7 flex justify-center">
            <Button href="/#contact" size="lg" className="!bg-paper !text-ink hover:!bg-accent-soft">
              Book a Strategy Call
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
