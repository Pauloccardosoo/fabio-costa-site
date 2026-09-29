import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://fabiocosta.com.br";
  const sections = [
    "",
    "#sobre",
    "#propostas",
    "#projetos",
    "#noticias",
    "#galeria",
    "#agenda",
    "#contato",
  ];

  return sections.map((path) => ({
    url: `${base}/${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
