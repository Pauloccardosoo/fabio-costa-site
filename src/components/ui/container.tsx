import * as React from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10", className)}>
      {children}
    </div>
  );
}

export function Section({
  id,
  className,
  children,
  tone = "default",
  as: Comp = "section",
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  tone?: "default" | "surface" | "ink";
  as?: React.ElementType;
}) {
  return (
    <Comp
      id={id}
      className={cn(
        "relative py-20 sm:py-28",
        tone === "surface" && "bg-surface",
        tone === "ink" && "bg-ink-950 text-white",
        className
      )}
    >
      {children}
    </Comp>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-600 dark:border-brand-500/40 dark:bg-brand-500/10 dark:text-brand-400",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-500 dark:text-mist-200/70">
          {description}
        </p>
      )}
    </div>
  );
}
