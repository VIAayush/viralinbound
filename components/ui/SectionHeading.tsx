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
  const isCenter = align === "center";

  return (
    <Reveal className={`flex flex-col gap-4 ${isCenter ? "items-center text-center" : "items-start text-left"}`}>
      <div
        className={
          isCenter
            ? "flex w-full flex-col items-center gap-6"
            : "flex w-full items-end justify-between gap-6"
        }
      >
        <div className={`flex flex-col gap-4 ${isCenter ? "items-center" : "items-start"}`}>
          {eyebrow && (
            <span className="font-mono-ui text-[11px] font-medium uppercase tracking-[0.14em] text-data">
              {eyebrow}
            </span>
          )}
          <h2 className={`text-3xl sm:text-4xl text-ink ${isCenter ? "max-w-2xl" : "max-w-xl"}`}>{title}</h2>
          {description && (
            <p className={`text-base sm:text-lg text-ink-soft ${isCenter ? "max-w-2xl" : "max-w-xl"}`}>
              {description}
            </p>
          )}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </Reveal>
  );
}
