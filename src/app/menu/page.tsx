import type { Metadata } from "next";

import { PageHeader } from "@/components/ui/PageHeader";
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
const dateFormatter = new Intl.DateTimeFormat("nl-NL", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

const sectionPhotos: Record<string, string> = {
  Bowls: "/photos/bowl-with-sauces.jpg",
  Nachos: "/photos/red-salsa.png",
  Burritos: "/photos/burritos.png",
  Quesadillas: "/photos/quesadilla-press.jpg",
  Extra: "/photos/green-glow.png",
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

      {/* Header */}
      <Section size="loose" className="pt-12 sm:pt-16">
        <PageHeader
          eyebrow={site.tagline}
          title={site.pages.menu.title}
          description="Our menu is built from a plant-based core. Every dish starts vegan."
        />
      </Section>

      {/* Dietary strip */}
      <Section variant="muted">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            {site.pages.menu.dietaryClarityHeading}
          </p>
          <div className="flex flex-wrap gap-2">
            {site.pages.menu.dietaryClarity.map((item) => (
              <span
                key={item}
                className="rounded-full bg-[color:var(--accent-soft)] px-3 py-1 text-xs font-medium text-[color:var(--accent)]"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="text-xs text-slate-500">
            {site.pages.menu.glutenDisclaimer}
          </p>
          <p className="text-xs text-slate-400">
            Last updated: {dateFormatter.format(new Date(menu.lastUpdated))}
          </p>
        </div>
      </Section>

      {/* Menu section cards */}
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {menu.sections.map((section) => (
            <div
              key={section.title}
              className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 text-sm text-slate-700"
            >
              <PhotoSlot aspectRatio="4/3" alt={section.title} src={sectionPhotos[section.title]} className="rounded-none rounded-t-2xl" />
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
      <Section variant="muted">
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
