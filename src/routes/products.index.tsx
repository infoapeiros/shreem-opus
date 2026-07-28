import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import amruteyFrontImg from "@/assets/Amrutey_Front_Product.png";
import amruteyBackImg from "@/assets/Amrutey_Back_Product.png";
import royalBaghanFrontImg from "@/assets/royal_front.jpeg";
import royalBaghanBackImg from "@/assets/royal_back.jpeg";
import newAnnapurnaFrontImg from "@/assets/annapurna_front.jpeg";
import newAnnapurnaBackImg from "@/assets/annapurna_back.jpeg";
import plantinDisposable1 from "@/assets/plantin-disposable.png";
import plantinDisposable2 from "@/assets/plantin-disposable2.png";
import arecaRoundPlatesImg from "@/assets/areca_round_plates_a.png";
import arecaBowlsImg from "@/assets/areca_bowls_a.png";
import arecaTraysImg from "@/assets/areca_trays_and_platters_a.png";

// Puriora brand new product images
import purioraBathroomCleanerImg from "@/assets/Puriora/puriora_bathroom_cleaner.jpeg";
import purioraCloggedDrainCleanerImg from "@/assets/Puriora/puriora_clogged_drain_cleaner.jpeg";
import purioraConcentrateDescalentImg from "@/assets/Puriora/puriora_concentrate_descalent.jpeg";
import purioraFloorCleanerImg from "@/assets/Puriora/puriora_floor_cleaner.jpeg";
import purioraToiletBowlCleanerImg from "@/assets/Puriora/puriora_toilet_bowl_cleaner.jpeg";

