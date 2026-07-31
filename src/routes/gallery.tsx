import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/templates/SiteLayout";
import { GallerySection } from "@/components/organisms/GallerySection";
import { BeforeAfterSection } from "@/components/organisms/Sections";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Bridal & Salon Gallery | Zahra Ali Beauty Atelier Lahore" },
      {
        name: "description",
        content:
          "Browse real bridal, groom, mehndi, party and hair work from the Zahra Ali Beauty Atelier chair, plus before-and-after transformations.",
      },
      { property: "og:title", content: "Bridal & Salon Gallery | Zahra Ali Beauty Atelier" },
      { property: "og:description", content: "Real client work from our Lahore ateliers, shot in real lighting." },
    ],
  }),
});

function GalleryPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Portfolio"
        title="Our work, unretouched"
        description="Bridal, groom, mehndi and party looks photographed in venue and studio lighting."
      />
      <GallerySection />
      <BeforeAfterSection />
    </SiteLayout>
  );
}
