import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import arecaImg from "@/assets/areca.jpg";
import cleaningImg from "@/assets/cleaning.jpg";
import gravyImg from "@/assets/gravy.jpg";
import amruteyTeaImg from "@/assets/amrutey-premium-tea.jpg";
import plantinDisposable1 from "@/assets/plantin-disposable.jpg";
import plantinDisposable2 from "@/assets/plantin-disposable2.jpg";
import arecaRoundPlates1 from "@/assets/areca-round-plates.jpg";
import arecaRoundPlates2 from "@/assets/areca-round-plates2.jpg";
import arecaRoundPlates3 from "@/assets/areca-round-plates3.jpg";
import arecaRoundPlates4 from "@/assets/areca-round-plates4.jpg";
import arecaBowls1 from "@/assets/areca-bowls.jpg";
import arecaBowls2 from "@/assets/areca-bowls2.jpg";
import arecaTrays1 from "@/assets/areca-trays-and-platters.jpg";
import arecaTrays2 from "@/assets/areca-trays-and-platters2.jpg";
import arecaTrays3 from "@/assets/areca-trays-and-platters3.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Areca Tableware, Premium Tea, Gravies & Cleaning Supplies" },
      { name: "description", content: "Browse Shreem Eco Ventures LLP's B2B catalog: eco-friendly areca plates and bowls, Amrutey premium tea, ready-to-eat gravies, and industrial cleaning products." },
      { property: "og:title", content: "Products — Shreem Eco Ventures LLP" },
      { property: "og:description", content: "Full B2B catalog: areca tableware, premium tea, gravies, cleaning supplies." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

type Category = "all" | "ownbrand" | "areca" | "tea" | "cleaning" | "gravy";

type Product = { name: string; imgs: string[]; desc: string; features: string[] };

const products: (Product & { cat: Exclude<Category, "all"> })[] = [
  { cat: "ownbrand", name: "Plantin Disposable", imgs: [plantinDisposable1, plantinDisposable2], desc: "Our own brand of premium biodegradable areca disposables — plates, bowls, trays and food packaging.", features: ["Own brand", "100% biodegradable", "Custom branding"] },
  { cat: "ownbrand", name: "Amrutey Premium Tea", imgs: [amruteyTeaImg], desc: "Our signature hand-picked premium tea brand for hotels, retailers and discerning households.", features: ["Own brand", "Hand-picked leaves", "Rich aroma"] },

  { cat: "areca", name: "Areca Round Plates", imgs: [arecaRoundPlates1, arecaRoundPlates2, arecaRoundPlates3, arecaRoundPlates4], desc: "Premium 6, 8, 10 & 12 inch plates from naturally fallen areca leaves.", features: ["100% biodegradable", "Microwave safe", "Leak-proof"] },
  { cat: "areca", name: "Areca Bowls", imgs: [arecaBowls1, arecaBowls2], desc: "Sturdy bowls for soups, curries and dessert service.", features: ["Multiple sizes", "Heat resistant", "Eco-friendly"] },
  { cat: "areca", name: "Areca Trays & Platters", imgs: [arecaTrays1, arecaTrays2, arecaTrays3], desc: "Compartment trays and serving platters for buffets.", features: ["Custom sizing", "Strong & rigid", "Premium finish"] },
  { cat: "areca", name: "Food Packaging", imgs: [arecaImg], desc: "Compostable take-away packaging for QSRs and cloud kitchens.", features: ["Branded options", "Stackable", "Food-grade"] },

  { cat: "tea", name: "Amrutey Premium Tea Packs", imgs: [amruteyTeaImg], desc: "Retail-ready loose leaf and bagged tea in elegant packaging.", features: ["Hand-picked leaves", "Rich aroma", "Long shelf life"] },
  { cat: "tea", name: "Hotel Tea Supply", imgs: [amruteyTeaImg], desc: "Bulk supply for hotels, lounges and corporate pantries.", features: ["Custom blends", "Consistent quality", "Bulk pricing"] },
  { cat: "tea", name: "Retail Tea Products", imgs: [amruteyTeaImg], desc: "Private label and house-brand tea for grocery chains.", features: ["MOQ flexible", "Custom packaging", "Pan-India dispatch"] },

  { cat: "cleaning", name: "Floor Cleaner", imgs: [cleaningImg], desc: "Concentrated multi-surface floor cleaner for hospitality.", features: ["Fresh fragrance", "Streak-free", "Bulk packs"] },
  { cat: "cleaning", name: "Surface Cleaner", imgs: [cleaningImg], desc: "All-purpose surface cleaner for kitchens and counters.", features: ["Food-safe", "Fast acting", "Economical"] },
  { cat: "cleaning", name: "Industrial Cleaner", imgs: [cleaningImg], desc: "Heavy-duty degreasers for factory and warehouse use.", features: ["Industrial grade", "High dilution ratio", "Drum supply"] },

  { cat: "gravy", name: "Punjabi Gravy Base", imgs: [gravyImg], desc: "Restaurant-style makhani and onion-tomato gravy bases.", features: ["Ready to use", "Long shelf life", "Authentic recipe"] },
  { cat: "gravy", name: "Mughlai Gravy", imgs: [gravyImg], desc: "Rich, aromatic Mughlai base for biryanis and curries.", features: ["Chef-formulated", "Bulk packaging", "Consistent flavor"] },
  { cat: "gravy", name: "South Indian Gravy", imgs: [gravyImg], desc: "Sambar and curry bases for South Indian QSR chains.", features: ["Authentic spice mix", "Easy to plate", "MOQ friendly"] },
  { cat: "gravy", name: "Chinese Base Sauces", imgs: [gravyImg], desc: "Indo-Chinese stock and sauce bases for restaurant kitchens.", features: ["Manchurian & schezwan", "Cloud kitchen ready", "Bulk supply"] },
];

const tabs: { id: Category; label: string }[] = [
  { id: "all", label: "All Products" },
  { id: "ownbrand", label: "Own Brand Products" },
  { id: "areca", label: "Areca Tableware" },
  { id: "tea", label: "Premium Tea" },
  { id: "cleaning", label: "Cleaning" },
  { id: "gravy", label: "Ready Gravies" },
];

// Renders all images stacked; only the active one is visible via opacity.
// This keeps every image decoded in the browser so the cross-fade is
// instantaneous — no mid-transition reload flash.
function ImageSlideshow({ imgs, alt, tick }: { imgs: string[]; alt: string; tick: number }) {
  if (imgs.length === 1) {
    return (
      <img
        src={imgs[0]}
        alt={alt}
        loading="lazy"
        width={1024}
        height={768}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    );
  }

  const idx = tick % imgs.length;

  return (
    // Scale wrapper: hover scale applies to everything inside uniformly
    <div className="relative h-full w-full transition-transform duration-700 group-hover:scale-110">
      {imgs.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={alt}
          loading="lazy"
          width={1024}
          height={768}
          // Absolute stack + opacity cross-fade — no src swap, no flash
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

function ProductCard({ p, i, tick }: { p: Product; i: number; tick: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.04 }}
      className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all"
    >
      <div className="aspect-[4/3] overflow-hidden bg-surface">
        <ImageSlideshow imgs={p.imgs} alt={p.name} tick={tick} />
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold text-primary">{p.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
        <ul className="mt-4 space-y-1.5">
          {p.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-foreground/80">
              <CheckCircle2 className="h-3.5 w-3.5 text-secondary" /> {f}
            </li>
          ))}
        </ul>
        <Link to="/export-inquiry" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:gap-2.5 transition-all">
          Request Quote <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}

function ProductsPage() {
  const [active, setActive] = useState<Category>("all");
  // Single shared tick drives all cards simultaneously — one interval for the whole page
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTick((t) => t + 1), 2500);
    return () => clearInterval(timer);
  }, []);

  const filtered = active === "all" ? products : products.filter((p) => p.cat === active);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our catalog"
        title="A complete B2B product portfolio."
        subtitle="From eco-friendly tableware to premium tea, ready gravies and cleaning supplies — engineered for hospitality and retail."
      />

      <section className="py-12 bg-surface border-b border-border sticky top-20 z-30 backdrop-blur-md">
        <div className="container-px mx-auto max-w-7xl flex flex-wrap gap-2 justify-center">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                active === t.id ? "gradient-primary text-white shadow-soft" : "bg-card border border-border text-foreground hover:border-secondary/40"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-px mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <ProductCard key={p.name + i} p={p} i={i} tick={tick} />
          ))}
        </div>
      </section>

    </SiteLayout>
  );
}
