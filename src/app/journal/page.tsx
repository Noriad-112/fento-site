import type { Metadata } from "next";

import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.pages.journal.title,
  description: site.defaultDescription,
};

export default function JournalPage() {
  return (
    <div className="space-y-4">
      <Section title={site.pages.journal.title} />
    </div>
  );
}
