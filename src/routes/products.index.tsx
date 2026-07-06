import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
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

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Own Brand Products — Plantin Tableware & Amrutey Premium Tea | Shreem Eco Ventures LLP" },
      {
        name: "description",
        content:
          "Browse Shreem Eco Ventures LLP's own brands: Plantin B2B 100% biodegradable areca leaf tablewares and Amrutey hand-picked premium tea blends.",
      },
      { property: "og:title", content: "Own Brand Products — Shreem Eco Ventures LLP" },
      {
        property: "og:description",
        content: "Explore Shreem Eco Ventures LLP's signature own brands: Plantin Tableware and Amrutey Tea.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsIndexPage,
});

export type Category = "all" | "ownbrand" | "areca" | "tea";

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
];

// Renders all images stacked; only the active one is visible via opacity.
// This keeps every image decoded in the browser so the cross-fade is
// instantaneous — no mid-transition reload flash.
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
  to,
}: {
  p: Product;
  tick: number;
  isExpanded?: boolean;
  onToggle?: () => void;
  /** When set, the card navigates to this route instead of expanding inline. */
  to?: string;
}) {
  const body = (
    <>
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
          {to ? "View Product Range" : isExpanded ? "Collapse Range" : "View Product Range"}
          <ArrowRight className={`h-4 w-4 transition-transform ${!to && isExpanded ? "rotate-90" : ""}`} />
        </div>
      </div>
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className="group relative block overflow-hidden rounded-2xl bg-card border border-border text-left shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 w-full cursor-pointer"
      >
        {body}
      </Link>
    );
  }

  return (
    <button
      onClick={onToggle}
      className={`group relative overflow-hidden rounded-2xl bg-card border text-left transition-all duration-300 w-full hover:-translate-y-1 focus:outline-none cursor-pointer ${
        isExpanded
          ? "border-secondary ring-2 ring-secondary/20 shadow-elegant scale-[1.01]"
          : "border-border shadow-soft hover:shadow-elegant"
      }`}
    >
      {body}
    </button>
  );
}

function BrandNavigationCard({ p, to, tick }: { p: Product; to: string; tick: number }) {
  return (
    <Link
      to={to}
      className="group relative overflow-hidden rounded-2xl bg-card border border-border text-left shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 w-full block cursor-pointer"
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
          View Brand Page <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}

function ProductsIndexPage() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTick((t) => t + 1), 2500);
    return () => clearInterval(timer);
  }, []);

  const plantinBrand = products.find((p) => p.name === "Plantin Disposable")!;
  const amruteyBrand = products.find((p) => p.name === "Amrutey Premium Tea")!;

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Brands"
        title="Own Brand Products"
        subtitle="Discover our signature in-house brands: Plantin compostable tableware and Amrutey hand-picked premium tea."
      />

      <section className="py-20 bg-background border-b border-border/45">
        <div className="container-px mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary">
              Premium B2B Portfolios
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-primary">
              Our In-House Brands
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Shreem Eco Ventures LLP manufactures and curates premium in-house brands engineered to meet the highest B2B standards. From 100% biodegradable tablewares to hand-picked premium tea blends, our brands represent consistent quality, reliable scale, and ecological commitment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <BrandNavigationCard p={plantinBrand} to="/products/plantin" tick={tick} />
            <BrandNavigationCard p={amruteyBrand} to="/products/amrutey" tick={tick} />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
