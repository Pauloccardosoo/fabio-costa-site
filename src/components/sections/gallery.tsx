"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Section, Container, SectionHeading } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ContentImage } from "@/components/ui/content-image";
import { CAMPAIGN_IMAGES } from "@/constants/images";
import type { CampaignImage } from "@/types";

const GALLERY_ITEMS: Array<CampaignImage & { label: string; tall: boolean }> = [
  { ...CAMPAIGN_IMAGES.eventoAuditorio, label: "Evento com lideranças no auditório", tall: true },
  { ...CAMPAIGN_IMAGES.placaAvante70, label: "Placa Avante 70 Rio de Janeiro", tall: false },
  { ...CAMPAIGN_IMAGES.jiuJitsuComunidade, label: "Encontro com equipe de jiu-jitsu", tall: false },
  { ...CAMPAIGN_IMAGES.jiuJitsuMedalhas, label: "Celebração com medalhistas de jiu-jitsu", tall: true },
  { ...CAMPAIGN_IMAGES.about, label: "Fabio Costa em encontro com apoiadores", tall: false },
  { ...CAMPAIGN_IMAGES.filiacaoAvante, label: "Evento de filiação do Avante", tall: false },
  { ...CAMPAIGN_IMAGES.abracoMicrofone, label: "Momento de acolhida em evento de campanha", tall: true },
  { ...CAMPAIGN_IMAGES.retratoEscritorio, label: "Retrato de Fabio Costa no escritório", tall: false },
];

export function Gallery() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const close = React.useCallback(() => setActiveIndex(null), []);
  const showNext = React.useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % GALLERY_ITEMS.length)),
    []
  );
  const showPrev = React.useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
      ),
    []
  );

  React.useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, close, showNext, showPrev]);

  return (
    <Section id="galeria" tone="surface">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Galeria"
            title="Momentos ao lado da população"
            description="Registros de visitas, encontros e eventos por todo o estado."
          />
        </Reveal>

        <div className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {GALLERY_ITEMS.map((item, index) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="block w-full break-inside-avoid overflow-hidden rounded-2xl focus-visible:outline-offset-4"
              aria-label={`Ampliar foto: ${item.label}`}
            >
              <ContentImage
                src={item.src}
                alt={item.alt}
                ratio={item.tall ? "aspect-[3/4]" : "aspect-square"}
                className="transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </button>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Visualização ampliada da foto"
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/90 p-6 backdrop-blur-sm"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Fechar"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Foto anterior"
              className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-8"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Próxima foto"
              className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-8"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl"
            >
              <ContentImage
                src={GALLERY_ITEMS[activeIndex].src}
                alt={GALLERY_ITEMS[activeIndex].alt}
                ratio="aspect-[4/5]"
                sizes="(max-width: 768px) 100vw, 576px"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
