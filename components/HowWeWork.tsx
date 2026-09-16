import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { PROCESS_STEPS } from "@/lib/content";

export default function HowWeWork() {
  return (
    <section className="border-b border-border bg-paper">
      <Container className="py-20 sm:py-24">
        <SectionHeading eyebrow="How we work" title="A consistent process, not a one-off engagement." />

        <div className="mt-12 flex flex-col">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.index} delay={i * 70} className="flex gap-6 border-t border-border py-7 first:border-t-0 sm:gap-10">
              <div className="font-display text-3xl font-semibold text-border-strong sm:text-4xl">{step.index}</div>
              <div className="flex-1">
                <h3 className="text-xl text-ink">{step.title}</h3>
                <p className="mt-1.5 text-sm font-medium text-ink-soft">{step.summary}</p>
                <p className="mt-1 max-w-lg text-sm text-ink-faint">{step.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