// Relocated chemical product images
import bright1WashRoomBathroomCleanerImg from "@/assets/BLS/chemicals/bright-1-wash-room-bathroom-cleaner.webp";
import bright2BkcDisinfectantFloorCleanerImg from "@/assets/BLS/chemicals/bright-2-bkc-disinfectant-floor-cleaner.webp";
import bright2ConcentratedHardSurfaceFloorCleanerSanitizerImg from "@/assets/BLS/chemicals/bright-2-concentrated-hard-surface-floor-cleaner-sanitizer.webp";
import bright3GlassMirrorCleanerConcentrateImg from "@/assets/BLS/chemicals/bright-3-glass-mirror-cleaner-concentrate.webp";
import bright4FurniturePolishImg from "@/assets/BLS/chemicals/bright-4-furniture-polish.webp";
import bright5AirFreshenerImg from "@/assets/BLS/chemicals/bright-5-air-freshener.webp";
import bright6ToiletUrinalBowlCleanerImg from "@/assets/BLS/chemicals/bright-6-toilet-urinal-bowl-cleaner.webp";
import bright7StainlessSteelPolishImg from "@/assets/BLS/chemicals/bright-7-stainless-steel-polish.webp";
import bright8DishWashAllPurposeCleanerConcentrateImg from "@/assets/BLS/chemicals/bright-8-dish-wash-all-purpose-cleaner-concentrate.webp";
import bright9AllPurposeCleanerCumSanitizerConcentrateImg from "@/assets/BLS/chemicals/bright-9-all-purpose-cleaner-cum-sanitizer-concentrate.webp";
import bright10GrillOvenCleanerConcentrateImg from "@/assets/BLS/chemicals/bright-10-grill-oven-cleaner-concentrate.webp";
import bright11CloggedDrainCleanerImg from "@/assets/BLS/chemicals/bright-11-clogged-drain-cleaner.webp";
import bright12ConcentratedDescalentImg from "@/assets/BLS/chemicals/bright-12-concentrated-descalent.webp";
import brightHandWashImg from "@/assets/BLS/chemicals/bright-hand-wash.webp";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Own Brand Products — Plantin Tableware & Amrutey Premium Tea | Shreem Eco Ventures LLP" },
      {
        name: "description",
        content:
          "Browse Shreem Eco Ventures LLP's own brands: Plantin's 100% biodegradable areca leaf tablewares and Amrutey's hand-picked premium tea blends.",
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

export type Category = "all" | "ownbrand" | "areca" | "tea" | "cleaning";

export type Product = {
  name: string;
  imgs: string[];
  desc: string;
  features: string[];
  /** "cover" (default) crops to fill the frame; "contain" fits the whole image without cropping. */
  imgFit?: "cover" | "contain";
};

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
    imgs: [amruteyFrontImg, amruteyBackImg],
    desc: "Our signature hand-picked premium tea brand for hotels, retailers and discerning households.",
    features: ["Own brand", "Hand-picked leaves", "Rich aroma"],
    imgFit: "contain",
  },
  {
    cat: "ownbrand",
    name: "Puriora - Cleaning Solutions",
    imgs: [purioraBathroomCleanerImg],
    desc: "Our own brand of high-performance commercial, industrial, and household cleaning chemicals.",
    features: ["Own brand", "Hygiene & Disinfection", "Professional Grade"],
    imgFit: "contain",
  },

  {
    cat: "areca",
    name: "Areca Round Plates",
    imgs: [arecaRoundPlatesImg],
    desc: "Premium 6, 8, 10 & 12 inch plates from naturally fallen areca leaves.",
    features: ["100% biodegradable", "Microwave safe", "Leak-proof"],
  },
  {
    cat: "areca",
    name: "Areca Bowls",
    imgs: [arecaBowlsImg],
    desc: "Sturdy bowls for soups, curries and dessert service.",
    features: ["Multiple sizes", "Heat resistant", "Eco-friendly"],
  },
  {
    cat: "areca",
    name: "Areca Trays & Platters",
    imgs: [arecaTraysImg],
    desc: "Compartment trays and serving platters for buffets.",
    features: ["Custom sizing", "Strong & rigid", "Premium finish"],
  },
  {
    cat: "tea",
    name: "Amrutey Premium Tea Packs",
    imgs: [amruteyFrontImg, amruteyBackImg],
    desc: "Retail-ready loose leaf and bagged tea in elegant packaging.",
    features: ["Hand-picked leaves", "Rich aroma", "Long shelf life"],
    imgFit: "contain",
  },
  {
    cat: "tea",
    name: "Royal Baghan",
    imgs: [royalBaghanFrontImg, royalBaghanBackImg],
    desc: "Premium tea blend crafted for a rich aroma, full-bodied flavour, and a refreshing tea experience suitable for everyday enjoyment.",
    features: ["Premium tea blend", "Rich aroma", "Strong taste", "Refreshing flavour", "Hygienically packed"],
    imgFit: "contain",
  },
  {
    cat: "tea",
    name: "New Annapurna",
    imgs: [newAnnapurnaFrontImg, newAnnapurnaBackImg],
    desc: "Carefully selected tea leaves blended to deliver consistent taste, rich colour, and a refreshing cup for every occasion.",
    features: ["Finest quality tea leaves", "Rich colour and flavour", "Refreshing taste", "Hygienically packed", "Ideal for daily use"],
    imgFit: "contain",
  },

  // Puriora cleaning solutions product range
  {
    cat: "cleaning",
    name: "Bathroom Cleaner",
    imgs: [purioraBathroomCleanerImg],
    desc: "Powerful bathroom cleaner formulated to remove tough stains, eliminate germs, and leave bathroom surfaces sparkling clean with a refreshing fragrance.",
    features: [
      "Kills 99.9% germs",
      "Removes stubborn stains",
      "Safe for ceramic and sanitary surfaces",
      "Fresh fragrance",
      "Ready to use",
    ],
    imgFit: "contain",
  },
  {
    cat: "cleaning",
    name: "Clogged Drain Cleaner",
    imgs: [purioraCloggedDrainCleanerImg],
    desc: "Fast-acting drain cleaner that removes grease, hair, soap residue, and stubborn blockages while helping eliminate unpleasant odours.",
    features: [
      "Clears clogged drains",
      "Dissolves grease and hair",
      "Eliminates bad odours",
      "Safe for plumbing",
      "Easy pour application",
    ],
    imgFit: "contain",
  },
  {
    cat: "cleaning",
    name: "Concentrate Descalent",
    imgs: [purioraConcentrateDescalentImg],
    desc: "Professional descaling solution designed to remove heavy mineral deposits, hard water scale, and stubborn buildup from acid-resistant surfaces.",
    features: [
      "Removes hard water scale",
      "Powerful descaling action",
      "Suitable for ceramic and tiled surfaces",
      "Fast acting",
      "Ideal for commercial and household cleaning",
    ],
    imgFit: "contain",
  },
  {
    cat: "cleaning",
    name: "Floor Cleaner",
    imgs: [purioraFloorCleanerImg],
    desc: "Disinfectant floor cleaner that provides deep cleaning, kills germs, and leaves floors hygienic with a long-lasting fresh fragrance.",
    features: [
      "Kills 99.9% germs",
      "Deep cleaning formula",
      "Pleasant fragrance",
      "Suitable for homes and commercial spaces",
      "Easy to dilute and use",
    ],
    imgFit: "contain",
  },
  {
    cat: "cleaning",
    name: "Toilet Bowl Cleaner",
    imgs: [purioraToiletBowlCleanerImg],
    desc: "High-performance toilet cleaner that removes stains, limescale, and bacteria while leaving the toilet fresh and hygienically clean.",
    features: [
      "Removes tough stains",
      "Kills 99.9% germs",
      "Removes limescale",
      "Long-lasting freshness",
      "Thick formula for better coverage",
    ],
    imgFit: "contain",
  },
  {
    cat: "cleaning",
    name: "Wash Room / Bathroom Cleaner",
    imgs: [bright1WashRoomBathroomCleanerImg],
    desc: "Powerful bathroom cleaner for acid-resistant surfaces that removes stubborn stains, eliminates bacteria, and leaves a fresh fragrance.",
    features: [
      "For acid-resistant surfaces",
      "Removes stubborn stains",
      "Eliminates bacteria",
      "Fresh fragrance",
    ],
    imgFit: "contain",
  },
  {
    cat: "cleaning",
    name: "Disinfectant Floor Cleaner",
    imgs: [bright2BkcDisinfectantFloorCleanerImg],
    desc: "Broad-spectrum disinfectant floor cleaner designed for hospitals, ICUs, OT rooms, and other hygienic environments.",
    features: [
      "Broad-spectrum disinfectant",
      "Hospital & ICU grade",
      "OT room hygienic formula",
      "Deep disinfection",
    ],
    imgFit: "contain",
  },
  {
    cat: "cleaning",
    name: "Concentrated Hard Surface Floor Cleaner / Sanitizer",
    imgs: [bright2ConcentratedHardSurfaceFloorCleanerSanitizerImg],
    desc: "Concentrated hard surface cleaner and sanitizer suitable for all floor types with excellent stain removal and antibacterial protection.",
    features: [
      "Concentrated formula",
      "Suitable for all floor types",
      "Excellent stain removal",
      "Antibacterial protection",
    ],
    imgFit: "contain",
  },
  {
    cat: "cleaning",
    name: "Glass & Mirror Cleaner Concentrate",
    imgs: [bright3GlassMirrorCleanerConcentrateImg],
    desc: "Streak-free glass and mirror cleaner that removes fingerprints, grease, and oil without leaving residue.",
    features: [
      "Streak-free shine",
      "Removes fingerprints & grease",
      "Leaves no residue",
      "Concentrated formula",
    ],
    imgFit: "contain",
  },
  {
    cat: "cleaning",
    name: "Furniture Polish",
    imgs: [bright4FurniturePolishImg],
    desc: "Premium furniture polish that restores shine, protects wooden surfaces, and enhances furniture life.",
    features: [
      "Premium wood polish",
      "Restores natural shine",
      "Protects wooden surfaces",
      "Enhances furniture life",
    ],
    imgFit: "contain",
  },
  {
    cat: "cleaning",
    name: "Air Freshener",
    imgs: [bright5AirFreshenerImg],
    desc: "Long-lasting air freshener that neutralizes unpleasant odors while leaving a refreshing fragrance.",
    features: [
      "Long-lasting fragrance",
      "Neutralizes unpleasant odors",
      "Refreshing scent",
      "Easy spray application",
    ],
    imgFit: "contain",
  },
  {
    cat: "cleaning",
    name: "Toilet / Urinal Bowl Cleaner",
    imgs: [bright6ToiletUrinalBowlCleanerImg],
    desc: "Heavy-duty toilet and urinal cleaner formulated to remove stains, lime scale, and tough deposits.",
    features: [
      "Heavy-duty formula",
      "Removes tough stains",
      "Dissolves lime scale",
      "Cleans urinals & toilet bowls",
    ],
    imgFit: "contain",
  },
  {
    cat: "cleaning",
    name: "Stainless Steel Polish",
    imgs: [bright7StainlessSteelPolishImg],
    desc: "Professional stainless steel polish that cleans, shines, and protects steel furniture, lifts, handles, and fittings.",
    features: [
      "Cleans & shines steel",
      "Protects from smudges",
      "For lifts, handles & fittings",
      "Professional finish",
    ],
    imgFit: "contain",
  },
  {
    cat: "cleaning",
    name: "Dish Wash (All Purpose) Cleaner Concentrate",
    imgs: [bright8DishWashAllPurposeCleanerConcentrateImg],
    desc: "Concentrated dishwashing solution that effectively removes grease while remaining gentle on hands.",
    features: [
      "Concentrated dishwash",
      "Effective grease removal",
      "Gentle on hands",
      "All-purpose cleaning",
    ],
    imgFit: "contain",
  },
  {
    cat: "cleaning",
    name: "All Purpose Cleaner Cum Sanitizer Concentrate",
    imgs: [bright9AllPurposeCleanerCumSanitizerConcentrateImg],
    desc: "Multi-purpose cleaner and sanitizer suitable for kitchen utensils and food preparation surfaces.",
    features: [
      "All-purpose cleaner & sanitizer",
      "Food-safe formula",
      "For kitchen utensils",
      "Effective sanitation",
    ],
    imgFit: "contain",
  },
  {
    cat: "cleaning",
    name: "Grill & Oven Cleaner Concentrate",
    imgs: [bright10GrillOvenCleanerConcentrateImg],
    desc: "Industrial-strength cleaner for grills, ovens, chimneys, and heavy grease deposits.",
    features: [
      "Industrial strength",
      "For grills, ovens & chimneys",
      "Removes baked-on grease",
      "Fast-acting formula",
    ],
    imgFit: "contain",
  },
  {
    cat: "cleaning",
    name: "Clogged Drain Cleaner",
    imgs: [bright11CloggedDrainCleanerImg],
    desc: "Fast-acting drain cleaner that dissolves grease, food residue, and hair while helping prevent blockages.",
    features: [
      "Fast-acting block clearance",
      "Dissolves grease & hair",
      "Prevents future blockages",
      "Safe for pipes",
    ],
    imgFit: "contain",
  },
  {
    cat: "cleaning",
    name: "Concentrated Descalent",
    imgs: [bright12ConcentratedDescalentImg],
    desc: "Powerful descaling solution for removing hard water scale from tiles, fixtures, PVC pipes, and equipment.",
    features: [
      "Powerful descalent",
      "Removes hard water scale",
      "For tiles, fixtures & PVC",
      "Restores surface appearance",
    ],
    imgFit: "contain",
  },
  {
    cat: "cleaning",
    name: "Bright Hand Wash (Triclosan Based Disinfectant Hand Cleaner)",
    imgs: [brightHandWashImg],
    desc: "Antibacterial hand wash that effectively removes germs while remaining gentle on the skin.",
    features: [
      "Triclosan-based disinfectant",
      "Antibacterial protection",
      "Gentle on skin",
      "Refreshing clean",
    ],
    imgFit: "contain",
  },
];

