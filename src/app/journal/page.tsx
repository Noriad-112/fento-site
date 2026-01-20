import type { Metadata } from "next";

import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { createWebPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: site.pages.journal.title,
  description: site.description,
  alternates: {
    canonical: `${site.siteUrl}/journal`,
  },
};

export default function JournalPage() {
  return (
    <>
      <JsonLd
        data={createWebPageJsonLd(site, {
          title: site.pages.journal.title,
          description: site.description,
          path: "/journal",
        })}
      />
      <Section size="loose" className="pt-12 sm:pt-16">
        <PageHeader eyebrow={site.tagline} title={site.pages.journal.title} />
      </Section>
    </>
  );
}
