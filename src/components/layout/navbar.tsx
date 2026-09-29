"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_ITEMS, SITE } from "@/constants/site";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { StrokeMotif } from "@/components/ui/stroke-motif";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { ScrollProgressBar } from "@/components/layout/scroll-progress-bar";
import { useScrollSpy, useScrolled } from "@/hooks/use-scroll-spy";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScrolled();
  const activeId = useScrollSpy(NAV_ITEMS.map((item) => item.href.replace("#", "")));

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-lg shadow-[0_1px_0_rgba(20,21,26,0.06)]"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 font-display text-lg font-extrabold tracking-tight">
          <StrokeMotif className="h-8 w-5 text-brand-500" />
          <span>
            {SITE.candidateName}
            <span className="ml-1.5 text-brand-500">{SITE.partyNumber}</span>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:text-brand-600 dark:text-mist-200",
                  isActive && "text-brand-600"
                )}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-500"
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a href="#contato" className={buttonVariants({ variant: "primary", size: "md" })}>
            Quero apoiar
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle"
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </Container>
      <ScrollProgressBar />

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-ink-950/40 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.div
              id="mobile-drawer"
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="fixed inset-y-0 right-0 z-50 flex w-[85%] max-w-sm flex-col gap-1 bg-background p-6 shadow-2xl lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-base font-bold">Menu</span>
                <button
                  type="button"
                  aria-label="Fechar menu"
                  onClick={() => setOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle"
                >
                  <X className="h-4 w-4" aria-hidden />
                </button>
              </div>
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-ink-700 transition-colors hover:bg-surface hover:text-brand-600 dark:text-mist-200"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className={cn(buttonVariants({ variant: "primary", size: "md" }), "mt-4 justify-center")}
              >
                Quero apoiar
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
