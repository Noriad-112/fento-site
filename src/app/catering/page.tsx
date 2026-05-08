import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { HeroBanner } from "@/components/ui/HeroBanner";
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

const formats = [
  {
    label: "Office catering",
    description: "Bowls, nachos, and burritos for teams. Dietary options built in.",
  },
  {
    label: "Private events",
    description: "Seated or standing — we adapt the menu to your guest list and vibe.",
  },
  {
    label: "De Hallen collabs",
    description: "Joint events and pop-ups with neighbouring vendors and spaces.",
  },
];

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

      {/* Banner */}
      <HeroBanner>
        <p className="animate-fade-up text-xs uppercase tracking-[0.3em] text-[color:var(--accent-soft)]">
          Catering &amp; events
        </p>
        <h1 className="animate-fade-up delay-100 mt-4 font-serif text-4xl leading-[1.06] text-white sm:text-5xl lg:text-6xl max-w-2xl">
          Fento for your table,<br />your team, your event.
        </h1>
        <p className="animate-fade-up delay-200 mt-6 max-w-xl text-sm leading-relaxed text-white/70">
          {site.pages.catering.copy}
        </p>
      </HeroBanner>

      {/* Photo */}
      <Section className="pt-12 pb-0 sm:pt-16">
        <PhotoSlot
          aspectRatio="21/9"
          alt="Fento catering"
          src="/photos/raw-salad.png"
          className="rounded-2xl"
        />
      </Section>

      {/* Format cards */}
      <Section>
        <div className="grid gap-px border border-slate-200/60 rounded-2xl overflow-hidden bg-slate-200/60 sm:grid-cols-3">
          {formats.map(({ label, description }) => (
            <div key={label} className="bg-[color:var(--surface)] px-6 py-8 sm:px-8">
              <p className="font-serif text-lg text-slate-900">{label}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Inquiry CTA */}
      <Section className="pt-0 pb-16 sm:pb-20">
        <div className="rounded-2xl border border-[color:var(--accent-soft)] bg-[color:var(--accent-soft)]/30 px-8 py-10 sm:px-12">
          <p className="font-serif text-2xl text-slate-900 sm:text-3xl max-w-lg">
            Tell us your date, group size, and any dietary needs.
          </p>
          <p className="mt-3 text-sm text-slate-500 max-w-md">
            We'll come back to you with a tailored proposal — no commitment required.
          </p>
          <div className="mt-6">
            <ButtonLink href={site.pages.catering.inquiryCta.href}>
              {site.pages.catering.inquiryCta.label}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
