import type { MetadataRoute } from "next";
import { practiceAreas } from "@/lib/practice-areas";

const BASE = "https://trafalgarlawtx.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: BASE, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/practice-areas`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/results`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/locations/austin`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/locations/san-antonio`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/locations/round-rock`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/locations/cedar-park`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/locations/georgetown`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/locations/kyle`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/locations/san-marcos`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const practiceRoutes = practiceAreas.map((area) => ({
    url: `${BASE}/practice-areas/${area.slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...practiceRoutes].map((r) => ({
    ...r,
    lastModified: new Date(),
  }));
}
