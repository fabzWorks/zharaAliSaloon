import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left", className)}>
      {eyebrow && (
        <p className={cn("eyebrow flex items-center gap-3", align === "center" ? "justify-center" : "justify-start")}>
          <span className="h-px w-8 bg-accent" aria-hidden />
          {eyebrow}
          <span className="h-px w-8 bg-accent" aria-hidden />
        </p>
      )}
      <h2 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>}
    </div>
  );
}
