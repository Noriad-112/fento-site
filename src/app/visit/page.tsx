import type { Metadata } from "next";

import { LocationCard } from "@/components/content/LocationCard";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.pages.visit.title,
  description: site.pages.visit.sharedNote,
};

export default function VisitPage() {
  return (
    <div className="space-y-12">
      <Section title={site.pages.visit.title} subtitle={site.pages.visit.sharedNote} />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          {site.locations.map((location) => (
            <LocationCard
              key={location.id}
              name={location.name}
              description={location.shortDescription}
              address={location.address}
              openingHours={location.openingHours}
              typeLabel={location.typeLabel}
              directionsUrl={location.googleMapsUrl}
              directionsLabel={site.pages.visit.directionsLabel}
              cta={location.cta}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}
