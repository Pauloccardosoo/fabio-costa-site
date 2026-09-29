"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Section, Container, SectionHeading } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { AvatarInitials } from "@/components/ui/avatar-initials";
import { TESTIMONIALS } from "@/constants/content";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: true }),
  ]);

  return (
    <Section tone="ink">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Depoimentos"
            title="Quem já sentiu o resultado do nosso trabalho"
            align="center"
          />
        </Reveal>

        <div className="relative mt-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="-ml-5 flex">
              {TESTIMONIALS.map((testimonial) => (
                <div key={testimonial.name} className="min-w-0 shrink-0 grow-0 basis-full pl-5 sm:basis-1/2 lg:basis-1/3">
                  <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <Quote className="h-6 w-6 text-brand-500" aria-hidden />
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-mist-100/90">
                      “{testimonial.quote}”
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <AvatarInitials name={testimonial.name} />
                      <div>
                        <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                        <p className="text-xs text-mist-200/60">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            <button
              type="button"
              aria-label="Depoimento anterior"
              onClick={() => emblaApi?.scrollPrev()}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white hover:border-brand-500 hover:text-brand-400"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Próximo depoimento"
              onClick={() => emblaApi?.scrollNext()}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white hover:border-brand-500 hover:text-brand-400"
            >
              <ChevronRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
