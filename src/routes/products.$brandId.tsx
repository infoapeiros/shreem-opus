import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft, Leaf, Coffee, Sparkles, FileText, Download } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { products, ProductCard } from "./products.index";
import type { Product } from "./products.index";
import plantinCatalogue from "@/assets/catlog/PlantIn_Product Brochure_Online 1.pdf";
import plantinLogoImg from "@/assets/website logo/plantin_logo.png";
import puriaraLogoImg from "@/assets/website logo/puriora_logo.png";
import { InstagramIcon, FacebookIcon } from "@/components/site/SocialIcons";
import { AMRUTEY_SOCIALS } from "@/data/social-links";

export const Route = createFileRoute("/products/$brandId")({
  head: ({ params }) => {
    const brandId = params.brandId;
    const config = brandConfigs[brandId as keyof typeof brandConfigs];
    const brandTitle = config ? config.name : "Own Brand Page";
    const brandDesc = config ? config.subtitle : "Dedicated own brand portfolio page.";
    return {
      meta: [
        { title: `${brandTitle} — Own Brand Portfolio | Shreem Eco Ventures LLP` },
        { name: "description", content: brandDesc },
        { property: "og:title", content: `${brandTitle} — Shreem Eco Ventures LLP` },
        { property: "og:description", content: brandDesc },
        { property: "og:url", content: `/products/${brandId}` },
      ],
      links: [{ rel: "canonical", href: `/products/${brandId}` }],
    };
  },
  component: BrandPage,
});

type BrandConfig = {
  id: string;
  name: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  accentStyles: React.CSSProperties;
  heroGradient: string;
  tagline: string;
  TaglineIcon: LucideIcon;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButtonText: string;
  filterCat: string;
  /** URL of the brand's downloadable product catalogue PDF, if available. */
  catalogueUrl?: string;
  /** Brand logo (transparent PNG) shown in the hero, if available. */
  logo?: string;
  /** Use dark text on a light hero background instead of the default white-on-dark. */
  heroLight?: boolean;
  /** Brand's own social links, shown subtly in the hero when present. */
  socials?: { facebook: string; instagram: string };
};

