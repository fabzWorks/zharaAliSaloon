import { testimonials, stats, beforeAfter, offers, faqs } from "@/data/content";
import { TestimonialCard } from "@/components/molecules/TestimonialCard";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { Reveal } from "@/components/atoms/Reveal";
import { LuxeButton } from "@/components/atoms/LuxeButton";
import { useBooking } from "@/store/booking-store";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function StatsBand() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-14 sm:px-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.id} delay={i * 80} className="text-center">
            <p className="font-display text-5xl text-gradient">{s.value}</p>
            <p className="eyebrow mt-3">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Social proof"
          title="What our clients say afterwards"
          description="Reviews collected from brides, grooms and regulars across our three Lahore ateliers."
        />
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.id} delay={i * 60} className="h-full">
            <TestimonialCard item={t} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function BeforeAfterSection() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Transformations"
            title="Before and after, hover to reveal"
            description="Each transformation below is a full course of work — skin first, artistry second."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {beforeAfter.map((item, i) => (
            <Reveal key={item.id} delay={i * 80}>
              <figure className="group relative overflow-hidden rounded-2xl border border-border">
                <img src={item.before} alt={`${item.title} before`} loading="lazy" className="aspect-4/5 w-full object-cover" width={1000} height={1250} />
                <img
                  src={item.after}
                  alt={`${item.title} after`}
                  loading="lazy"
                  width={1000}
                  height={1250}
                  className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />
                <div className="absolute inset-0 veil" aria-hidden />
                <figcaption className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                  <p className="text-[0.55rem] uppercase tracking-[0.26em] opacity-80">
                    Hover to see the after
                  </p>
                  <p className="mt-1 font-display text-2xl">{item.title}</p>
                  <p className="mt-1 text-xs opacity-80">{item.note}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OfferBanner() {
  const { openBooking } = useBooking();
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <Reveal>
        <div className="overflow-hidden rounded-[2rem] gradient-luxe p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow">Current offers</p>
              <h2 className="mt-3 text-4xl leading-tight sm:text-5xl">Season offers, quietly generous</h2>
              <ul className="mt-6 space-y-4">
                {offers.map((o) => (
                  <li key={o.id} className="rounded-xl border border-border bg-background/70 p-4 backdrop-blur">
                    <p className="text-sm text-foreground">{o.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{o.detail}</p>
                    <p className="mt-2 text-[0.6rem] uppercase tracking-[0.24em] text-accent">
                      Code {o.code} · until {o.expires}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-background/80 p-7 backdrop-blur">
              <p className="eyebrow">Stay in the loop</p>
              <h3 className="mt-2 text-3xl">Offer letters, twice a season</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Early access to bridal dates and seasonal pricing. No spam, ever.
              </p>
              <form
                className="mt-5 flex flex-col gap-3 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  const input = e.currentTarget.elements.namedItem("newsletter") as HTMLInputElement;
                  input.value = "";
                  input.placeholder = "Thank you — you're on the list";
                }}
              >
                <label className="sr-only" htmlFor="newsletter">
                  Email address
                </label>
                <input
                  id="newsletter"
                  name="newsletter"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="h-11 flex-1 rounded-full border border-input bg-background px-5 text-sm outline-none transition-colors focus:border-accent"
                />
                <LuxeButton type="submit" size="sm">
                  Subscribe
                </LuxeButton>
              </form>
              <LuxeButton variant="outline" size="sm" className="mt-4 w-full" onClick={() => openBooking({ source: "offer-banner" })}>
                Claim an offer now
              </LuxeButton>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-24">
      <Reveal>
        <SectionHeading eyebrow="Good to know" title="Frequently asked" />
      </Reveal>
      <Reveal delay={80}>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f) => (
            <AccordionItem key={f.id} value={f.id} className="border-border">
              <AccordionTrigger className="text-left font-display text-xl font-light hover:text-accent hover:no-underline">
                {f.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
