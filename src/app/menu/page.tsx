import type { Metadata } from "next";

import { HeroBanner } from "@/components/ui/HeroBanner";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { menu } from "@/content/menu";
import { site } from "@/content/site";
import { createWebPageJsonLd } from "@/lib/seo";

const euroFormatter = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
});

const sectionPhotos: Record<string, string> = {
  Bowls: "/photos/bowl-overhead.jpg",
  Nachos: "/photos/nachos-bowl.jpg",
  Burritos: "/photos/burrito-plate.jpg",
  Quesadillas: "/photos/quesadilla-press.jpg",
  Extra: "/photos/salsa-verde.jpg",
  "Fresh Juices": "/photos/hibiscus-drink.png",
};


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

      {/* Hero banner */}
      <HeroBanner>
        <p className="animate-fade-up text-xs uppercase tracking-[0.3em] text-[color:var(--accent-soft)]">
          {site.tagline}
        </p>
        <h1 className="animate-fade-up delay-100 mt-4 font-serif text-4xl leading-[1.06] text-white sm:text-5xl lg:text-6xl">
          {site.pages.menu.title}
        </h1>
        <p className="animate-fade-up delay-200 mt-4 max-w-xl text-sm leading-relaxed text-white/70">
          Our menu is built from a plant-based core. Every dish starts vegan — with optional additions to meet different tastes.
        </p>
        <div className="animate-fade-up delay-300 mt-8 border-t border-white/15 pt-6">
          <div className="flex flex-wrap gap-2">
            {site.pages.menu.dietaryClarity.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/25 px-3 py-1 text-xs text-white/80"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-3 text-xs text-white/40">{site.pages.menu.glutenDisclaimer}</p>
        </div>
      </HeroBanner>

      {/* Menu section cards */}
      <Section variant="muted" className="pt-10 pb-12 sm:pt-12 sm:pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {menu.sections.map((section) => (
            <div
              key={section.title}
              className="group overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 text-sm text-slate-700"
            >
              <PhotoSlot
                aspectRatio="3/2"
                alt={section.title}
                src={sectionPhotos[section.title]}
                className="rounded-none rounded-t-2xl"
              />
              <div className="p-4">
                <p className="font-serif text-lg text-slate-900">{section.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">{section.description}</p>
                <ul className="mt-3 space-y-2">
                  {section.items.map((item) => (
                    <li key={item.name} className="space-y-0.5 leading-relaxed">
                      <div className="flex items-start justify-between gap-4">
                        <span>{item.name}</span>
                        <span className="font-medium text-slate-900">
                          {euroFormatter.format(item.price)}
                        </span>
                      </div>
                      {item.details ? (
                        <p className="text-xs leading-relaxed text-slate-500">{item.details}</p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Sauces */}
      <Section className="py-10 sm:py-12">
        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-slate-900">House-Made Sauces</h2>
          <div className="flex flex-wrap gap-2">
            {menu.houseMadeSauces.map((sauce) => (
              <span
                key={sauce.name}
                className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700"
              >
                {sauce.name}
              </span>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
