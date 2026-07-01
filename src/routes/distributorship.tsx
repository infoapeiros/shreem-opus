import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { ArrowRight } from "lucide-react";
import cateringImg from "@/assets/catering.jpg";
import arecaImg from "@/assets/areca.jpg";
import cleaningImg from "@/assets/cleaning.jpg";
import gravyImg from "@/assets/gravy.jpg";
import { products, ProductCard, CategoryEntryCard, type Product } from "@/components/site/ProductShowcase";

export const Route = createFileRoute("/distributorship")({
  head: () => ({
    meta: [
      { title: "Distribution — Food Packaging, Cleaning Supplies & Ready Gravies | Shreem Eco Ventures LLP" },
      {
        name: "description",
        content:
          "Shreem Eco Ventures LLP is an authorized distributor of bulk food packaging, commercial cleaning supplies, ready gravies, and partner brands like Happykery.",
      },
      { property: "og:title", content: "Distribution — Shreem Eco Ventures LLP" },
      {
        property: "og:description",
        content: "Authorized distribution partnerships extending our B2B supply network across India.",
      },
      { property: "og:url", content: "/distributorship" },
    ],
    links: [{ rel: "canonical", href: "/distributorship" }],
  }),
  component: DistributorshipPage,
});

function DistributorshipPage() {
  const [expandedCategory, setExpandedCategory] = useState<"happykery" | "packaging" | "cleaning" | "gravy" | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTick((t) => t + 1), 2500);
    return () => clearInterval(timer);
  }, []);

  const happykeryCat: Product = {
    name: "Happykery B2B Catering",
    imgs: [cateringImg],
    desc: "Authorized distributorship of Happykery products — extending B2B catering solutions and food supplies.",
    features: ["Authorized distributor", "Reliable supply", "Pan-India reach"],
  };

  const foodPackagingCat: Product = {
    name: "Food Packaging",
    imgs: [arecaImg],
    desc: "Compostable B2B take-away packaging for QSRs, cloud kitchens, and food service partners.",
    features: ["Branded options", "Stackable", "Food-grade materials"],
  };

  const cleaningCat: Product = {
    name: "Cleaning Products",
    imgs: [cleaningImg],
    desc: "High-performance commercial and industrial cleaning supplies engineered for hospitality and workplaces.",
    features: ["Floor & multi-surface cleaners", "Kitchen & surface disinfectants", "Industrial degreasers & drum supply"],
  };

  const gravyCat: Product = {
    name: "Ready Gravies",
    imgs: [gravyImg],
    desc: "Restaurant-quality Punjabi, Mughlai, South Indian, and Indo-Chinese stock gravy bases.",
    features: ["Chef-formulated recipes", "Ready-to-use bases", "Consistent taste & long shelf life"],
  };

  // Sub-products lists
  const happykeryProducts = [
    {
      name: "Happykery B2B Catering",
      imgs: [cateringImg],
      desc: "Full-service B2B catering supply and commercial kitchen partnerships under the Happykery authorization.",
      features: ["Menu customization", "Bulk corporate packages", "Authorized regional supply"],
    },
  ];

  const foodPackagingProducts = products.filter((p) => p.name === "Food Packaging");
  const cleaningProducts = products.filter((p) => p.cat === "cleaning");
  const gravyProducts = products.filter((p) => p.cat === "gravy");

  return (
    <SiteLayout>
      <PageHero
        eyebrow="B2B Distribution"
        title="Distribution Products & Brands"
        subtitle="Authorized distribution partnerships that extend our trusted supply network across India."
      />

      <section className="py-16 bg-background">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryEntryCard
              p={happykeryCat}
              isExpanded={expandedCategory === "happykery"}
              onToggle={() => setExpandedCategory((c) => (c === "happykery" ? null : "happykery"))}
              tick={tick}
            />
            <CategoryEntryCard
              p={foodPackagingCat}
              isExpanded={expandedCategory === "packaging"}
              onToggle={() => setExpandedCategory((c) => (c === "packaging" ? null : "packaging"))}
              tick={tick}
            />
            <CategoryEntryCard
              p={cleaningCat}
              isExpanded={expandedCategory === "cleaning"}
              onToggle={() => setExpandedCategory((c) => (c === "cleaning" ? null : "cleaning"))}
              tick={tick}
            />
            <CategoryEntryCard
              p={gravyCat}
              isExpanded={expandedCategory === "gravy"}
              onToggle={() => setExpandedCategory((c) => (c === "gravy" ? null : "gravy"))}
              tick={tick}
            />
          </div>

          <AnimatePresence mode="wait">
            {expandedCategory === "happykery" && (
              <motion.div
                key="happykery"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-16 border-t border-border/60 pt-16 overflow-hidden"
              >
                <h3 className="font-display text-2xl font-bold text-primary mb-2 text-center">
                  Happykery B2B Catering Solutions
                </h3>
                <p className="text-center text-muted-foreground mb-10 max-w-md mx-auto">
                  Authorized distributorship extending high-quality corporate and event catering supplies.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {happykeryProducts.map((p, i) => (
                    <ProductCard key={p.name + i} p={p} i={i} tick={tick} />
                  ))}
                </div>
              </motion.div>
            )}

            {expandedCategory === "packaging" && (
              <motion.div
                key="packaging"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-16 border-t border-border/60 pt-16 overflow-hidden"
              >
                <h3 className="font-display text-2xl font-bold text-primary mb-2 text-center">
                  Distributed Food Packaging Range
                </h3>
                <p className="text-center text-muted-foreground mb-10 max-w-md mx-auto">
                  Eco-friendly, food-grade disposable containers and tableware for cloud kitchens and QSRs.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {foodPackagingProducts.map((p, i) => (
                    <ProductCard key={p.name + i} p={p} i={i} tick={tick} />
                  ))}
                </div>
              </motion.div>
            )}

            {expandedCategory === "cleaning" && (
              <motion.div
                key="cleaning"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-16 border-t border-border/60 pt-16 overflow-hidden"
              >
                <h3 className="font-display text-2xl font-bold text-primary mb-2 text-center">
                  Distributed Cleaning Products
                </h3>
                <p className="text-center text-muted-foreground mb-10 max-w-md mx-auto">
                  Commercial-grade multi-surface, kitchen and heavy-duty industrial cleaning chemicals.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cleaningProducts.map((p, i) => (
                    <ProductCard key={p.name + i} p={p} i={i} tick={tick} />
                  ))}
                </div>
              </motion.div>
            )}

            {expandedCategory === "gravy" && (
              <motion.div
                key="gravy"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-16 border-t border-border/60 pt-16 overflow-hidden"
              >
                <h3 className="font-display text-2xl font-bold text-primary mb-2 text-center">
                  Distributed Ready Gravies
                </h3>
                <p className="text-center text-muted-foreground mb-10 max-w-md mx-auto">
                  Punjabi, Mughlai, South Indian, and Chinese restaurant-style stock gravies.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {gravyProducts.map((p, i) => (
                    <ProductCard key={p.name + i} p={p} i={i} tick={tick} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="container-px mx-auto max-w-5xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
            Interested in a distribution partnership?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Reach out to discuss authorized distribution opportunities across your region.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-sm font-semibold text-white shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all"
          >
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
