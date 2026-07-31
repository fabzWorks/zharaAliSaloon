import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Mail, MessageCircle, Phone } from "lucide-react";
import { contact } from "@/data/site";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { Reveal } from "@/components/atoms/Reveal";
import { LuxeButton } from "@/components/atoms/LuxeButton";
import { cn } from "@/lib/utils";

const fieldClass =
  "h-11 w-full rounded-lg border border-input bg-background px-4 text-sm outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-accent";
const labelClass = "mb-2 block text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  const set = (k: string, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email.";
    if (form.message.trim().length < 10) next.message = "Tell us a little more (10+ characters).";
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    // Replace with a server function / API call later.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Say hello"
            title="Talk to our concierge"
            description="Questions about dates, pricing or a custom plan? We usually reply within two hours."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="space-y-4">
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noreferrer noopener"
              className="lift flex items-center gap-4 rounded-2xl surface-luxe p-6"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-full gradient-accent text-primary-foreground">
                <MessageCircle aria-hidden className="size-5" />
              </span>
              <span>
                <span className="eyebrow block">WhatsApp</span>
                <span className="mt-1 block font-display text-xl">{contact.whatsapp}</span>
              </span>
            </a>
            <a href={contact.phoneHref} className="lift flex items-center gap-4 rounded-2xl surface-luxe p-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-accent text-accent">
                <Phone aria-hidden className="size-5" />
              </span>
              <span>
                <span className="eyebrow block">Call the atelier</span>
                <span className="mt-1 block font-display text-xl">{contact.phone}</span>
              </span>
            </a>
            <a href={contact.emailHref} className="lift flex items-center gap-4 rounded-2xl surface-luxe p-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-accent text-accent">
                <Mail aria-hidden className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="eyebrow block">Email</span>
                <span className="mt-1 block truncate font-display text-xl">{contact.email}</span>
              </span>
            </a>
            <p className="rounded-2xl border border-border p-6 text-sm text-muted-foreground">{contact.hours}</p>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-2xl surface-luxe p-7 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="ct-name">
                    Name
                  </label>
                  <input id="ct-name" className={fieldClass} value={form.name} onChange={(e) => set("name", e.target.value)} aria-invalid={!!errors.name} />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label className={labelClass} htmlFor="ct-email">
                    Email
                  </label>
                  <input id="ct-email" type="email" className={fieldClass} value={form.email} onChange={(e) => set("email", e.target.value)} aria-invalid={!!errors.email} />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label className={labelClass} htmlFor="ct-subject">
                  Subject
                </label>
                <input id="ct-subject" className={fieldClass} value={form.subject} onChange={(e) => set("subject", e.target.value)} placeholder="Bridal enquiry for December" />
              </div>
              <div>
                <label className={labelClass} htmlFor="ct-message">
                  Message
                </label>
                <textarea
                  id="ct-message"
                  rows={5}
                  className={cn(fieldClass, "h-auto py-3")}
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>

              {status === "sent" && (
                <p className="flex items-center gap-2 rounded-lg border border-accent/40 bg-secondary/60 p-3 text-sm text-foreground">
                  <CheckCircle2 aria-hidden className="size-4 text-accent" /> Message sent — we'll reply shortly.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 rounded-lg border border-destructive/40 p-3 text-sm text-destructive">
                  <AlertCircle aria-hidden className="size-4" /> Please fix the highlighted fields.
                </p>
              )}

              <LuxeButton type="submit" size="lg" className="w-full" disabled={status === "loading"}>
                {status === "loading" && <Loader2 aria-hidden className="size-4 animate-spin" />}
                {status === "loading" ? "Sending…" : "Send message"}
              </LuxeButton>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
