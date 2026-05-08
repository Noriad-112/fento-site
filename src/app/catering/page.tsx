import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHeader } from "@/components/ui/PageHeader";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { createWebPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: site.pages.catering.title,
  description: site.pages.catering.copy,
  alternates: {
    canonical: `${site.siteUrl}/catering`,
  },
};

const OFFER_TAGS = ["Office catering", "Private events", "De Hallen collabs"] as const;

export default function CateringPage() {
  return (
    <>
      <JsonLd
        data={createWebPageJsonLd(site, {
          title: site.pages.catering.title,
          description: site.pages.catering.copy,
          path: "/catering",
        })}
      />

      {/* Header */}
      <Section size="loose" className="pt-12 sm:pt-16">
        <PageHeader
          eyebrow={site.tagline}
          title={site.pages.catering.headline}
          description={site.pages.catering.copy}
        />
      </Section>

      {/* Photo + tags + inquiry + CTA */}
      <Section>
        <div className="max-w-2xl space-y-8">
          <PhotoSlot aspectRatio="16/9" alt="Fento catering" src="/photos/raw-salad.png" />

          <div className="flex flex-wrap gap-2">
            {OFFER_TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[color:var(--accent-soft)] px-4 py-1.5 text-sm font-medium text-[color:var(--accent)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm text-slate-600">
            Share your date, group size, and dietary requirements and we will propose an option.
          </p>

          <ButtonLink href={site.pages.catering.inquiryCta.href}>
            {site.pages.catering.inquiryCta.label}
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
