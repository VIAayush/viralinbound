import Link from "next/link";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { INDUSTRIES } from "@/lib/content";
import { IconArrowRight } from "./ui/icons";

export default function Industries() {
  return (
    <section id="industries" className="scroll-mt-16 border-b border-border bg-surface">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="Industries"
          title="Solutions designed around your business context."
          description="The right starting point depends on how the business actually operates, not a one-size template."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <Reveal
              key={ind.key}
              delay={i * 60}
              className="card-lift flex flex-col rounded-2xl border border-border bg-paper p-6"
            >
              <h3 className="text-lg text-ink">{ind.name}</h3>
              <p className="mt-2 text-sm text-ink-soft">{ind.problem}</p>
              <div className="mt-4 rounded-lg border border-border bg-surface px-3.5 py-3">
                <div className="font-mono-ui text-[10px] uppercase tracking-wide text-data">{ind.solutionLabel}</div>
                <div className="mt-1 text-sm text-ink">{ind.solutionDescription}</div>
              </div>
              <Link
                href={ind.href}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-strong [&>svg]:transition-transform [&>svg]:duration-300 hover:[&>svg]:translate-x-1"
              >
                {ind.ctaLabel}
                <IconArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
