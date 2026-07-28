import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Leaf,
  Sparkles,
  Utensils,
  Droplets,
  Settings,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Globe2,
  ShieldCheck,
  Package,
  Award,
  Clock3,
  Gauge,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Imports for product images (acting as rich default showcases, easy to swap!)
import heroImg from "@/assets/plantin-disposable.png";
import plantinHeroBg from "@/assets/plantin_herobg.png";
import amruteyHeroImg from "@/assets/amrutey_hero.png";
import amruteyHeroBg from "@/assets/amrutey_herobg.png";
import amrutey2HeroImg from "@/assets/amrutey2_hero.png";
import amrutey2HeroBg from "@/assets/amrutey2_herobg.png";
import happikeryHeroImg from "@/assets/happykery_hero.png";
import happikeryHeroBg from "@/assets/happykery_herobg.png";
import cleaningSegmentImg from "@/assets/BLS/chemicals/bright-9-all-purpose-cleaner-cum-sanitizer-concentrate.webp";
import purioraHeroBg from "@/assets/puriora_herobg.png";
import machineImg from "@/assets/BLS/machines/bls-1200e-auto-scrubber.webp";
import blsHeroBg from "@/assets/bls_herobg.png";

export interface HeroSlideData {
  id: string;
  brandName: string;
  badgeTagline: string;
  BadgeIcon: LucideIcon;
  heading: string;
  description: string;
  primaryCta: { label: string; to: string };
  secondaryCta: { label: string; to: string };
  stat: { label: string; Icon: LucideIcon };
  /** Optional full-bleed background photo for this slide only, overriding the gradient. */
  bgImage?: string;
  /** Tailwind class for the readability overlay drawn over bgImage (defaults to bg-black/30). */
  bgOverlayClassName?: string;
  image: {
    src: string;
    alt: string;
    /** Defaults to "cover"; use "contain" to show the whole image unclipped. */
    fit?: "cover" | "contain";
  };
  theme: {
    accentHex: string;
    badgeStyle: string;
    primaryBtnStyle: string;
    bgGradientClass: string;
    bgTheme: "nature" | "tea" | "kitchen" | "cleaning" | "industrial";
  };
}

/**
 * Single Configurable Data Array for all Hero Slides.
 * Modify text, URLs, or image paths in this array to update hero content.
 */
