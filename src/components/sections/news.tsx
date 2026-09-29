import { Section, Container, SectionHeading } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { NewsCarousel } from "@/components/sections/news-carousel";
import { NEWS } from "@/constants/content";

export function News() {
  return (
    <Section id="noticias">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              eyebrow="Notícias"
              title="Central de notícias da campanha"
              description="Acompanhe agenda, entrevistas e os principais movimentos da candidatura."
            />
          </Reveal>
        </div>

        <div className="mt-10">
          <NewsCarousel items={NEWS} />
        </div>
      </Container>
    </Section>
  );
}
