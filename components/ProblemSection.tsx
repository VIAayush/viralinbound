import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { PROBLEMS } from "@/lib/content";
import { IconArrowRight } from "./ui/icons";

export default function ProblemSection() {
  return (
    <section className="border-b border-border bg-paper">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="The problem"
          title="Your digital presence should do more than exist."
          description="Most businesses aren't short on tools. They're short on a system that connects what customers see, what the team does, and what actually moves the business forward. Hover a card — or tab to it — for the consequence and the fix."
        />

        <div className="mt-12 grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((item, i) => (
            <Reveal
              key={item.problem}
              delay={i * 40}
              as="div"
              className="group/problem overflow-hidden rounded-xl border border-border bg-surface p-5 transition-[border-color,box-shadow] duration-300 hover:border-border-strong hover:shadow-[var(--shadow-hover-soft)] focus-within:border-accent"
            >
              <div tabIndex={0} className="outline-none">
                <span className="font-mono-ui text-xs text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 text-sm font-medium text-ink">{item.problem}</p>

                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-[var(--ease-float)] group-hover/problem:grid-rows-[1fr] group-focus-within/problem:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3 text-xs">
                      <div className="flex items-start gap-1.5 text-ink-faint">
                        <IconArrowRight className="mt-0.5 h-3 w-3 shrink-0" />
                        <span>{item.consequence}</span>
                      </div>
                      <div className="flex items-start gap-1.5 font-medium text-accent-strong">
                        <IconArrowRight className="mt-0.5 h-3 w-3 shrink-0" />
                        <span>{item.solution}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-3 font-mono-ui text-xs uppercase tracking-wide text-ink-faint">
            <span>Digital problems</span>
            <span className="h-px w-10 bg-border-strong" />
            <span className="text-accent">Measurable solutions</span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
