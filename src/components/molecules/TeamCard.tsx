import type { TeamMember } from "@/types";

export function TeamCard({ member, onSelect }: { member: TeamMember; onSelect: (m: TeamMember) => void }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(member)}
      aria-label={`View profile of ${member.name}`}
      className="lift zoom-media group relative block w-full overflow-hidden rounded-2xl surface-luxe text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="relative aspect-4/5 overflow-hidden">
        <img src={member.image} alt={member.name} loading="lazy" className="size-full object-cover" width={1000} height={1250} />
        <div className="absolute inset-0 veil" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
          <p className="text-[0.6rem] uppercase tracking-[0.26em] opacity-80">{member.role}</p>
          <h3 className="mt-1 font-display text-2xl">{member.name}</h3>
          <p className="mt-2 max-h-0 overflow-hidden text-xs opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-90">
            {member.experience} · {member.specialties.slice(0, 2).join(" · ")}
          </p>
        </div>
      </div>
    </button>
  );
}
