import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/templates/SiteLayout";
import { PackagesSection } from "@/components/organisms/PackagesSection";
import { FaqSection, TestimonialsSection } from "@/components/organisms/Sections";

export const Route = createFileRoute("/packages")({
  component: PackagesPage,
  head: () => ({
    meta: [
      { title: "Bridal, Groom & Eid Packages | Zahra Ali Beauty Atelier" },
      {
        name: "description",
        content:
          "Complete bridal collections, groom packages, Eid bundles, party glam and photoshoot packages with full inclusions and pricing in Lahore.",
      },
      { property: "og:title", content: "Bridal, Groom & Eid Packages | Zahra Ali Beauty Atelier" },
      {
        property: "og:description",
        content: "Curated Pakistani wedding and event packages with planned timelines and transparent pricing.",
      },
    ],
  }),
});

function PackagesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Collections"
        title="Packages built around your calendar"
        description="Multi-function bridal plans, groom collections, Eid bundles and event retainers."
      />
      <PackagesSection />
      <TestimonialsSection />
      <FaqSection />
    </SiteLayout>
  );
}
