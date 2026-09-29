import { ArrowRight } from "lucide-react";
import { Section, Container, SectionHeading } from "@/components/ui/container";
import { Card, Badge } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { ContentImage } from "@/components/ui/content-image";
import { PROJECTS } from "@/constants/content";

const STATUS_TONE: Record<string, "success" | "brand" | "muted"> = {
  "Concluído": "success",
  "Em andamento": "brand",
  "Planejado": "muted",
};

export function Projects() {
  return (
    <Section id="projetos" tone="surface">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Projetos"
            title="Ações que já transformam comunidades"
            description="Iniciativas apoiadas e conduzidas em parceria com lideranças locais em todo o estado."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <Card className="flex h-full flex-col p-0 overflow-hidden">
                <ContentImage
                  src={project.image.src}
                  alt={project.image.alt}
                  ratio="aspect-[4/3]"
                  className="rounded-none"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="flex flex-1 flex-col p-5">
                  <Badge tone={STATUS_TONE[project.status]} className="w-fit">
                    {project.status}
                  </Badge>
                  <h3 className="mt-3 font-display text-base font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500 dark:text-mist-200/70">
                    {project.description}
                  </p>
                  <a
                    href="#projetos"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
                  >
                    Ver detalhes
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
