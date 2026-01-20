import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { createRestaurantJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: site.name,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.siteUrl,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: "/og-image.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteShell>{children}</SiteShell>
        <JsonLd data={createRestaurantJsonLd(site)} />
      </body>
    </html>
  );
}
