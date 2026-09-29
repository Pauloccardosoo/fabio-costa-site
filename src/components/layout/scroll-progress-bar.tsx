"use client";

import { useScrollProgress } from "@/hooks/use-scroll-spy";

export function ScrollProgressBar() {
  const progress = useScrollProgress();
  return (
    <div className="absolute inset-x-0 bottom-0 h-[2px] bg-transparent" aria-hidden>
      <div
        className="h-full bg-gradient-to-r from-brand-500 to-accent-500 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
