export function IconChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMenu({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconWhatsApp({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5a8.5 8.5 0 00-7.31 12.82L3.5 20.5l4.3-1.13A8.5 8.5 0 1012 3.5z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M8.6 8.4c.2-.45.4-.46.6-.47h.42c.15 0 .34-.05.5.4.2.5.62 1.66.68 1.78.06.12.1.26.02.4-.09.16-.13.26-.26.4-.13.14-.27.31-.39.42-.13.12-.26.25-.12.5.15.26.65 1.08 1.4 1.75.96.86 1.77 1.13 2.03 1.25.26.12.4.1.55-.06.15-.16.63-.73.8-.98.16-.25.32-.2.53-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.11.06.63-.15 1.24-.2.6-1.17 1.15-1.63 1.2-.42.05-.94.07-1.52-.1-.35-.1-.8-.25-1.38-.5-2.42-1.05-4-3.5-4.13-3.66-.12-.16-.98-1.3-.98-2.48 0-1.18.62-1.75.84-2z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconCheck({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M3.5 8.5l3 3 6-6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconSliders({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M4 5h12M4 10h12M4 15h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="8" cy="5" r="1.6" fill="currentColor" />
      <circle cx="14" cy="10" r="1.6" fill="currentColor" />
      <circle cx="6" cy="15" r="1.6" fill="currentColor" />
    </svg>
  );
}
