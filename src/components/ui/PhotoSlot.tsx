import Image from "next/image";

import { cn } from "@/lib/cn";

type PhotoSlotProps = {
  aspectRatio?: string;
  alt?: string;
  src?: string;
  className?: string;
};

export function PhotoSlot({ aspectRatio = "16/9", alt = "", src, className }: PhotoSlotProps) {
  if (src) {
    return (
      <div
        className={cn("relative w-full overflow-hidden rounded-2xl", className)}
        style={{ aspectRatio }}
      >
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={cn("w-full rounded-2xl bg-[color:var(--accent-soft)]", className)}
      style={{ aspectRatio }}
      aria-hidden="true"
    />
  );
}
