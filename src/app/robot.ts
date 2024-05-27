import { MetadataRoute } from "next";
import { baseUrl } from "@/shared/const/base";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api", "/_next"],
    },
    sitemap: new URL("/sitemap.xml", baseUrl()).href,
  };
}
