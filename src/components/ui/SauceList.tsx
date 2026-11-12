import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { menu } from "@/content/menu";

const MAX_HEAT = 4;

/** Small chili outline; filled when it counts toward the heat level. */
function Chili({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 16 20" className="h-4 w-3.5" aria-hidden="true">
      <path
        d="M9.5 2.5c.4-1 1.4-1.6 2.4-1.4M9.6 3.2C6 3.6 3.6 6.8 3.4 11c-.2 3.6.8 6.6 2.2 7.6 1 .7 1.8-.3 2-1.6.6-3.4 2.8-6 4.2-8.4 1.2-2-.4-3.8-2.2-3.4Z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Round "made fresh daily" sticker in the accent colour (inspo: food-brand stickers). */
function Sticker() {
  return (
    <div
      aria-hidden="true"
      className="flex h-20 w-20 shrink-0 rotate-12 items-center justify-center rounded-full bg-[color:var(--pop)] text-center shadow-[0_6px_18px_rgba(163,90,64,0.28)] ring-4 ring-[#fff4ec] sm:h-24 sm:w-24"
    >
      <span className="font-serif text-[12px] italic leading-tight text-[#fff4ec] sm:text-[13px]">
        made
        <br />
        fresh
        <br />
        daily
      </span>
    </div>
  );
}

/**
 * Home-page section: the five homemade sauces as a list with a spice level,
 * after the "Let's talk salsa" pattern on salsashop.com, in Fento's own palette.
 * Sauces without a photo yet show a colour swatch until the sauce photos arrive.
 */
export function SauceList() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <ScrollReveal className="lg:self-start">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[color:var(--pop)]">
              Homemade, every day
            </p>
            <h2 className="mt-2 font-serif text-3xl text-slate-900 sm:text-4xl">
              Five sauces. No shortcuts.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
              Blended from scratch in our kitchen, without preservatives. From cool and creamy to
              properly hot — pick your heat.
            </p>
            <div className="mt-8 hidden items-center gap-8 lg:flex">
              <ButtonLink href="/menu" variant="primary">
                See the menu
              </ButtonLink>
              <Sticker />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
          <ul className="divide-y divide-slate-200/70 border-y border-slate-200/70">
            {menu.houseMadeSauces.map((sauce) => (
                <li key={sauce.name} className="flex items-center gap-4 py-4 sm:gap-5">
                  <div
                    className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-1 ring-black/5"
                    style={{ backgroundColor: sauce.color }}
                  >
                    {"photo" in sauce && sauce.photo ? (
                      <Image src={sauce.photo} alt="" fill className="object-cover" sizes="48px" />
                    ) : null}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-lg italic leading-tight text-slate-900 sm:text-xl">
                      {sauce.name}
                    </h3>
                    <p className="mt-0.5 text-sm leading-snug text-slate-500">{sauce.tagline}</p>
                  </div>
                  <div
                    className="flex shrink-0 gap-0.5 text-[color:var(--pop)]"
                    role="img"
                    aria-label={`Heat ${sauce.heat} of ${MAX_HEAT}`}
                  >
                    {Array.from({ length: MAX_HEAT }, (_, n) => (
                      <Chili key={n} filled={n < sauce.heat} />
                    ))}
                  </div>
                </li>
            ))}
          </ul>
          </ScrollReveal>

          <div className="flex items-center gap-8 lg:hidden">
            <ButtonLink href="/menu" variant="primary">
              See the menu
            </ButtonLink>
            <Sticker />
          </div>
        </div>
      </Container>
    </section>
  );
}
