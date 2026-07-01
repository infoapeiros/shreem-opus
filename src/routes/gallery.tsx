import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import factory1Img from "@/assets/factory2.jpg";
import factory2Img from "@/assets/fectory2.jpg";
import factory3Img from "@/assets/factory3.jpg";
import arecaRoundPlates1 from "@/assets/areca-round-plates.jpg";
import arecaRoundPlates2 from "@/assets/areca-round-plates2.jpg";
import arecaRoundPlates3 from "@/assets/areca-round-plates3.jpg";
import arecaRoundPlates4 from "@/assets/areca-round-plates4.jpg";
import arecaBowls1 from "@/assets/areca-bowls.jpg";
import arecaBowls2 from "@/assets/areca-bowls2.jpg";
import arecaTrays1 from "@/assets/areca-trays-and-platters.jpg";
import arecaTrays2 from "@/assets/areca-trays-and-platters2.jpg";
import arecaTrays3 from "@/assets/areca-trays-and-platters3.jpg";
import amruteyTeaImg from "@/assets/amrutey-premium-tea.jpg";
import plantinDisposable1 from "@/assets/plantin-disposable.jpg";
import plantinDisposable2 from "@/assets/plantin-disposable2.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Factory, Products & Events | Shreem Eco Ventures LLP" },
      { name: "description", content: "Inside the Shreem Eco Ventures LLP facility: factory floor, products, packaging lines and areca tableware production." },
      { property: "og:title", content: "Photo Gallery — Shreem Eco Ventures LLP" },
      { property: "og:description", content: "Tour our factory, areca products and packaging lines." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const items = [
  { src: factory1Img,        cat: "Factory",   alt: "Manufacturing facility" },
  { src: factory2Img,        cat: "Factory",   alt: "Factory floor" },
  { src: factory3Img,        cat: "Factory",   alt: "Production area" },
  { src: arecaRoundPlates1,  cat: "Products",  alt: "Areca round plates" },
  { src: arecaRoundPlates2,  cat: "Products",  alt: "Areca round plates" },
  { src: arecaRoundPlates3,  cat: "Products",  alt: "Areca round plates" },
  { src: arecaRoundPlates4,  cat: "Products",  alt: "Areca round plates" },
  { src: arecaBowls1,        cat: "Products",  alt: "Areca bowls" },
  { src: arecaBowls2,        cat: "Products",  alt: "Areca bowls" },
  { src: arecaTrays1,        cat: "Products",  alt: "Areca trays and platters" },
  { src: arecaTrays2,        cat: "Products",  alt: "Areca trays and platters" },
  { src: arecaTrays3,        cat: "Products",  alt: "Areca trays and platters" },
  { src: amruteyTeaImg,      cat: "Products",  alt: "Amrutey premium tea" },
  { src: plantinDisposable1, cat: "Packaging", alt: "Plantin disposable packaging" },
  { src: plantinDisposable2, cat: "Packaging", alt: "Plantin disposable packaging" },
];

const cats = ["All", "Factory", "Products", "Packaging"];

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