// Renders all images stacked; only the active one is visible via opacity.
// This keeps every image decoded in the browser so the cross-fade is
// instantaneous — no mid-transition reload flash.
export function ImageSlideshow({
  imgs,
  alt,
  tick,
  fit = "cover",
}: {
  imgs: string[];
  alt: string;
  tick: number;
  fit?: "cover" | "contain";
}) {
  const fitClass = fit === "contain" ? "object-contain" : "object-cover";

  if (imgs.length === 1) {
    return (
      <img
        src={imgs[0]}
        alt={alt}
        loading="lazy"
        width={1024}
        height={768}
        className={`h-full w-full ${fitClass} transition-transform duration-700 group-hover:scale-110`}
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
          className={`absolute inset-0 h-full w-full ${fitClass} transition-opacity duration-700 ease-in-out ${
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
      <div className={`aspect-[4/3] overflow-hidden bg-surface ${p.imgFit === "contain" ? "p-4" : ""}`}>
        <ImageSlideshow imgs={p.imgs} alt={p.name} tick={tick} fit={p.imgFit} />
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
  tick,
  to,
}: {
  p: Product;
  tick: number;
  to: string;
}) {
  return (
    <Link
      to={to}
      className="group relative block overflow-hidden rounded-2xl bg-card border border-border text-left shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 w-full cursor-pointer"
    >
      <div className={`aspect-[4/3] overflow-hidden bg-surface ${p.imgFit === "contain" ? "p-4" : ""}`}>
        <ImageSlideshow imgs={p.imgs} alt={p.name} tick={tick} fit={p.imgFit} />
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
          View Product Range <ArrowRight className="h-4 w-4" />
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
  const purioraBrand = products.find((p) => p.name === "Puriora - Cleaning Solutions")!;

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Brands"
        title="Own Brand Products"
        subtitle="Discover our signature in-house brands: Plantin compostable tableware, Amrutey premium tea, and Puriora cleaning solutions."
      />

      <section className="py-20 bg-background border-b border-border/45">
        <div className="container-px mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary">
              Premium Product Portfolios
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-primary">
              Our In-House Brands
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Shreem Eco Ventures LLP manufactures and curates premium in-house brands engineered to meet the highest quality standards. From 100% biodegradable tablewares and hand-picked premium tea blends to professional-grade cleaning solutions, our brands represent consistent quality, reliable scale, and ecological commitment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <CategoryEntryCard p={plantinBrand} to="/products/plantin" tick={tick} />
            <CategoryEntryCard p={amruteyBrand} to="/products/amrutey" tick={tick} />
            <CategoryEntryCard p={purioraBrand} to="/products/puriora" tick={tick} />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
