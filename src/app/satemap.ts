import { MetadataRoute } from "next";
import { baseUrl } from "@/shared/const/base";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: new URL("/", baseUrl()).href,
      lastModified: new Date(),
    },
  ];
}
