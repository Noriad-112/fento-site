import { cn } from "@/lib/cn";

type PhotoSlotProps = {
  aspectRatio?: string;
  alt?: string;
  className?: string;
};

export function PhotoSlot({ aspectRatio = "16/9", className }: PhotoSlotProps) {
  return (
    <div
      className={cn("w-full rounded-2xl bg-[color:var(--accent-soft)]", className)}
      style={{ aspectRatio }}
      aria-hidden="true"
    />
  );
}
