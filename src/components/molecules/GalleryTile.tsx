import { Expand } from "lucide-react";
import type { GalleryItem } from "@/types";
import { cn } from "@/lib/utils";

export function GalleryTile({
  item,
  onOpen,
  className,
}: {
  item: GalleryItem;
  onOpen: (item: GalleryItem) => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      aria-label={`Open ${item.title} in viewer`}
      className={cn(
        "zoom-media group relative block overflow-hidden rounded-2xl border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
    >
      <img src={item.image} alt={item.title} loading="lazy" className="size-full object-cover" width={1000} height={1250} />
      <div className="absolute inset-0 veil opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 text-left text-primary-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="text-[0.55rem] uppercase tracking-[0.26em] opacity-80">{item.category}</p>
        <p className="mt-1 font-display text-xl">{item.title}</p>
      </div>
      <span className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-background/80 text-foreground opacity-0 backdrop-blur transition-opacity duration-500 group-hover:opacity-100">
        <Expand aria-hidden className="size-4" />
      </span>
    </button>
  );
}
