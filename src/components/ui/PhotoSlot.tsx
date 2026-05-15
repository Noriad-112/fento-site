import Image from "next/image";

import { cn } from "@/lib/cn";

type PhotoSlotProps = {
  aspectRatio?: string;
  alt?: string;
  src?: string;
  objectPosition?: string;
  objectFit?: "cover" | "contain";
  zoom?: boolean;
  className?: string;
};

export function PhotoSlot({
  aspectRatio = "16/9",
  alt = "",
  src,
  objectPosition = "center",
  objectFit = "cover",
  zoom = false,
  className,
}: PhotoSlotProps) {
  if (src) {
    return (
      <div
        className={cn("relative w-full overflow-hidden rounded-2xl", className)}
        style={{ aspectRatio }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={cn(
            "transition-transform duration-500 ease-out",
            objectFit === "contain" ? "object-contain" : "object-cover",
            zoom && "group-hover:scale-105"
          )}
          style={{ objectPosition }}
        />
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