export const HERO_SLIDES: HeroSlideData[] = [
  // ---------------------------------------------------------------------------
  // SLIDE 1: PLANT IN DISPOSABLE
  // ---------------------------------------------------------------------------
  {
    id: "plant-in-disposable",
    brandName: "Plant In Disposable",
    badgeTagline: "PLANT IN DISPOSABLE · 100% ECO-FRIENDLY",
    BadgeIcon: Leaf,
    heading: "Plant In Disposable Eco-Friendly Areca Tableware",
    description:
      "Premium biodegradable areca leaf plates and bowls crafted for homes, restaurants, catering, and export markets.",
    primaryCta: { label: "Explore Products", to: "/products" },
    secondaryCta: { label: "Get a Quote", to: "/contact" },
    stat: { label: "100% Biodegradable", Icon: Leaf },
    bgImage: plantinHeroBg,
    bgOverlayClassName: "bg-black/35",
    image: {
      src: heroImg,
      alt: "Plant In Disposable Eco-Friendly Areca Tableware",
    },
    theme: {
      accentHex: "#2E7D32",
      badgeStyle: "bg-green-800/20 text-green-300 border-green-700/40",
      primaryBtnStyle: "from-green-800 to-green-900 shadow-green-950/50 hover:from-green-700 hover:to-green-800",
      bgGradientClass:
        "from-slate-950 via-emerald-950/80 to-teal-950/90 text-white",
      bgTheme: "nature",
    },
  },

  // ---------------------------------------------------------------------------
  // SLIDE 2: ANNAPURNA PREMIUM TEA
  // ---------------------------------------------------------------------------
  {
    id: "annapurna-tea",
    brandName: "Annapurna Premium Tea",
    badgeTagline: "ANNAPURNA PREMIUM TEA · RICH AROMA",
    BadgeIcon: Sparkles,
    heading: "Premium Tea with Rich Aroma",
    description:
      "Carefully selected tea leaves delivering rich aroma, refreshing taste, and consistent quality in every cup.",
    primaryCta: { label: "Explore Products", to: "/products" },
    secondaryCta: { label: "Get a Quote", to: "/contact" },
    stat: { label: "Premium Tea Collection", Icon: Award },
    bgImage: amruteyHeroBg,
    bgOverlayClassName: "bg-black/25",
    image: {
      src: amruteyHeroImg,
      alt: "Annapurna Premium Tea Packaging",
    },
    theme: {
      accentHex: "#F59E0B",
      badgeStyle: "bg-amber-500/15 text-amber-300 border-amber-500/30",
      primaryBtnStyle: "from-amber-500 to-orange-600 shadow-amber-950/50",
      bgGradientClass:
        "from-amber-950/90 via-stone-950 to-slate-950 text-white",
      bgTheme: "tea",
    },
  },

  // ---------------------------------------------------------------------------
  // SLIDE 3: AMRUTEY TEA
  // ---------------------------------------------------------------------------
  {
    id: "amrutey-tea",
    brandName: "Everyday Tea",
    badgeTagline: "AMRUTEY TEA · EVERYDAY QUALITY",
    BadgeIcon: Sparkles,
    heading: "Everyday Tea for Every Home",
    description:
      "Affordable, refreshing tea crafted for everyday use, delivering consistent taste and quality in every cup.",
    primaryCta: { label: "Explore Products", to: "/products" },
    secondaryCta: { label: "Get a Quote", to: "/contact" },
    stat: { label: "Amrutey Tea Collection", Icon: Award },
    bgImage: amrutey2HeroBg,
    bgOverlayClassName: "bg-black/25",
    image: {
      src: amrutey2HeroImg,
      alt: "Amrutey Tea Packaging",
    },
    theme: {
      accentHex: "#F59E0B",
      badgeStyle: "bg-amber-500/15 text-amber-300 border-amber-500/30",
      primaryBtnStyle: "from-amber-500 to-orange-600 shadow-amber-950/50",
      bgGradientClass:
        "from-amber-950/90 via-stone-950 to-slate-950 text-white",
      bgTheme: "tea",
    },
  },

  // ---------------------------------------------------------------------------
  // SLIDE 4: HAPPIKERY READY-TO-EAT GRAVY
  // ---------------------------------------------------------------------------
  {
    id: "happikery-gravy",
    brandName: "Happikery Ready-to-Eat Gravy",
    badgeTagline: "HAPPIKERY · CULINARY SOLUTIONS",
    BadgeIcon: Utensils,
    heading: "Restaurant Style Taste in Minutes",
    description:
      "Ready-to-eat gravies and cooking bases made for restaurants, cloud kitchens, caterers, and home chefs.",
    primaryCta: { label: "Explore Products", to: "/distributorship/happikery" },
    secondaryCta: { label: "Get a Quote", to: "/contact" },
    stat: { label: "Ready in Minutes", Icon: Clock3 },
    bgImage: happikeryHeroBg,
    bgOverlayClassName: "bg-black/25",
    image: {
      src: happikeryHeroImg,
      alt: "Happikery Ready-to-Eat Gravies Lineup",
      fit: "contain",
    },
    theme: {
      accentHex: "#E11D48",
      badgeStyle: "bg-rose-500/15 text-rose-300 border-rose-500/30",
      primaryBtnStyle: "from-rose-500 to-red-600 shadow-rose-950/50",
      bgGradientClass: "from-stone-950 via-rose-950/70 to-stone-950 text-white",
      bgTheme: "kitchen",
    },
  },

  // ---------------------------------------------------------------------------
  // SLIDE 5: PURIORA CLEANING SOLUTIONS
  // ---------------------------------------------------------------------------
  {
    id: "puriora-cleaning",
    brandName: "Puriora Cleaning Solutions",
    badgeTagline: "PURIORA · HYGIENE & CLEANING",
    BadgeIcon: Droplets,
    heading: "Professional Cleaning Solutions",
    description:
      "High-performance cleaning chemicals designed for homes, industries, hotels, hospitals, and commercial spaces.",
    primaryCta: { label: "Explore Products", to: "/products/puriora" },
    secondaryCta: { label: "Get a Quote", to: "/contact" },
    stat: { label: "Hospital-Grade Hygiene", Icon: ShieldCheck },
    bgImage: purioraHeroBg,
    bgOverlayClassName: "bg-black/35",
    image: {
      src: cleaningSegmentImg,
      alt: "Puriora Professional Cleaning Chemicals",
    },
    theme: {
      accentHex: "#14B8A6",
      badgeStyle: "bg-teal-700/20 text-teal-100 border-teal-600/40",
      primaryBtnStyle: "from-teal-700 to-teal-600 shadow-teal-950/50 hover:from-teal-600 hover:to-teal-500",
      bgGradientClass:
        "from-slate-950 via-blue-950/80 to-cyan-950/90 text-white",
      bgTheme: "cleaning",
    },
  },

  // ---------------------------------------------------------------------------
  // SLIDE 6: CLEANING MACHINES
  // ---------------------------------------------------------------------------
  {
    id: "cleaning-machines",
    brandName: "BLS Industrial Equipment",
    badgeTagline: "BLS · INDUSTRIAL EQUIPMENT",
    BadgeIcon: Settings,
    heading: "Industrial Cleaning Equipment",
    description:
      "Reliable cleaning machines engineered for commercial, industrial, and institutional cleaning applications.",
    primaryCta: { label: "Explore Products", to: "/distributorship/bls" },
    secondaryCta: { label: "Get a Quote", to: "/contact" },
    stat: { label: "Engineered to Last", Icon: Gauge },
    bgImage: blsHeroBg,
    bgOverlayClassName: "bg-black/35",
    image: {
      src: machineImg,
      alt: "BLS Industrial Cleaning Machine Showcase",
    },
    theme: {
      accentHex: "#9CA3AF",
      badgeStyle: "bg-gray-700/20 text-gray-300 border-gray-500/40",
      primaryBtnStyle: "from-gray-700 to-gray-600 shadow-gray-950/50 hover:from-gray-600 hover:to-gray-500",
      bgGradientClass: "from-slate-950 via-slate-900 to-blue-950 text-white",
      bgTheme: "industrial",
    },
  },
];

