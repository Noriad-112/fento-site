import Link from "next/link";

type CTAProps = {
  href: string;
  label: string;
};

export function CTA({ href, label }: CTAProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-5 py-2 text-sm text-zinc-900 transition-colors hover:border-zinc-400"
    >
      {label}
    </Link>
  );
}
