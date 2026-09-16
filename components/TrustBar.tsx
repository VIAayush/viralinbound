import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

const STATEMENTS = [
  "Strategy-led",
  "Design + Technology",
  "Business-focused",
  "Data-informed",
  "End-to-end digital solutions",
];

export default function TrustBar() {
  return (
    <div className="border-b border-border bg-surface">
      <Container className="py-8">
        <Reveal className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {STATEMENTS.map((s, i) => (
            <span key={s} className="flex items-center gap-x-10">
              <span className="text-sm font-medium text-ink-soft">{s}</span>
              {i < STATEMENTS.length - 1 && <span className="hidden h-1 w-1 rounded-full bg-border-strong sm:block" />}
            </span>
          ))}
        </Reveal>
      </Container>
    </div>
  );
}
