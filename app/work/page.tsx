import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { CASE_STUDIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected work from Viral Inbound, structured as challenge, approach, solution and outcome.",
};

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <Container className="py-16 sm:py-20">
          <span className="font-mono-ui text-[11px] font-medium uppercase tracking-[0.14em] text-data">Work</span>
          <h1 className="mt-4 max-w-xl text-4xl text-ink sm:text-5xl">Selected Work</h1>
          <p className="mt-5 max-w-xl text-lg text-ink-soft">
            Every engagement is documented the same way — the challenge, the approach, the solution, and the outcome.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-warn-soft px-3 py-1.5 text-xs font-medium text-warn">
            Demo placeholder — outcome metrics to be added from verified project data.
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.key} className="flex flex-col rounded-2xl border border-border bg-surface p-6">
                <span className="font-mono-ui text-[11px] uppercase tracking-wide text-data">{cs.sector}</span>
                <h2 className="mt-2 text-lg text-ink">{cs.title}</h2>
                <dl className="mt-4 flex flex-col gap-3 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Challenge</dt>
                    <dd className="mt-1 text-ink-soft">{cs.challenge}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Approach</dt>
                    <dd className="mt-1 text-ink-soft">{cs.approach}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Solution</dt>
                    <dd className="mt-1 text-ink-soft">{cs.solution}</dd>
                  </div>
                  <div className="rounded-lg border border-dashed border-border-strong px-3 py-2.5">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Outcome</dt>
                    <dd className="mt-1 text-ink-faint italic">{cs.outcome}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button href="/#contact" size="lg">
              Book a Strategy Call
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
