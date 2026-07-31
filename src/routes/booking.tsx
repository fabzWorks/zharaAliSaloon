import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/templates/SiteLayout";
import { BookingForm } from "@/components/molecules/BookingForm";
import { Reveal } from "@/components/atoms/Reveal";
import { branches, contact } from "@/data/site";
import { faqs } from "@/data/content";

export const Route = createFileRoute("/booking")({
  component: BookingPage,
  head: () => ({
    meta: [
      { title: "Book an Appointment | Zahra Ali Beauty Atelier Lahore" },
      {
        name: "description",
        content:
          "Reserve bridal, groom, party or salon appointments at Zahra Ali Beauty Atelier. Choose your service, date, time and Lahore branch.",
      },
      { property: "og:title", content: "Book an Appointment | Zahra Ali Beauty Atelier" },
      { property: "og:description", content: "Pick your service, date, time and branch in under a minute." },
    ],
  }),
});

function BookingPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Reservations"
        title="Book your appointment"
        description="Choose a service or package, pick a slot, and our concierge confirms on WhatsApp within two hours."
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <div className="rounded-2xl surface-luxe p-7 sm:p-9">
            <BookingForm />
          </div>
        </Reveal>

        <Reveal delay={100} className="space-y-6">
          <div className="rounded-2xl border border-border p-7">
            <p className="eyebrow">How it works</p>
            <ol className="mt-4 space-y-4 text-sm text-muted-foreground">
              {[
                "Send your request with a preferred date, time and branch.",
                "Our concierge confirms availability on WhatsApp within two hours.",
                "Bridal bookings are held with a 30% retainer; salon visits need no deposit.",
                "You receive a reminder the day before with your artist's name.",
              ].map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full gradient-accent text-[0.6rem] text-primary-foreground">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border border-border p-7">
            <p className="eyebrow">Our branches</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {branches.map((b) => (
                <li key={b.id}>
                  <span className="block text-foreground">{b.name}</span>
                  {b.address}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-muted-foreground">{contact.hours}</p>
          </div>

          <div className="rounded-2xl border border-border p-7">
            <p className="eyebrow">Before you book</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faqs[0].answer}</p>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
