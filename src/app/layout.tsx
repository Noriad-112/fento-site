import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/layout/SiteShell";
import { site } from "@/content/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.defaultTitle,
  description: site.defaultDescription,
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: site.defaultTitle,
    description: site.defaultDescription,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dayOfWeekMap: Record<string, string> = {
    Monday: "https://schema.org/Monday",
    Tuesday: "https://schema.org/Tuesday",
    Wednesday: "https://schema.org/Wednesday",
    Thursday: "https://schema.org/Thursday",
    Friday: "https://schema.org/Friday",
    Saturday: "https://schema.org/Saturday",
    Sunday: "https://schema.org/Sunday",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": site.locations.map((location) => ({
      "@type": "Restaurant",
      "@id": `${site.url}#${location.slug}`,
      name: location.name,
      url: site.url,
      description: site.defaultDescription,
      servesCuisine: site.cuisine,
      sameAs: [site.socials.instagram],
      address: {
        "@type": "PostalAddress",
        streetAddress: location.address.street,
        postalCode: location.address.postalCode,
        addressLocality: location.address.city,
        addressCountry: location.address.country,
      },
      suitableForDiet: site.dietarySchema,
      openingHoursSpecification: location.openingHours.map((entry) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: dayOfWeekMap[entry.day] ?? entry.day,
        opens: entry.opens,
        closes: entry.closes,
      })),
    })),
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SiteShell>{children}</SiteShell>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
