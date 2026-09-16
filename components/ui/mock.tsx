import { IconCheck } from "./icons";

export function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-paper p-4">
      <div className="font-mono-ui text-[10px] uppercase tracking-wide text-ink-faint">{label}</div>
      <div className="mt-1.5 text-xl font-semibold text-ink">{value}</div>
    </div>
  );
}

export function MockTable({ columns, rows }: { columns: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[420px] text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-paper">
            {columns.map((c) => (
              <th key={c} className="px-3 py-2 font-mono-ui text-[10px] font-medium uppercase tracking-wide text-ink-faint">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i < rows.length - 1 ? "border-b border-border" : ""}>
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2.5 text-ink-soft">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const TONE_STYLES: Record<string, string> = {
  good: "bg-good-soft text-good",
  warn: "bg-warn-soft text-warn",
  neutral: "bg-surface-2 text-ink-soft",
};

export function PillRow({ items }: { items: { label: string; tone?: "good" | "warn" | "neutral" }[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((it) => (
        <span
          key={it.label}
          className={`rounded-full px-2.5 py-1 text-xs font-medium ${TONE_STYLES[it.tone ?? "neutral"]}`}
        >
          {it.label}
        </span>
      ))}
    </div>
  );
}

export function Timeline({ steps, activeIndex }: { steps: string[]; activeIndex: number }) {
  return (
    <div className="flex items-center">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-1 items-center last:flex-none">
          <div className="flex flex-col items-center gap-1.5">
            <div
              className={`flex h-6 w-6 items-center justify-center rounded-full border text-[10px] font-semibold ${
                i <= activeIndex ? "border-good bg-good-soft text-good" : "border-border-strong text-ink-faint"
              }`}
            >
              {i <= activeIndex ? <IconCheck className="h-3 w-3" /> : i + 1}
            </div>
            <span className="text-center text-[11px] font-medium text-ink-soft">{step}</span>
          </div>
          {i < steps.length - 1 && (
            <span className={`mx-2 mb-4 h-px flex-1 ${i < activeIndex ? "bg-good" : "bg-border-strong"}`} />
          )}
        </div>
      ))}
    </div>
  );
}

export function CardGrid({ items }: { items: { title: string; subtitle: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {items.map((it) => (
        <div key={it.title} className="rounded-lg border border-border bg-paper p-3">
          <div className="mb-2 aspect-[4/3] rounded-md bg-surface-2" />
          <div className="text-xs font-semibold text-ink">{it.title}</div>
          <div className="text-[11px] text-ink-faint">{it.subtitle}</div>
        </div>
      ))}
    </div>
  );
}
