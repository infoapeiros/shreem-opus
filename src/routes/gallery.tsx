import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import heroImg from "@/assets/hero.jpg";
import arecaImg from "@/assets/areca.jpg";
import teaImg from "@/assets/tea.jpg";
import cleaningImg from "@/assets/cleaning.jpg";
import gravyImg from "@/assets/gravy.jpg";
import cateringImg from "@/assets/catering.jpg";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Factory, Products & Events | Shreem Industries" },
      { name: "description", content: "Inside the Shreem Industries facility: factory floor, products, packaging, infrastructure and catering events." },
      { property: "og:title", content: "Photo Gallery — Shreem Industries LLP" },
      { property: "og:description", content: "Tour our factory, products and catering events." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const items = [
  { src: heroImg, cat: "Factory", alt: "Manufacturing facility" },
  { src: arecaImg, cat: "Products", alt: "Areca tableware" },
  { src: teaImg, cat: "Products", alt: "Amrutey premium tea" },
  { src: cleaningImg, cat: "Products", alt: "Cleaning product range" },
  { src: gravyImg, cat: "Products", alt: "Ready to eat gravies" },
  { src: cateringImg, cat: "Catering", alt: "Outdoor catering setup" },
  { src: aboutImg, cat: "Infrastructure", alt: "Production team" },
  { src: heroImg, cat: "Factory", alt: "Production floor" },
  { src: arecaImg, cat: "Packaging", alt: "Areca packaging" },
];

const cats = ["All", "Factory", "Products", "Catering", "Packaging", "Infrastructure"];

function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<string | null>(null);
  const visible = filter === "All" ? items : items.filter((i) => i.cat === filter);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Inside Shreem"
        title="A look at our world."
        subtitle="Factory floors, finished products, packaging lines and the events we power."
      />

      <section className="py-12 bg-background">
        <div className="container-px mx-auto max-w-7xl flex flex-wrap gap-2 justify-center mb-10">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === c ? "gradient-primary text-white shadow-soft" : "bg-surface border border-border hover:border-secondary/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="container-px mx-auto max-w-7xl columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {visible.map((img, i) => (
            <motion.button
              key={img.src + i}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
              onClick={() => setOpen(img.src)}
              className="group block w-full break-inside-avoid overflow-hidden rounded-2xl shadow-soft hover:shadow-elegant transition-all"
            >
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" />
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] bg-primary/90 backdrop-blur-sm grid place-items-center p-6 cursor-zoom-out"
          >
            <button className="absolute top-6 right-6 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="close">
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              src={open} alt="preview" className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-elegant"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </SiteLayout>
  );
}
