import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import StrategyNote from "./StrategyNote";
import { PRODUCTS } from "@/lib/content";
import { IconArrowRight, IconCheck } from "./ui/icons";

function VilmsMock() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {["Students", "Attendance", "Reports"].map((label, i) => (
        <div
          key={label}
          style={{ transitionDelay: `${i * 60}ms` }}
          className="rounded-lg border border-border bg-paper p-3 transition-transform duration-300 ease-[var(--ease-float)] group-hover/product:-translate-y-1"
        >
          <div className="font-mono-ui text-[10px] uppercase tracking-wide text-ink-faint">{label}</div>
          <div className="mt-2 text-lg font-semibold text-ink">
            {i === 0 ? "1,240" : i === 1 ? "96%" : "18"}
          </div>
        </div>
      ))}
    </div>
  );
}

function ShowroomMock() {
  return (
    <div className="grid grid-cols-4 gap-2">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          style={{ transitionDelay: `${i * 50}ms` }}
          className="aspect-square rounded-lg border border-border bg-paper transition-transform duration-300 ease-[var(--ease-float)] group-hover/product:scale-[1.06]"
        />
      ))}
    </div>
  );
}

function GiftingMock() {
  const steps = ["Catalogue", "Client", "Quote", "Order"];
  return (
    <div className="flex items-center gap-1.5">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-1.5">
          <div
            style={{ transitionDelay: `${i * 70}ms` }}
            className="rounded-full border border-border bg-paper px-2.5 py-1 text-[11px] font-medium text-ink-soft transition-colors duration-300 group-hover/product:border-accent group-hover/product:bg-accent-soft group-hover/product:text-accent-strong"
          >
            {s}
          </div>
          {i < steps.length - 1 && <span className="h-px w-4 bg-border-strong" />}
        </div>
      ))}
    </div>
  );
}

const MOCKS: Record<string, React.ComponentType> = {
  vilms: VilmsMock,
  supershowroom: ShowroomMock,
  "gifting-solutions": GiftingMock,
};

export default function ProductEcosystem() {
  return (
    <section id="products" className="scroll-mt-16 border-b border-border bg-paper">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="Products"
          title="Products built around real business workflows."
          description="Each product is scoped to one operational problem — not a general-purpose tool stretched to fit."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => {
            const Mock = MOCKS[product.slug];
            return (
              <Reveal
                key={product.slug}
                delay={i * 80}
                className="group/product card-lift flex flex-col rounded-2xl border border-border bg-surface p-6"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xl text-ink">{product.name}</h3>
                  <StrategyNote status={product.status} />
                </div>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-data">{product.tagline}</p>
                <p className="mt-3 text-sm text-ink-soft">{product.description}</p>

                <div className="mt-5 rounded-xl border border-border bg-paper p-4">
                  <Mock />
                </div>

                <ul className="mt-5 flex flex-col gap-2">
                  {product.capabilities.slice(0, 4).map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-ink-soft">
                      <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-good" />
                      {c}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Button
                    href={`/products/${product.slug}`}
                    variant="secondary"
                    className="w-full transition-colors duration-300 group-hover/product:!border-ink group-hover/product:!bg-ink group-hover/product:!text-paper"
                  >
                    {product.ctaLabel}
                    <IconArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
