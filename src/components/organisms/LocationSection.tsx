import { useState } from "react";
import { MapPin, Navigation } from "lucide-react";
import mapPreview from "@/assets/map-preview.jpg";
import { branches } from "@/data/site";
import type { Branch } from "@/types";
import { BranchCard } from "@/components/molecules/BranchCard";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { Reveal } from "@/components/atoms/Reveal";
import { LuxeButton } from "@/components/atoms/LuxeButton";
import { useBooking } from "@/store/booking-store";

export function LocationSection() {
  const [active, setActive] = useState<Branch>(branches[0]);
  const { openBooking } = useBooking();

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Find us"
          title="Three ateliers across Lahore"
          description="Pick a branch to preview it on the map, then book directly at that location."
        />
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <Reveal className="order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-soft">
            <img
              src={mapPreview}
              alt={`Map preview showing ${active.name}`}
              loading="lazy"
              width={1400}
              height={900}
              className="aspect-4/3 w-full object-cover transition-transform duration-1000 lg:aspect-16/12"
            />
            <div className="absolute inset-0 bg-background/10" aria-hidden />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
              <span className="grid size-11 place-items-center rounded-full gradient-accent text-primary-foreground shadow-luxe float-soft">
                <MapPin aria-hidden className="size-5" />
              </span>
            </div>
            <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-background/90 p-4 backdrop-blur-xl">
              <div className="min-w-0">
                <p className="eyebrow">Currently viewing</p>
                <p className="mt-1 truncate font-display text-xl">{active.name}</p>
                <p className="truncate text-xs text-muted-foreground">{active.address}</p>
              </div>
              <a href={active.mapUrl} target="_blank" rel="noreferrer noopener" className="shrink-0">
                <LuxeButton size="sm" type="button">
                  <Navigation aria-hidden className="size-3.5" /> Directions
                </LuxeButton>
              </a>
            </div>
          </div>
        </Reveal>

        <div className="order-1 space-y-4 lg:order-2">
          {branches.map((b, i) => (
            <Reveal key={b.id} delay={i * 70}>
              <BranchCard
                branch={b}
                active={active.id === b.id}
                onSelect={setActive}
                onBook={(br) => openBooking({ branchId: br.id, source: "branch-card" })}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
