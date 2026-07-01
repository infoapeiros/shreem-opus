import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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

export type Category = "all" | "ownbrand" | "areca" | "tea" | "cleaning" | "gravy";

export type Product = { name: string; imgs: string[]; desc: string; features: string[] };

export const products: (Product & { cat: Exclude<Category, "all"> })[] = [
  {
    cat: "ownbrand",
    name: "Plantin Disposable",
    imgs: [plantinDisposable1, plantinDisposable2],
    desc: "Our own brand of premium biodegradable areca disposables — plates, bowls, trays and food packaging.",
    features: ["Own brand", "100% biodegradable", "Custom branding"],
  },
  {
    cat: "ownbrand",
    name: "Amrutey Premium Tea",
    imgs: [amruteyTeaImg],
    desc: "Our signature hand-picked premium tea brand for hotels, retailers and discerning households.",
    features: ["Own brand", "Hand-picked leaves", "Rich aroma"],
  },

  {
    cat: "areca",
    name: "Areca Round Plates",
    imgs: [arecaRoundPlates1, arecaRoundPlates2, arecaRoundPlates3, arecaRoundPlates4],
    desc: "Premium 6, 8, 10 & 12 inch plates from naturally fallen areca leaves.",
    features: ["100% biodegradable", "Microwave safe", "Leak-proof"],
  },
  {
    cat: "areca",
    name: "Areca Bowls",
    imgs: [arecaBowls1, arecaBowls2],
    desc: "Sturdy bowls for soups, curries and dessert service.",
    features: ["Multiple sizes", "Heat resistant", "Eco-friendly"],
  },
  {
    cat: "areca",
    name: "Areca Trays & Platters",
    imgs: [arecaTrays1, arecaTrays2, arecaTrays3],
    desc: "Compartment trays and serving platters for buffets.",
    features: ["Custom sizing", "Strong & rigid", "Premium finish"],
  },
  {
    cat: "areca",
    name: "Food Packaging",
    imgs: [arecaImg],
    desc: "Compostable take-away packaging for B2B cloud kitchens.",
    features: ["Branded options", "Stackable", "Food-grade"],
  },

  {
    cat: "tea",
    name: "Amrutey Premium Tea Packs",
    imgs: [amruteyTeaImg],
    desc: "Retail-ready loose leaf and bagged tea in elegant packaging.",
    features: ["Hand-picked leaves", "Rich aroma", "Long shelf life"],
  },
  {
    cat: "tea",
    name: "Hotel Tea Supply",
    imgs: [amruteyTeaImg],
    desc: "Bulk supply for hotels, lounges and corporate pantries.",
    features: ["Custom blends", "Consistent quality", "Bulk pricing"],
  },
  {
    cat: "tea",
    name: "Retail Tea Products",
    imgs: [amruteyTeaImg],
    desc: "Private label and house-brand tea for grocery chains.",
    features: ["MOQ flexible", "Custom packaging", "Pan-India dispatch"],
  },

  {
    cat: "cleaning",
    name: "Floor Cleaner",
    imgs: [cleaningImg],
    desc: "Concentrated multi-surface floor cleaner for hospitality.",
    features: ["Fresh fragrance", "Streak-free", "Bulk packs"],
  },
  {
    cat: "cleaning",
    name: "Surface Cleaner",
    imgs: [cleaningImg],
    desc: "All-purpose surface cleaner for kitchens and counters.",
    features: ["Food-safe", "Fast acting", "Economical"],
  },
  {
    cat: "cleaning",
    name: "Industrial Cleaner",
    imgs: [cleaningImg],
    desc: "Heavy-duty degreasers for factory and warehouse use.",
    features: ["Industrial grade", "High dilution ratio", "Drum supply"],
  },

  {
    cat: "gravy",
    name: "Punjabi Gravy Base",
    imgs: [gravyImg],
    desc: "Restaurant-style makhani and onion-tomato gravy bases.",
    features: ["Ready to use", "Long shelf life", "Authentic recipe"],
  },
  {
    cat: "gravy",
    name: "Mughlai Gravy",
    imgs: [gravyImg],
    desc: "Rich, aromatic Mughlai base for biryanis and curries.",
    features: ["Chef-formulated", "Bulk packaging", "Consistent flavor"],
  },
  {
    cat: "gravy",
    name: "South Indian Gravy",
    imgs: [gravyImg],
    desc: "Sambar and curry bases for South Indian QSR chains.",
    features: ["Authentic spice mix", "Easy to plate", "MOQ friendly"],
  },
  {
    cat: "gravy",
    name: "Chinese Base Sauces",
    imgs: [gravyImg],
    desc: "Indo-Chinese stock and sauce bases for restaurant kitchens.",
    features: ["Manchurian & schezwan", "Cloud kitchen ready", "Bulk supply"],
  },
];

export function ImageSlideshow({ imgs, alt, tick }: { imgs: string[]; alt: string; tick: number }) {
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
    <div className="relative h-full w-full transition-transform duration-700 group-hover:scale-110">
      {imgs.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={alt}
          loading="lazy"
          width={1024}
          height={768}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

export function ProductCard({ p, i, tick }: { p: Product; i: number; tick: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
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
        <Link
          to="/export-inquiry"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:gap-2.5 transition-all"
        >
          Request Quote <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}

export function CategoryEntryCard({
  p,
  isExpanded,
  onToggle,
  tick,
}: {
  p: Product;
  isExpanded: boolean;
  onToggle: () => void;
  tick: number;
}) {
  return (
    <button
      onClick={onToggle}
      className={`group relative overflow-hidden rounded-2xl bg-card border text-left transition-all duration-300 w-full hover:-translate-y-1 focus:outline-none cursor-pointer ${
        isExpanded
          ? "border-secondary ring-2 ring-secondary/20 shadow-elegant scale-[1.01]"
          : "border-border shadow-soft hover:shadow-elegant"
      }`}
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
        <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary group-hover:gap-2.5 transition-all">
          {isExpanded ? "Collapse Range" : "View Product Range"}
          <ArrowRight className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
        </div>
      </div>
    </button>
  );
}