import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import StrategyNote from "./StrategyNote";
import { SERVICE_CATEGORIES } from "@/lib/content";

export default function Services() {
  return (
    <section className="border-b border-border bg-paper">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="Services"
          title="Capability, grouped by what it's actually for."
          description="Thirteen distinct services, organized into four categories rather than one long list."
          action={<StrategyNote status="existing" />}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_CATEGORIES.map((cat, i) => (
            <Reveal
              key={cat.key}
              id={`services-${cat.key}`}
              delay={i * 60}
              className="card-lift scroll-mt-24 rounded-2xl border border-border bg-surface p-6"
            >
              <div className="font-mono-ui text-[11px] font-medium uppercase tracking-wide text-data">
                {cat.label}
              </div>
              <p className="mt-2 text-sm text-ink-soft">{cat.summary}</p>
              <ul className="mt-5 flex flex-col gap-2.5 border-t border-border pt-4">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm font-medium text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
