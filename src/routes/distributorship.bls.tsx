import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { ProductTile } from "@/components/site/ProductTile";
import { blsProducts } from "@/data/bls-products";

export const Route = createFileRoute("/distributorship/bls")({
  head: () => ({
    meta: [
      { title: "BLS Cleaning Products — Chemicals & Machines | Shreem Eco Ventures LLP" },
      {
        name: "description",
        content:
          "Browse the full BLS range of commercial cleaning chemicals and cleaning machines distributed pan-India by Shreem Eco Ventures LLP.",
      },
      { property: "og:title", content: "BLS Cleaning Products — Shreem Eco Ventures LLP" },
      {
        property: "og:description",
        content: "Authorized distributor of BLS cleaning chemicals and cleaning machines for hospitality and industrial use.",
      },
      { property: "og:url", content: "/distributorship/bls" },
    ],
    links: [{ rel: "canonical", href: "/distributorship/bls" }],
  }),
  component: BlsProductsPage,
});

function BlsProductsPage() {
  const chemicals = blsProducts.filter((p) => p.category === "chemicals");
  const machines = blsProducts.filter((p) => p.category === "machines");

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Authorized Distributor"
        title="BLS Cleaning Products"
        subtitle="Commercial-grade cleaning chemicals and cleaning machines for hospitality, industrial, and institutional use."
      />

      <section className="py-16 bg-background">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Link to="/distributorship" className="hover:text-primary transition-colors">
                Distribution
              </Link>
              <span>/</span>
              <span className="text-secondary">BLS</span>
            </div>
            <Link
              to="/distributorship"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Distribution
            </Link>
          </div>

          <h3 className="font-display text-2xl font-bold text-primary mb-8 border-b border-border pb-4">
            Cleaning Chemicals
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chemicals.map((p, i) => (
              <ProductTile key={p.id} name={p.name} image={p.image} description={p.description} price={p.price} i={i} />
            ))}
          </div>

          <h3 className="font-display text-2xl font-bold text-primary mb-8 mt-16 border-b border-border pb-4">
            Cleaning Machines
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {machines.map((p, i) => (
              <ProductTile key={p.id} name={p.name} image={p.image} description={p.description} price={p.price} i={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/45 bg-surface">
        <div className="container-px mx-auto max-w-5xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
            Interested in stocking BLS products?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Reach out for pricing, bulk orders, and pan-India dispatch of the full BLS range.
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
