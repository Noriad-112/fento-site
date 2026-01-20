import Link from "next/link";

import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface-elevated)]";
  const styles =
    variant === "primary"
      ? "bg-[color:var(--accent)] text-white hover:translate-y-[-1px] hover:shadow-lg"
      : "border border-slate-300 text-slate-800 hover:border-slate-400 hover:text-slate-900";

  return (
    <Link href={href} className={cn(base, styles, className)}>
      {children}
    </Link>
  );
}
