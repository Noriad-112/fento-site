import type { Metadata } from "next";

import { LocationCard } from "@/components/content/LocationCard";
import { CTA } from "@/components/ui/CTA";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.defaultTitle,
  description: site.defaultDescription,
};

export default function Home() {
  const { heroHeadline, heroSubhead, introParagraph } = site.pages.home;

  return (
    <div className="space-y-16">
      <Section>
        <Hero
          tagline={site.tagline}
          headline={heroHeadline}
          subhead={heroSubhead}
        />
        <div className="space-y-6">
          <p className="max-w-2xl text-base text-zinc-700">
            {site.pages.home.heroStatement}
          </p>
          <p className="max-w-2xl text-base text-zinc-700">{introParagraph}</p>
          <div className="flex flex-wrap gap-4">
            <CTA
              href={site.pages.home.primaryCta.href}
              label={site.pages.home.primaryCta.label}
            />
            {site.pages.home.ctas.map((cta) => (
              <CTA key={cta.label} href={cta.href} label={cta.label} />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {site.locations.map((location) => (
            <LocationCard
              key={location.id}
              name={location.name}
              description={location.shortDescription}
              address={location.address}
              cta={location.cta}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}
