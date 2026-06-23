import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Factory, Warehouse, Truck, Tag, Globe2, UtensilsCrossed, ArrowRight } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Manufacturing, Wholesale, Private Label & Catering" },
      { name: "description", content: "Shreem Industries offers manufacturing, wholesale supply, distribution, private label solutions, export support and outdoor catering services." },
      { property: "og:title", content: "Our Services — Shreem Industries LLP" },
      { property: "og:description", content: "Manufacturing, distribution, private label, export support and catering." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { Icon: Factory, title: "Manufacturing", text: "In-house manufacturing of biodegradable areca tableware with strict quality control at every stage." },
  { Icon: Warehouse, title: "Wholesale Supply", text: "Bulk supply for distributors, hospitality chains and large retail accounts with predictable lead times." },
  { Icon: Truck, title: "Distribution", text: "Pan-India distribution network with reliable cold-chain and dry-goods logistics partners." },
  { Icon: Tag, title: "Private Label Solutions", text: "Build your own brand on our products — custom packaging, branding and MOQs to fit your scale." },
  { Icon: Globe2, title: "Export Support", text: "Documentation, certifications and packaging that meets international compliance requirements." },
  { Icon: UtensilsCrossed, title: "Outdoor Catering", text: "Full-service catering for corporate, social and large-scale events across Gujarat." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our services"
        title="Six ways we power your business."
        subtitle="From production lines to plated meals — a single partner across your supply chain."
      />

      <section className="py-20 bg-background">
        <div className="container-px mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative p-8 rounded-2xl border border-border bg-card hover:border-secondary/40 hover:shadow-elegant hover:-translate-y-1 transition-all overflow-hidden"
            >
              <div aria-hidden className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-secondary/5 group-hover:bg-secondary/15 transition-colors" />
              <div className="relative grid h-14 w-14 place-items-center rounded-xl gradient-primary text-white shadow-soft group-hover:scale-110 transition-transform">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="relative mt-6 font-display text-xl font-semibold text-primary">{title}</h3>
              <p className="relative mt-2 text-muted-foreground leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="container-px mx-auto max-w-5xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">Discuss your requirement with our team.</h2>
          <p className="mt-4 text-muted-foreground">Whether you need a sample or a full container, we'll respond within one business day.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-sm font-semibold text-white shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all">
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
