import { CalendarDays, MapPin } from "lucide-react";
import { Section, Container, SectionHeading } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { buttonVariants } from "@/components/ui/button";
import { AGENDA } from "@/constants/content";

export function Agenda() {
  return (
    <Section id="agenda">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              eyebrow="Agenda"
              title="Próximos compromissos públicos"
              description="Confira onde a campanha estará nas próximas semanas e participe."
            />
          </Reveal>
        </div>

        <ol className="mt-10 space-y-4">
          {AGENDA.map((event, index) => (
            <Reveal key={event.title} delay={index * 0.06}>
              <li className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-background p-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                    <CalendarDays className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-foreground">{event.title}</p>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-500 dark:text-mist-200/70">
                      <MapPin className="h-3.5 w-3.5" aria-hidden />
                      {event.city} · {event.date} às {event.time}
                    </p>
                  </div>
                </div>
                <a href="#contato" className={buttonVariants({ variant: "outline", size: "sm" })}>
                  Confirmar presença
                </a>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
