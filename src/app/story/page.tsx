import type { Metadata } from "next";

import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.pages.story.headline,
  description: site.pages.story.body[0],
};

export default function StoryPage() {
  return (
    <div className="space-y-8">
      <Section title={site.pages.story.headline}>
        <div className="space-y-4 text-base text-zinc-700">
          {site.pages.story.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>
    </div>
  );
}
