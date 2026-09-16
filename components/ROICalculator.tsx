"use client";

import { useMemo, useState } from "react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import StrategyNote from "./StrategyNote";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";

function Field({
  label,
  value,
  onChange,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  suffix?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-ink-soft">{label}</span>
      <div className="flex items-center gap-2 rounded-xl border border-border-strong bg-paper px-4 py-3">
        <input
          type="number"
          min={0}
          value={value}
          onChange={(e) => onChange(Math.max(0, Number(e.target.value)))}
          className="w-full bg-transparent text-lg font-semibold text-ink outline-none [appearance:textfield]"
        />
        {suffix && <span className="text-sm text-ink-faint">{suffix}</span>}
      </div>
    </label>
  );
}

export default function ROICalculator() {
  const [visitors, setVisitors] = useState(4000);
  const [current, setCurrent] = useState(1.5);
  const [potential, setPotential] = useState(3.5);

  const { currentLeads, additional } = useMemo(() => {
    const c = Math.round(visitors * (current / 100));
    const p = Math.round(visitors * (potential / 100));
    return { currentLeads: c, additional: Math.max(0, p - c) };
  }, [visitors, current, potential]);

  return (
    <section className="border-b border-border bg-surface">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="Value estimator"
          title="What could a better-converting site be worth?"
          description="Adjust the numbers to reflect your own traffic and conversion rate."
          action={<StrategyNote status="demo" label="Illustrative estimate" />}
        />

        <Reveal className="mt-10 grid grid-cols-1 gap-8 rounded-2xl border border-border bg-paper p-6 sm:p-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1">
            <Field label="Visitors per month" value={visitors} onChange={setVisitors} />
            <Field label="Current conversion rate" value={current} onChange={setCurrent} suffix="%" />
            <Field label="Potential conversion rate" value={potential} onChange={setPotential} suffix="%" />
          </div>

          <div className="hidden h-full w-px bg-border lg:block" />

          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-border bg-surface p-5">
              <div className="font-mono-ui text-[10px] uppercase tracking-wide text-ink-faint">Current leads / month</div>
              <div className="mt-1 text-2xl font-semibold text-ink">{currentLeads.toLocaleString("en-IN")}</div>
            </div>
            <div className="rounded-xl border border-accent bg-accent-soft p-5">
              <div className="font-mono-ui text-[10px] uppercase tracking-wide text-accent-strong">Potential additional leads / month</div>
              <div className="mt-1 text-2xl font-semibold text-accent-strong">+{additional.toLocaleString("en-IN")}</div>
            </div>
          </div>
        </Reveal>

        <p className="mt-4 max-w-2xl text-xs text-ink-faint">
          Estimates are illustrative and depend on actual business data, traffic quality and industry. They are not a
          guarantee of results.
        </p>
        <div className="mt-5">
          <Button href="/#contact" variant="secondary">
            Discuss Your Opportunity
          </Button>
        </div>
      </Container>
    </section>
  );
}
