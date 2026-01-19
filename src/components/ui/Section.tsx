import type { ReactNode } from "react";

type SectionProps = {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
};

export function Section({ title, subtitle, children }: SectionProps) {
  return (
    <section className="space-y-4">
      {(title || subtitle) && (
        <div className="space-y-2">
          {title ? (
            <h2 className="text-2xl font-semibold text-zinc-900">{title}</h2>
          ) : null}
          {subtitle ? (
            <p className="text-base text-zinc-700">{subtitle}</p>
          ) : null}
        </div>
      )}
      {children ? <div>{children}</div> : null}
    </section>
  );
}
