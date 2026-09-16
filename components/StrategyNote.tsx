"use client";

import { useAppState } from "@/lib/app-context";
import type { Status } from "@/lib/content";

const LABELS: Record<Status, string> = {
  existing: "Existing",
  proposed: "Proposed",
  demo: "Concept",
};

const STYLES: Record<Status, string> = {
  existing: "bg-good-soft text-good",
  proposed: "bg-warn-soft text-warn",
  demo: "bg-accent-soft text-accent-strong",
};

export default function StrategyNote({
  status,
  label,
  className = "",
}: {
  status: Status;
  label?: string;
  className?: string;
}) {
  const { strategyNotes } = useAppState();
  if (!strategyNotes) return null;

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-mono-ui text-[10px] font-medium uppercase tracking-wide ${STYLES[status]} ${className}`}
    >
      {label ?? LABELS[status]}
    </span>
  );
}
