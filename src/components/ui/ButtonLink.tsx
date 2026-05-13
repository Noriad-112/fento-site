import Link from "next/link";

import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: string;
  variant?: "primary" | "secondary" | "inverted" | "ghost" | "outline";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface-elevated)]";
  const variantStyles: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
    primary: "bg-[color:var(--accent)] text-white hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0",
    secondary: "border border-slate-300 text-slate-800 hover:border-slate-400 hover:text-slate-900",
    inverted: "bg-white text-[color:var(--accent)] hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0",
    ghost: "border border-white/50 text-white hover:border-white hover:bg-white/10",
    outline: "border border-[color:var(--accent)] text-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-white transition-colors",
  };
  const styles = variantStyles[variant ?? "primary"];

  if (isExternal) {
    return (
      <a href={href} className={cn(base, styles, className)}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, styles, className)}>
      {children}
    </Link>
  );
}
