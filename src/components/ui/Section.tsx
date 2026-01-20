import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
  variant?: "default" | "muted" | "bordered";
  size?: "tight" | "default" | "loose";
};

const variantStyles: Record<NonNullable<SectionProps["variant"]>, string> = {
  default: "",
  muted: "bg-[color:var(--surface)]",
  bordered: "border-t border-slate-200/70",
};

const sizeStyles: Record<NonNullable<SectionProps["size"]>, string> = {
  tight: "py-10 sm:py-14",
  default: "py-12 sm:py-16",
  loose: "py-16 sm:py-20",
};

export function Section({
  children,
  className,
  innerClassName,
  id,
  variant = "default",
  size = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(sizeStyles[size], variantStyles[variant], className)}
    >
      <Container className={innerClassName}>{children}</Container>
    </section>
  );
}
