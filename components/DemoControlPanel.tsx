"use client";

import { useEffect, useRef, useState } from "react";
import { useAppState } from "@/lib/app-context";
import { IconSliders, IconClose } from "./ui/icons";

const ROWS: { key: "strategyNotes" | "proposedFeatures" | "demoMode"; label: string; hint: string }[] = [
  { key: "strategyNotes", label: "Strategy notes", hint: "Show Existing / Proposed / Concept labels" },
  { key: "proposedFeatures", label: "Proposed features", hint: "Reveal the forward-looking AI roadmap section" },
  { key: "demoMode", label: "Demo mode banner", hint: "Show a top banner marking this as a concept demo" },
];

function Switch({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      className={`relative h-5 w-9 shrink-0 rounded-full transition-colors ${checked ? "bg-accent" : "bg-border-strong"}`}
    >
      <span
        className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${
          checked ? "translate-x-[18px]" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

export default function DemoControlPanel() {
  const { strategyNotes, proposedFeatures, demoMode, toggle } = useAppState();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const values = { strategyNotes, proposedFeatures, demoMode };

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="fixed bottom-5 left-5 z-40">
      {open && (
        <div className="mb-3 w-[280px] rounded-xl border border-border bg-surface p-4 shadow-[var(--shadow-lg)]">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono-ui text-[11px] font-medium uppercase tracking-wide text-ink-faint">
              Presentation controls
            </span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close controls" className="text-ink-faint hover:text-ink">
              <IconClose className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {ROWS.map((row) => (
              <div key={row.key} className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-medium text-ink">{row.label}</div>
                  <div className="text-xs text-ink-faint">{row.hint}</div>
                </div>
                <Switch checked={values[row.key]} onChange={() => toggle(row.key)} label={row.label} />
              </div>
            ))}
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Presentation controls"
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong bg-surface text-ink-faint opacity-60 shadow-[var(--shadow-md)] transition-opacity hover:opacity-100"
      >
        <IconSliders className="h-4 w-4" />
      </button>
    </div>
  );
}
