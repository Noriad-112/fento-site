import type { Metadata } from "next";

import { HeroBanner } from "@/components/ui/HeroBanner";
import { MenuScroll } from "@/components/ui/MenuScroll";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { menu } from "@/content/menu";
import { site } from "@/content/site";
import { createWebPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: site.pages.menu.title,
  description: site.pages.menu.philosophy,
  alternates: {
    canonical: `${site.siteUrl}${site.pages.menu.menuUrl}`,
  },
};

export default function MenuPage() {
  return (
    <>
      <JsonLd
        data={createWebPageJsonLd(site, {
          title: site.pages.menu.title,
          description: site.pages.menu.philosophy,
          path: site.pages.menu.menuUrl,
        })}
      />

      {/* Hero */}
      <HeroBanner className="py-14 sm:py-20">
        <p className="animate-fade-up text-[10px] uppercase tracking-[0.4em] text-white/40">
          {site.tagline}
        </p>
        <h1
          className="animate-fade-up delay-100 hero-headline mt-3 font-serif text-[clamp(4.5rem,14vw,12rem)] italic leading-none text-white"
          style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 0' }}
        >
          Menu
        </h1>
        <div className="animate-fade-up delay-300 mt-8 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-white/10 pt-6">
          {site.pages.menu.dietaryClarity.map((item) => (
            <span key={item} className="text-xs text-white/50">
              {item}
            </span>
          ))}
        </div>
      </HeroBanner>

      {/* Scrollable menu with sidebar nav */}
      <Section className="py-6 sm:py-8">
        <MenuScroll />
      </Section>

      {/* House-Made Sauces — hover to reveal ingredients */}
      <Section variant="muted" className="py-10 sm:py-14">
        <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-[color:var(--accent)] opacity-60">
          Made daily
        </p>
        <h2
          className="mb-8 font-serif text-[clamp(2rem,5vw,4rem)] italic leading-none text-slate-900"
          style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 0', letterSpacing: '-0.02em' }}
        >
          House-Made Sauces
        </h2>
        <div className="divide-y divide-slate-200/50">
          {menu.houseMadeSauces.map((sauce) => (
            <div key={sauce.name} className="group cursor-default py-5">
              <p className="font-serif text-2xl text-slate-900 transition-colors duration-200 group-hover:text-[color:var(--accent)] sm:text-3xl">
                {sauce.name}
              </p>
              <div className="pillar-desc-wrap">
                <div className="overflow-hidden">
                  <p className="pt-2 text-sm leading-relaxed text-slate-400 opacity-0 transition-opacity delay-75 duration-150 group-hover:opacity-100 max-sm:opacity-100">
                    {sauce.ingredients}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-slate-400">{menu.note}</p>
      </Section>
    </>
  );
}
