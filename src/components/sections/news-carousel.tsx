"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { ContentImage } from "@/components/ui/content-image";
import { Badge } from "@/components/ui/card";
import type { NewsItem } from "@/types";
import { cn } from "@/lib/utils";

export function NewsCarousel({ items }: { items: NewsItem[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });
  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(true);

  React.useEffect(() => {
    if (!emblaApi) return;
    const update = () => {
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };
    update();
    emblaApi.on("select", update);
    emblaApi.on("reInit", update);
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-5 flex touch-pan-y">
          {items.map((item) => (
            <article
              key={item.slug}
              className="min-w-0 shrink-0 grow-0 basis-full pl-5 sm:basis-1/2 lg:basis-1/3"
            >
              <div className="group h-full overflow-hidden rounded-2xl border border-border-subtle bg-background transition-shadow hover:shadow-lg">
                <ContentImage
                  src={item.image.src}
                  alt={item.image.alt}
                  ratio="aspect-[16/10]"
                  className="rounded-none"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <Badge>{item.category}</Badge>
                    <span className="flex items-center gap-1 text-xs text-ink-500">
                      <Clock className="h-3 w-3" aria-hidden />
                      {item.readTime}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-bold leading-snug text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-mist-200/70">
                    {item.summary}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-ink-500">{item.date}</span>
                    <a
                      href={`#noticias`}
                      className="text-sm font-semibold text-brand-600 hover:text-brand-700"
                    >
                      Ler mais
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-2">
        <button
          type="button"
          aria-label="Notícia anterior"
          disabled={!canPrev}
          onClick={() => emblaApi?.scrollPrev()}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle transition-colors",
            canPrev ? "hover:border-brand-500 hover:text-brand-600" : "opacity-30"
          )}
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
        </button>
        <button
          type="button"
          aria-label="Próxima notícia"
          disabled={!canNext}
          onClick={() => emblaApi?.scrollNext()}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle transition-colors",
            canNext ? "hover:border-brand-500 hover:text-brand-600" : "opacity-30"
          )}
        >
          <ChevronRight className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}
