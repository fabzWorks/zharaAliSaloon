import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import type { GalleryItem } from "@/types";

export function GalleryLightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  const item = index !== null ? items[index] : null;
  const go = (dir: number) => {
    if (index === null) return;
    onNavigate((index + dir + items.length) % items.length);
  };

  return (
    <Dialog open={index !== null} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-5xl overflow-hidden rounded-2xl border-border bg-card p-0">
        {item && (
          <div className="relative">
            <img src={item.image} alt={item.title} className="max-h-[72vh] w-full object-contain bg-secondary" />
            <div className="flex items-center justify-between gap-4 p-6">
              <div>
                <DialogTitle className="font-display text-2xl font-light">{item.title}</DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground">{item.description}</DialogDescription>
              </div>
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous image"
                  className="grid size-10 place-items-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
                >
                  <ChevronLeft aria-hidden className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next image"
                  className="grid size-10 place-items-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
                >
                  <ChevronRight aria-hidden className="size-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
