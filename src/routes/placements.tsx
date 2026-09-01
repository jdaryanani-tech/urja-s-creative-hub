import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/placements")({
  head: () => ({ meta: [{ title: "Aroma Institute Placements" }, { name: "description", content: "Explore Aroma Institute's industry network and placement assistance for hospitality careers." }, { property: "og:title", content: "Aroma Institute Placements" }, { property: "og:description", content: "Explore Aroma Institute's industry network and placement assistance for hospitality careers." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <SectionPage page="placements" />,
});