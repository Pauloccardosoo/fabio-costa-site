import * as React from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const GRADIENTS = [
  "from-brand-500/90 via-brand-600/80 to-ink-950",
  "from-ink-900 via-ink-950 to-accent-600/60",
  "from-accent-500/80 via-ink-950 to-brand-600/70",
  "from-brand-400/80 via-brand-700/70 to-ink-950",
];

function hashIndex(seed: string, length: number) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % length;
}

export function PlaceholderImage({
  label,
  className,
  ratio = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  const gradient = GRADIENTS[hashIndex(label, GRADIENTS.length)];
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative flex items-end overflow-hidden rounded-2xl bg-gradient-to-br text-white",
        gradient,
        ratio,
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 0, transparent 40%)",
        }}
        aria-hidden
      />
      <ImageIcon
        className="absolute right-4 top-4 h-5 w-5 text-white/40"
        aria-hidden
      />
      <span className="relative z-10 p-4 text-xs font-medium text-white/70">
        {label}
      </span>
    </div>
  );
}
