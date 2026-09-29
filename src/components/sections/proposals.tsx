"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { Section, Container, SectionHeading } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { PROPOSALS } from "@/constants/proposals";

export function Proposals() {
  const categories = ["Todas", ...PROPOSALS.map((p) => p.category)];
  const [active, setActive] = React.useState("Todas");

  const filtered =
    active === "Todas" ? PROPOSALS : PROPOSALS.filter((p) => p.category === active);

  return (
    <Section id="propostas">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Propostas"
            title="Um plano de governo construído com a população"
            description="12 frentes de atuação para transformar demandas reais em políticas públicas eficazes."
          />
        </Reveal>

        <div
          role="group"
          aria-label="Filtrar propostas por categoria"
          className="mt-8 flex flex-wrap gap-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={active === category}
              onClick={() => setActive(category)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors",
                active === category
                  ? "border-brand-500 bg-brand-500 text-white"
                  : "border-border-subtle text-ink-500 hover:border-brand-500 hover:text-brand-600 dark:text-mist-200/70"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((proposal, index) => (
            <Reveal key={proposal.slug} delay={(index % 3) * 0.06}>
              <Card className="flex h-full flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                  <proposal.icon className="h-5 w-5" aria-hidden />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-600">
                  {proposal.category}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-foreground">
                  {proposal.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500 dark:text-mist-200/70">
                  {proposal.description}
                </p>
                <a
                  href={`#propostas`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                >
                  Saiba mais
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
