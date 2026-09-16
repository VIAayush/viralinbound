import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import StrategyNote from "./StrategyNote";
import { CASE_STUDIES } from "@/lib/content";

export default function CaseStudies() {
  return (
    <section className="border-b border-border bg-surface">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="Selected work"
          title="Selected Work"
          description="Structured the way every engagement is documented — challenge, approach, solution, outcome."
          action={<StrategyNote status="demo" label="Demo placeholder" />}
        />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {CASE_STUDIES.map((cs, i) => (
            <Reveal
              key={cs.key}
              delay={i * 70}
              className="card-lift flex flex-col rounded-2xl border border-border bg-paper p-6"
            >
              <span className="font-mono-ui text-[11px] uppercase tracking-wide text-data">{cs.sector}</span>
              <h3 className="mt-2 text-lg text-ink">{cs.title}</h3>
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
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
