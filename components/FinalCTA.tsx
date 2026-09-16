import Container from "./ui/Container";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import FlowLines from "./ui/FlowLines";
import { IconArrowRight } from "./ui/icons";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <FlowLines
        className="[mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-90"
        lineRgb="168, 184, 255"
        count={6}
      />
      <Container className="relative z-10 py-20 text-center sm:py-24">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6">
          <h2 className="text-3xl text-paper sm:text-4xl">
            Let&rsquo;s turn your next digital challenge into a business solution.
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/#contact" size="lg" className="!bg-paper !text-ink hover:!bg-accent-soft">
              Book a Strategy Call
              <IconArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/#products" size="lg" variant="secondary" className="!border-paper/30 !text-paper hover:!border-paper">
              Explore Our Products
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
