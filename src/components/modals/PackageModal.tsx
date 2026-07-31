import { Check } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { LuxeButton } from "@/components/atoms/LuxeButton";
import { formatPrice } from "@/utils/format";
import type { SalonPackage } from "@/types";

export function PackageModal({
  pkg,
  onClose,
  onBook,
}: {
  pkg: SalonPackage | null;
  onClose: () => void;
  onBook: (p: SalonPackage) => void;
}) {
  return (
    <Dialog open={!!pkg} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-h-[92vh] max-w-3xl overflow-y-auto rounded-2xl border-border bg-card p-0">
        {pkg && (
          <>
            <div className="relative aspect-21/9 overflow-hidden">
              <img src={pkg.image} alt={pkg.name} className="size-full object-cover" width={1400} height={600} />
              <div className="absolute inset-0 veil" aria-hidden />
            </div>
            <div className="space-y-6 p-8">
              <DialogHeader className="text-left">
                <p className="eyebrow">{pkg.type} package</p>
                <DialogTitle className="mt-2 font-display text-4xl font-light">{pkg.name}</DialogTitle>
                <DialogDescription className="text-sm text-accent">{pkg.bestFor}</DialogDescription>
              </DialogHeader>

              <p className="text-sm leading-relaxed text-muted-foreground">{pkg.description}</p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border p-4">
                  <p className="eyebrow">Timeline</p>
                  <p className="mt-2 font-display text-2xl">{pkg.duration}</p>
                </div>
                <div className="rounded-xl border border-border p-4">
                  <p className="eyebrow">Package price</p>
                  <p className="mt-2 font-display text-2xl">
                    {formatPrice(pkg.price, pkg.currency)}
                    {pkg.compareAtPrice && (
                      <span className="ml-2 text-xs text-muted-foreground line-through">
                        {formatPrice(pkg.compareAtPrice, pkg.currency)}
                      </span>
                    )}
                  </p>
                </div>
              </div>

              <div>
                <p className="eyebrow">Everything included</p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {pkg.inclusions.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check aria-hidden className="mt-0.5 size-3.5 shrink-0 text-accent" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>

              <LuxeButton size="lg" className="w-full" onClick={() => onBook(pkg)}>
                Reserve this package
              </LuxeButton>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
