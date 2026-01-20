import Link from "next/link";

import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/70 bg-[color:var(--surface)]">
      <Container className="flex flex-col gap-6 py-10 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="font-serif text-base text-slate-900">
            {site.name}
          </p>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
            {site.tagline}
          </p>
          <p className="text-xs text-slate-500">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em] text-slate-500">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
