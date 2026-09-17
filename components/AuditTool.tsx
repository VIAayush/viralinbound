"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import StrategyNote from "./StrategyNote";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";

const RESULTS: { category: string; verdict: string; tone: "good" | "warn" }[] = [
  { category: "Performance", verdict: "Review recommended", tone: "warn" },
  { category: "UX", verdict: "Review recommended", tone: "warn" },
  { category: "SEO", verdict: "Improvement opportunity", tone: "warn" },
  { category: "CTA clarity", verdict: "Improvement opportunity", tone: "warn" },
  { category: "Mobile experience", verdict: "Review recommended", tone: "warn" },
  { category: "Content", verdict: "Looks solid", tone: "good" },
  { category: "Conversion path", verdict: "Improvement opportunity", tone: "warn" },
];

const STEP_MS = 320;

export default function AuditTool() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "scanning" | "done">("idle");
  const [scanned, setScanned] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!url.trim() || status === "scanning") return;
    setStatus("scanning");
    setScanned(0);
    let count = 0;
    intervalRef.current = setInterval(() => {
      count += 1;
      setScanned(count);
      if (count >= RESULTS.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        window.setTimeout(() => setStatus("done"), STEP_MS);
      }
    }, STEP_MS);
  }

  return (
    <section className="border-b border-border bg-paper">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="Website experience report"
          title="How effective is your website?"
          description="Enter a URL to see the kind of report this tool would generate."
          action={<StrategyNote status="demo" label="Concept — simulated output" />}
        />

        <Reveal className="mt-10 rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="audit-url" className="sr-only">
              Website URL
            </label>
            <input
              id="audit-url"
              type="text"
              inputMode="url"
              required
              placeholder="yourbusiness.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 rounded-full border border-border-strong bg-paper px-5 py-3 text-sm text-ink placeholder:text-ink-faint focus-visible:outline-2 focus-visible:outline-accent"
            />
            <Button type="submit" size="md" disabled={status === "scanning"}>
              {status === "scanning" ? "Analyzing…" : "Run Analysis"}
            </Button>
          </form>

          {status !== "idle" && (
            <div className="mt-8 border-t border-border pt-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="flex items-center gap-2 text-lg text-ink">
                  Website Experience Report
                  {status === "scanning" && (
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                    </span>
                  )}
                </h3>
                <span className="rounded-full bg-accent-soft px-3 py-1 font-mono-ui text-[11px] font-medium text-accent-strong">
                  Demo analysis — sample output
                </span>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                {RESULTS.map((r, i) => {
                  const revealed = i < scanned || status === "done";
                  const checking = i === scanned && status === "scanning";
                  return (
                    <div key={r.category} className="flex items-center justify-between bg-surface px-4 py-3.5">
                      <span className="text-sm font-medium text-ink">{r.category}</span>
                      {revealed ? (
                        <span
                          className={`fade-step rounded-full px-2.5 py-1 text-xs font-medium ${
                            r.tone === "good" ? "bg-good-soft text-good" : "bg-warn-soft text-warn"
                          }`}
                        >
                          {r.verdict}
                        </span>
                      ) : (
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-medium text-ink-faint ${
                            checking ? "animate-pulse bg-surface-2" : "bg-surface-2 opacity-50"
                          }`}
                        >
                          {checking ? "Checking…" : "Queued"}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {status === "done" && (
                <Reveal className="mt-4" delay={0}>
                  <p className="text-xs text-ink-faint">
                    This is not a live scan of {url || "the submitted URL"}. It illustrates the report a real audit
                    tool would generate.
                  </p>
                  <div className="mt-5">
                    <Button href="/#contact" variant="secondary">
                      Get Detailed Audit
                    </Button>
                  </div>
                </Reveal>
              )}
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
