import { Section, Container, SectionHeading } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { FAQ } from "@/constants/content";

export function FaqSection() {
  return (
    <Section id="faq">
      <Container className="max-w-3xl">
        <Reveal>
          <SectionHeading
            eyebrow="Dúvidas"
            title="Perguntas frequentes"
            align="center"
          />
        </Reveal>
        <div className="mt-10">
          <Accordion items={FAQ} />
        </div>
      </Container>
    </Section>
  );
}
