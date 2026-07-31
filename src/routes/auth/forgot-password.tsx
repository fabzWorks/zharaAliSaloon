import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthLayout, authFieldClass, authLabelClass } from "@/components/templates/AuthLayout";
import { LuxeButton } from "@/components/atoms/LuxeButton";

export const Route = createFileRoute("/auth/forgot-password")({
  component: ForgotPasswordPage,
  head: () => ({
    meta: [
      { title: "Reset Your Password | Zahra Ali Beauty Atelier" },
      { name: "description", content: "Request a password reset link for your Zahra Ali Beauty Atelier client account." },
      { property: "og:title", content: "Reset Your Password | Zahra Ali Beauty Atelier" },
      { property: "og:description", content: "We'll email you a secure reset link." },
    ],
  }),
});

function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);

  return (
    <AuthLayout
      eyebrow="Account recovery"
      title="Reset your password"
      description="Enter your email and we'll send a secure reset link."
      footer={
        <>
          Remembered it?{" "}
          <Link to="/auth/login" className="underline-sweep text-accent">
            Back to sign in
          </Link>
        </>
      }
    >
      {sent ? (
        <div className="rounded-xl border border-accent/40 bg-secondary/50 p-6">
          <p className="font-display text-2xl">Check your inbox</p>
          <p className="mt-2 text-sm text-muted-foreground">
            If an account exists for that email, a reset link is on its way.
          </p>
        </div>
      ) : (
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div>
            <label className={authLabelClass} htmlFor="fp-email">
              Email
            </label>
            <input id="fp-email" type="email" required className={authFieldClass} placeholder="you@example.com" />
          </div>
          <LuxeButton type="submit" size="lg" className="w-full">
            Send reset link
          </LuxeButton>
        </form>
      )}
    </AuthLayout>
  );
}
