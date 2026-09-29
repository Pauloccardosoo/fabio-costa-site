"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { ContentImage } from "@/components/ui/content-image";
import { StrokeMotif } from "@/components/ui/stroke-motif";
import { CAMPAIGN_IMAGES } from "@/constants/images";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_60%_at_50%_-10%,var(--color-orange-50),transparent)] dark:bg-[radial-gradient(120%_60%_at_50%_-10%,rgba(245,130,32,0.08),transparent)]" />
        <div className="absolute -right-24 top-10 h-[520px] w-[340px] opacity-[0.16] sm:opacity-[0.22]">
          <StrokeMotif className="h-full w-full text-brand-500" />
        </div>
        <svg
          className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 opacity-[0.04]"
          aria-hidden
        >
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-600 dark:border-brand-500/40 dark:bg-brand-500/10 dark:text-brand-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
            {SITE.role} · Avante {SITE.partyNumber}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Compromisso, transparência e trabalho por um{" "}
            <span className="relative text-brand-600">
              estado melhor
            </span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500 dark:text-mist-200/70"
          >
            Sou {SITE.candidateName}, e minha trajetória é dedicada a ouvir, organizar e
            transformar as demandas da população em ações concretas na Assembleia
            Legislativa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a href="#propostas" className={buttonVariants({ variant: "primary", size: "lg" })}>
              Conheça as propostas
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="#contato"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              <MessageSquare className="h-4 w-4" aria-hidden />
              Fale conosco
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-border-subtle pt-8"
          >
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-ink-500">Experiência</dt>
              <dd className="mt-1 text-2xl font-bold text-foreground">20+ anos</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-ink-500">Projetos</dt>
              <dd className="mt-1 text-2xl font-bold text-foreground">50+ apoiados</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-ink-500">Comunidades</dt>
              <dd className="mt-1 text-2xl font-bold text-foreground">100+ visitadas</dd>
            </div>
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-500/20 via-transparent to-accent-500/20 blur-2xl" />
          <ContentImage
            src={CAMPAIGN_IMAGES.hero.src}
            alt={CAMPAIGN_IMAGES.hero.alt}
            ratio="aspect-[4/5]"
            priority
            objectPosition="center top"
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="rounded-[2rem] shadow-2xl shadow-ink-950/20"
          />
          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border-subtle bg-background p-4 shadow-xl">
            <p className="text-xs font-medium text-ink-500">Avante</p>
            <p className="font-display text-lg font-extrabold text-brand-600">
              {SITE.partyNumber}
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
