import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { createWebPageJsonLd } from "@/lib/seo";

const pageTitle = `${site.name} — ${site.tagline}`;

export const metadata: Metadata = {
  title: pageTitle,
  description: site.description,
  alternates: {
    canonical: site.siteUrl,
  },
};

const dayAbbr: Record<string, string> = {
  Monday: "Mon", Tuesday: "Tue", Wednesday: "Wed",
  Thursday: "Thu", Friday: "Fri", Saturday: "Sat", Sunday: "Sun",
};

function compactHours(
  hours: Array<{ day: string; opens: string; closes: string }>
): string {
  const groups: Array<{ label: string; time: string }> = [];
  let i = 0;
  while (i < hours.length) {
    const cur = hours[i];
    let j = i + 1;
    while (j < hours.length && hours[j].opens === cur.opens && hours[j].closes === cur.closes) {
      j++;
    }
    const first = dayAbbr[cur.day] ?? cur.day;
    const last = dayAbbr[hours[j - 1].day] ?? hours[j - 1].day;
    groups.push({ label: j - i === 1 ? first : `${first}–${last}`, time: `${cur.opens}–${cur.closes}` });
    i = j;
  }
  return groups.map(({ label, time }) => `${label} ${time}`).join(" · ");
}

const MARQUEE_TEXT = "Vegan-built · In-house sauces · Gluten-aware · Amsterdam";

const locationPhotos: Record<string, string> = {
  "fento-foodhallen": "/photos/stand-exterior.jpg",
  "sauvage-space": "/photos/sauvage-interior.jpg",
};

export default function Home() {
  return (
    <>
      <JsonLd
        data={createWebPageJsonLd(site, {
          title: pageTitle,
          description: site.description,
          path: "/",
        })}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[color:var(--accent)] py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent-soft)]">
              Amsterdam · Foodhallen
            </p>
            <h1 className="mt-4 font-serif text-5xl leading-[1.1] text-white sm:text-6xl">
              Clean, bold,<br />made in-house.
            </h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/menu" variant="inverted">See the menu</ButtonLink>
              <ButtonLink href="/visit" variant="ghost">Visit us</ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Marquee strip */}
      <div className="overflow-hidden border-b border-slate-200/50 bg-[color:var(--surface)] py-3">
        <div className="flex whitespace-nowrap animate-marquee">
          {[MARQUEE_TEXT, MARQUEE_TEXT, MARQUEE_TEXT, MARQUEE_TEXT].map((text, i) => (
            <span key={i} className="px-12 text-xs uppercase tracking-[0.3em] text-slate-500">
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Location cards */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          {site.locations.map((location) => (
            <div key={location.id} className="space-y-4">
              <PhotoSlot aspectRatio="16/9" alt={location.name} src={locationPhotos[location.id]} />
              <div className="space-y-3 px-1">
                <h2 className="font-serif text-2xl text-slate-900">{location.name}</h2>
                <p className="text-sm text-slate-500">{compactHours(location.openingHours)}</p>
                <ButtonLink href={location.cta.href} variant="secondary">
                  {location.cta.label}
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
