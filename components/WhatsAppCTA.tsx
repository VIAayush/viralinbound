"use client";

import { IconWhatsApp } from "./ui/icons";
import { CONTACT } from "@/lib/content";

export default function WhatsAppCTA() {
  return (
    <a
      href={CONTACT.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-good px-4 py-3 text-sm font-semibold text-white shadow-[var(--shadow-lg)] transition-all duration-300 ease-[var(--ease-float)] hover:-translate-y-1 hover:scale-[1.04] hover:pr-5 hover:shadow-[0_22px_40px_-12px_rgba(46,125,91,0.45)] active:translate-y-0 active:scale-[0.97]"
      aria-label="Talk to a specialist on WhatsApp"
    >
      <IconWhatsApp className="h-5 w-5 shrink-0" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-[160px] group-hover:opacity-100 group-focus-visible:max-w-[160px] group-focus-visible:opacity-100">
        Talk to a Specialist
      </span>
    </a>
  );
}
