import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/templates/SiteLayout";
import { TeamSection } from "@/components/organisms/TeamSection";
import { TestimonialsSection } from "@/components/organisms/Sections";

export const Route = createFileRoute("/team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Our Artists & Stylists | Zahra Ali Beauty Atelier" },
      {
        name: "description",
        content:
          "Meet the makeup artists, hair stylists, skin specialist and beauticians behind Zahra Ali Beauty Atelier in Lahore — experience, specialties and skills.",
      },
      { property: "og:title", content: "Our Artists & Stylists | Zahra Ali Beauty Atelier" },
      { property: "og:description", content: "Named specialists for bridal, groom, hair, skin and mehndi work." },
    ],
  }),
});

function TeamPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="The atelier"
        title="The people behind the chair"
        description="Request a specific artist when you book — every profile lists their specialties and experience."
      />
      <TeamSection />
      <TestimonialsSection />
    </SiteLayout>
  );
}
