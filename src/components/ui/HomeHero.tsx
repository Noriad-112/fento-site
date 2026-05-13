import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--background)] pb-12 pt-14 sm:pb-16 sm:pt-22">
      {/* Decorative oversized leaf — top-right, slowly floating */}
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-[520px] w-[180px] animate-float-slow opacity-[0.07]"
        aria-hidden="true"
      >
        <svg viewBox="0 0 180 520" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M90 510 C 50 400 18 290 8 190 C 0 108 18 48 46 16 C 70 -10 116 -8 148 22 C 172 46 182 88 176 144 C 166 218 130 320 90 510Z"
            stroke="#1f4b3f"
            strokeWidth="1.5"
          />
          <path
            d="M90 510 Q 92 250 90 10"
            stroke="#1f4b3f"
            strokeWidth="0.7"
            opacity="0.5"
          />
          <path
            d="M46 16 C 58 64 76 118 86 172"
            stroke="#1f4b3f"
            strokeWidth="1"
            opacity="0.45"
          />
          <path
            d="M148 22 C 132 72 112 126 100 180"
            stroke="#1f4b3f"
            strokeWidth="1"
            opacity="0.45"
          />
          <path
            d="M8 190 C 30 184 52 182 72 194"
            stroke="#1f4b3f"
            strokeWidth="0.8"
            opacity="0.35"
          />
        </svg>
      </div>

      {/* Second leaf — left side, offset vertically */}
      <div
        className="pointer-events-none absolute -left-8 bottom-0 h-[320px] w-[120px] animate-float-slow opacity-[0.05] [animation-delay:3s]"
        aria-hidden="true"
      >
        <svg viewBox="0 0 120 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M60 315 C 36 250 12 180 6 118 C 0 66 12 24 32 8 C 52 -6 78 -4 96 14 C 110 28 116 56 112 92 C 104 140 82 220 60 315Z"
            stroke="#1f4b3f"
            strokeWidth="1.2"
          />
          <path
            d="M60 315 Q 62 158 60 5"
            stroke="#1f4b3f"
            strokeWidth="0.6"
            opacity="0.5"
          />
        </svg>
      </div>

      <Container className="relative">
        {/* Eyebrow */}
        <p className="animate-fade-in text-[10px] uppercase tracking-[0.4em] text-[color:var(--accent)] opacity-60">
          Amsterdam · Foodhallen · Plant-built
        </p>

        {/* Giant stacked headline — each line clips from below */}
        <div className="mt-3 sm:mt-5">
          <div className="overflow-hidden">
            <h1 className="hero-headline animate-word-reveal font-serif text-[clamp(3.2rem,10.5vw,9rem)] leading-[0.88] text-[color:var(--accent)]">
              Clean,
            </h1>
          </div>
          <div className="overflow-hidden">
            <p className="hero-headline animate-word-reveal delay-120 font-serif text-[clamp(3.2rem,10.5vw,9rem)] leading-[0.88] text-[color:var(--accent)]">
              bold,
            </p>
          </div>
          <div className="overflow-hidden">
            <p className="hero-headline animate-word-reveal delay-240 font-serif text-[clamp(3.2rem,10.5vw,9rem)] leading-[0.88] text-[color:var(--accent)]">
              made in-house.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="animate-fade-up delay-400 mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
          <ButtonLink href="/menu" variant="primary">See the menu</ButtonLink>
          <ButtonLink href="/visit" variant="outline">Visit us</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
