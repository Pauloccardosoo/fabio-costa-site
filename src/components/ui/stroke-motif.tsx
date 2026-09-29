import { cn } from "@/lib/utils";

/**
 * Recurring signature graphic: an upward brush stroke, echoing the arrow inside
 * the AVANTE wordmark. Used sparingly across the hero, section dividers and
 * stat cards to tie the candidate's identity back to the party without
 * reproducing the party's logo or layout.
 */
export function StrokeMotif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 320"
      fill="none"
      aria-hidden
      className={cn("pointer-events-none", className)}
    >
      <path
        d="M40 300 C 60 220, 70 180, 55 140 C 45 115, 60 120, 80 140 C 95 100, 110 60, 130 20"
        stroke="url(#stroke-gradient)"
        strokeWidth="26"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M112 60 L 130 20 L 150 66"
        stroke="url(#stroke-gradient)"
        strokeWidth="26"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <defs>
        <linearGradient id="stroke-gradient" x1="40" y1="300" x2="150" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--color-orange-500)" />
          <stop offset="1" stopColor="var(--color-teal-500)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
