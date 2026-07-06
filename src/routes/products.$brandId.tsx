import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { products, ProductCard } from "./products.index";
import type { Product } from "./products.index";

export const Route = createFileRoute("/products/$brandId")({
  head: ({ params }) => {
    const brandId = params.brandId;
    const config = brandConfigs[brandId as keyof typeof brandConfigs];
    const brandTitle = config ? config.name : "Own Brand Page";
    const brandDesc = config ? config.subtitle : "Dedicated own brand B2B portfolio page.";
    return {
      meta: [
        { title: `${brandTitle} — Own Brand B2B Portfolio | Shreem Eco Ventures LLP` },
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
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButtonText: string;
  filterCat: string;
};

const brandConfigs: Record<string, BrandConfig> = {
  plantin: {
    id: "plantin",
    name: "Plantin Disposable",
    eyebrow: "Own Brand",
    title: "Plantin Disposable Tableware",
    subtitle: "Premium B2B biodegradable tableware manufactured from naturally fallen areca leaves.",
    intro: "Crafted with sustainability at the core, Plantin is our premium line of B2B biodegradable areca leaf tableware. Using only naturally fallen areca leaves and water, we manufacture a wide range of plates, bowls, and platters for hospitality leaders globally who prioritize ecological responsibility.",
    accentStyles: {
      "--secondary": "oklch(0.627 0.194 149.24)", // fresh green
      "--gradient-primary": "linear-gradient(135deg, oklch(0.627 0.194 149.24), oklch(0.484 0.163 158))",
      "--gradient-accent": "linear-gradient(135deg, oklch(0.85 0.15 120), oklch(0.75 0.18 135))",
    } as React.CSSProperties,
    ctaTitle: "Inquire About Bulk Plantin Orders",
    ctaSubtitle: "Get custom sizes, private labeling, and wholesale B2B pricing for your business.",
    ctaButtonText: "Send Export Inquiry",
    filterCat: "areca",
  },
  amrutey: {
    id: "amrutey",
    name: "Amrutey Premium Tea",
    eyebrow: "Own Brand",
    title: "Amrutey Premium Tea",
    subtitle: "Hand-picked premium tea blends curated for hotels, lounges, retailers and households.",
    intro: "Amrutey represents our commitment to the finest tea traditions. Our signature hand-picked premium tea blends are curated to meet the strict quality standards of hospitality lounges, fine dining establishments, B2B suppliers, and grocery retailers.",
    accentStyles: {
      "--secondary": "oklch(0.38 0.12 45)", // warm tea brown
      "--accent": "oklch(0.82 0.18 78)", // gold
      "--gradient-primary": "linear-gradient(135deg, oklch(0.38 0.12 45), oklch(0.48 0.15 55))",
      "--gradient-accent": "linear-gradient(135deg, oklch(0.82 0.18 78), oklch(0.75 0.15 65))",
    } as React.CSSProperties,
    ctaTitle: "Partner with Amrutey Tea",
    ctaSubtitle: "Discuss wholesale hotel supplies, custom blends, or retail packaging options.",
    ctaButtonText: "Request Tea Catalog",
    filterCat: "tea",
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
        <PageHero eyebrow={config.eyebrow} title={config.title} subtitle={config.subtitle} />

        {/* CONTENT & PRODUCT GRID */}
        <section className="py-16 bg-background">
          <div className="container-px mx-auto max-w-7xl">
            {/* BREADCRUMBS & BACK LINK */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <Link to="/products" className="hover:text-primary transition-colors">
                  Own Brand Products
                </Link>
                <span>/</span>
                <span className="text-secondary">{config.name}</span>
              </div>
              <Link
                to="/products"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Back to Own Brand Products
              </Link>
            </div>

            {/* BRAND INTRODUCTION */}
            <div className="max-w-4xl bg-surface border border-border/60 rounded-2xl p-8 md:p-10 mb-16">
              <h3 className="font-display text-xl font-bold text-primary mb-4">About {config.name}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{config.intro}</p>
            </div>

            {/* PRODUCT GRID */}
            <h3 className="font-display text-2xl font-bold text-primary mb-8 border-b border-border pb-4">
              B2B Product Range
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {brandProducts.map((p, i) => (
                <ProductCard key={p.name + i} p={p} i={i} tick={tick} />
              ))}
            </div>
          </div>
        </section>

        {/* CUSTOM B2B CTA SECTION */}
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
