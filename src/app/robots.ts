import type { MetadataRoute } from "next";

import { site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/menu", "/story", "/visit", "/catering"],
    },
    sitemap: `${site.siteUrl}/sitemap.xml`,
  };
}
