import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/templates/SiteLayout";
import { ServicesSection } from "@/components/organisms/ServicesSection";
import { FaqSection } from "@/components/organisms/Sections";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Salon Services in Lahore | Zahra Ali Beauty Atelier" },
      {
        name: "description",
        content:
          "Bridal makeup, groom grooming, party and Eid looks, hairstyling, colour, facials, nails, waxing, threading, mehndi and massage — with prices and durations.",
      },
      { property: "og:title", content: "Salon Services in Lahore | Zahra Ali Beauty Atelier" },
      {
        property: "og:description",
        content: "Explore the full Zahra Ali service menu with durations, price ranges and suitable occasions.",
      },
    ],
  }),
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Service menu"
        title="Every service, priced honestly"
        description="Tap any service to see what's included, how long it takes and which occasions it suits."
      />
      <ServicesSection />
      <FaqSection />
    </SiteLayout>
  );
}
