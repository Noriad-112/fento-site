import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";

type HeroBannerProps = {
  children: ReactNode;
  className?: string;
};

export function HeroBanner({ children, className }: HeroBannerProps) {
  return (
    <section className={`relative overflow-hidden bg-[color:var(--accent)] py-16 sm:py-24 ${className ?? ""}`}>
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 280"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        aria-hidden="true"
      >
        <g transform="translate(40, 20) rotate(-15)" opacity="0.05">
          <path d="M0 220 C -8 170 10 110 40 68 C 62 36 90 12 112 0 C 95 42 78 78 60 112 C 38 150 16 188 0 220Z" stroke="white" strokeWidth="1.2" />
          <path d="M0 220 Q 56 110 112 0" stroke="white" strokeWidth="0.5" opacity="0.5" />
          <path d="M40 68 C 20 62 4 46 2 28 C 0 12 14 2 28 6 C 42 10 46 30 40 68Z" stroke="white" strokeWidth="0.8" opacity="0.7" />
        </g>
        <g transform="translate(210, -30) rotate(8)" opacity="0.04">
          <path d="M20 260 C 12 210 8 150 14 100 C 20 52 36 16 50 0 C 52 40 50 78 46 118 C 40 164 30 214 20 260Z" stroke="white" strokeWidth="1" />
          <path d="M20 260 Q 34 128 50 0" stroke="white" strokeWidth="0.4" opacity="0.5" />
          <path d="M14 100 C -2 94 -8 76 -4 60 C 0 46 14 42 24 50 C 34 58 32 78 14 100Z" stroke="white" strokeWidth="0.7" opacity="0.6" />
          <path d="M34 160 C 18 158 8 144 12 130 C 16 116 30 112 40 122 C 48 130 44 148 34 160Z" stroke="white" strokeWidth="0.7" opacity="0.6" />
        </g>
        <g transform="translate(370, 90) rotate(-40)" opacity="0.04">
          <path d="M0 160 C -10 120 -4 72 18 40 C 36 12 60 -4 78 -10 C 66 24 52 52 36 82 C 18 116 6 140 0 160Z" stroke="white" strokeWidth="1" />
          <path d="M18 40 C 4 26 -6 8 2 -6 C 8 -18 22 -16 30 -6 C 38 4 34 24 18 40Z" stroke="white" strokeWidth="0.7" opacity="0.6" />
        </g>
        <g transform="translate(620, -10) rotate(5)" opacity="0.04">
          <path d="M12 200 C 6 158 4 108 8 66 C 12 28 22 4 30 0 C 30 36 28 70 24 108 C 20 148 16 176 12 200Z" stroke="white" strokeWidth="0.9" />
          <path d="M12 200 Q 22 98 30 0" stroke="white" strokeWidth="0.4" opacity="0.5" />
        </g>
        <g transform="translate(880, 10) rotate(-25)" opacity="0.05">
          <path d="M0 240 C -6 188 12 128 44 84 C 70 46 102 18 124 4 C 106 46 88 82 68 118 C 44 160 18 204 0 240Z" stroke="white" strokeWidth="1.1" />
          <path d="M0 240 Q 64 120 124 4" stroke="white" strokeWidth="0.5" opacity="0.5" />
          <path d="M44 84 C 26 76 12 58 16 40 C 20 24 36 18 48 28 C 60 36 58 60 44 84Z" stroke="white" strokeWidth="0.8" opacity="0.65" />
          <path d="M68 138 C 48 134 36 118 40 102 C 44 88 58 84 70 94 C 80 102 78 124 68 138Z" stroke="white" strokeWidth="0.8" opacity="0.65" />
        </g>
        <g transform="translate(1060, -20) rotate(35)" opacity="0.03">
          <path d="M8 100 C 2 76 -2 46 6 22 C 12 2 22 -8 30 -10 C 28 14 24 36 18 58 C 12 78 8 92 8 100Z" stroke="white" strokeWidth="0.8" />
        </g>
        <g transform="translate(1180, 60) rotate(20)" opacity="0.04">
          <path d="M14 0 C 38 8 56 32 54 58 C 52 80 36 96 20 92 C 6 88 -2 72 4 52 C 8 34 14 0 14 0Z" stroke="white" strokeWidth="0.9" />
          <path d="M14 0 C 18 38 18 66 20 92" stroke="white" strokeWidth="0.4" opacity="0.5" />
        </g>
        <g transform="translate(1340, 30) rotate(-10)" opacity="0.05">
          <path d="M0 200 C -6 158 6 106 28 68 C 46 36 68 14 84 0 C 70 34 56 64 40 96 C 22 132 8 168 0 200Z" stroke="white" strokeWidth="1" />
          <path d="M0 200 Q 44 98 84 0" stroke="white" strokeWidth="0.4" opacity="0.5" />
          <path d="M28 68 C 14 58 4 40 10 24 C 14 10 28 6 38 16 C 48 24 44 48 28 68Z" stroke="white" strokeWidth="0.7" opacity="0.6" />
        </g>
      </svg>
      <Container className="relative">
        {children}
      </Container>
    </section>
  );
}
