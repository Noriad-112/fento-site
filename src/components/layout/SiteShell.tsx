import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-6 py-12">{children}</main>
      <Footer />
    </div>
  );
}
