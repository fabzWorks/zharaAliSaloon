import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthLayout } from "@/components/templates/AuthLayout";
import { LuxeButton } from "@/components/atoms/LuxeButton";
import { Pill } from "@/components/atoms/Pill";
import { services } from "@/data/services";
import { branches } from "@/data/site";

export const Route = createFileRoute("/auth/onboarding")({
  component: OnboardingPage,
  head: () => ({
    meta: [
      { title: "Personalise Your Profile | Zahra Ali Beauty Atelier" },
      { name: "description", content: "Tell Zahra Ali your preferred services, branch and occasion to personalise your bookings." },
      { property: "og:title", content: "Personalise Your Profile | Zahra Ali Beauty Atelier" },
      { property: "og:description", content: "A two-step setup so your bookings arrive pre-filled." },
    ],
  }),
});

const occasions = ["Wedding", "Engagement", "Eid", "Party", "Photoshoot", "Self care"];

function OnboardingPage() {
  const [step, setStep] = useState(0);
  const [picks, setPicks] = useState<string[]>([]);
  const [occasion, setOccasion] = useState("");
  const [branch, setBranch] = useState(branches[0].id);

  const toggle = (id: string) => setPicks((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  return (
    <AuthLayout
      eyebrow={`Step ${Math.min(step + 1, 3)} of 3`}
      title="Let's personalise your atelier"
      description="Three quick questions so every booking arrives pre-filled."
    >
      <div className="mb-8 h-1 overflow-hidden rounded-full bg-secondary">
        <div className="h-full gradient-accent transition-all duration-700" style={{ width: `${((step + 1) / 3) * 100}%` }} />
      </div>

      {step === 0 && (
        <div className="space-y-5">
          <p className="eyebrow">Which services interest you?</p>
          <div className="flex flex-wrap gap-2">
            {services.slice(0, 10).map((s) => (
              <Pill key={s.id} active={picks.includes(s.id)} onClick={() => toggle(s.id)}>
                {s.name}
              </Pill>
            ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-5">
          <p className="eyebrow">What are you preparing for?</p>
          <div className="flex flex-wrap gap-2">
            {occasions.map((o) => (
              <Pill key={o} active={occasion === o} onClick={() => setOccasion(o)}>
                {o}
              </Pill>
            ))}
          </div>
        </div>
      )}

      {step >= 2 && (
        <div className="space-y-5">
          <p className="eyebrow">Preferred branch</p>
          <div className="space-y-3">
            {branches.map((b) => (
              <button
                key={b.id}
                type="button"
                onClick={() => setBranch(b.id)}
                className={`block w-full rounded-xl border p-4 text-left transition-colors duration-400 ${
                  branch === b.id ? "border-accent glow-accent" : "border-border hover:border-accent"
                }`}
              >
                <span className="block text-sm">{b.name}</span>
                <span className="text-xs text-muted-foreground">{b.address}</span>
              </button>
            ))}
          </div>
          {step > 2 && (
            <p className="rounded-lg border border-accent/40 bg-secondary/60 p-3 text-xs text-foreground">
              All set — your preferences are saved locally in this demo.{" "}
              <Link to="/booking" className="underline-sweep text-accent">
                Book your first appointment →
              </Link>
            </p>
          )}
        </div>
      )}

      <div className="mt-8 flex gap-3">
        {step > 0 && (
          <LuxeButton variant="outline" onClick={() => setStep((s) => s - 1)}>
            Back
          </LuxeButton>
        )}
        <LuxeButton className="flex-1" onClick={() => setStep((s) => s + 1)} disabled={step > 2}>
          {step >= 2 ? "Finish setup" : "Continue"}
        </LuxeButton>
      </div>
    </AuthLayout>
  );
}
