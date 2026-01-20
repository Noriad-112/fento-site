import type { Metadata } from "next";

import { PageHeader } from "@/components/ui/PageHeader";
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
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
