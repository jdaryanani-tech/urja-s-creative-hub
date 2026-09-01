import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/admissions")({
  head: () => ({ meta: [{ title: "Aroma Institute Admissions" }, { name: "description", content: "Start your café career with Aroma Institute's simple admissions process." }, { property: "og:title", content: "Aroma Institute Admissions" }, { property: "og:description", content: "Start your café career with Aroma Institute's simple admissions process." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <SectionPage page="admissions" />,
});