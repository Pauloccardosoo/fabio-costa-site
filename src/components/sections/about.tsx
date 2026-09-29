import { Compass, Eye, Heart } from "lucide-react";
import { Section, Container, SectionHeading } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ContentImage } from "@/components/ui/content-image";
import { CAMPAIGN_IMAGES } from "@/constants/images";

const TIMELINE = [
  { year: "2004", text: "Início da atuação comunitária em bairros da região metropolitana." },
  { year: "2012", text: "Coordenação de programas sociais voltados à qualificação profissional." },
  { year: "2018", text: "Assessoria legislativa focada em saúde e mobilidade urbana." },
  { year: "2026", text: "Pré-candidatura a Deputado Estadual pelo Avante 70." },
];

const VALUES = [
  { icon: Compass, title: "Missão", text: "Transformar demandas reais da população em políticas públicas eficazes." },
  { icon: Eye, title: "Visão", text: "Um estado mais justo, moderno e conectado com quem mais precisa." },
  { icon: Heart, title: "Valores", text: "Transparência, proximidade, ética e compromisso com resultados." },
];

export function About() {
  return (
    <Section id="sobre" tone="surface">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Sobre"
              title="Uma trajetória construída ao lado da população"
              description="Mais de duas décadas dedicadas ao serviço público, sempre próximo das comunidades que mais precisam de representatividade."
            />
            <ContentImage
              src={CAMPAIGN_IMAGES.about.src}
              alt={CAMPAIGN_IMAGES.about.alt}
              ratio="aspect-[16/10]"
              className="mt-8"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>

          <div className="space-y-10">
            <Reveal delay={0.1}>
              <ol className="space-y-6 border-l border-border-subtle pl-6">
                {TIMELINE.map((item) => (
                  <li key={item.year} className="relative">
                    <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full border-2 border-background bg-brand-500" aria-hidden />
                    <p className="font-display text-sm font-bold text-brand-600">{item.year}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-700 dark:text-mist-200/80">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid gap-4 sm:grid-cols-3">
                {VALUES.map((value) => (
                  <div
                    key={value.title}
                    className="rounded-2xl border border-border-subtle bg-background p-5"
                  >
                    <value.icon className="h-5 w-5 text-brand-500" aria-hidden />
                    <p className="mt-3 font-display text-sm font-bold">{value.title}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-500 dark:text-mist-200/70">
                      {value.text}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
