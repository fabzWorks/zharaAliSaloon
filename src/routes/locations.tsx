import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/templates/SiteLayout";
import { LocationSection } from "@/components/organisms/LocationSection";
import { ContactSection } from "@/components/organisms/ContactSection";

export const Route = createFileRoute("/locations")({
  component: LocationsPage,
  head: () => ({
    meta: [
      { title: "Salon Locations in Lahore | Zahra Ali Beauty Atelier" },
      {
        name: "description",
        content:
          "Visit Zahra Ali Beauty Atelier at Gulberg MM Alam Road, DHA Phase 6 or Bahria Town Lahore. Addresses, hours, amenities and directions.",
      },
      { property: "og:title", content: "Salon Locations in Lahore | Zahra Ali Beauty Atelier" },
      { property: "og:description", content: "Three Lahore ateliers with bridal and groom suites." },
    ],
  }),
});

function LocationsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Visit us"
        title="Three ateliers, one standard"
        description="Bridal suites, groom suites and a skin clinic across Gulberg, DHA Phase 6 and Bahria Town."
      />
      <LocationSection />
      <ContactSection />
    </SiteLayout>
  );
}
