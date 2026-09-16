import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const PROBLEMS = [
  "Website that doesn't convert",
  "Disconnected business processes",
  "Poor user experience",
  "Manual workflows",
  "Difficult product discovery",
  "Scattered customer information",
  "No visibility into user behavior",
  "Digital products that don't solve the actual business problem",
];

export default function ProblemSection() {
  return (
    <section className="border-b border-border bg-paper">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="The problem"
          title="Your digital presence should do more than exist."
          description="Most businesses aren't short on tools. They're short on a system that connects what customers see, what the team does, and what actually moves the business forward."
        />

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p} delay={i * 40} className="bg-surface p-5">
              <span className="font-mono-ui text-xs text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-2 text-sm font-medium text-ink">{p}</p>
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
