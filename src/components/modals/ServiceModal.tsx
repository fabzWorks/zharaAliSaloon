import { Check, Clock, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { LuxeButton } from "@/components/atoms/LuxeButton";
import { Pill } from "@/components/atoms/Pill";
import { formatPriceRange } from "@/utils/format";
import type { Service } from "@/types";

export function ServiceModal({
  service,
  onClose,
  onBook,
}: {
  service: Service | null;
  onClose: () => void;
  onBook: (s: Service) => void;
}) {
  return (
    <Dialog open={!!service} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-h-[92vh] max-w-3xl overflow-y-auto rounded-2xl border-border bg-card p-0">
        {service && (
          <>
            <div className="relative aspect-21/9 overflow-hidden">
              <img src={service.image} alt={service.name} className="size-full object-cover" width={1400} height={600} />
              <div className="absolute inset-0 veil" aria-hidden />
            </div>
            <div className="space-y-6 p-8">
              <DialogHeader className="text-left">
                <p className="eyebrow">{service.category}</p>
                <DialogTitle className="mt-2 font-display text-4xl font-light">{service.name}</DialogTitle>
                <DialogDescription className="text-sm text-accent">{service.tagline}</DialogDescription>
              </DialogHeader>

              <p className="text-sm leading-relaxed text-muted-foreground">{service.longDescription}</p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border p-4">
                  <p className="eyebrow">Duration</p>
                  <p className="mt-2 flex items-center gap-2 font-display text-2xl">
                    <Clock aria-hidden className="size-4 text-accent" />
                    {service.duration}
                  </p>
                </div>
                <div className="rounded-xl border border-border p-4">
                  <p className="eyebrow">Investment</p>
                  <p className="mt-2 font-display text-2xl">
                    {formatPriceRange(service.priceFrom, service.priceTo, service.currency)}
                  </p>
                </div>
              </div>

              <div>
                <p className="eyebrow">What's included</p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {service.includes.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check aria-hidden className="mt-0.5 size-3.5 shrink-0 text-accent" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="eyebrow">Suitable occasions</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {service.occasions.map((o) => (
                    <Pill key={o}>{o}</Pill>
                  ))}
                </div>
              </div>

              <LuxeButton size="lg" className="w-full" onClick={() => onBook(service)}>
                <Sparkles aria-hidden className="size-4" /> Book this service
              </LuxeButton>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
