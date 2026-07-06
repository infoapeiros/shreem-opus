import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { ProductTile } from "@/components/site/ProductTile";
import { happikeryProducts } from "@/data/happikery-products";

export const Route = createFileRoute("/distributorship/happikery")({
  head: () => ({
    meta: [
      { title: "Happikery Products — Ready-to-Eat Gravies & Sauces | Shreem Eco Ventures LLP" },
      {
        name: "description",
        content:
          "Browse the full Happikery product range — ready-to-eat gravies, sauces, biryani paste, pav bhaji, sambhar and pizza pasta sauce, distributed pan-India by Shreem Eco Ventures LLP.",
      },
      { property: "og:title", content: "Happikery Products — Shreem Eco Ventures LLP" },
      {
        property: "og:description",
        content: "Authorized distributor of Happikery ready-to-eat gravies and sauces for restaurants, cloud kitchens, hotels and caterers.",
      },
      { property: "og:url", content: "/distributorship/happikery" },
    ],
    links: [{ rel: "canonical", href: "/distributorship/happikery" }],
  }),
  component: HappikeryProductsPage,
});

function HappikeryProductsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Authorized Distributor"
        title="Happikery Product Range"
        subtitle="Ready-to-eat gravies, sauces, biryani paste, and food solutions for restaurants, cloud kitchens, hotels, caterers, and food businesses."
      />

      <section className="py-16 bg-background">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Link to="/distributorship" className="hover:text-primary transition-colors">
                Distribution
              </Link>
              <span>/</span>
              <span className="text-secondary">Happikery</span>
            </div>
            <Link
              to="/distributorship"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Distribution
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {happikeryProducts.map((p, i) => (
              <ProductTile key={p.id} name={p.name} image={p.image} price={p.price} i={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/45 bg-surface">
        <div className="container-px mx-auto max-w-5xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
            Interested in stocking Happikery products?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Reach out for pricing, bulk orders, and pan-India dispatch of the full Happikery range.
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
