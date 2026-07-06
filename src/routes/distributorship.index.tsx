import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import blsRideOnScrubberImg from "@/assets/BLS/machines/BLS 165 Ride On Scrubber.webp";
import blsRideOnSweeperImg from "@/assets/BLS/machines/BLS 90 Ride On Sweeper.webp";
import blsAutoScrubber1200eImg from "@/assets/BLS/machines/BLS 1200E Auto Scrubber.webp";
import blsAutoScrubber520bImg from "@/assets/BLS/machines/BLS 520 B Auto Scrubber.webp";
import tikkaMasalaImg from "@/assets/happykery/tikka masala base gravy.jpg";
import makhaniImg from "@/assets/happykery/Makhani base gravy.jpg";
import kormaImg from "@/assets/happykery/korma base gravy.jpg";
import { CategoryEntryCard } from "./products.index";
import type { Product } from "./products.index";

export const Route = createFileRoute("/distributorship/")({
  head: () => ({
    meta: [
      { title: "Distribution — Happikery Food Solutions & BLS Cleaning Products | Shreem Eco Ventures LLP" },
      {
        name: "description",
        content:
          "Shreem Eco Ventures LLP is an authorized distributor of Happikery ready-to-eat gravies & sauces and BLS commercial cleaning chemicals and machines across India.",
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
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTick((t) => t + 1), 3500);
    return () => clearInterval(timer);
  }, []);

  const happikeryCat: Product = {
    name: "Happikery",
    imgs: [tikkaMasalaImg, makhaniImg, kormaImg],
    desc: "Authorized distributor of Happikery ready-to-eat gravies, sauces, biryani paste, pav bhaji, sambhar, pizza pasta sauce, and other food solutions for restaurants, cloud kitchens, hotels, caterers, and food businesses.",
    features: ["Ready-to-Eat Gravies & Sauces", "Restaurant & HoReCa Solutions", "Pan-India Distribution"],
  };

  const cleaningCat: Product = {
    name: "Cleaning Products",
    imgs: [blsRideOnScrubberImg, blsRideOnSweeperImg, blsAutoScrubber1200eImg, blsAutoScrubber520bImg],
    desc: "High-performance commercial and industrial cleaning supplies engineered for hospitality and workplaces.",
    features: ["Floor & multi-surface cleaners", "Kitchen & surface disinfectants", "Industrial degreasers & drum supply"],
    imgFit: "contain",
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="B2B Distribution"
        title="Distribution Products & Brands"
        subtitle="Authorized distribution partnerships that extend our trusted supply network across India."
      />

      <section className="py-16 bg-background">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <CategoryEntryCard p={happikeryCat} to="/distributorship/happikery" tick={tick} />
            <CategoryEntryCard p={cleaningCat} to="/distributorship/bls" tick={tick} />
          </div>
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
