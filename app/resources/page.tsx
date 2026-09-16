import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Resources",
  description: "The Viral Inbound resource hub — part of the future content roadmap.",
};

const PLANNED_TOPICS = [
  { title: "Choosing between a website redesign and a rebuild", category: "Websites" },
  { title: "What actually moves conversion rate on a B2B site", category: "Conversion Optimization" },
  { title: "How institutes evaluate a student management system", category: "Education" },
  { title: "Structuring a corporate gifting catalogue for scale", category: "Corporate" },
];

export default function ResourcesPage() {
  return (
    <section className="bg-surface">
      <Container className="py-16 sm:py-20">
        <span className="font-mono-ui text-[11px] font-medium uppercase tracking-[0.14em] text-data">Resources</span>
        <h1 className="mt-4 max-w-xl text-4xl text-ink sm:text-5xl">Resource hub</h1>
        <p className="mt-5 max-w-xl text-lg text-ink-soft">
          A dedicated space for guides and articles is part of the roadmap. The topics below reflect what&rsquo;s
          planned, not published content yet.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-warn-soft px-3 py-1.5 text-xs font-medium text-warn">
          Planned — part of the future content roadmap
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PLANNED_TOPICS.map((topic) => (
            <div key={topic.title} className="rounded-xl border border-dashed border-border-strong bg-paper p-5">
              <span className="font-mono-ui text-[10px] uppercase tracking-wide text-ink-faint">{topic.category}</span>
              <p className="mt-2 text-sm font-medium text-ink-soft">{topic.title}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Button href="/#contact" size="lg">
            Book a Strategy Call
          </Button>
        </div>
      </Container>
    </section>
  );
}
