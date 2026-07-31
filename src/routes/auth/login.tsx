import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthLayout, authFieldClass, authLabelClass } from "@/components/templates/AuthLayout";
import { LuxeButton } from "@/components/atoms/LuxeButton";

export const Route = createFileRoute("/auth/login")({
  component: LoginPage,
  head: () => ({
    meta: [
      { title: "Client Login | Zahra Ali Beauty Atelier" },
      { name: "description", content: "Sign in to manage your Zahra Ali appointments, packages and bridal timeline." },
      { property: "og:title", content: "Client Login | Zahra Ali Beauty Atelier" },
      { property: "og:description", content: "Access your Zahra Ali client account and bookings." },
    ],
  }),
});

function LoginPage() {
  const [sent, setSent] = useState(false);

  return (
    <AuthLayout
      eyebrow="Welcome back"
      title="Sign in to your account"
      description="Manage appointments, view your bridal timeline and reorder favourite services."
      footer={
        <>
          New to Zahra Ali?{" "}
          <Link to="/auth/signup" className="underline-sweep text-accent">
            Create an account
          </Link>
        </>
      }
    >
      <form
        className="space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <div>
          <label className={authLabelClass} htmlFor="email">
            Email
          </label>
          <input id="email" type="email" required className={authFieldClass} placeholder="you@example.com" />
        </div>
        <div>
          <label className={authLabelClass} htmlFor="password">
            Password
          </label>
          <input id="password" type="password" required minLength={6} className={authFieldClass} placeholder="••••••••" />
        </div>
        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center gap-2 text-muted-foreground">
            <input type="checkbox" className="size-3.5 accent-current" /> Remember me
          </label>
          <Link to="/auth/forgot-password" className="underline-sweep text-accent">
            Forgot password?
          </Link>
        </div>
        <LuxeButton type="submit" size="lg" className="w-full">
          Sign in
        </LuxeButton>
        {sent && (
          <p className="rounded-lg border border-accent/40 bg-secondary/60 p-3 text-xs text-foreground">
            Demo mode — connect a backend to complete authentication.
          </p>
        )}
      </form>
    </AuthLayout>
  );
}
