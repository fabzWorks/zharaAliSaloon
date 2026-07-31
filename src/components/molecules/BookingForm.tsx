import { useMemo, useState, type FormEvent } from "react";
import { CalendarDays, CheckCircle2, Loader2 } from "lucide-react";
import { services } from "@/data/services";
import { packages } from "@/data/packages";
import { branches, bookingSlots, contact } from "@/data/site";
import { todayISO } from "@/utils/format";
import { LuxeButton } from "@/components/atoms/LuxeButton";
import { cn } from "@/lib/utils";

interface BookingFormProps {
  defaultServiceId?: string;
  defaultPackageId?: string;
  defaultBranchId?: string;
  compact?: boolean;
  onSuccess?: () => void;
}

type Errors = Partial<Record<"name" | "phone" | "email" | "service" | "date" | "time" | "branch", string>>;

const fieldClass =
  "h-11 w-full rounded-lg border border-input bg-background px-4 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-accent";
const labelClass = "mb-2 block text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground";

/**
 * Frontend-only booking form. `submitBooking` is the single seam to replace
 * with a real API / server function later.
 */
async function submitBooking(payload: Record<string, string>) {
  await new Promise((r) => setTimeout(r, 900));
  // eslint-disable-next-line no-console
  console.info("[booking] draft submitted", payload);
  return { reference: `ZR-${Math.floor(100000 + Math.random() * 899999)}` };
}

export function BookingForm({
  defaultServiceId,
  defaultPackageId,
  defaultBranchId,
  compact,
  onSuccess,
}: BookingFormProps) {
  const options = useMemo(
    () => [
      ...packages.map((p) => ({ value: `pkg:${p.id}`, label: `Package · ${p.name}` })),
      ...services.map((s) => ({ value: `svc:${s.id}`, label: `Service · ${s.name}` })),
    ],
    [],
  );

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultPackageId ? `pkg:${defaultPackageId}` : defaultServiceId ? `svc:${defaultServiceId}` : "",
    date: "",
    time: "",
    branch: defaultBranchId ?? branches[0].id,
    notes: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [reference, setReference] = useState("");

  const set = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const next: Errors = {};
    if (form.name.trim().length < 2) next.name = "Please enter your full name.";
    if (!/^[+0-9\s-]{9,}$/.test(form.phone.trim())) next.phone = "Enter a reachable phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = "Enter a valid email address.";
    if (!form.service) next.service = "Choose a service or package.";
    if (!form.date) next.date = "Pick a preferred date.";
    if (!form.time) next.time = "Pick a preferred time.";
    if (!form.branch) next.branch = "Choose a branch.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    const res = await submitBooking(form);
    setReference(res.reference);
    setStatus("done");
    onSuccess?.();
  };

  if (status === "done") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-accent/40 bg-secondary/40 p-8 text-center">
        <CheckCircle2 aria-hidden className="size-10 text-accent" />
        <h3 className="text-3xl">Your appointment is reserved</h3>
        <p className="text-sm text-muted-foreground">
          Reference <span className="tracking-[0.2em] text-accent">{reference}</span>. Our concierge will confirm on
          WhatsApp within two hours.
        </p>
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          <a href={contact.whatsappHref} target="_blank" rel="noreferrer noopener">
            <LuxeButton size="sm" type="button">
              Message on WhatsApp
            </LuxeButton>
          </a>
          <LuxeButton
            size="sm"
            variant="outline"
            onClick={() => {
              setStatus("idle");
              setForm((f) => ({ ...f, name: "", phone: "", email: "", notes: "" }));
            }}
          >
            Book another
          </LuxeButton>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className={cn("grid gap-4", compact ? "sm:grid-cols-2" : "sm:grid-cols-2")}>
        <div>
          <label className={labelClass} htmlFor="bk-name">
            Full name
          </label>
          <input
            id="bk-name"
            className={fieldClass}
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Ayesha Khan"
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="bk-phone">
            Phone / WhatsApp
          </label>
          <input
            id="bk-phone"
            className={fieldClass}
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="+92 300 0000000"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="bk-email">
          Email
        </label>
        <input
          id="bk-email"
          type="email"
          className={fieldClass}
          value={form.email}
          onChange={(e) => set("email", e.target.value)}
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
      </div>

      <div>
        <label className={labelClass} htmlFor="bk-service">
          Service or package
        </label>
        <select
          id="bk-service"
          className={fieldClass}
          value={form.service}
          onChange={(e) => set("service", e.target.value)}
          aria-invalid={!!errors.service}
        >
          <option value="">Select…</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="bk-date">
            Preferred date
          </label>
          <div className="relative">
            <input
              id="bk-date"
              type="date"
              min={todayISO()}
              className={fieldClass}
              value={form.date}
              onChange={(e) => set("date", e.target.value)}
              aria-invalid={!!errors.date}
            />
            <CalendarDays aria-hidden className="pointer-events-none absolute right-3 top-3.5 size-4 text-muted-foreground" />
          </div>
          {errors.date && <p className="mt-1 text-xs text-destructive">{errors.date}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="bk-branch">
            Branch
          </label>
          <select
            id="bk-branch"
            className={fieldClass}
            value={form.branch}
            onChange={(e) => set("branch", e.target.value)}
          >
            {branches.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <fieldset>
        <legend className={labelClass}>Preferred time</legend>
        <div className="flex flex-wrap gap-2">
          {bookingSlots.map((slot) => (
            <button
              key={slot.id}
              type="button"
              disabled={!slot.available}
              onClick={() => set("time", slot.time)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs tracking-[0.12em] transition-all duration-400",
                form.time === slot.time
                  ? "border-transparent gradient-accent text-primary-foreground glow-accent"
                  : "border-border text-muted-foreground hover:border-accent hover:text-accent",
                !slot.available && "cursor-not-allowed line-through opacity-40 hover:border-border hover:text-muted-foreground",
              )}
            >
              {slot.time}
            </button>
          ))}
        </div>
        {errors.time && <p className="mt-1 text-xs text-destructive">{errors.time}</p>}
      </fieldset>

      <div>
        <label className={labelClass} htmlFor="bk-notes">
          Notes (optional)
        </label>
        <textarea
          id="bk-notes"
          rows={3}
          className={cn(fieldClass, "h-auto py-3")}
          value={form.notes}
          onChange={(e) => set("notes", e.target.value)}
          placeholder="Allergies, inspiration links, event timings…"
        />
      </div>

      <LuxeButton type="submit" size="lg" className="w-full" disabled={status === "loading"}>
        {status === "loading" && <Loader2 aria-hidden className="size-4 animate-spin" />}
        {status === "loading" ? "Reserving…" : "Confirm appointment"}
      </LuxeButton>
      <p className="text-center text-xs text-muted-foreground">{contact.bookingNote}</p>
    </form>
  );
}
