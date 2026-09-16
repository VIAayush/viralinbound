import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  action?: ReactNode;
}) {
  return (
    <Reveal
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <div className={`flex w-full items-end justify-between gap-6 ${align === "center" ? "flex-col items-center" : ""}`}>
        <div className={`flex flex-col gap-4 ${align === "center" ? "items-center" : "items-start"}`}>
          {eyebrow && (
            <span className="font-mono-ui text-[11px] font-medium uppercase tracking-[0.14em] text-data">
              {eyebrow}
            </span>
          )}
          <h2 className={`text-3xl sm:text-4xl text-ink ${align === "center" ? "max-w-2xl" : "max-w-xl"}`}>
            {title}
          </h2>
          {description && (
            <p className={`text-base sm:text-lg text-ink-soft ${align === "center" ? "max-w-2xl" : "max-w-xl"}`}>
              {description}
            </p>
          )}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </Reveal>
  );
}
