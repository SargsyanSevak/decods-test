import { MetadataRoute } from "next";

const host = "https://decods.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    getEntry("/"),
    getEntry("/about"),
    getEntry("/hire-developer"),
    getEntry("/portfolio"),
    getEntry("/services"),
    getEntry("/articles"),
    getEntry("/articles/*"),
    getEntry("/terms-and-conditions"),
    getEntry("/privacy-policy"),
  ];
}

function getEntry(path: string): MetadataRoute.Sitemap[number] {
  return {
    url: `${host}${path}`,
  };
}
