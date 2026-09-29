import { cn } from "@/lib/utils";

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

export function AvatarInitials({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-sm font-bold text-brand-400 ring-1 ring-brand-500/30",
        className
      )}
    >
      {getInitials(name)}
    </div>
  );
}
