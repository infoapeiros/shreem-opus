import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-surface border-b border-border">
      <div aria-hidden className="absolute -top-24 -right-24 h-80 w-80 rounded-full gradient-primary opacity-20 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full gradient-accent opacity-15 blur-3xl" />
      <div className="container-px mx-auto max-w-7xl py-20 md:py-28 relative">
        {eyebrow && (
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-secondary mb-4">
            {eyebrow}
          </span>
        )}
        <h1 className="font-display text-4xl md:text-6xl font-bold text-primary max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>}
      </div>
    </section>
  );
}

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  // simple CSS-driven reveal wrapper
  return (
    <div
      style={{ animationDelay: `${delay}ms` }}
      className="opacity-0 animate-[fade-in_0.7s_ease-out_forwards]"
    >
      {children}
    </div>
  );
}
