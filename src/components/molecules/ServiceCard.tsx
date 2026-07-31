import { ArrowUpRight, Clock } from "lucide-react";
import type { Service } from "@/types";
import { formatPriceRange } from "@/utils/format";

export function ServiceCard({ service, onSelect }: { service: Service; onSelect: (s: Service) => void }) {
  return (
    <article className="group h-full">
      <button
        type="button"
        onClick={() => onSelect(service)}
        className="lift zoom-media flex h-full w-full flex-col overflow-hidden rounded-2xl surface-luxe text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={`View details for ${service.name}`}
      >
        <div className="relative aspect-4/3 overflow-hidden">
          <img
            src={service.image}
            alt={service.name}
            loading="lazy"
            className="size-full object-cover"
            width={1000}
            height={750}
          />
          <div className="absolute inset-0 veil opacity-70" aria-hidden />
          <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-[0.6rem] uppercase tracking-[0.24em] text-foreground backdrop-blur">
            {service.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-6">
          <h3 className="text-2xl leading-tight">{service.name}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
          <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
            <span className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock aria-hidden className="size-3.5" />
              {service.duration}
            </span>
            <span className="text-xs tracking-[0.12em] text-accent">
              {formatPriceRange(service.priceFrom, service.priceTo, service.currency)}
            </span>
          </div>
          <span className="inline-flex items-center gap-1 text-[0.65rem] uppercase tracking-[0.24em] text-foreground/70 transition-colors group-hover:text-accent">
            View details <ArrowUpRight aria-hidden className="size-3.5" />
          </span>
        </div>
      </button>
    </article>
  );
}
