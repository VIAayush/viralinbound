import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold " +
  "transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-[var(--ease-float)] " +
  "hover:-translate-y-[3px] active:translate-y-0 active:scale-[0.97] active:duration-150 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 " +
  "disabled:opacity-50 disabled:pointer-events-none disabled:translate-y-0 disabled:scale-100 " +
  "[&>svg]:transition-transform [&>svg]:duration-300 [&>svg]:ease-[var(--ease-float)] hover:[&>svg]:translate-x-1";

const sizes = {
  md: "px-5 py-2.5",
  lg: "px-6 py-3.5 text-[15px]",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-paper shadow-[var(--shadow-sm)] hover:bg-accent-strong hover:shadow-[var(--shadow-hover)]",
  secondary:
    "bg-transparent text-ink border border-border-strong hover:border-accent hover:bg-surface hover:shadow-[var(--shadow-hover-soft)]",
  ghost: "bg-transparent text-ink-soft hover:text-ink hover:-translate-y-px",
};

interface CommonProps {
  variant?: Variant;
  size?: keyof typeof sizes;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string; external?: boolean };

function isLink(props: ButtonAsButton | ButtonAsLink): props is ButtonAsLink {
  return typeof (props as ButtonAsLink).href === "string";
}

export default function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", size = "md", className = "" } = props;
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (isLink(props)) {
    const { href, external, variant: _v, size: _s, className: _c, children, ...rest } = props;
    void _v;
    void _s;
    void _c;
    if (external || href.startsWith("http")) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children, ...rest } = props;
  void _v;
  void _s;
  void _c;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
