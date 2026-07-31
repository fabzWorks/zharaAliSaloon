import { Check, Sparkles } from "lucide-react";
import type { SalonPackage } from "@/types";
import { formatPrice } from "@/utils/format";
import { LuxeButton } from "@/components/atoms/LuxeButton";

export function PackageCard({
  pkg,
  onDetails,
  onBook,
}: {
  pkg: SalonPackage;
  onDetails: (p: SalonPackage) => void;
  onBook: (p: SalonPackage) => void;
}) {
  return (
    <article className="lift relative flex h-full flex-col overflow-hidden rounded-2xl surface-luxe">
      {pkg.popular && (
        <span className="absolute right-4 top-4 z-10 inline-flex items-center gap-1 rounded-full gradient-accent px-3 py-1 text-[0.55rem] uppercase tracking-[0.24em] text-primary-foreground">
          <Sparkles aria-hidden className="size-3" /> Most booked
        </span>
      )}
      <div className="zoom-media relative aspect-16/10 overflow-hidden">
        <img src={pkg.image} alt={pkg.name} loading="lazy" className="size-full object-cover" width={1000} height={625} />
        <div className="absolute inset-0 veil" aria-hidden />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <p className="eyebrow">{pkg.type} package</p>
          <h3 className="mt-2 text-2xl leading-tight">{pkg.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pkg.summary}</p>
        </div>

        <ul className="space-y-2">
          {pkg.inclusions.slice(0, 4).map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check aria-hidden className="mt-0.5 size-3.5 shrink-0 text-accent" />
              {item}
            </li>
          ))}
          {pkg.inclusions.length > 4 && (
            <li className="text-xs tracking-[0.16em] text-accent">+ {pkg.inclusions.length - 4} more inclusions</li>
          )}
        </ul>

        <div className="mt-auto space-y-4 border-t border-border pt-4">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-3xl">{formatPrice(pkg.price, pkg.currency)}</span>
            {pkg.compareAtPrice && (
              <span className="text-xs text-muted-foreground line-through">
                {formatPrice(pkg.compareAtPrice, pkg.currency)}
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            <LuxeButton size="sm" onClick={() => onBook(pkg)}>
              Book package
            </LuxeButton>
            <LuxeButton size="sm" variant="outline" onClick={() => onDetails(pkg)}>
              Details
            </LuxeButton>
          </div>
        </div>
      </div>
    </article>
  );
}
