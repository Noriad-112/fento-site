import type { Metadata } from "next";

import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";
import { createWebPageJsonLd } from "@/lib/seo";

const pageTitle = "Approach — Copilot Ventures";
const pageDescription =
  "How Copilot Ventures designs ownership, governance, and financial systems for alternative economy ventures.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${site.siteUrl}/approach`,
  },
  alternates: {
    canonical: `${site.siteUrl}/approach`,
  },
};

export default function ApproachPage() {
  return (
    <>
      <JsonLd
        data={createWebPageJsonLd(site, {
          title: pageTitle,
          description: pageDescription,
          path: "/approach",
        })}
      />
      <Section size="loose" className="pt-12 sm:pt-16">
        <PageHeader
          eyebrow="Approach"
          title="The operating manual behind the venture."
          description="Copilot Ventures works at the structural layer: ownership, governance, and finance. We are the operating system that lets creative ventures run with clarity and long-term resilience."
        />
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Ownership & Governance",
              bullets: [
                "Foundation-owned and steward-led structures for aligned partners.",
                "Sociocratic influence: clear roles and distributed authority.",
                "Avoiding extractive exits in favor of continuity.",
              ],
            },
            {
              title: "Finance & Treasury",
              bullets: [
                "Lean, transparent bookkeeping and cash-flow design.",
                "Blending fiat and crypto where it supports resilience.",
                "Reducing admin drag, fees, and rent-seeking middlemen.",
              ],
            },
            {
              title: "Culture & Place",
              bullets: [
                "Projects rooted in real communities and physical spaces.",
                "Hospitality and culture as infrastructure for trust.",
                "Programs that make the alternative economy tangible.",
              ],
            },
          ].map((lens) => (
            <Card key={lens.title} className="space-y-4">
              <h2 className="font-serif text-2xl text-slate-900">
                {lens.title}
              </h2>
              <ul className="space-y-3 text-sm text-slate-600">
                {lens.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section variant="muted" size="loose" className="pb-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="font-serif text-3xl text-slate-900">
              Working style
            </h2>
            <p className="text-base text-slate-600">
              We prefer small, high-trust collaborations. Copilot is not a
              consultancy chasing short projects; it is a long-horizon partner
              designed to stay close to the ventures we advise.
            </p>
            <p className="text-base text-slate-600">
              Work is asynchronous, documented, and transparent. We build shared
              models, governance charters, and system maps that make the work
              legible to everyone involved.
            </p>
          </div>
          <Card className="rounded-3xl bg-white/80">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Collaboration principles
            </p>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              {[
                "Long-term relationships over one-off gigs.",
                "Shared dashboards and explicit decision rights.",
                "Clear agreements, simple structures, and steady feedback loops.",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
