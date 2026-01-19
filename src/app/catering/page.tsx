import type { Metadata } from "next";

import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.pages.catering.headline,
  description: site.pages.catering.copy,
};

export default function CateringPage() {
  return (
    <div className="space-y-8">
      <Section title={site.pages.catering.headline}>
        <div className="space-y-4 text-base text-zinc-700">
          <p>{site.pages.catering.copy}</p>
          <p>{site.pages.catering.cta}</p>
        </div>
      </Section>
    </div>
  );
}
