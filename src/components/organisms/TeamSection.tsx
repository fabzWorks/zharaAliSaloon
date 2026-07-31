import { useState } from "react";
import { team } from "@/data/team";
import type { TeamMember } from "@/types";
import { TeamCard } from "@/components/molecules/TeamCard";
import { TeamModal } from "@/components/modals/TeamModal";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { Reveal } from "@/components/atoms/Reveal";
import { useBooking } from "@/store/booking-store";

export function TeamSection() {
  const [selected, setSelected] = useState<TeamMember | null>(null);
  const { openBooking } = useBooking();

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="The atelier"
          title="Artists you can ask for by name"
          description="Every booking is assigned to a specialist, not a rota. Tap a profile to see their work and skills."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, i) => (
          <Reveal key={member.id} delay={i * 70}>
            <TeamCard member={member} onSelect={setSelected} />
          </Reveal>
        ))}
      </div>

      <TeamModal
        member={selected}
        onClose={() => setSelected(null)}
        onBook={(m) => {
          setSelected(null);
          openBooking({ source: `team-${m.slug}` });
        }}
      />
    </section>
  );
}
