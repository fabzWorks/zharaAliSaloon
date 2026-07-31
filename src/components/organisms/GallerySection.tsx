import { useMemo, useState } from "react";
import { gallery } from "@/data/content";
import { GalleryTile } from "@/components/molecules/GalleryTile";
import { GalleryLightbox } from "@/components/modals/GalleryLightbox";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { Pill } from "@/components/atoms/Pill";
import { Reveal } from "@/components/atoms/Reveal";

const categories = ["All", "Bridal", "Groom", "Mehndi", "Party", "Hair", "Salon"] as const;

export function GallerySection({ limit, showFilters = true }: { limit?: number; showFilters?: boolean }) {
  const [filter, setFilter] = useState<string>("All");
  const [index, setIndex] = useState<number | null>(null);

  const items = useMemo(() => {
    const filtered = filter === "All" ? gallery : gallery.filter((g) => g.category === filter);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [filter, limit]);

  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Portfolio"
            title="Recent work from the chair"
            description="Real clients, real lighting. Tap any image to open the viewer."
          />
        </Reveal>

        {showFilters && (
          <Reveal delay={80}>
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {categories.map((c) => (
                <Pill key={c} active={filter === c} onClick={() => setFilter(c)}>
                  {c}
                </Pill>
              ))}
            </div>
          </Reveal>
        )}

        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-4 lg:grid-cols-4">
          {items.map((item, i) => (
            <GalleryTile
              key={item.id}
              item={item}
              onOpen={() => setIndex(i)}
              className={i % 7 === 0 ? "row-span-2" : i % 5 === 0 ? "col-span-2" : ""}
            />
          ))}
        </div>

        <GalleryLightbox items={items} index={index} onClose={() => setIndex(null)} onNavigate={setIndex} />
      </div>
    </section>
  );
}
