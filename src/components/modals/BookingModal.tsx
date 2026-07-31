import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { BookingForm } from "@/components/molecules/BookingForm";
import { useBooking } from "@/store/booking-store";

export function BookingModal() {
  const { open, intent, closeBooking } = useBooking();

  return (
    <Dialog open={open} onOpenChange={(v) => !v && closeBooking()}>
      <DialogContent className="max-h-[92vh] max-w-2xl overflow-y-auto rounded-2xl border-border bg-card p-0">
        <div className="gradient-luxe px-8 pb-6 pt-8">
          <DialogHeader className="text-left">
            <p className="eyebrow">Reserve your seat</p>
            <DialogTitle className="mt-2 font-display text-4xl font-light">Book an appointment</DialogTitle>
            <DialogDescription className="text-sm text-foreground/70">
              Tell us what you need and our concierge will confirm your slot on WhatsApp.
            </DialogDescription>
          </DialogHeader>
        </div>
        <div className="px-8 pb-8">
          <BookingForm
            defaultServiceId={intent.serviceId}
            defaultPackageId={intent.packageId}
            defaultBranchId={intent.branchId}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
