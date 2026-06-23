import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Factory, ShieldCheck, Leaf } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Shreem Industries LLP — Manufacturing Excellence in Ahmedabad" },
      { name: "description", content: "Learn the story, vision and values behind Shreem Industries LLP — manufacturer of eco-friendly areca tableware and premium B2B supplier from Ahmedabad, India." },
      { property: "og:title", content: "About Shreem Industries LLP" },
      { property: "og:description", content: "Our story, vision and commitment to sustainable manufacturing." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { Icon: Target, title: "Vision", text: "To be India's most trusted manufacturer-supplier in eco-friendly tableware and quality hospitality products." },
  { Icon: Eye, title: "Mission", text: "Deliver consistent, world-class products at competitive prices while protecting the planet and our partners' brands." },
  { Icon: Heart, title: "Core Values", text: "Integrity, quality, sustainability, partnership and relentless customer focus — in every batch we ship." },
];

const pillars = [
  { Icon: Factory, title: "Manufacturing Excellence", text: "Modern equipment, trained craftsmen and standardized processes for repeatable, premium quality at scale." },
  { Icon: ShieldCheck, title: "Quality Assurance", text: "Multi-stage QC across raw material, in-process and final dispatch ensures every order meets international standards." },
  { Icon: Leaf, title: "Sustainability", text: "Areca tableware made from naturally fallen palm leaves — zero chemicals, fully biodegradable in 60 days." },
];

const timeline = [
  { year: "2015", title: "Founded in Ahmedabad", text: "Began as a small trading unit serving local hospitality partners." },
  { year: "2018", title: "Areca manufacturing line", text: "Launched in-house production of biodegradable areca tableware." },
  { year: "2021", title: "Amrutey tea brand", text: "Introduced our premium tea brand for hotels and retailers." },
  { year: "2023", title: "Catering & gravies", text: "Expanded into ready-to-eat gravies and outdoor catering services." },
  { year: "2025", title: "Going global", text: "Servicing export buyers across Middle East, Europe and North America." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About us"
        title="Quality you can trust. Partnerships that last."
        subtitle="Shreem Industries LLP is a family-owned manufacturer and B2B supplier headquartered in Ahmedabad, Gujarat — proudly serving hospitality and retail leaders across India and abroad."
      />

      <section className="py-20 bg-background">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            src={aboutImg} alt="Shreem Industries production floor" loading="lazy" width={1024} height={768}
            className="rounded-2xl shadow-elegant w-full"
          />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary">Our story</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-primary">From a small Ahmedabad workshop to a multi-segment manufacturer.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Shreem Industries LLP was founded with a simple promise — to deliver the kind of consistent quality that builds long-term B2B relationships. A decade in, that promise has scaled across five business segments and dozens of cities, but the discipline behind every order remains unchanged.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today, our 67-shed facility in Pushkar Industrial Hub serves hotels, restaurants, retail chains, distributors and global export buyers who care equally about quality, ethics and supply reliability.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-6">
            {values.map(({ Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elegant transition-all"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-accent text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary">What sets us apart</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-primary">Manufacturing excellence, end to end.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map(({ Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-2xl border border-border bg-card hover:border-secondary/40 hover:shadow-elegant transition-all"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary/10 text-secondary group-hover:gradient-primary group-hover:text-white transition-all">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Timeline */}
      <section className="py-20 bg-surface">
        <div className="container-px mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary">Growth journey</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-primary">A decade of building trust.</h2>
          </div>
          <div className="relative">
            <div aria-hidden className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className={`relative mb-10 md:mb-12 md:grid md:grid-cols-2 md:gap-10 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-10" : "md:pl-10"}`}>
                  <div className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-secondary">{t.year}</div>
                  <h3 className="mt-1 font-display text-xl font-semibold text-primary">{t.title}</h3>
                  <p className="mt-2 text-muted-foreground">{t.text}</p>
                </div>
                <div aria-hidden className="absolute left-2.5 md:left-1/2 top-1.5 h-3 w-3 rounded-full gradient-primary ring-4 ring-background md:-translate-x-1/2" />
                <div />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
