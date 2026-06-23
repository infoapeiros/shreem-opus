import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import arecaImg from "@/assets/areca.jpg";
import teaImg from "@/assets/tea.jpg";
import cleaningImg from "@/assets/cleaning.jpg";
import gravyImg from "@/assets/gravy.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Areca Tableware, Premium Tea, Gravies & Cleaning Supplies" },
      { name: "description", content: "Browse Shreem Industries' B2B catalog: eco-friendly areca plates and bowls, Amrutey premium tea, ready-to-eat gravies, and industrial cleaning products." },
      { property: "og:title", content: "Products — Shreem Industries LLP" },
      { property: "og:description", content: "Full B2B catalog: areca tableware, premium tea, gravies, cleaning supplies." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

type Category = "all" | "areca" | "tea" | "cleaning" | "gravy";

const products: { cat: Exclude<Category, "all">; name: string; img: string; desc: string; features: string[] }[] = [
  { cat: "areca", name: "Areca Round Plates", img: arecaImg, desc: "Premium 6, 8, 10 & 12 inch plates from naturally fallen areca leaves.", features: ["100% biodegradable", "Microwave safe", "Leak-proof"] },
  { cat: "areca", name: "Areca Bowls", img: arecaImg, desc: "Sturdy bowls for soups, curries and dessert service.", features: ["Multiple sizes", "Heat resistant", "Eco-friendly"] },
  { cat: "areca", name: "Areca Trays & Platters", img: arecaImg, desc: "Compartment trays and serving platters for buffets.", features: ["Custom sizing", "Strong & rigid", "Premium finish"] },
  { cat: "areca", name: "Food Packaging", img: arecaImg, desc: "Compostable take-away packaging for QSRs and cloud kitchens.", features: ["Branded options", "Stackable", "Food-grade"] },

  { cat: "tea", name: "Amrutey Premium Tea Packs", img: teaImg, desc: "Retail-ready loose leaf and bagged tea in elegant packaging.", features: ["Hand-picked leaves", "Rich aroma", "Long shelf life"] },
  { cat: "tea", name: "Hotel Tea Supply", img: teaImg, desc: "Bulk supply for hotels, lounges and corporate pantries.", features: ["Custom blends", "Consistent quality", "Bulk pricing"] },
  { cat: "tea", name: "Retail Tea Products", img: teaImg, desc: "Private label and house-brand tea for grocery chains.", features: ["MOQ flexible", "Custom packaging", "Pan-India dispatch"] },

  { cat: "cleaning", name: "Floor Cleaner", img: cleaningImg, desc: "Concentrated multi-surface floor cleaner for hospitality.", features: ["Fresh fragrance", "Streak-free", "Bulk packs"] },
  { cat: "cleaning", name: "Surface Cleaner", img: cleaningImg, desc: "All-purpose surface cleaner for kitchens and counters.", features: ["Food-safe", "Fast acting", "Economical"] },
  { cat: "cleaning", name: "Industrial Cleaner", img: cleaningImg, desc: "Heavy-duty degreasers for factory and warehouse use.", features: ["Industrial grade", "High dilution ratio", "Drum supply"] },

  { cat: "gravy", name: "Punjabi Gravy Base", img: gravyImg, desc: "Restaurant-style makhani and onion-tomato gravy bases.", features: ["Ready to use", "Long shelf life", "Authentic recipe"] },
  { cat: "gravy", name: "Mughlai Gravy", img: gravyImg, desc: "Rich, aromatic Mughlai base for biryanis and curries.", features: ["Chef-formulated", "Bulk packaging", "Consistent flavor"] },
  { cat: "gravy", name: "South Indian Gravy", img: gravyImg, desc: "Sambar and curry bases for South Indian QSR chains.", features: ["Authentic spice mix", "Easy to plate", "MOQ friendly"] },
  { cat: "gravy", name: "Chinese Base Sauces", img: gravyImg, desc: "Indo-Chinese stock and sauce bases for restaurant kitchens.", features: ["Manchurian & schezwan", "Cloud kitchen ready", "Bulk supply"] },
];

const tabs: { id: Category; label: string }[] = [
  { id: "all", label: "All Products" },
  { id: "areca", label: "Areca Tableware" },
  { id: "tea", label: "Premium Tea" },
  { id: "cleaning", label: "Cleaning" },
  { id: "gravy", label: "Ready Gravies" },
];

function ProductsPage() {
  const [active, setActive] = useState<Category>("all");
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
            <motion.div
              key={p.name + i}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface">
                <img src={p.img} alt={p.name} loading="lazy" width={1024} height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
