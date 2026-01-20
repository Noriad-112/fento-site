import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200/70 bg-[color:var(--surface-elevated)] p-6 shadow-sm transition-shadow duration-200 ease-out hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}
