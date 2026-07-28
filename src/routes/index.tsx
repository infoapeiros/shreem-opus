import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, ShieldCheck, Truck, HeartHandshake,
  Award, Recycle, Star, Quote, CheckCircle2,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Counter } from "@/components/site/Counter";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import arecaSegmentImg from "@/assets/plantin-disposable2.png";
import amruteySegmentImg from "@/assets/Amrutey_Front_Product.png";
import cleaningSegmentImg from "@/assets/BLS/chemicals/bright-9-all-purpose-cleaner-cum-sanitizer-concentrate.webp";
import happikeryImg from "@/assets/happykery/Makhani base gravy.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shreem Eco Ventures LLP — Areca Tableware, Premium Tea & Catering" },
      { name: "description", content: "Manufacturers of eco-friendly areca tableware and trusted suppliers of premium Amrutey tea, cleaning products, ready-to-eat gravies and outdoor catering — Ahmedabad, India. Export ready." },
      { property: "og:title", content: "Shreem Eco Ventures LLP — Quality Products for Homes, Hospitality & Global Markets" },
      { property: "og:description", content: "Eco-friendly areca tableware, premium tea, ready-to-eat gravies, cleaning supplies & catering — for businesses and individual customers alike." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const segments = [
  { title: "Areca - Plant In Disposable", desc: "100% biodegradable plates, bowls, trays & food packaging crafted from naturally fallen areca leaves.", img: arecaSegmentImg, to: "/products" },
  { title: "Amrutey Premium Tea", desc: "Hand-picked, full-bodied tea blends for hotels, retailers and discerning households.", img: amruteySegmentImg, to: "/products" },
  { title: "Puriora Cleaning Solutions", desc: "Our premium own brand of high-performance commercial, industrial, and household cleaning chemicals.", img: cleaningSegmentImg, to: "/products/puriora" },
  { title: "Happikery - Ready to Eat Gravy", desc: "Ready-to-eat gravies, sauces, biryani paste and more for restaurants and cloud kitchens.", img: happikeryImg, to: "/distributorship/happikery" },
];

const why = [
  { Icon: Award, title: "High Quality Standards", desc: "Every batch passes strict QC before it leaves the floor." },
  { Icon: Sparkles, title: "Competitive Pricing", desc: "In-house manufacturing keeps margins healthy for partners." },
  { Icon: Truck, title: "Bulk Supply Capability", desc: "Container-load and pan-India distribution, on schedule." },
  { Icon: Recycle, title: "Eco-Friendly Products", desc: "Biodegradable tableware that helps brands meet ESG goals." },
  { Icon: ShieldCheck, title: "Timely Delivery", desc: "Predictable lead times your kitchen and store can rely on." },
];

const trust = ["Quality Products", "Eco-Friendly Solutions", "Reliable Supply Chain", "Export Ready", "Customer Satisfaction"];

const testimonials = [
  { name: "The Flavour Junction", role: "Happikery Ready-to-Eat Gravies", text: "The Happikery gravies have helped us maintain consistent taste during busy hours. They save preparation time without compromising on quality." },
  { name: "Iyer's Authentic", role: "Amrutey Premium Tea", text: "Our customers appreciate the rich aroma and refreshing taste of Amrutey Tea. It has become a regular part of our menu." },
  { name: "Divine Dosa", role: "Happikery Sambar", text: "The Happikery Sambar delivers consistent flavour every day. It's reliable, convenient, and loved by our customers." },
  { name: "Kusines Catering", role: "Plant In Disposable Areca Tableware", text: "Plant In areca tableware has elevated our catering presentations. Strong, eco-friendly, and perfect for large events." },
  { name: "Future Foods Group", role: "Business Partner", text: "We've found Shreem Eco Ventures to be a dependable business partner with quality products and timely deliveries." },
  { name: "Padmavati Marketing", role: "Plant In Disposable", text: "Our customers appreciate the premium finish and durability of Plant In products. They've become one of our best-selling ranges." },
  { name: "Mahavir Traders", role: "Plant In Disposable Distributor", text: "Excellent product quality and consistent supply make Plant In an easy recommendation for our retail network." },
  { name: "Bothmal Disposable", role: "Plant In Disposable Dealer", text: "The variety and finish of Plant In disposable products have been well received by our customers. Great quality across the range." },
  { name: "Paresh Kumar", role: "Amrutey Premium Tea", text: "Amrutey Tea offers a rich flavour and consistent quality. It's a product I confidently recommend to my customers." },
  { name: "Nirwana Group", role: "Export & Multi-Product Partner", text: "Professional service, reliable documentation, and quality products have made Shreem Eco Ventures a trusted long-term supplier." },
];

function TestimonialsCarousel({ items }: { items: typeof testimonials }) {
  const pageCount = Math.ceil(items.length / 3);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (pageCount <= 1) return;
    const timer = setInterval(() => setPage((p) => (p + 1) % pageCount), 5500);
    return () => clearInterval(timer);
  }, [pageCount]);

  const visible = Array.from({ length: 3 }, (_, i) => items[(page * 3 + i) % items.length]);

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <AnimatePresence mode="popLayout" initial={false}>
        {visible.map((t, i) => (
          <motion.div
            key={`${page}-${t.name}`}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elegant transition-all relative"
          >
            <Quote className="absolute top-6 right-6 h-8 w-8 text-secondary/20" />
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-accent text-accent" />)}
            </div>
            <p className="text-foreground/85 leading-relaxed">{t.text}</p>
            <div className="mt-6 pt-5 border-t border-border">
              <div className="font-semibold text-primary">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO CAROUSEL */}
      <HeroCarousel />

      {/* TRUST STRIP */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-px mx-auto max-w-7xl py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm">
          {trust.map((t) => (
            <div key={t} className="flex items-center gap-2 opacity-90">
              <ShieldCheck className="h-4 w-4 text-accent" /> {t}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 bg-background">
        <div className="container-px mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary">About Shreem</span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary text-balance">
              Built on quality. Trusted by businesses and customers everywhere.
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              From our Ahmedabad facility, Shreem Eco Ventures LLP manufactures and supplies a curated portfolio of eco-friendly tableware, premium tea, gravies and cleaning solutions — crafted for businesses and individual customers who refuse to compromise.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-5 text-left border-t border-border pt-10"
          >
            {["ISO-grade quality control", "End-to-end private labeling", "International packaging norms", "Pan-India distribution network"].map((i) => (
              <li key={i} className="flex items-center gap-3 text-sm md:text-base text-foreground/85">
                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" /> {i}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10"
          >
            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-primary border-b-2 border-accent pb-1 hover:gap-3 transition-all">
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PRODUCT SEGMENTS */}
      <section className="py-24 bg-surface">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary">What we offer</span>
              <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary">Four product segments. One trusted partner.</h2>
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors">
              View full catalog <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {segments.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-soft hover:shadow-elegant hover:-translate-y-2 transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" width={1024} height={768}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <Link to={s.to} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary group-hover:gap-2.5 transition-all">
                    Discover <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div aria-hidden className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-background">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary">Why Shreem</span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary">Built for quality at every scale.</h2>
            <p className="mt-4 text-muted-foreground">Five reasons businesses and customers choose us as a long-term supply partner.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {why.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-7 rounded-2xl border border-border bg-card hover:border-secondary/40 hover:shadow-elegant transition-all"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary/10 text-secondary group-hover:gradient-primary group-hover:text-white transition-all">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.62 0.17 145 / 0.3), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.78 0.16 75 / 0.25), transparent 50%)" }} />
        <div className="container-px mx-auto max-w-7xl relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: 500, s: "+", l: "Happy Clients" },
            { v: 1000, s: "+", l: "Orders Delivered" },
            { v: 50, s: "+", l: "Product Variants" },
            { v: 100, s: "%", l: "Quality Focus" },
          ].map((stat) => (
            <div key={stat.l}>
              <div className="font-display text-4xl md:text-6xl font-bold text-accent">
                <Counter to={stat.v} suffix={stat.s} />
              </div>
              <div className="mt-2 text-sm uppercase tracking-widest opacity-80">{stat.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-surface">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary">Client voices</span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary">Trusted by businesses and customers alike.</h2>
          </div>
          <TestimonialsCarousel items={testimonials} />
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-background">
        <div className="container-px mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl gradient-primary p-10 md:p-16 text-center text-white shadow-elegant">
            <div aria-hidden className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
            <div aria-hidden className="absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <HeartHandshake className="h-12 w-12 mx-auto text-accent" />
              <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold">Looking for a reliable supply partner?</h2>
              <p className="mt-4 max-w-2xl mx-auto text-white/85">Let's build a long-term relationship — from sample to container shipment.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="rounded-full bg-white text-primary px-7 py-3.5 text-sm font-semibold hover:bg-accent hover:text-primary transition-colors">
                  Contact Us
                </Link>
                <Link to="/export-inquiry" className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold hover:bg-white/10 transition-colors">
                  Send Export Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
