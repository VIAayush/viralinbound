import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { WHY_PILLARS } from "@/lib/content";

export default function WhyViralInbound() {
  return (
    <section className="border-b border-border bg-paper">
      <Container className="py-20 sm:py-24">
        <SectionHeading eyebrow="Why Viral Inbound" title="What actually differentiates the way we work." />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_PILLARS.map((pillar, i) => (
            <Reveal
              key={pillar.title}
              delay={i * 60}
              className="card-lift rounded-2xl border border-border bg-surface p-6"
            >
              <span className="font-mono-ui text-xs text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg text-ink">{pillar.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{pillar.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
