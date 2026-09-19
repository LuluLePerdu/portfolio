import type { MetadataRoute } from "next";
import { stories } from "@/content/odyssey";
import { projects } from "@/content/projects";
import { SITE_URL, locales } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/odyssey/",
    ...stories.map((s) => `/odyssey/${s.slug}/`),
    ...projects.map((p) => `/work/${p.slug}/`),
  ];
  return paths.flatMap((path) =>
    locales.map((lang) => ({
      url: `${SITE_URL}/${lang}${path}`,
      alternates: {
        languages: {
          ...Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}${path}`])),
          "x-default": `${SITE_URL}/fr${path}`,
        },
      },
    })),
  );
}
