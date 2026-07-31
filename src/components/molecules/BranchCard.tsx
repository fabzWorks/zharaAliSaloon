import { Clock, MapPin, Phone } from "lucide-react";
import type { Branch } from "@/types";
import { LuxeButton } from "@/components/atoms/LuxeButton";
import { Pill } from "@/components/atoms/Pill";

export function BranchCard({
  branch,
  active,
  onSelect,
  onBook,
}: {
  branch: Branch;
  active?: boolean;
  onSelect: (b: Branch) => void;
  onBook: (b: Branch) => void;
}) {
  return (
    <article
      className={`lift flex h-full flex-col gap-4 rounded-2xl border p-6 transition-colors duration-500 ${
        active ? "border-accent bg-card glow-accent" : "border-border bg-card"
      }`}
    >
      <button type="button" onClick={() => onSelect(branch)} className="text-left focus-visible:outline-none">
        <p className="eyebrow">{branch.city}</p>
        <h3 className="mt-2 text-2xl leading-tight underline-sweep inline-block">{branch.name}</h3>
      </button>
      <ul className="space-y-2 text-sm text-muted-foreground">
        <li className="flex gap-2">
          <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" />
          {branch.address}
        </li>
        <li className="flex gap-2">
          <Phone aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" />
          <a href={`tel:${branch.phone.replace(/\s/g, "")}`} className="underline-sweep">
            {branch.phone}
          </a>
        </li>
        <li className="flex gap-2">
          <Clock aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" />
          {branch.hours}
        </li>
      </ul>
      <div className="flex flex-wrap gap-2">
        {branch.amenities.map((a) => (
          <Pill key={a}>{a}</Pill>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        <LuxeButton size="sm" onClick={() => onBook(branch)}>
          Book here
        </LuxeButton>
        <a href={branch.mapUrl} target="_blank" rel="noreferrer noopener">
          <LuxeButton size="sm" variant="outline" type="button">
            Open in maps
          </LuxeButton>
        </a>
      </div>
    </article>
  );
}
