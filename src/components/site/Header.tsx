import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/website logo/shreem_logo_cropped.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Own Brand Products" },
  { to: "/distributorship", label: "Distribution" },
  { to: "/services", label: "Services" },
  { to: "/export-inquiry", label: "Export" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto flex h-18 max-w-7xl items-center justify-between py-3">
        <Link to="/" className="flex items-center group" aria-label="Shreem Eco Ventures LLP — Home">
          <img
            src={logo}
            alt="Shreem Eco Ventures LLP"
            className="h-10 sm:h-11 lg:h-10 xl:h-11 w-auto object-contain rounded-lg transition-transform group-hover:scale-105"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm font-medium text-foreground/80 rounded-md hover:text-primary hover:bg-muted transition-colors"
              activeProps={{ className: "px-3 py-2 text-sm font-semibold text-primary bg-muted rounded-md" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/export-inquiry"
            className="inline-flex items-center gap-2 rounded-full gradient-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all"
          >
            Get a Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="lg:hidden grid h-10 w-10 place-items-center rounded-md border border-border bg-background"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border overflow-hidden"
          >
            <div className="container-px mx-auto max-w-7xl py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-md text-sm font-medium hover:bg-muted"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/export-inquiry"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full gradient-primary px-5 py-3 text-sm font-semibold text-white"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
