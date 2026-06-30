import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe2, Ship, CheckCircle2, Send } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/export-inquiry")({
  head: () => ({
    meta: [
      { title: "Export Inquiry — Bulk B2B & International Orders | Shreem Eco Ventures LLP" },
      {
        name: "description",
        content:
          "Send an export inquiry to Shreem Eco Ventures LLP — bulk orders of areca tableware, premium tea, cleaning products and ready gravies for international buyers.",
      },
      { property: "og:title", content: "Export Inquiry — Shreem Eco Ventures LLP" },
      {
        property: "og:description",
        content: "Bulk orders, international shipping and private label support.",
      },
      { property: "og:url", content: "/export-inquiry" },
    ],
    links: [{ rel: "canonical", href: "/export-inquiry" }],
  }),
  component: ExportPage,
});

const highlights = [
  {
    Icon: Globe2,
    title: "International Markets",
    text: "Active buyers across the USA, Canada, Australia, New Zealand, and parts of South Africa.",
  },
  {
    Icon: Ship,
    title: "Bulk Order Support",
    text: "From 20ft samples to 40ft full container loads — we're container-ready.",
  },
];

function ExportPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Export inquiry"
        title="Built for global buyers."
        subtitle="Send us your requirement and our export desk will respond within one business day with quotation, lead time and shipping details."
      />

      <section className="py-10 md:py-12 bg-background">
        <div className="container-px mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Left Column (approximately 35% width) */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-6">
            {highlights.map(({ Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-7 rounded-2xl bg-card border border-border shadow-soft"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-accent text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-muted-foreground">{text}</p>
              </motion.div>
            ))}
          </div>

          {/* Right Column (approximately 65% width) */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className="rounded-3xl border border-border bg-card shadow-elegant p-6 md:p-8 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="ok"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10"
                  >
                    <div className="mx-auto grid h-16 w-16 place-items-center rounded-full gradient-primary text-white">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-bold text-primary">
                      Inquiry received
                    </h3>
                    <p className="mt-2 text-muted-foreground max-w-md mx-auto">
                      Thank you. Our export desk will reach out to you within one business day with
                      a detailed quotation.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-6 text-sm font-semibold text-secondary hover:underline"
                    >
                      Send another inquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                    className="grid sm:grid-cols-2 gap-x-5 gap-y-3.5"
                  >
                    <div className="sm:col-span-2 space-y-1 mb-2">
                      <h2 className="font-display text-2xl font-bold text-primary">Export Inquiry</h2>
                      <p className="text-muted-foreground text-sm">
                        Tell us about your requirements and our export team will get back to you.
                      </p>
                    </div>
                    <Field label="Full Name" name="name" required />
                    <Field label="Company Name" name="company" required />
                    <Field label="Country" name="country" required />
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Phone Number" name="phone" type="tel" />
                    <Field
                      label="Product Interest"
                      name="product"
                      placeholder="e.g. Areca plates, Tea"
                    />
                    <Field
                      label="Quantity Requirement"
                      name="qty"
                      placeholder="e.g. 1 x 20ft container"
                      className="sm:col-span-2"
                    />
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1.5">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
                        placeholder="Tell us about your business and target ports..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-7 py-3 text-sm font-semibold text-white shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all"
                    >
                      Submit <Send className="h-4 w-4" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  className = "",
  ...props
}: { label: string; className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1.5">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
      />
    </div>
  );
}
