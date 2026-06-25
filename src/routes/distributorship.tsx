import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import cateringImg from "@/assets/catering.jpg";

export const Route = createFileRoute("/distributorship")({
  head: () => ({
    meta: [
      { title: "Distributorship — Authorized Brand Partnerships | Shreem Eco Ventures LLP" },
      { name: "description", content: "Shreem Eco Ventures LLP is an authorized distributor of Happykery and select partner brands — extending a trusted supply network across India." },
      { property: "og:title", content: "Distributorship — Shreem Eco Ventures LLP" },
      { property: "og:description", content: "Authorized distribution partnerships extending our trusted supply network across India." },
      { property: "og:url", content: "/distributorship" },
    ],
    links: [{ rel: "canonical", href: "/distributorship" }],
  }),
  component: DistributorshipPage,
});

type Distributor = { name: string; img: string; desc: string; features: string[] };

const distributors: Distributor[] = [
  {
    name: "Happykery",
    img: cateringImg,
    desc: "Authorized distributorship of Happykery products — extending our trusted supply network to more partners.",
    features: ["Authorized distributor", "Reliable supply", "Pan-India reach"],
  },
];

function DistributorCard({ d, i }: { d: Distributor; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.08 }}
      className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all"
    >
      <div className="aspect-[4/3] overflow-hidden bg-surface">
        <img
          src={d.img}
          alt={d.name}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold text-primary">{d.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
        <ul className="mt-4 space-y-1.5">
          {d.features.map((f) => (
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

function DistributorshipPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Authorized Distribution"
        title="Brands we proudly distribute."
        subtitle="Authorized distribution partnerships that extend our trusted supply network across India."
      />

      <section className="py-20 bg-background">
        <div className="container-px mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {distributors.map((d, i) => (
            <DistributorCard key={d.name} d={d} i={i} />
          ))}
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
