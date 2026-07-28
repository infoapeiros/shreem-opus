import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Shreem Eco Ventures LLP — Ahmedabad, India" },
      { name: "description", content: "Get in touch with Shreem Eco Ventures LLP — Pushkar Industrial Hub, Ahmedabad. Phone: +91 96620 78551 / +91 87803 08763. Email: shreem0222@gmail.com." },
      { property: "og:title", content: "Contact Us — Shreem Eco Ventures LLP" },
      { property: "og:description", content: "Reach our Ahmedabad office for quotes, samples and customer inquiries." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const info = [
  { Icon: MapPin, title: "Office Address", lines: ["Shed No. 67, Pushkar Industrial Hub", "Opp. Machchunagar", "Ahmedabad - 382445, Gujarat, India"] },
  { Icon: Phone, title: "Phone", lines: ["+91 96620 78551", "+91 87803 08763"], href: "tel:+919662078551" },
  { Icon: Mail, title: "Email", lines: ["shreem0222@gmail.com"], href: "mailto:shreem0222@gmail.com" },
  { Icon: Clock, title: "Business Hours", lines: ["Monday – Saturday", "9:30 AM – 6:30 PM IST"] },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact us"
        title="Let's start a conversation."
        subtitle="Reach out for quotes, samples, private label discussions or to schedule a factory visit."
      />

      <section className="py-16 bg-background">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            {info.map(({ Icon, title, lines, href }, i) => (
              <motion.a
                key={title}
                href={href || "#"}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-5 p-6 rounded-2xl border border-border bg-card hover:border-secondary/40 hover:shadow-elegant transition-all"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl gradient-primary text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="font-display font-semibold text-primary">{title}</div>
                  {lines.map((l) => <div key={l} className="text-sm text-muted-foreground">{l}</div>)}
                </div>
              </motion.a>
            ))}

            <div className="rounded-2xl overflow-hidden border border-border shadow-soft h-72">
              <iframe
                title="Shreem Eco Ventures LLP location"
                src="https://www.google.com/maps?q=Pushkar+Industrial+Hub+Ahmedabad&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card shadow-elegant p-8 md:p-10">
            <h2 className="font-display text-2xl font-bold text-primary">Send us a message</h2>
            <p className="text-sm text-muted-foreground mt-1">We'll respond within one business day.</p>

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="ok" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-8 text-center py-10">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full gradient-primary text-white">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-primary">Message sent</h3>
                  <p className="mt-2 text-muted-foreground">Our team will get back to you shortly.</p>
                  <button onClick={() => setSent(false)} className="mt-5 text-sm font-semibold text-secondary hover:underline">Send another</button>
                </motion.div>
              ) : (
                <motion.form key="f" onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-6 grid gap-4">
                  <Field label="Full Name" required />
                  <Field label="Email" type="email" required />
                  <Field label="Phone" type="tel" />
                  <Field label="Company" />
                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">Message</label>
                    <textarea rows={4} required className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-sm font-semibold text-white shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all">
                    Send Message <Send className="h-4 w-4" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">{label}</label>
      <input {...props} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition" />
    </div>
  );
}
