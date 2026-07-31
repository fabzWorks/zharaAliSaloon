import { useMemo, useState } from "react";
import { packages, packageTypes } from "@/data/packages";
import type { SalonPackage } from "@/types";
import { PackageCard } from "@/components/molecules/PackageCard";
import { PackageModal } from "@/components/modals/PackageModal";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { Pill } from "@/components/atoms/Pill";
import { Reveal } from "@/components/atoms/Reveal";
import { useBooking } from "@/store/booking-store";

export function PackagesSection({
  items = packages,
  showFilters = true,
  eyebrow = "Curated packages",
  title = "Bridal, groom, Eid and event collections",
  description = "Bundled artistry with a planned timeline — so nothing is rushed in the week of the wedding.",
}: {
  items?: SalonPackage[];
  showFilters?: boolean;
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  const [type, setType] = useState<string>("all");
  const [selected, setSelected] = useState<SalonPackage | null>(null);
  const { openBooking } = useBooking();

  const visible = useMemo(() => (type === "all" ? items : items.filter((p) => p.type === type)), [items, type]);

  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        </Reveal>

        {showFilters && (
          <Reveal delay={80}>
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {packageTypes.map((t) => (
                <Pill key={t.id} active={type === t.id} onClick={() => setType(t.id)}>
                  {t.label}
                </Pill>
              ))}
            </div>
          </Reveal>
        )}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 60} className="h-full">
              <PackageCard
                pkg={pkg}
                onDetails={setSelected}
                onBook={(p) => openBooking({ packageId: p.id, source: "package-card" })}
              />
            </Reveal>
          ))}
        </div>

        <PackageModal
          pkg={selected}
          onClose={() => setSelected(null)}
          onBook={(p) => {
            setSelected(null);
            openBooking({ packageId: p.id, source: "package-modal" });
          }}
        />
      </div>
    </section>
  );
}
