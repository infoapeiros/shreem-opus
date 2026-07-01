import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { CategoryEntryCard, ProductCard, products } from "@/components/site/ProductShowcase";

export const Route = createFileRoute("/products")({
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
  component: ProductsPage,
});

function ProductsPage() {
  const [expandedCategory, setExpandedCategory] = useState<"plantin" | "amrutey" | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTick((t) => t + 1), 2500);
    return () => clearInterval(timer);
  }, []);

  const plantinBrand = products.find((p) => p.name === "Plantin Disposable")!;
  const amruteyBrand = products.find((p) => p.name === "Amrutey Premium Tea")!;

  const plantinProducts = products.filter((p) => p.cat === "areca" && p.name !== "Food Packaging");
  const amruteyProducts = products.filter((p) => p.cat === "tea");

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Brands"
        title="Own Brand Products"
        subtitle="Discover our signature in-house brands: Plantin compostable tableware and Amrutey hand-picked premium tea."
      />

      <section className="py-16 bg-background">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <CategoryEntryCard
              p={plantinBrand}
              isExpanded={expandedCategory === "plantin"}
              onToggle={() => setExpandedCategory((c) => (c === "plantin" ? null : "plantin"))}
              tick={tick}
            />
            <CategoryEntryCard
              p={amruteyBrand}
              isExpanded={expandedCategory === "amrutey"}
              onToggle={() => setExpandedCategory((c) => (c === "amrutey" ? null : "amrutey"))}
              tick={tick}
            />
          </div>

          <AnimatePresence mode="wait">
            {expandedCategory === "plantin" && (
              <motion.div
                key="plantin"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-16 border-t border-border/60 pt-16 overflow-hidden"
              >
                <h3 className="font-display text-2xl font-bold text-primary mb-2 text-center">
                  Plantin Disposable Product Range
                </h3>
                <p className="text-center text-muted-foreground mb-10 max-w-md mx-auto">
                  Premium B2B biodegradable tableware made from naturally fallen areca leaves.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {plantinProducts.map((p, i) => (
                    <ProductCard key={p.name + i} p={p} i={i} tick={tick} />
                  ))}
                </div>
              </motion.div>
            )}

            {expandedCategory === "amrutey" && (
              <motion.div
                key="amrutey"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-16 border-t border-border/60 pt-16 overflow-hidden"
              >
                <h3 className="font-display text-2xl font-bold text-primary mb-2 text-center">
                  Amrutey Premium Tea Range
                </h3>
                <p className="text-center text-muted-foreground mb-10 max-w-md mx-auto">
                  Hand-picked premium tea blends curated for hotels, lounges and retail.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {amruteyProducts.map((p, i) => (
                    <ProductCard key={p.name + i} p={p} i={i} tick={tick} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </SiteLayout>
  );
}
