import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact Aroma Institute" }, { name: "description", content: "Speak with Aroma Institute about programs, admissions, and café career goals." }, { property: "og:title", content: "Contact Aroma Institute" }, { property: "og:description", content: "Speak with Aroma Institute about programs, admissions, and café career goals." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <SectionPage page="contact" />,
});