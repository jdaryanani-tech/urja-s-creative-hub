import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/training")({
  head: () => ({ meta: [{ title: "Aroma Institute Training Model" }, { name: "description", content: "Learn how Aroma combines classes, café shifts, mentorship, and industry exposure." }, { property: "og:title", content: "Aroma Institute Training Model" }, { property: "og:description", content: "Learn how Aroma combines classes, café shifts, mentorship, and industry exposure." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <SectionPage page="training" />,
});