const brandConfigs: Record<string, BrandConfig> = {
  plantin: {
    id: "plantin",
    name: "Plantin Disposable",
    eyebrow: "Own Brand",
    title: "Plantin Disposable Tableware",
    subtitle: "Premium biodegradable tableware manufactured from naturally fallen areca leaves.",
    intro: "Crafted with sustainability at the core, Plantin is our premium line of biodegradable areca leaf tableware. Using only naturally fallen areca leaves and water, we manufacture a wide range of plates, bowls, and platters for businesses and individual customers worldwide who prioritize ecological responsibility.",
    accentStyles: {
      "--secondary": "oklch(0.627 0.194 149.24)", // fresh green
      "--gradient-primary": "linear-gradient(135deg, oklch(0.627 0.194 149.24), oklch(0.484 0.163 158))",
      "--gradient-accent": "linear-gradient(135deg, oklch(0.85 0.15 120), oklch(0.75 0.18 135))",
    } as React.CSSProperties,
    heroGradient: "linear-gradient(135deg, #EDF6EA, #E3F0DE)",
    heroLight: true,
    tagline: "Eco-Friendly · Sustainable · Areca Tableware",
    TaglineIcon: Leaf,
    ctaTitle: "Inquire About Bulk Plantin Orders",
    ctaSubtitle: "Get custom sizes, private labeling, and competitive bulk pricing for commercial or personal use.",
    ctaButtonText: "Send Export Inquiry",
    filterCat: "areca",
    catalogueUrl: plantinCatalogue,
    logo: plantinLogoImg,
  },
  amrutey: {
    id: "amrutey",
    name: "Amrutey Premium Tea",
    eyebrow: "Own Brand",
    title: "Amrutey Premium Tea",
    subtitle: "Hand-picked premium tea blends curated for hotels, lounges, retailers and households.",
    intro: "Amrutey represents our commitment to the finest tea traditions. Our signature hand-picked premium tea blends are curated to meet the strict quality standards of hospitality lounges, fine dining establishments, retailers, and discerning individual customers.",
    accentStyles: {
      "--secondary": "oklch(0.38 0.12 45)", // warm tea brown
      "--accent": "oklch(0.82 0.18 78)", // gold
      "--gradient-primary": "linear-gradient(135deg, oklch(0.38 0.12 45), oklch(0.48 0.15 55))",
      "--gradient-accent": "linear-gradient(135deg, oklch(0.82 0.18 78), oklch(0.75 0.15 65))",
    } as React.CSSProperties,
    heroGradient: "linear-gradient(135deg, oklch(0.24 0.05 40), oklch(0.42 0.12 58))",
    socials: AMRUTEY_SOCIALS,
    tagline: "Premium Tea · Rich Aroma · Hand-Picked Quality",
    TaglineIcon: Coffee,
    ctaTitle: "Partner with Amrutey Tea",
    ctaSubtitle: "Discuss wholesale hotel supplies, custom blends, or retail packaging options.",
    ctaButtonText: "Request Tea Catalog",
    filterCat: "tea",
  },
  puriora: {
    id: "puriora",
    name: "Puriora - Cleaning Solutions",
    eyebrow: "Own Brand",
    title: "Puriora - Cleaning Solutions",
    subtitle: "High-performance commercial, industrial, and household cleaning chemicals.",
    intro: "Puriora represents our dedication to pristine hygiene and professional-grade cleanliness. Formulated with premium-quality active ingredients, our comprehensive range of cleaning solutions is designed to deliver deep cleaning, disinfection, and stain-removal for commercial, industrial, and household environments.",
    accentStyles: {
      "--secondary": "oklch(0.60 0.15 200)", // fresh clean teal/blue
      "--gradient-primary": "linear-gradient(135deg, oklch(0.60 0.15 200), oklch(0.45 0.13 210))",
      "--gradient-accent": "linear-gradient(135deg, oklch(0.80 0.10 180), oklch(0.70 0.12 195))",
    } as React.CSSProperties,
    heroGradient: "linear-gradient(135deg, #EAF4F4, #E1EFF2)",
    heroLight: true,
    tagline: "Hygiene · Disinfection · Professional Cleaners",
    TaglineIcon: Sparkles,
    ctaTitle: "Partner with Puriora",
    ctaSubtitle: "Discuss wholesale supply, custom packaging options, or bulk ordering for commercial spaces.",
    ctaButtonText: "Inquire About Puriora",
    logo: puriaraLogoImg,
    filterCat: "cleaning",
  },
};

function BrandNotFound() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Error 404"
        title="Brand Not Found"
        subtitle="The requested own brand portfolio does not exist."
      />
      <section className="py-20 text-center">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3 text-sm font-semibold text-white shadow-soft hover:shadow-elegant transition-all"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Own Brand Products
        </Link>
      </section>
    </SiteLayout>
  );
}

