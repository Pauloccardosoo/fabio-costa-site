import Image from "next/image";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { cn } from "@/lib/utils";

export function ContentImage({
  src,
  alt,
  className,
  ratio = "aspect-[4/3]",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  objectPosition = "center",
}: {
  src?: string;
  alt: string;
  className?: string;
  ratio?: string;
  priority?: boolean;
  sizes?: string;
  objectPosition?: string;
}) {
  if (!src) {
    return (
      <PlaceholderImage label={alt} ratio={ratio} className={className} />
    );
  }

  return (
    <div
      className={cn("relative overflow-hidden rounded-2xl bg-ink-950/5", ratio, className)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition }}
      />
    </div>
  );
}
