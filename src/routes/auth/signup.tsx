import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthLayout, authFieldClass, authLabelClass } from "@/components/templates/AuthLayout";
import { LuxeButton } from "@/components/atoms/LuxeButton";

export const Route = createFileRoute("/auth/signup")({
  component: SignupPage,
  head: () => ({
    meta: [
      { title: "Create an Account | Zahra Ali Beauty Atelier" },
      { name: "description", content: "Create a Zahra Ali client account to book faster and track your bridal plan." },
      { property: "og:title", content: "Create an Account | Zahra Ali Beauty Atelier" },
      { property: "og:description", content: "Join Zahra Ali for faster booking and member offers." },
    ],
  }),
});

function SignupPage() {
  const [done, setDone] = useState(false);

  return (
    <AuthLayout
      eyebrow="Join the atelier"
      title="Create your account"
      description="Faster booking, saved preferences and early access to bridal dates."
      footer={
        <>
          Already a client?{" "}
          <Link to="/auth/login" className="underline-sweep text-accent">
            Sign in
          </Link>
        </>
      }
    >
      <form
        className="space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          setDone(true);
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={authLabelClass} htmlFor="first">
              First name
            </label>
            <input id="first" required className={authFieldClass} placeholder="Ayesha" />
          </div>
          <div>
            <label className={authLabelClass} htmlFor="last">
              Last name
            </label>
            <input id="last" required className={authFieldClass} placeholder="Khan" />
          </div>
        </div>
        <div>
          <label className={authLabelClass} htmlFor="su-email">
            Email
          </label>
          <input id="su-email" type="email" required className={authFieldClass} placeholder="you@example.com" />
        </div>
        <div>
          <label className={authLabelClass} htmlFor="su-phone">
            Phone
          </label>
          <input id="su-phone" required className={authFieldClass} placeholder="+92 300 0000000" />
        </div>
        <div>
          <label className={authLabelClass} htmlFor="su-pass">
            Password
          </label>
          <input id="su-pass" type="password" required minLength={6} className={authFieldClass} placeholder="At least 6 characters" />
        </div>
        <LuxeButton type="submit" size="lg" className="w-full">
          Create account
        </LuxeButton>
        {done && (
          <p className="rounded-lg border border-accent/40 bg-secondary/60 p-3 text-xs text-foreground">
            Account draft saved.{" "}
            <Link to="/auth/onboarding" className="underline-sweep text-accent">
              Continue to onboarding →
            </Link>
          </p>
        )}
      </form>
    </AuthLayout>
  );
}
