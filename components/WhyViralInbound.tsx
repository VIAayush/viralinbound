import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { WHY_PILLARS } from "@/lib/content";
import { IconTarget, IconLayers, IconBriefcase, IconBarChart, IconPuzzle } from "./ui/icons";

const ICONS = [IconTarget, IconLayers, IconBriefcase, IconBarChart, IconPuzzle];

export default function WhyViralInbound() {
  return (
    <section className="border-b border-border bg-paper">
      <Container className="py-20 sm:py-24">
        <SectionHeading eyebrow="Why Viral Inbound" title="What actually differentiates the way we work." />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_PILLARS.map((pillar, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal
                key={pillar.title}
                delay={i * 60}
                className="group/pillar card-lift rounded-2xl border border-border bg-surface p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono-ui text-xs text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent-strong transition-transform duration-500 ease-[var(--ease-float)] group-hover/pillar:rotate-12 group-hover/pillar:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="mt-3 text-lg text-ink">{pillar.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{pillar.description}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
