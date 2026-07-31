import { Quote } from "lucide-react";
import type { Testimonial } from "@/types";
import { StarRating } from "@/components/atoms/StarRating";

export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className="lift flex h-full flex-col gap-5 rounded-2xl surface-luxe p-7">
      <Quote aria-hidden className="size-6 text-accent" />
      <blockquote className="flex-1 font-display text-xl leading-relaxed">“{item.quote}”</blockquote>
      <figcaption className="flex items-center gap-3 border-t border-border pt-5">
        <img src={item.avatar} alt="" loading="lazy" className="size-11 rounded-full object-cover" width={88} height={88} />
        <div className="min-w-0">
          <p className="truncate text-sm">{item.name}</p>
          <p className="truncate text-xs text-muted-foreground">
            {item.occasion} · {item.date}
          </p>
        </div>
        <StarRating rating={item.rating} className="ml-auto shrink-0" />
      </figcaption>
    </figure>
  );
}
