import { Link } from "@tanstack/react-router";
import { brand } from "@/data/site";
import { cn } from "@/lib/utils";

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link to="/" aria-label={`${brand.name} home`} className={cn("group inline-flex items-center gap-3", className)}>
      <span className="relative grid size-10 place-items-center rounded-full gradient-accent shimmer text-primary-foreground shadow-soft transition-transform duration-500 group-hover:rotate-12">
        <span className="font-display text-lg leading-none">Z</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl tracking-[0.28em] uppercase">{brand.name}</span>
        {!compact && (
          <span className="mt-1 text-[0.55rem] tracking-[0.34em] uppercase text-muted-foreground">{brand.suffix}</span>
        )}
      </span>
    </Link>
  );
}
