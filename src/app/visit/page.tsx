import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHeader } from "@/components/ui/PageHeader";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
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

const dayAbbr: Record<string, string> = {
  Monday: "Mon", Tuesday: "Tue", Wednesday: "Wed",
  Thursday: "Thu", Friday: "Fri", Saturday: "Sat", Sunday: "Sun",
};

const locationPhotos: Record<string, string> = {
  "fento-foodhallen": "/photos/fento-sign-night.jpg",
  "sauvage-space": "/photos/staff-counter.jpg",
};

function groupHours(
  hours: Array<{ day: string; opens: string; closes: string }>
): Array<{ label: string; time: string }> {
  const result: Array<{ label: string; time: string }> = [];
  let i = 0;
  while (i < hours.length) {
    const cur = hours[i];
    let j = i + 1;
    while (j < hours.length && hours[j].opens === cur.opens && hours[j].closes === cur.closes) {
      j++;
    }
    const first = dayAbbr[cur.day] ?? cur.day;
    const last = dayAbbr[hours[j - 1].day] ?? hours[j - 1].day;
    result.push({ label: j - i === 1 ? first : `${first}–${last}`, time: `${cur.opens}–${cur.closes}` });
    i = j;
  }
  return result;
}

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

      {/* Header */}
      <Section size="loose" className="pt-12 sm:pt-16">
        <PageHeader
          eyebrow={site.tagline}
          title={site.pages.visit.title}
          description={site.pages.visit.sharedNote}
        />
      </Section>

      {/* Location cards */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          {site.locations.map((location) => (
            <div key={location.id} className="space-y-5">
              <PhotoSlot aspectRatio="3/2" alt={location.name} src={locationPhotos[location.id]} />
              <div className="space-y-4 px-1">
                {/* Name + address */}
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    {location.name}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    {location.address.street}, {location.address.postalCode}{" "}
                    {location.address.city}
                  </p>
                </div>

                {/* Hours grid */}
                <div className="space-y-1 text-sm">
                  {groupHours(location.openingHours).map(({ label, time }) => (
                    <div
                      key={label}
                      className="grid grid-cols-[120px_1fr] text-slate-600"
                    >
                      <span>{label}</span>
                      <span>{time}</span>
                    </div>
                  ))}
                </div>

                {/* 2 CTAs */}
                <div className="flex flex-wrap gap-3">
                  <ButtonLink href={location.googleMapsUrl} variant="primary">
                    {site.pages.visit.directionsLabel}
                  </ButtonLink>
                  <ButtonLink href={location.cta.href} variant="secondary">
                    {location.cta.label}
                  </ButtonLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
