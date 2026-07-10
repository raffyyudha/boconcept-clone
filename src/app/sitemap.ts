import { MetadataRoute } from "next";
import { getAllSeoSlugs } from "@/lib/seo-data";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://oscarfurnishing.com"; // Domain utama Oscar Furnishing

  // 1. Halaman Statis Utama Website
  const staticRoutes = ["", "/about", "/services", "/gallery", "/contact"];
  const staticPages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. 20.160 Halaman Programmatic SEO Statis
  const slugs = getAllSeoSlugs();
  const pSeoPages = slugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...pSeoPages];
}
