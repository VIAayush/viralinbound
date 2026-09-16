"use client";

import { useAppState } from "@/lib/app-context";

export default function DemoBanner() {
  const { demoMode } = useAppState();
  if (!demoMode) return null;

  return (
    <div className="border-b border-accent-strong/20 bg-accent px-4 py-2 text-center text-xs font-medium text-white">
      Concept demo for internal review — some experiences are simulated for presentation purposes.
    </div>
  );
}
