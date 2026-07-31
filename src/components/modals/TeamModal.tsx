import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { LuxeButton } from "@/components/atoms/LuxeButton";
import { Pill } from "@/components/atoms/Pill";
import type { TeamMember } from "@/types";

export function TeamModal({
  member,
  onClose,
  onBook,
}: {
  member: TeamMember | null;
  onClose: () => void;
  onBook: (m: TeamMember) => void;
}) {
  return (
    <Dialog open={!!member} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-h-[92vh] max-w-3xl overflow-y-auto rounded-2xl border-border bg-card p-0">
        {member && (
          <div className="grid gap-0 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)]">
            <div className="relative min-h-64 overflow-hidden">
              <img src={member.image} alt={member.name} className="size-full object-cover" width={1000} height={1250} />
            </div>
            <div className="space-y-5 p-8">
              <DialogHeader className="text-left">
                <p className="eyebrow">{member.role}</p>
                <DialogTitle className="mt-2 font-display text-4xl font-light">{member.name}</DialogTitle>
                <DialogDescription className="text-sm text-accent">{member.experience} of experience</DialogDescription>
              </DialogHeader>

              <p className="text-sm leading-relaxed text-muted-foreground">{member.bio}</p>

              <div>
                <p className="eyebrow">Specialties</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {member.specialties.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="eyebrow">Skill focus</p>
                {member.skills.map((skill) => (
                  <div key={skill.label}>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{skill.label}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-secondary">
                      <div className="h-full rounded-full gradient-accent transition-all duration-1000" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground">Speaks {member.languages.join(", ")}</p>

              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em]">
                {member.socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer noopener" className="underline-sweep text-accent">
                    {s.label}
                  </a>
                ))}
              </div>

              <LuxeButton className="w-full" onClick={() => onBook(member)}>
                Book with {member.name.split(" ")[0]}
              </LuxeButton>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
