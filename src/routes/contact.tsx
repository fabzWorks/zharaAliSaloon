import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/templates/SiteLayout";
import { ContactSection } from "@/components/organisms/ContactSection";
import { FaqSection } from "@/components/organisms/Sections";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact & WhatsApp Concierge | Zahra Ali Beauty Atelier" },
      {
        name: "description",
        content:
          "Call, WhatsApp or email the Zahra Ali concierge for bridal dates, custom packages and pricing questions. We reply within two hours.",
      },
      { property: "og:title", content: "Contact & WhatsApp Concierge | Zahra Ali Beauty Atelier" },
      { property: "og:description", content: "Reach our Lahore concierge by phone, WhatsApp, email or the form." },
    ],
  }),
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Concierge"
        title="We'd love to hear from you"
        description="Bridal enquiries, custom plans, outstation weddings or a simple question about pricing."
      />
      <ContactSection />
      <FaqSection />
    </SiteLayout>
  );
}
