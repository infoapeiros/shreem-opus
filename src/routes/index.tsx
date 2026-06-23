import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Leaf, Sparkles, ShieldCheck, Truck, HeartHandshake,
  Award, Recycle, Globe2, Headphones, Star, Quote, ChevronDown,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Counter } from "@/components/site/Counter";
import heroImg from "@/assets/hero.jpg";
import arecaImg from "@/assets/areca.jpg";
import teaImg from "@/assets/tea.jpg";
import cleaningImg from "@/assets/cleaning.jpg";
import gravyImg from "@/assets/gravy.jpg";
import cateringImg from "@/assets/catering.jpg";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shreem Industries LLP — Areca Tableware, Premium Tea & Catering" },
      { name: "description", content: "Manufacturers of eco-friendly areca tableware and trusted suppliers of premium Amrutey tea, cleaning products, ready-to-eat gravies and outdoor catering — Ahmedabad, India. Export ready." },
      { property: "og:title", content: "Shreem Industries LLP — Quality Products for Hospitality, Retail & Global Markets" },
      { property: "og:description", content: "Eco-friendly areca tableware, premium tea, ready-to-eat gravies, cleaning supplies & catering — built for hotels, restaurants and exporters." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const segments = [
  { title: "Areca Tablewares", desc: "100% biodegradable plates, bowls, trays & food packaging crafted from naturally fallen areca leaves.", img: arecaImg, to: "/products" },
  { title: "Amrutey Premium Tea", desc: "Hand-picked, full-bodied tea blends for hotels, retailers and discerning households.", img: teaImg, to: "/products" },
  { title: "Cleaning Products", desc: "High-performance commercial and industrial cleaners that meet hospitality standards.", img: cleaningImg, to: "/products" },
  { title: "Ready-to-Eat Gravies", desc: "Restaurant-quality Punjabi, Mughlai, South Indian and Chinese base sauces.", img: gravyImg, to: "/products" },
  { title: "Outdoor Catering", desc: "Full-service catering for corporate, social and large-scale events across Gujarat.", img: cateringImg, to: "/services" },
];

const why = [
  { Icon: Award, title: "High Quality Standards", desc: "Every batch passes strict QC before it leaves the floor." },
  { Icon: Sparkles, title: "Competitive Pricing", desc: "In-house manufacturing keeps margins healthy for partners." },
  { Icon: Truck, title: "Bulk Supply Capability", desc: "Container-load and pan-India distribution, on schedule." },
  { Icon: Recycle, title: "Eco-Friendly Products", desc: "Biodegradable tableware that helps brands meet ESG goals." },
  { Icon: ShieldCheck, title: "Timely Delivery", desc: "Predictable lead times your kitchen and store can rely on." },
  { Icon: Headphones, title: "Customer Support", desc: "A dedicated account manager for every B2B client." },
];

const trust = ["Quality Products", "Eco-Friendly Solutions", "Reliable Supply Chain", "Export Ready", "Customer Satisfaction"];

const testimonials = [
  { name: "Rakesh Mehta", role: "Procurement Head, Hotel Group", text: "Shreem's areca plates upgraded the perception of our breakfast buffet overnight. Quality is incredibly consistent." },
  { name: "Priya Sharma", role: "Owner, Cafe Chain", text: "Their Amrutey tea is the best decision we made for our menu. Customers ask which brand it is — every single day." },
  { name: "James O'Connor", role: "Importer, UK", text: "Reliable export partner. Documentation is on point and packaging holds up beautifully across the supply chain." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Shreem Industries manufacturing facility producing areca tableware"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div aria-hidden className="absolute top-20 right-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl animate-float" />
        <div aria-hidden className="absolute bottom-20 left-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

        <div className="container-px mx-auto max-w-7xl relative z-10 py-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white border border-white/20"
          >
            <Leaf className="h-3.5 w-3.5 text-accent" /> Made in Ahmedabad · Export Ready
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="mt-6 max-w-4xl font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05]"
          >
            Delivering Quality Products for{" "}
            <span className="text-gradient-accent">Hospitality, Retail & Global Markets</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg md:text-xl text-white/85 leading-relaxed"
          >
            Manufacturers of eco-friendly areca tablewares and trusted suppliers of premium tea, cleaning products, ready-to-eat gravies and catering solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link to="/products" className="group inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-sm font-semibold text-white shadow-elegant hover:-translate-y-0.5 transition-all">
              Explore Products <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/export-inquiry" className="group inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-7 py-3.5 text-sm font-semibold text-primary hover:bg-white hover:-translate-y-0.5 transition-all">
              Export Inquiry <Globe2 className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/70"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </motion.div>
        </div>
      </section>

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
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img src={aboutImg} alt="Shreem Industries manufacturing team" loading="lazy" width={1024} height={768} className="rounded-2xl shadow-elegant w-full h-auto object-cover" />
            <div className="absolute -bottom-6 -right-6 rounded-2xl gradient-primary p-6 text-white shadow-elegant hidden sm:block">
              <div className="font-display text-3xl font-bold">15+</div>
              <div className="text-xs uppercase tracking-widest opacity-80">Years of Trust</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary">About Shreem</span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary">
              Built on quality. Trusted by hospitality leaders.
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              From our Ahmedabad facility, Shreem Industries LLP manufactures and supplies a curated portfolio of eco-friendly tableware, premium tea, gravies and cleaning solutions — engineered for restaurants, retailers and exporters who refuse to compromise.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
              {["ISO-grade quality control", "End-to-end private labeling", "International packaging norms", "Pan-India distribution network"].map((i) => (
                <li key={i} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-secondary" /> {i}</li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary border-b-2 border-accent pb-1 hover:gap-3 transition-all">
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* BUSINESS SEGMENTS */}
      <section className="py-24 bg-surface">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary">What we offer</span>
              <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary">Five business segments. One trusted partner.</h2>
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
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary">Built for B2B at scale.</h2>
            <p className="mt-4 text-muted-foreground">Six reasons hotels, exporters and retailers choose us as a long-term supply partner.</p>
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
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary">Trusted by hospitality leaders.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
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
          </div>
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
