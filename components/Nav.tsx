"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Container from "./ui/Container";
import Button from "./ui/Button";
import Logo from "./ui/Logo";
import { IconChevronDown, IconMenu, IconClose } from "./ui/icons";
import { NAV_PRODUCTS, NAV_SERVICES, NAV_INDUSTRIES, type NavItem } from "@/lib/content";

function DesktopDropdown({ label, items }: { label: string; items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const openNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div ref={ref} className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
      >
        {label}
        <IconChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute left-0 top-full pt-2">
          <div className="min-w-[260px] rounded-xl border border-border bg-surface p-2 shadow-[var(--shadow-lg)]">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex flex-col rounded-lg px-3 py-2.5 transition-colors hover:bg-surface-2"
              >
                <span className="text-sm font-medium text-ink">{item.label}</span>
                {item.description && (
                  <span className="text-xs text-ink-faint">{item.description}</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileAccordion({ label, items }: { label: string; items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border py-1">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-3 text-left text-base font-medium text-ink"
      >
        {label}
        <IconChevronDown className={`h-4 w-4 text-ink-faint transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="flex flex-col gap-1 pb-3 pl-2">
          {items.map((item) => (
            <Link key={item.label} href={item.href} className="rounded-md px-2 py-2 text-sm text-ink-soft hover:bg-surface-2">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/75">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            <Link href="/#solutions" className="rounded-full px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink">
              Solutions
            </Link>
            <DesktopDropdown label="Products" items={NAV_PRODUCTS} />
            <DesktopDropdown label="Services" items={NAV_SERVICES} />
            <DesktopDropdown label="Industries" items={NAV_INDUSTRIES} />
            <Link href="/work" className="rounded-full px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink">
              Work
            </Link>
            <Link href="/resources" className="rounded-full px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink">
              Resources
            </Link>
          </nav>

          <div className="hidden lg:block">
            <Button href="/#contact" size="md">
              Book a Strategy Call
            </Button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div className="border-t border-border bg-paper lg:hidden">
          <Container className="flex flex-col py-2">
            <Link
              href="/#solutions"
              onClick={() => setMobileOpen(false)}
              className="border-b border-border py-3 text-base font-medium text-ink"
            >
              Solutions
            </Link>
            <MobileAccordion label="Products" items={NAV_PRODUCTS} />
            <MobileAccordion label="Services" items={NAV_SERVICES} />
            <MobileAccordion label="Industries" items={NAV_INDUSTRIES} />
            <Link href="/work" onClick={() => setMobileOpen(false)} className="border-b border-border py-3 text-base font-medium text-ink">
              Work
            </Link>
            <Link href="/resources" onClick={() => setMobileOpen(false)} className="border-b border-border py-3 text-base font-medium text-ink">
              Resources
            </Link>
            <div className="py-4">
              <Button href="/#contact" size="md" className="w-full" onClick={() => setMobileOpen(false)}>
                Book a Strategy Call
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
