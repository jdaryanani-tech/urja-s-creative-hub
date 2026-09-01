import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/programs")({
  head: () => ({ meta: [{ title: "Aroma Institute Programs" }, { name: "description", content: "Explore practical barista, brewing, beverage, and café entrepreneurship programs." }, { property: "og:title", content: "Aroma Institute Programs" }, { property: "og:description", content: "Explore practical barista, brewing, beverage, and café entrepreneurship programs." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <SectionPage page="programs" />,
});