function BrandPage() {
  const { brandId } = useParams({ from: "/products/$brandId" });
  const config = brandConfigs[brandId as keyof typeof brandConfigs];

  if (!config) {
    return <BrandNotFound />;
  }

  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTick((t) => t + 1), 2500);
    return () => clearInterval(timer);
  }, []);

  const brandProducts = products.filter((p) => p.cat === config.filterCat);

  return (
    <div style={config.accentStyles}>
      <SiteLayout>
        {/* HERO */}
        <section className="relative overflow-hidden" style={{ backgroundImage: config.heroGradient }}>
          <div aria-hidden className={`absolute top-10 right-10 h-72 w-72 rounded-full blur-3xl animate-float ${config.heroLight ? "bg-primary/5" : "bg-white/10"}`} />
          <div aria-hidden className={`absolute bottom-10 left-10 h-80 w-80 rounded-full blur-3xl animate-float ${config.heroLight ? "bg-primary/5" : "bg-white/10"}`} style={{ animationDelay: "1.5s" }} />
          <div className="container-px mx-auto max-w-7xl py-12 md:py-16 relative z-10">
            {config.logo && (
              <img
                src={config.logo}
                alt={`${config.name} logo`}
                className="h-32 sm:h-40 md:h-48 w-auto object-contain mb-4"
              />
            )}
            <span className={`inline-block text-xs font-semibold tracking-[0.25em] uppercase mb-3 ${config.heroLight ? "text-primary/70" : "text-white/80"}`}>
              {config.eyebrow}
            </span>
            <h1 className={`font-display text-4xl md:text-6xl font-bold max-w-3xl ${config.heroLight ? "text-primary" : "text-white"}`}>{config.title}</h1>
            <p className={`mt-4 max-w-2xl text-lg ${config.heroLight ? "text-primary/80" : "text-white/85"}`}>{config.subtitle}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <div className={`inline-flex items-center gap-2 rounded-full backdrop-blur-md px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] border ${config.heroLight ? "bg-primary/5 text-primary border-primary/20" : "bg-white/10 text-white border-white/20"}`}>
                <config.TaglineIcon className="h-3.5 w-3.5" /> {config.tagline}
              </div>
              {config.socials && (
                <span className={`flex items-center gap-2.5 ${config.heroLight ? "text-primary/70" : "text-white/80"}`}>
                  <a
                    href={config.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${config.name} on Instagram`}
                    className="hover:text-accent transition-colors"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={config.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${config.name} on Facebook`}
                    className="hover:text-accent transition-colors"
                  >
                    <FacebookIcon className="h-4 w-4" />
                  </a>
                </span>
              )}
            </div>
          </div>
        </section>

        {/* CONTENT & PRODUCT GRID */}
        <section className="py-16 bg-background">
          <div className="container-px mx-auto max-w-7xl">
            {/* BREADCRUMBS */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-8">
              <Link to="/products" className="hover:text-primary transition-colors">
                Own Brand Products
              </Link>
              <span>/</span>
              <span className="text-secondary">{config.name}</span>
            </div>

            {/* BRAND INTRODUCTION */}
            <div className="max-w-4xl bg-surface border border-border/60 rounded-2xl p-8 md:p-10 mb-16">
              <h3 className="font-display text-xl font-bold text-primary mb-4">About {config.name}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{config.intro}</p>
            </div>

            {/* CATALOGUE ACTIONS */}
            {config.catalogueUrl && (
              <div className="flex flex-wrap gap-4 mb-16">
                <a
                  href={config.catalogueUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-sm font-semibold text-white shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all"
                >
                  <FileText className="h-4 w-4" /> View Catalogue
                </a>
                <a
                  href={config.catalogueUrl}
                  download="Plantin-Product-Catalogue.pdf"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-secondary text-secondary px-7 py-3.5 text-sm font-semibold hover:bg-secondary hover:text-white transition-all"
                >
                  <Download className="h-4 w-4" /> Download Catalogue
                </a>
              </div>
            )}

            {/* PRODUCT GRID */}
            <h3 className="font-display text-2xl font-bold text-primary mb-8 border-b border-border pb-4">
              Product Range
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {brandProducts.map((p, i) => (
                <ProductCard key={p.name + i} p={p} i={i} tick={tick} />
              ))}
            </div>

            <div className="mt-10">
              <Link
                to="/products"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Back to Own Brand Products
              </Link>
            </div>
          </div>
        </section>

        {/* CUSTOM CTA SECTION */}
        <section className="py-20 border-t border-border/45 bg-surface">
          <div className="container-px mx-auto max-w-5xl text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">{config.ctaTitle}</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{config.ctaSubtitle}</p>
            <Link
              to="/export-inquiry"
              className="mt-8 inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-sm font-semibold text-white shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all"
            >
              {config.ctaButtonText} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </SiteLayout>
    </div>
  );
}
