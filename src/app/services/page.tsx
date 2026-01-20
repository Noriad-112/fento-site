import type { Metadata } from "next";

import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";
import { createWebPageJsonLd } from "@/lib/seo";

const pageTitle = "Services — Copilot Ventures";
const pageDescription =
  "Advisory and co-design services for venture structure, governance, and financial systems.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${site.siteUrl}/services`,
  },
  alternates: {
    canonical: `${site.siteUrl}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={createWebPageJsonLd(site, {
          title: pageTitle,
          description: pageDescription,
          path: "/services",
        })}
      />
      <Section size="loose" className="pt-12 sm:pt-16">
        <PageHeader
          eyebrow="Services"
          title="Targeted advisory and co-design for the structural layer."
          description="Copilot Ventures is not a generic agency or a standard VC. We offer practical advisory and co-design around structure, governance, and financial systems — with deeper involvement when there is long-term alignment."
        />
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Venture & Ownership Architecture",
              points: [
                "Foundation-owned or mixed-ownership structure design.",
                "Shareholder agreements and governance charters (high-level).",
                "Capital structure thinking with long-horizon alignment.",
              ],
            },
            {
              title: "Financial Systems & Cost Discipline",
              points: [
                "Lean bookkeeping structures and cash-flow clarity.",
                "Banking, payments, and crypto custody strategy.",
                "Cost audits to remove licensing, fee, and payroll drag.",
              ],
            },
            {
              title: "Operational Design & Governance",
              points: [
                "Roles, circles, and decision-making frameworks.",
                "Meeting formats and information flow design.",
                "Documentation practices that reduce chaos.",
              ],
            },
            {
              title: "Place-Based Strategy",
              points: [
                "Hybrid venue and hospitality programming strategy.",
                "Partner mix and business model design for physical spaces.",
                "Community-rooted formats that build long-term trust.",
              ],
            },
          ].map((service) => (
            <Card key={service.title} className="space-y-4">
              <h2 className="font-serif text-2xl text-slate-900">
                {service.title}
              </h2>
              <ul className="space-y-2 text-sm text-slate-600">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section variant="muted" size="loose">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="font-serif text-3xl text-slate-900">
              Who this is for
            </h2>
            <p className="text-base text-slate-600">
              Copilot is for founders and small teams who want professional
              rigor without the hyper-growth VC logic. You care about ownership,
              continuity, and structures that feel human.
            </p>
            <p className="text-base text-slate-600">
              We work with ventures that are serious about the long game —
              whether you are building in food, culture, infrastructure, or
              alternative finance.
            </p>
          </div>
          <Card className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Engagement modes
            </p>
            <div className="space-y-3 text-sm text-slate-600">
              {[
                "Short diagnostic or audit to map the structural gaps.",
                "3–6 month advisory blocks with shared documentation.",
                "Deeper, equity-tied collaboration when there is strategic fit.",
              ].map((mode) => (
                <div key={mode} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                  <span>{mode}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
