import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/templates/SiteLayout";
import { Hero } from "@/components/organisms/Hero";
import { ServicesSection } from "@/components/organisms/ServicesSection";
import { PackagesSection } from "@/components/organisms/PackagesSection";
import { TeamSection } from "@/components/organisms/TeamSection";
import { GallerySection } from "@/components/organisms/GallerySection";
import { LocationSection } from "@/components/organisms/LocationSection";
import { ContactSection } from "@/components/organisms/ContactSection";
import {
  BeforeAfterSection,
  FaqSection,
  OfferBanner,
  StatsBand,
  TestimonialsSection,
} from "@/components/organisms/Sections";
import { featuredServices } from "@/data/services";
import { packages } from "@/data/packages";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Zahra Ali Beauty Atelier | Premium Bridal Salon in Lahore" },
      {
        name: "description",
        content:
          "Pakistani bridal makeup, groom styling, party and Eid looks, hair, skin and mehndi at Zahra Ali Beauty Atelier, Lahore. Book online in under a minute.",
      },
      { property: "og:title", content: "Zahra Ali Beauty Atelier | Premium Bridal Salon in Lahore" },
      {
        property: "og:description",
        content: "Bridal, groom and event artistry across three Lahore ateliers. Book your appointment online.",
      },
    ],
  }),
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <StatsBand />
      <ServicesSection
        items={featuredServices}
        showFilters={false}
        eyebrow="Signature services"
        title="The work we are known for"
        description="A short list of what most clients come to us for. Explore the full menu for everything else."
      />
      <PackagesSection
        items={packages.filter((p) => p.popular || p.type === "eid")}
        showFilters={false}
        eyebrow="Featured collections"
        title="Bridal, groom and Eid packages"
        description="Bundled artistry with a planned timeline — the three most requested collections this season."
      />
      <BeforeAfterSection />
      <GallerySection limit={7} showFilters={false} />
      <TeamSection />
      <TestimonialsSection />
      <OfferBanner />
      <LocationSection />
      <ContactSection />
      <FaqSection />
    </SiteLayout>
  );
}
