import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  hover = true,
}: {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-border-subtle bg-background p-6 shadow-[0_1px_2px_rgba(20,21,26,0.04)] transition-all duration-300",
        hover &&
          "hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-[0_16px_40px_-16px_rgba(245,130,32,0.25)]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Badge({
  className,
  children,
  tone = "brand",
}: {
  className?: string;
  children: React.ReactNode;
  tone?: "brand" | "ink" | "success" | "muted";
}) {
  const tones: Record<string, string> = {
    brand: "bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400",
    ink: "bg-ink-950 text-white dark:bg-white dark:text-ink-950",
    success: "bg-emerald-50 text-emerald-700",
    muted: "bg-surface-alt text-ink-700 dark:text-mist-200",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

export function Tag({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border-subtle px-2.5 py-1 text-[11px] font-medium text-ink-500 dark:text-mist-200/70",
        className
      )}
    >
      {children}
    </span>
  );
}
