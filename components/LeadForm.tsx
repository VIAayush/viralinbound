"use client";

import { useState, type FormEvent } from "react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { useAppState } from "@/lib/app-context";
import { FORM_HELP_OPTIONS, FORM_INDUSTRY_OPTIONS, FORM_TIMELINE_OPTIONS } from "@/lib/content";
import { IconCheck } from "./ui/icons";

const inputClass =
  "w-full rounded-lg border border-border-strong bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus-visible:outline-2 focus-visible:outline-accent";
const labelClass = "text-sm font-medium text-ink-soft";

export default function LeadForm() {
  const { leadPrefill, demoMode } = useAppState();
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [helpNeeded, setHelpNeeded] = useState("");

  // Adjust local state during render (React's documented pattern for
  // reacting to a prop/context change) rather than in an effect — leadPrefill
  // is always null on first render, so there's no SSR/hydration mismatch risk.
  const [syncedPrefill, setSyncedPrefill] = useState<string | null>(null);
  if (leadPrefill !== syncedPrefill) {
    setSyncedPrefill(leadPrefill);
    if (leadPrefill && (FORM_HELP_OPTIONS as readonly string[]).includes(leadPrefill)) {
      setHelpNeeded(leadPrefill);
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    window.setTimeout(() => setStatus("done"), 900);
  }

  return (
    <section id="contact" className="scroll-mt-16 border-b border-border bg-paper">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="Get started"
          title="Book a Strategy Call"
          description="Tell us a little about the business — a specialist will follow up to understand the requirement before proposing an approach."
        />

        <Reveal className="mt-10 max-w-2xl rounded-2xl border border-border bg-surface p-6 sm:p-8">
          {status === "done" ? (
            <div className="flex flex-col items-center gap-3 py-10 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-good-soft text-good">
                <IconCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl text-ink">Thank you. Your request has been received.</h3>
              <p className="max-w-sm text-sm text-ink-soft">A specialist will reach out shortly to discuss next steps.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className={labelClass}>Name</span>
                  <input required name="name" type="text" className={inputClass} placeholder="Your name" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className={labelClass}>Company</span>
                  <input required name="company" type="text" className={inputClass} placeholder="Company name" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className={labelClass}>Work email</span>
                  <input required name="email" type="email" className={inputClass} placeholder="you@company.com" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className={labelClass}>Phone</span>
                  <input required name="phone" type="tel" className={inputClass} placeholder="+91" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className={labelClass}>Industry</span>
                  <select required name="industry" defaultValue="" className={inputClass}>
                    <option value="" disabled>
                      Select an industry
                    </option>
                    {FORM_INDUSTRY_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-2">
                  <span className={labelClass}>Timeline</span>
                  <select required name="timeline" defaultValue="" className={inputClass}>
                    <option value="" disabled>
                      Select a timeline
                    </option>
                    {FORM_TIMELINE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="flex flex-col gap-2">
                <span className={labelClass}>What do you need help with?</span>
                <select
                  required
                  name="help"
                  value={helpNeeded}
                  onChange={(e) => setHelpNeeded(e.target.value)}
                  className={inputClass}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {FORM_HELP_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-1 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-accent-strong disabled:opacity-60"
              >
                {status === "loading" ? "Submitting…" : "Book a Strategy Call"}
              </button>

              {demoMode && (
                <p className="text-xs text-ink-faint">
                  Demo mode — this submission is simulated locally for this presentation and is not connected to a
                  live CRM.
                </p>
              )}
            </form>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
