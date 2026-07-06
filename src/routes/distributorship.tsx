import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { ArrowRight } from "lucide-react";
import cateringImg from "@/assets/catering.jpg";
import arecaImg from "@/assets/areca.jpg";
import cleaningImg from "@/assets/cleaning.jpg";
import gravyImg from "@/assets/gravy.jpg";
import { products, ProductCard, CategoryEntryCard, type Product } from "@/components/site/ProductShowcase";

export const Route = createFileRoute("/distributorship")({
  component: () => <Outlet />,
});
