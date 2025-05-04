// app/sitemap.ts
import { MetadataRoute } from "next";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const baseUrl = "https://lumifylabs.ai";

  const staticRoutes = ["", "/call"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.9,
  }));

  return staticRoutes;
};

export default sitemap;
