import { useMemo, useState } from "react";
import { services, serviceCategories } from "@/data/services";
import type { Service } from "@/types";
import { ServiceCard } from "@/components/molecules/ServiceCard";
import { ServiceModal } from "@/components/modals/ServiceModal";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { Pill } from "@/components/atoms/Pill";
import { Reveal } from "@/components/atoms/Reveal";
import { useBooking } from "@/store/booking-store";

export function ServicesSection({
  items = services,
  showFilters = true,
  eyebrow = "The menu",
  title = "Services crafted for every occasion",
  description = "From a 10-week pre-bridal glow plan to a 20-minute brow reset — every service is delivered by a named specialist.",
}: {
  items?: Service[];
  showFilters?: boolean;
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  const [category, setCategory] = useState<string>("all");
  const [selected, setSelected] = useState<Service | null>(null);
  const { openBooking } = useBooking();

  const visible = useMemo(
    () => (category === "all" ? items : items.filter((s) => s.category === category)),
    [items, category],
  );

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
      <Reveal>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      </Reveal>

      {showFilters && (
        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {serviceCategories.map((c) => (
              <Pill key={c.id} active={category === c.id} onClick={() => setCategory(c.id)}>
                {c.label}
              </Pill>
            ))}
          </div>
        </Reveal>
      )}

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((service, i) => (
          <Reveal key={service.id} delay={i * 60} as="div" className="h-full">
            <ServiceCard service={service} onSelect={setSelected} />
          </Reveal>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-12 text-center text-sm text-muted-foreground">No services in this category yet.</p>
      )}

      <ServiceModal
        service={selected}
        onClose={() => setSelected(null)}
        onBook={(s) => {
          setSelected(null);
          openBooking({ serviceId: s.id, source: "service-modal" });
        }}
      />
    </section>
  );
}
