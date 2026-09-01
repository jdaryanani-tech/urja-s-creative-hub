import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About Aroma Institute" }, { name: "description", content: "Discover Aroma Institute's practical approach to café and hospitality careers." }, { property: "og:title", content: "About Aroma Institute" }, { property: "og:description", content: "Discover Aroma Institute's practical approach to café and hospitality careers." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <SectionPage page="about" />,
});