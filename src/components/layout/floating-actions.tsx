"use client";

import { ArrowUp, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "@/constants/site";
import { useScrolled } from "@/hooks/use-scroll-spy";

export function FloatingActions() {
  const scrolled = useScrolled(480);

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {scrolled && (
          <motion.button
            key="top"
            type="button"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Voltar ao topo"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle bg-background text-foreground shadow-lg transition-colors hover:border-brand-500 hover:text-brand-600"
          >
            <ArrowUp className="h-4 w-4" aria-hidden />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/30 transition-transform hover:scale-105 active:scale-95"
      >
        <MessageCircle className="h-6 w-6" aria-hidden />
      </a>
    </div>
  );
}
