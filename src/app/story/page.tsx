import type { Metadata } from "next";

import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { createWebPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: site.pages.story.title,
  description: site.pages.story.body[0],
  alternates: {
    canonical: `${site.siteUrl}/story`,
  },
};

export default function StoryPage() {
  return (
    <>
      <JsonLd
        data={createWebPageJsonLd(site, {
          title: site.pages.story.title,
          description: site.pages.story.body[0],
          path: "/story",
        })}
      />
      <Section size="loose" className="pt-12 sm:pt-16">
        <PageHeader
          eyebrow={site.tagline}
          title={site.pages.story.headline}
          description={site.pages.story.body[0]}
        />
      </Section>
      <Section>
        <div className="max-w-3xl space-y-4 text-base text-slate-600">
          {site.pages.story.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>
    </>
  );
}
