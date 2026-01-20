import type { Metadata } from "next";

import { PageHeader } from "@/components/ui/PageHeader";
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
      <Section size="loose" className="pt-12 sm:pt-16">
        <PageHeader
          eyebrow={site.tagline}
          title={site.pages.catering.headline}
          description={site.pages.catering.copy}
        />
      </Section>
      <Section>
        <p className="max-w-2xl text-base text-slate-600">
          {site.pages.catering.cta}
        </p>
      </Section>
    </>
  );
}
