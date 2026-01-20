import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_circle_at_top,_#ffffff_0%,_#f7f2ea_45%,_#efe9e1_100%)] text-slate-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-slate-900 focus:shadow-lg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="w-full pb-20 pt-6 sm:pt-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
