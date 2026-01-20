"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur">
      <Container className="flex items-center justify-between py-5">
        <div className="flex items-baseline gap-3">
          <Link
            href="/"
            className="font-serif text-xl font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white/80"
          >
            {site.siteName}
          </Link>
          <span className="hidden text-xs uppercase tracking-[0.32em] text-slate-500 sm:inline">
            {site.tagline}
          </span>
        </div>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-slate-700">
            {site.navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "rounded-full px-3 py-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white/80",
                      isActive
                        ? "bg-[color:var(--accent-soft)] text-slate-900"
                        : "hover:text-slate-900"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-slate-300 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white/80 md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1">
            <span className="h-0.5 w-5 rounded-full bg-current" />
            <span className="h-0.5 w-5 rounded-full bg-current" />
          </div>
        </button>
      </Container>
      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-slate-200/60 bg-white/90 backdrop-blur transition-all duration-300 md:hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <Container className="py-5">
          <ul className="flex flex-col gap-3 text-sm text-slate-700">
            {site.navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "block rounded-xl px-3 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white/80",
                      isActive
                        ? "bg-[color:var(--accent-soft)] text-slate-900"
                        : "hover:text-slate-900"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </div>
    </header>
  );
}
