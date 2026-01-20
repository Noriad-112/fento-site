import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { createWebPageJsonLd } from "@/lib/seo";

const pageTitle = `${site.name} — ${site.tagline}`;

export const metadata: Metadata = {
  title: pageTitle,
  description: site.description,
  alternates: {
    canonical: site.siteUrl,
  },
};

export default function Home() {
  return (
    <>
      <JsonLd
        data={createWebPageJsonLd(site, {
          title: pageTitle,
          description: site.description,
          path: "/",
        })}
      />
      <Section size="loose" className="pt-12 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <PageHeader
              eyebrow={site.tagline}
              title={site.pages.home.heroHeadline}
              description={site.pages.home.heroSubhead}
            />
            <p className="max-w-xl text-base text-slate-600 sm:text-lg">
              {site.pages.home.heroStatement}
            </p>
            <p className="max-w-xl text-base text-slate-600 sm:text-lg">
              {site.pages.home.introParagraph}
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={site.pages.home.primaryCta.href}>
                {site.pages.home.primaryCta.label}
              </ButtonLink>
              {site.pages.home.ctas.map((cta) => (
                <ButtonLink key={cta.label} href={cta.href} variant="secondary">
                  {cta.label}
                </ButtonLink>
              ))}
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Locations
            </p>
            <div className="space-y-4">
              {site.locations.map((location) => (
                <div key={location.id} className="space-y-2 text-sm text-slate-700">
                  <p className="font-serif text-xl text-slate-900">
                    {location.name}
                  </p>
                  <p>{location.shortDescription}</p>
                  <p>
                    {location.address.street}, {location.address.postalCode} {" "}
                    {location.address.city}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section variant="muted">
        <div className="grid gap-6 md:grid-cols-2">
          {site.locations.map((location) => (
            <Card key={location.id} className="space-y-4">
              <h2 className="font-serif text-2xl text-slate-900">
                {location.name}
              </h2>
              <p className="text-sm text-slate-600">
                {location.shortDescription}
              </p>
              <ButtonLink href={location.cta.href} variant="secondary">
                {location.cta.label}
              </ButtonLink>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
