import type { Metadata } from "next";

import { DietaryLegend } from "@/components/content/DietaryLegend";
import { MenuSection } from "@/components/content/MenuSection";
import { Section } from "@/components/ui/Section";
import { menu } from "@/content/menu";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.pages.menu.title,
  description: site.pages.menu.philosophy,
};

export default function MenuPage() {
  return (
    <div className="space-y-12">
      <Section title={site.pages.menu.title} subtitle={site.pages.menu.philosophy} />

      <Section title={site.pages.menu.dietaryClarityHeading}>
        <DietaryLegend
          items={site.pages.menu.dietaryClarity}
          disclaimer={site.pages.menu.glutenDisclaimer}
        />
      </Section>

      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {menu.sections.map((section) => (
            <MenuSection key={section.title} title={section.title} />
          ))}
        </div>
      </Section>
    </div>
  );
}
