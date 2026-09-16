/**
 * Wordmark + a small geometric badge: two lines converge to a point,
 * read as a "V" (Viral) funneling down to a landing point (Inbound).
 * Deliberately made of the same simple-line language as the background.
 */
export default function Logo({
  className = "",
  showWordmark = true,
  size = 32,
}: {
  className?: string;
  showWordmark?: boolean;
  size?: number;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" className="shrink-0">
        <rect width="32" height="32" rx="9" fill="var(--ink)" />
        <path
          d="M9 10 L16 21 M23 10 L16 21"
          stroke="var(--paper)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="16" cy="23.5" r="1.6" fill="var(--data)" />
      </svg>
      {showWordmark && (
        <span className="font-display text-lg font-semibold tracking-tight text-ink">Viral Inbound</span>
      )}
    </span>
  );
}
