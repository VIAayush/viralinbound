"use client";

import { useState, useId } from "react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { FAQS } from "@/lib/content";
import { IconChevronDown } from "./ui/icons";

function FaqRow({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="px-5 sm:px-6">
      <h3>
        <button
          type="button"
          id={`faq-btn-${id}`}
          aria-expanded={open}
          aria-controls={`faq-panel-${id}`}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-medium text-ink"
        >
          {question}
          <IconChevronDown
            className={`h-4 w-4 shrink-0 text-ink-faint transition-transform duration-300 ${open ? "rotate-180 text-accent" : ""}`}
          />
        </button>
      </h3>
      <div
        id={`faq-panel-${id}`}
        role="region"
        aria-labelledby={`faq-btn-${id}`}
        className={`grid transition-[grid-template-rows] duration-300 ease-[var(--ease-float)] ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="pb-4 text-sm text-ink-soft">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="border-b border-border bg-surface">
      <Container className="py-20 sm:py-24">
        <SectionHeading eyebrow="FAQ" title="Common questions" align="center" />

        <Reveal className="mx-auto mt-10 flex max-w-2xl flex-col divide-y divide-border rounded-2xl border border-border bg-paper">
          {FAQS.map((faq) => (
            <FaqRow key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
