import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { createWebPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: site.pages.visit.title,
  description: site.pages.visit.sharedNote,
  alternates: {
    canonical: `${site.siteUrl}/visit`,
  },
};

export default function VisitPage() {
  return (
    <>
      <JsonLd
        data={createWebPageJsonLd(site, {
          title: site.pages.visit.title,
          description: site.pages.visit.sharedNote,
          path: "/visit",
        })}
      />
      <Section size="loose" className="pt-12 sm:pt-16">
        <PageHeader
          eyebrow={site.tagline}
          title={site.pages.visit.title}
          description={site.pages.visit.sharedNote}
        />
      </Section>
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {site.locations.map((location) => (
            <div
              key={location.id}
              className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm"
            >
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    {location.name}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    {location.shortDescription}
                  </p>
                </div>
                <div className="space-y-1 text-sm text-slate-600">
                  <p className="font-medium text-slate-900">Address</p>
                  <p>
                    {location.address.street}, {location.address.postalCode}{" "}
                    {location.address.city}, {location.address.country}
                  </p>
                </div>
                <div className="space-y-1 text-sm text-slate-600">
                  <p className="font-medium text-slate-900">Opening hours</p>
                  <ul className="space-y-1">
                    {location.openingHours.map((entry) => (
                      <li key={`${location.id}-${entry.day}`}>
                        {entry.day}: {entry.opens}–{entry.closes}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-3">
                  <ButtonLink href={location.googleMapsUrl} variant="secondary">
                    {site.pages.visit.directionsLabel}
                  </ButtonLink>
                  <ButtonLink href={location.cta.href}>{location.cta.label}</ButtonLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
