import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { createWebPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: site.pages.story.title,
  description: site.pages.story.body[0],
  alternates: {
    canonical: `${site.siteUrl}/story`,
  },
};

const principles = [
  {
    num: "01",
    headline: "Start from plants.",
    body: "Fento began with a simple idea: start from plants, build real flavor, and leave out unnecessary processing. Instead of adapting meat-based dishes to plant-based alternatives, we design everything vegan from the beginning.",
  },
  {
    num: "02",
    headline: "Make it in-house.",
    body: "All of our sauces are made in-house, without preservatives. This allows us to control flavor, texture, and quality — and to serve food that feels lighter, cleaner, and more balanced.",
  },
  {
    num: "03",
    headline: "Meet every table.",
    body: "Whether you eat fully plant-based or not, our food is designed to be satisfying, flexible, and transparent. We take dietary needs seriously — without compromising on flavor.",
  },
];

export default function StoryPage() {
  return (
    <>
      <JsonLd
        data={createWebPageJsonLd(site, {
          title: site.pages.story.title,
          description: site.pages.story.body[0],
          path: "/story",
        })}
      />

      {/* Manifesto banner */}
      <HeroBanner>
        <p className="animate-fade-up text-xs uppercase tracking-[0.3em] text-[color:var(--accent-soft)]">
          Our story
        </p>
        <h1 className="animate-fade-up delay-100 mt-4 font-serif text-4xl leading-[1.06] text-white sm:text-5xl lg:text-6xl max-w-2xl">
          Built vegan first.<br />Finished with intention.
        </h1>
        <p className="animate-fade-up delay-200 mt-6 max-w-xl text-sm leading-relaxed text-white/70">
          Fento is a Mexican-inspired kitchen with a plant-based foundation — two linked spaces, one shared philosophy.
        </p>
      </HeroBanner>

      {/* Pull quote */}
      <section className="border-b border-slate-200/50 bg-[color:var(--surface)] py-12 sm:py-16">
        <Container>
          <blockquote className="max-w-3xl">
            <p className="font-serif text-2xl leading-snug text-slate-800 sm:text-3xl lg:text-4xl">
              &ldquo;Start from plants, build real flavor, and leave out unnecessary processing.&rdquo;
            </p>
          </blockquote>
        </Container>
      </section>

      {/* Numbered principles */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="divide-y divide-slate-200/60">
            {principles.map(({ num, headline, body }, i) => (
              <div
                key={num}
                className="grid gap-6 py-10 sm:grid-cols-[80px_1fr_1fr] sm:gap-12 sm:py-12"
              >
                <p className="font-serif text-sm tracking-[0.25em] text-[color:var(--accent)] sm:pt-1">
                  {num}
                </p>
                <h2 className="font-serif text-2xl text-slate-900 sm:text-3xl">
                  {headline}
                </h2>
                <p className="text-sm leading-relaxed text-slate-500 sm:text-base">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing statement */}
      <section className="bg-[color:var(--surface-muted)] py-12 sm:py-16">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-serif text-xl text-slate-900 sm:text-2xl max-w-md">
              Two spaces. One kitchen philosophy.
            </p>
            <p className="text-sm text-slate-500 max-w-sm">
              Foodhallen for fast, vibrant meals. Sauvage Space for slower mornings and private gatherings. Same sauces. Same standards.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
