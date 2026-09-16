import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { FAQS } from "@/lib/content";
import { IconChevronDown } from "./ui/icons";

export default function FAQ() {
  return (
    <section className="border-b border-border bg-surface">
      <Container className="py-20 sm:py-24">
        <SectionHeading eyebrow="FAQ" title="Common questions" align="center" />

        <Reveal className="mx-auto mt-10 flex max-w-2xl flex-col divide-y divide-border rounded-2xl border border-border bg-paper">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group px-5 py-1 sm:px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-medium text-ink marker:content-none">
                {faq.question}
                <IconChevronDown className="h-4 w-4 shrink-0 text-ink-faint transition-transform group-open:rotate-180" />
              </summary>
              <p className="pb-4 text-sm text-ink-soft">{faq.answer}</p>
            </details>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
