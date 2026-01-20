import Link from "next/link";

import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section size="loose" className="pt-12 sm:pt-16">
      <PageHeader
        eyebrow="404"
        title="This page doesn’t exist."
        description="The page you’re looking for isn’t here. Head back to the homepage."
      />
      <div className="mt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 underline-offset-4 transition hover:text-slate-900 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          Back to home
        </Link>
      </div>
    </Section>
  );
}
