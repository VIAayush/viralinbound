import Link from "next/link";
import Container from "./ui/Container";
import Logo from "./ui/Logo";
import { CONTACT, SOCIAL_LINKS } from "@/lib/content";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Company",
    links: [
      { label: "Solutions", href: "/#solutions" },
      { label: "Industries", href: "/#industries" },
      { label: "Work", href: "/work" },
      { label: "Resources", href: "/resources" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "VILMS", href: "/products/vilms" },
      { label: "SuperShowroom", href: "/products/supershowroom" },
      { label: "Gifting Solutions", href: "/products/gifting-solutions" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Branding", href: "/#services-brand" },
      { label: "UI/UX", href: "/#services-experience" },
      { label: "Web Development", href: "/#services-build" },
      { label: "SEO", href: "/#services-grow" },
      { label: "Conversion Optimization", href: "/#services-experience" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-14">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/">
              <Logo />
            </Link>
            <p className="mt-3 max-w-[220px] text-sm text-ink-soft">
              Strategy, design, technology and digital products for growing businesses.
            </p>
            <div className="mt-5 flex flex-col gap-1 text-sm text-ink-soft">
              <a href={`mailto:${CONTACT.email}`} className="hover:text-ink">
                {CONTACT.email}
              </a>
              <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="font-mono-ui text-[11px] font-medium uppercase tracking-wide text-ink-faint">
                {col.title}
              </div>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-ink-soft hover:text-ink">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-faint">© {new Date().getFullYear()} Viral Inbound. Concept demo — not a live production site.</p>
          <div className="flex gap-5">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-ink-faint hover:text-ink"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
