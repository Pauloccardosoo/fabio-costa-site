import { ArrowRight } from "lucide-react";
import { Section, Container, SectionHeading } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { TRANSPARENCY_ITEMS } from "@/constants/content";

export function Transparency() {
  return (
    <Section id="transparencia" tone="surface">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Transparência"
            title="Clareza e responsabilidade em cada etapa"
            description="Acesso aberto às informações da campanha, porque confiança se constrói com transparência."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRANSPARENCY_ITEMS.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) * 0.06}>
              <Card className="flex h-full flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                  <item.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500 dark:text-mist-200/70">
                  {item.description}
                </p>
                <a
                  href="#transparencia"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  {item.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
