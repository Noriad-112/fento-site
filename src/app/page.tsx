import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { HeroBanner } from "@/components/ui/HeroBanner";
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
  "fento-foodhallen": "/photos/stand-angle.jpg",
  "sauvage-space": "/photos/sauvage-kitchen.jpg",
};

const locationPhotoPosition: Record<string, string> = {
  "fento-foodhallen": "center top",
  "sauvage-space": "center",
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

      {/* Hero banner */}
      <HeroBanner className="py-12 sm:py-16">
        <p className="animate-fade-up text-xs uppercase tracking-[0.3em] text-[color:var(--accent-soft)]">
          Amsterdam · Foodhallen
        </p>
        <h1 className="animate-fade-up delay-100 mt-3 font-serif text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">
          Clean, bold, made in-house.
        </h1>
        <div className="animate-fade-up delay-200 mt-6 flex flex-wrap gap-3">
          <ButtonLink href="/menu" variant="inverted">See the menu</ButtonLink>
          <ButtonLink href="/visit" variant="ghost">Visit us</ButtonLink>
        </div>
      </HeroBanner>

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

      {/* Three pillars */}
      <Section className="py-12 sm:py-16">
        <div className="grid gap-px border border-slate-200/60 rounded-2xl overflow-hidden bg-slate-200/60 sm:grid-cols-3">
          {[
            { num: "01", label: "Plant-built", body: "Every dish starts fully vegan — no animal products in the base, ever." },
            { num: "02", label: "Made in-house", body: "All sauces are produced daily with no preservatives or shortcuts." },
            { num: "03", label: "Gluten-aware", body: "Nearly the entire menu is gluten-free. Ask staff for current exceptions." },
          ].map(({ num, label, body }) => (
            <div key={num} className="bg-[color:var(--surface)] px-6 py-8 sm:px-8">
              <p className="font-serif text-[color:var(--accent)] text-xs tracking-[0.25em] uppercase">{num}</p>
              <p className="mt-3 font-serif text-xl text-slate-900">{label}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Location cards */}
      <Section className="pt-0">
        <div className="grid gap-8 lg:grid-cols-2">
          {site.locations.map((location) => (
            <div key={location.id} className="space-y-4">
              <PhotoSlot
                aspectRatio="4/3"
                alt={location.name}
                src={locationPhotos[location.id]}
                objectPosition={locationPhotoPosition[location.id]}
              />
              <div className="space-y-3 px-1">
                <h2 className="font-serif text-2xl text-slate-900">{location.name}</h2>
                <p className="text-sm leading-relaxed text-slate-500">{location.shortDescription}</p>
                <p className="text-xs text-slate-400">{compactHours(location.openingHours)}</p>
                <div className="flex flex-wrap gap-3">
                  {location.id === "sauvage-space" ? (
                    <>
                      <ButtonLink href="https://sauvage.amsterdam/" variant="secondary">
                        Plan a private event
                      </ButtonLink>
                      <ButtonLink href="https://sauvagespace.netlify.app/" variant="secondary">
                        See the menu
                      </ButtonLink>
                    </>
                  ) : (
                    <ButtonLink href={location.cta.href} variant="secondary">
                      {location.cta.label}
                    </ButtonLink>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
