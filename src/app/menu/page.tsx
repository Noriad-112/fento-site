import type { Metadata } from "next";

import { PageHeader } from "@/components/ui/PageHeader";
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
      <Section size="loose" className="pt-12 sm:pt-16">
        <PageHeader
          eyebrow={site.tagline}
          title={site.pages.menu.title}
          description={site.pages.menu.philosophy}
        />
      </Section>
      <Section variant="muted">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            {site.pages.menu.dietaryClarityHeading}
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            {site.pages.menu.dietaryClarity.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm text-slate-600">
            {site.pages.menu.glutenDisclaimer}
          </p>
          <p className="text-sm text-slate-600">
            Last updated: {dateFormatter.format(new Date(menu.lastUpdated))}.{" "}
            {menu.note}
          </p>
        </div>
      </Section>
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {menu.sections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-sm text-slate-700"
            >
              <p className="font-serif text-lg text-slate-900">
                {section.title}
              </p>
              <ul className="mt-3 space-y-2">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-start justify-between gap-4 leading-relaxed"
                  >
                    <span>{item.name}</span>
                    <span className="font-medium text-slate-900">
                      {euroFormatter.format(item.price)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
