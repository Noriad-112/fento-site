import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/ContactForm";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";
import { createContactPageJsonLd } from "@/lib/seo";

const pageTitle = "Contact — Copilot Ventures";
const pageDescription =
  "Get in touch with Copilot Ventures for collaborations, advisory requests, or speaking invitations.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${site.siteUrl}/contact`,
  },
  alternates: {
    canonical: `${site.siteUrl}/contact`,
  },
};

export default function ContactPage() {
  const emailParts = site.contactEmail.split("@");

  return (
    <>
      <JsonLd
        data={createContactPageJsonLd(site, {
          title: pageTitle,
          description: pageDescription,
          path: "/contact",
        })}
      />
      <Section size="loose" className="pt-12 sm:pt-16">
        <PageHeader
          eyebrow="Contact"
          title="Start a conversation"
          description="We welcome collaboration ideas, advisory requests, and invitations to co-design governance or financial systems."
        />
      </Section>

      <Section size="loose" className="pb-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-4 text-base text-slate-600">
            <p>
              Copilot Ventures works with a small number of aligned partners at
              a time. Share a short overview of what you are building and where
              structural support would be most useful.
            </p>
            <p>
              Prefer email? Reach us at{" "}
              {emailParts.length === 2 ? (
                <span className="text-slate-900">
                  {emailParts[0]}
                  <span className="px-1 text-slate-500">[at]</span>
                  {emailParts[1]}
                </span>
              ) : (
                <span className="text-slate-900">{site.contactEmail}</span>
              )}
              .
            </p>
          </div>
          <Card className="rounded-3xl bg-white/80">
            <div className="mb-4 space-y-1">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Contact form
              </p>
              <p className="text-sm text-slate-600">
                Required fields are marked with *.
              </p>
            </div>
            <ContactForm />
          </Card>
        </div>
      </Section>
    </>
  );
}