/**
 * Shared ambient backdrop present on every slide: fine dot-grid, faint
 * geometric outlines, top sheen and edge vignette. Gives every theme the
 * same layered, high-production feel before its own motif is added on top.
 */
function HeroAmbientLayer() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-white/[0.07] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.45)_100%)]" />
      <div className="absolute top-14 right-[10%] h-36 w-36 border border-white/10 rotate-45 hidden lg:block" />
      <div className="absolute bottom-24 left-[7%] h-20 w-20 border border-white/10 rotate-12 hidden lg:block" />
    </div>
  );
}

/**
 * Slide-specific animated background decorations (No plain colors!)
 */
function SlideBackgroundDecoration({ theme }: { theme: HeroSlideData["theme"]["bgTheme"] }) {
  switch (theme) {
    case "nature":
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          {/* Subtle leaves pattern & glow */}
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-green-800/20 blur-3xl animate-float" />
          <div className="absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-green-900/15 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          {/* Decorative Leaf SVG Watermark */}
          <svg
            className="absolute right-0 bottom-0 opacity-[0.04] text-green-700 w-[600px] h-[600px] transform translate-x-1/4 translate-y-1/4 pointer-events-none"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17,8C8,10 59,16.17 3.82,21.34L5.71,22.58C9.53,17.9 13.91,14.65 17,14C17,11 17,8 17,8M21,3C21,3 12.83,4 7,9C1.17,14 1.5,21.5 1.5,21.5C1.5,21.5 9,21.83 14,16C19,10.17 21,3 21,3Z" />
          </svg>
        </div>
      );
    case "tea":
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          {/* Golden sunrise rays glow */}
          <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-amber-500/15 blur-[120px]" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-orange-600/10 blur-3xl animate-float" />
          {/* Radiant Sun/Tea Ray motif */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
          {/* Concentric ring motif */}
          <div className="absolute top-1/2 left-[12%] -translate-y-1/2 h-64 w-64 rounded-full border border-amber-300/10" />
          <div className="absolute top-1/2 left-[12%] -translate-y-1/2 h-40 w-40 rounded-full border border-amber-300/10" />
        </div>
      );
    case "kitchen":
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          {/* Warm restaurant culinary ambience */}
          <div className="absolute top-1/3 left-10 h-80 w-80 rounded-full bg-rose-600/15 blur-[100px] animate-float" />
          <div className="absolute -bottom-10 right-10 h-96 w-96 rounded-full bg-red-600/10 blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-500/5 via-transparent to-transparent" />
          {/* Plate ring motif */}
          <div className="absolute bottom-16 left-[16%] h-48 w-48 rounded-full border border-rose-300/10" />
        </div>
      );
    case "cleaning":
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          {/* Water splash wave curves & bubble glow */}
          <div className="absolute -top-10 left-1/3 h-96 w-96 rounded-full bg-teal-300/15 blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-teal-600/15 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
          {/* Water Wave Curves */}
          <svg
            className="absolute bottom-0 left-0 w-full opacity-10 text-teal-400 pointer-events-none"
            viewBox="0 0 1440 320"
            fill="currentColor"
          >
            <path d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,192C960,203,1056,181,1152,165.3C1248,150,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </div>
      );
    case "industrial":
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          {/* Hex mesh pattern and metallic glow */}
          <div className="absolute -top-20 right-10 h-[450px] w-[450px] rounded-full bg-gray-400/15 blur-[110px]" />
          <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-slate-500/10 blur-2xl animate-float" />
          {/* Hexagonal Mesh Overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='40' viewBox='0 0 24 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L12 33.079L24 40L24 26.158L12 19.237L0 26.158Z' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
      );
    default:
      return null;
  }
}

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const slideCount = HERO_SLIDES.length;

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
  }, [slideCount]);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slideCount) % slideCount);
  }, [slideCount]);

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-Slide Timer (5.5 seconds)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      goToNext();
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused, goToNext]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      goToNext();
    } else if (distance < -minSwipeDistance) {
      goToPrev();
    }
  };

  const currentSlide = HERO_SLIDES[currentIndex];
  const { BadgeIcon, stat } = currentSlide;
  const StatIcon = stat.Icon;

  // Animation variants for smooth fade/slide transition
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: "0%",
      opacity: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 32 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 32 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-slate-950 min-h-[1000px] sm:min-h-[600px] lg:h-[620px] xl:h-[640px] flex flex-col justify-between select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Product Showcase Hero Carousel"
    >
      {/* ANIMATED SLIDE CONTAINER */}
      <div className="relative flex-1 w-full flex items-start sm:items-center">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentSlide.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className={`absolute inset-0 w-full h-full bg-gradient-to-br ${currentSlide.theme.bgGradientClass} flex items-center`}
          >
            {/* Full-bleed background photo override for this slide, with readability overlay */}
            {currentSlide.bgImage && (
              <>
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${currentSlide.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <div aria-hidden className={`absolute inset-0 ${currentSlide.bgOverlayClassName ?? "bg-black/30"}`} />
              </>
            )}
            {/* Shared ambient depth layer (grid, grain, vignette, geometry) */}
            <HeroAmbientLayer />
            {/* Slide-specific decorative background */}
            <SlideBackgroundDecoration theme={currentSlide.theme.bgTheme} />

            {/* MAIN LAYOUT CONTENT */}
            <div className="mx-auto max-w-[92rem] w-full px-5 md:px-8 xl:px-10 py-3 md:py-5 relative z-10">
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-center">

                {/* ------------------------------------------------------------- */}
                {/* LEFT SIDE (45% on desktop: lg:col-span-5) — shown after the image on mobile so the product shot is visible first */}
                {/* ------------------------------------------------------------- */}
                <div className="order-2 lg:order-none lg:col-span-5 flex flex-col items-start text-left">
                  {/* Badge / Tagline */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] border backdrop-blur-md shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)] ${currentSlide.theme.badgeStyle}`}
                  >
                    <BadgeIcon className="h-4 w-4" />
                    <span>{currentSlide.badgeTagline}</span>
                  </motion.div>

                  {/* Heading */}
                  <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="mt-4 sm:mt-6 font-display text-3xl sm:text-5xl lg:text-[2.9rem] xl:text-[3.5rem] font-extrabold text-white leading-[1.1] sm:leading-[1.06] tracking-tight [text-wrap:balance]"
                  >
                    {currentSlide.heading}
                  </motion.h1>

                  {/* Accent divider */}
                  <motion.span
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                    className="mt-4 sm:mt-6 h-1 w-14 rounded-full origin-left"
                    style={{ backgroundColor: currentSlide.theme.accentHex }}
                  />

                  {/* Short Description (2-3 lines) */}
                  <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="mt-3 sm:mt-5 max-w-xl text-base sm:text-lg text-slate-200/90 leading-relaxed font-normal"
                  >
                    {currentSlide.description}
                  </motion.p>

                  {/* 2 CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    className="mt-6 sm:mt-9 flex flex-wrap items-center gap-4"
                  >
                    {/* Primary CTA: Explore Products */}
                    <Link
                      to={currentSlide.primaryCta.to}
                      className={`group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 ring-1 ring-white/10 ${currentSlide.theme.primaryBtnStyle}`}
                    >
                      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                      <span className="relative">{currentSlide.primaryCta.label}</span>
                      <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    {/* Secondary CTA: Get a Quote */}
                    <Link
                      to={currentSlide.secondaryCta.to}
                      className="group inline-flex items-center gap-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md px-7 py-3.5 text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      {currentSlide.secondaryCta.label}
                      <Globe2 className="h-4 w-4 text-slate-300 group-hover:text-white transition-colors" />
                    </Link>
                  </motion.div>

                  {/* Trust indicator badge */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55 }}
                    className="mt-6 sm:mt-9 flex flex-wrap items-center gap-3 text-xs text-slate-300/80"
                  >
                    <div className="flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1.5">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Shreem Eco Ventures LLP</span>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1.5">
                      <Package className="h-3.5 w-3.5 text-amber-400" />
                      <span>Export Quality Standard</span>
                    </div>
                  </motion.div>
                </div>

                {/* ------------------------------------------------------------- */}
                {/* RIGHT SIDE (55% on desktop: lg:col-span-7) — shown first on mobile so the product shot is immediately visible */}
                {/* ------------------------------------------------------------- */}
                <div className="order-1 lg:order-none lg:col-span-7 w-full flex justify-center lg:justify-end">
                  <div className="w-full max-w-2xl relative pb-5 pr-3 pt-3 sm:pb-8 sm:pr-6">
                    {/* Offset rotated backdrop panel for layered depth */}
                    <div
                      aria-hidden
                      className="absolute -inset-2 sm:-inset-4 rounded-[2.25rem] rotate-2 bg-gradient-to-br from-white/10 to-transparent border border-white/10"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 sm:inset-2 rounded-[2rem] -rotate-1 border"
                      style={{ borderColor: `${currentSlide.theme.accentHex}40` }}
                    />

                    {/* Entrance animation wrapper */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.93, y: 30, rotate: -2 }}
                      animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                      transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="relative"
                    >
                      {/* Continuous gentle float */}
                      <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        className="relative"
                      >
                        {/* Rotating dashed accent ring */}
                        <div
                          aria-hidden
                          className="absolute -top-6 -left-6 h-16 w-16 rounded-full border-2 border-dashed opacity-40 hidden sm:block animate-[spin_18s_linear_infinite]"
                          style={{ borderColor: currentSlide.theme.accentHex }}
                        />

                        {/* Main Image Showcase Frame */}
                        <div className="relative rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden bg-slate-900/60 border border-white/15 backdrop-blur-md shadow-[0_35px_90px_-25px_rgba(0,0,0,0.75)] group">
                          <div className="relative w-full sm:aspect-[16/9.5] overflow-hidden bg-slate-900 flex items-center justify-center">
                            <img
                              src={currentSlide.image.src}
                              alt={currentSlide.image.alt}
                              className={`w-full h-auto sm:h-full ${currentSlide.image.fit === "contain" ? "object-contain" : "object-cover"} transform transition-transform duration-700 group-hover:scale-105`}
                              loading="eager"
                            />

                            {/* Subtle inner shadow overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none" />

                            {/* One-time shimmer sweep on entrance */}
                            <motion.div
                              aria-hidden
                              initial={{ x: "-120%" }}
                              animate={{ x: "220%" }}
                              transition={{ delay: 1, duration: 1.1, ease: "easeInOut" }}
                              className="absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"
                            />

                            {/* Slide Brand Badge Overlay */}
                            <div className="absolute top-4 right-4 sm:top-5 sm:right-5 backdrop-blur-md bg-slate-950/70 border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-semibold text-white shadow-lg">
                              <span
                                className="h-2 w-2 rounded-full animate-pulse"
                                style={{ backgroundColor: currentSlide.theme.accentHex }}
                              />
                              {currentSlide.brandName}
                            </div>
                          </div>
                        </div>

                        {/* Floating stat chip overlapping the frame */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8, duration: 0.5 }}
                          className="absolute -bottom-6 -left-3 sm:-bottom-7 sm:-left-6"
                        >
                          <div className="flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur px-4 py-3 shadow-2xl border border-white/60">
                            <div
                              className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-white"
                              style={{ backgroundColor: currentSlide.theme.accentHex }}
                            >
                              <StatIcon className="h-4.5 w-4.5" />
                            </div>
                            <div className="leading-tight">
                              <div className="text-sm font-bold text-slate-900">{stat.label}</div>
                              <div className="text-[11px] text-slate-500">{currentSlide.brandName}</div>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    </motion.div>

                    {/* Ambient glow underneath showcase frame */}
                    <div
                      className="absolute inset-6 sm:inset-8 -z-10 rounded-[3rem] opacity-30 blur-3xl pointer-events-none"
                      style={{ backgroundColor: currentSlide.theme.accentHex }}
                    />
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ----------------------------------------------------------------------- */}
      {/* NAVIGATION CONTROLS AND DOTS BAR */}
      {/* ----------------------------------------------------------------------- */}
      <div className="relative z-20 w-full bg-slate-950/80 backdrop-blur-md border-t border-white/10 py-3.5 px-5 md:px-8">
        <div className="mx-auto max-w-[92rem] flex flex-wrap items-center justify-between gap-4">

          {/* Slide Progress / Info */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-white tracking-widest font-mono">
              0{currentIndex + 1} <span className="text-white/40">/ 0{slideCount}</span>
            </span>
            <div className="h-3.5 w-px bg-white/20 hidden sm:block" />
            <span className="text-xs font-medium text-slate-300 hidden sm:inline-block">
              {currentSlide.brandName}
            </span>
          </div>

          {/* Center Navigation Dots */}
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}: ${slide.brandName}`}
                  className="relative p-1 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-full transition-all"
                >
                  <div
                    className={`relative h-2.5 overflow-hidden rounded-full transition-all duration-500 ${
                      isActive ? "w-8 sm:w-10 bg-white/25" : "w-2.5 bg-white/30 hover:bg-white/60"
                    }`}
                  >
                    {isActive && (
                      <span
                        key={`${slide.id}-${currentIndex}`}
                        className="absolute inset-y-0 left-0 block h-full rounded-full animate-progress"
                        style={{
                          backgroundColor: slide.theme.accentHex,
                          animationPlayState: isPaused ? "paused" : "running",
                        }}
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Controls: Prev, Play/Pause, Next */}
          <div className="flex items-center gap-2">
            {/* Pause / Play Button */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              aria-label={isPaused ? "Resume auto-slide" : "Pause auto-slide"}
              title={isPaused ? "Resume auto-slide" : "Pause auto-slide"}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/15"
            >
              {isPaused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
            </button>

            {/* Prev Button */}
            <button
              onClick={goToPrev}
              aria-label="Previous slide"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/15"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Next Button */}
            <button
              onClick={goToNext}
              aria-label="Next slide"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/15"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
