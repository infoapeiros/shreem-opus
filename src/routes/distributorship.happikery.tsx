import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductTile } from "@/components/site/ProductTile";
import { happikeryProducts } from "@/data/happikery-products";

const accentStyles: React.CSSProperties = {
  "--secondary": "oklch(0.42 0.15 20)", // maroon / burgundy
  "--gradient-primary": "linear-gradient(135deg, oklch(0.42 0.15 20), oklch(0.30 0.13 15))",
  "--gradient-accent": "linear-gradient(135deg, oklch(0.88 0.045 70), oklch(0.78 0.07 55))", // cream / warm gold
} as React.CSSProperties;

const heroGradient = "linear-gradient(135deg, oklch(0.22 0.10 18), oklch(0.36 0.14 22))";

export const Route = createFileRoute("/distributorship/happikery")({
  head: () => ({
    meta: [
      { title: "Happikery - Ready to Eat Gravy Products — Ready-to-Eat Gravies & Sauces | Shreem Eco Ventures LLP" },
      {
        name: "description",
        content:
          "Browse the full Happikery - Ready to Eat Gravy product range — ready-to-eat gravies, sauces, biryani paste, pav bhaji, sambhar and pizza pasta sauce, distributed pan-India by Shreem Eco Ventures LLP.",
      },
      { property: "og:title", content: "Happikery - Ready to Eat Gravy Products — Shreem Eco Ventures LLP" },
      {
        property: "og:description",
        content: "Authorized distributor of Happikery - Ready to Eat Gravy ready-to-eat gravies and sauces for restaurants, cloud kitchens, hotels and caterers.",
      },
      { property: "og:url", content: "/distributorship/happikery" },
    ],
    links: [{ rel: "canonical", href: "/distributorship/happikery" }],
  }),
  component: HappikeryProductsPage,
});

function HappikeryProductsPage() {
  return (
    <div style={accentStyles}>
      <SiteLayout>
        <section className="relative overflow-hidden" style={{ backgroundImage: heroGradient }}>
          <div aria-hidden className="absolute -top-24 -right-24 h-80 w-80 rounded-full gradient-accent opacity-20 blur-3xl" />
          <div aria-hidden className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="container-px mx-auto max-w-7xl py-12 md:py-16 relative">
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-white/80 mb-3">
              Authorized Distributor
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white max-w-3xl">Happikery - Ready to Eat Gravy Product Range</h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85">Ready-to-eat gravies, sauces, biryani paste, and food solutions for restaurants, cloud kitchens, hotels, caterers, and food businesses.</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container-px mx-auto max-w-7xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-10">
              <Link to="/distributorship" className="hover:text-primary transition-colors">
                Distribution
              </Link>
              <span>/</span>
              <span className="text-secondary">Happikery - Ready to Eat Gravy</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {happikeryProducts.map((p, i) => (
                <ProductTile key={p.id} name={p.name} image={p.image} price={p.price} horecaPack={p.horecaPack} i={i} />
              ))}
            </div>

            <div className="mt-10">
              <Link
                to="/distributorship"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Back to Distribution
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-border/45 bg-surface">
          <div className="container-px mx-auto max-w-5xl text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
              Interested in stocking Happikery - Ready to Eat Gravy products?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Reach out for pricing, bulk orders, and pan-India dispatch of the full Happikery - Ready to Eat Gravy range.
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
    </div>
  );
}
