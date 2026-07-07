import bright1WashRoomBathroomCleanerImg from "@/assets/BLS/chemicals/bright-1-wash-room-bathroom-cleaner.webp";
import bright2BkcDisinfectantFloorCleanerImg from "@/assets/BLS/chemicals/bright-2-bkc-disinfectant-floor-cleaner.webp";
import bright2ConcentratedHardSurfaceFloorCleanerSanitizerImg from "@/assets/BLS/chemicals/bright-2-concentrated-hard-surface-floor-cleaner-sanitizer.webp";
import bright3GlassMirrorCleanerConcentrateImg from "@/assets/BLS/chemicals/bright-3-glass-mirror-cleaner-concentrate.webp";
import bright4FurniturePolishImg from "@/assets/BLS/chemicals/bright-4-furniture-polish.webp";
import bright5AirFreshenerImg from "@/assets/BLS/chemicals/bright-5-air-freshener.webp";
import bright6ToiletUrinalBowlCleanerImg from "@/assets/BLS/chemicals/bright-6-toilet-urinal-bowl-cleaner.webp";
import bright7StainlessSteelPolishImg from "@/assets/BLS/chemicals/bright-7-stainless-steel-polish.webp";
import bright8DishWashAllPurposeCleanerConcentrateImg from "@/assets/BLS/chemicals/bright-8-dish-wash-all-purpose-cleaner-concentrate.webp";
import bright9AllPurposeCleanerCumSanitizerConcentrateImg from "@/assets/BLS/chemicals/bright-9-all-purpose-cleaner-cum-sanitizer-concentrate.webp";
import bright10GrillOvenCleanerConcentrateImg from "@/assets/BLS/chemicals/bright-10-grill-oven-cleaner-concentrate.webp";
import bright11CloggedDrainCleanerImg from "@/assets/BLS/chemicals/bright-11-clogged-drain-cleaner.webp";
import bright12ConcentratedDescalentImg from "@/assets/BLS/chemicals/bright-12-concentrated-descalent.webp";
import brightHandWashImg from "@/assets/BLS/chemicals/bright-hand-wash.webp";
import bls165RideOnScrubberImg from "@/assets/BLS/machines/bls-165-ride-on-scrubber.webp";
import bls215RideOnScrubberImg from "@/assets/BLS/machines/bls-215-ride-on-scrubber.webp";
import bls295RideOnScrubberImg from "@/assets/BLS/machines/bls-295-ride-on-scrubber.webp";
import bls90RideOnSweeperImg from "@/assets/BLS/machines/bls-90-ride-on-sweeper.webp";
import bls150RideOnSweeperImg from "@/assets/BLS/machines/bls-150-ride-on-sweeper.webp";
import bls180RideOnSweeperImg from "@/assets/BLS/machines/bls-180-ride-on-sweeper.webp";
import manualSweeperHepaFilterImg from "@/assets/BLS/chemicals/manual-sweeper-hepa-filter.webp";
import mopingScooterImg from "@/assets/BLS/chemicals/moping-scooter.webp";
import bls1200eAutoScrubberImg from "@/assets/BLS/machines/bls-1200e-auto-scrubber.webp";
import bls1500eAutoScrubberImg from "@/assets/BLS/machines/bls-1500e-auto-scrubber.webp";
import bls1700eAutoScrubberImg from "@/assets/BLS/machines/bls-1700e-auto-scrubber.webp";
import bls520bAutoScrubberImg from "@/assets/BLS/machines/bls-520b-auto-scrubber.webp";
import blsLongHandleMiniScrubberDryerImg from "@/assets/BLS/machines/bls-long-handle-mini-scrubber-dryer.webp";
import bls001PolishingCleaningMachineImg from "@/assets/BLS/machines/bls-001-polishing-cleaning-machine.webp";
import bls1100MultifunctionSingleDiscImg from "@/assets/BLS/machines/bls-1100-multifunction-single-disc.webp";
import bls3000FloorPolishingMachineImg from "@/assets/BLS/machines/bls-3000-floor-polishing-machine.webp";
import bls20SsCarpetExtractorImg from "@/assets/BLS/machines/bls-20-ss-carpet-extractor.webp";
import bls40SsCarpetExtractorImg from "@/assets/BLS/chemicals/bls-40-ss-carpet-extractor.webp";

export type BLSCategory = "chemicals" | "machines";

export type BLSProduct = {
  id: string;
  name: string;
  slug: string;
  /** null until product photography is available */
  image: string | null;
  category: BLSCategory;
  /** MRP in INR */
  price: number;
  description: string;
};

export const blsProducts: BLSProduct[] = [
  { id: "bright-1-wash-room-bathroom-cleaner", name: "Bright 1 – Wash Room / Bathroom Cleaner", slug: "bright-1-wash-room-bathroom-cleaner", image: bright1WashRoomBathroomCleanerImg, category: "chemicals", price: 550, description: "Powerful bathroom cleaner for acid-resistant surfaces that removes stubborn stains, eliminates bacteria, and leaves a fresh fragrance." },
  { id: "bright-2-bkc-disinfectant-floor-cleaner", name: "Bright 2 BKC – Disinfectant Floor Cleaner", slug: "bright-2-bkc-disinfectant-floor-cleaner", image: bright2BkcDisinfectantFloorCleanerImg, category: "chemicals", price: 950, description: "Broad-spectrum disinfectant floor cleaner designed for hospitals, ICUs, OT rooms, and other hygienic environments." },
  { id: "bright-2-concentrated-hard-surface-floor-cleaner-sanitizer", name: "Bright 2 – Concentrated Hard Surface Floor Cleaner / Sanitizer", slug: "bright-2-concentrated-hard-surface-floor-cleaner-sanitizer", image: bright2ConcentratedHardSurfaceFloorCleanerSanitizerImg, category: "chemicals", price: 750, description: "Concentrated hard surface cleaner and sanitizer suitable for all floor types with excellent stain removal and antibacterial protection." },
  { id: "bright-3-glass-mirror-cleaner-concentrate", name: "Bright 3 – Glass & Mirror Cleaner Concentrate", slug: "bright-3-glass-mirror-cleaner-concentrate", image: bright3GlassMirrorCleanerConcentrateImg, category: "chemicals", price: 550, description: "Streak-free glass and mirror cleaner that removes fingerprints, grease, and oil without leaving residue." },
  { id: "bright-4-furniture-polish", name: "Bright 4 – Furniture Polish", slug: "bright-4-furniture-polish", image: bright4FurniturePolishImg, category: "chemicals", price: 1350, description: "Premium furniture polish that restores shine, protects wooden surfaces, and enhances furniture life." },
  { id: "bright-5-air-freshener", name: "Bright 5 – Air Freshener", slug: "bright-5-air-freshener", image: bright5AirFreshenerImg, category: "chemicals", price: 150, description: "Long-lasting air freshener that neutralizes unpleasant odors while leaving a refreshing fragrance." },
  { id: "bright-6-toilet-urinal-bowl-cleaner", name: "Bright 6 – Toilet / Urinal Bowl Cleaner", slug: "bright-6-toilet-urinal-bowl-cleaner", image: bright6ToiletUrinalBowlCleanerImg, category: "chemicals", price: 450, description: "Heavy-duty toilet and urinal cleaner formulated to remove stains, lime scale, and tough deposits." },
  { id: "bright-7-stainless-steel-polish", name: "Bright 7 – Stainless Steel Polish", slug: "bright-7-stainless-steel-polish", image: bright7StainlessSteelPolishImg, category: "chemicals", price: 1450, description: "Professional stainless steel polish that cleans, shines, and protects steel furniture, lifts, handles, and fittings." },
  { id: "bright-8-dish-wash-all-purpose-cleaner-concentrate", name: "Bright 8 – Dish Wash (All Purpose) Cleaner Concentrate", slug: "bright-8-dish-wash-all-purpose-cleaner-concentrate", image: bright8DishWashAllPurposeCleanerConcentrateImg, category: "chemicals", price: 375, description: "Concentrated dishwashing solution that effectively removes grease while remaining gentle on hands." },
  { id: "bright-9-all-purpose-cleaner-cum-sanitizer-concentrate", name: "Bright 9 – All Purpose Cleaner Cum Sanitizer Concentrate", slug: "bright-9-all-purpose-cleaner-cum-sanitizer-concentrate", image: bright9AllPurposeCleanerCumSanitizerConcentrateImg, category: "chemicals", price: 750, description: "Multi-purpose cleaner and sanitizer suitable for kitchen utensils and food preparation surfaces." },
  { id: "bright-10-grill-oven-cleaner-concentrate", name: "Bright 10 – Grill & Oven Cleaner Concentrate", slug: "bright-10-grill-oven-cleaner-concentrate", image: bright10GrillOvenCleanerConcentrateImg, category: "chemicals", price: 1750, description: "Industrial-strength cleaner for grills, ovens, chimneys, and heavy grease deposits." },
  { id: "bright-11-clogged-drain-cleaner", name: "Bright 11 – Clogged Drain Cleaner", slug: "bright-11-clogged-drain-cleaner", image: bright11CloggedDrainCleanerImg, category: "chemicals", price: 850, description: "Fast-acting drain cleaner that dissolves grease, food residue, and hair while helping prevent blockages." },
  { id: "bright-12-concentrated-descalent", name: "Bright 12 – Concentrated Descalent", slug: "bright-12-concentrated-descalent", image: bright12ConcentratedDescalentImg, category: "chemicals", price: 1150, description: "Powerful descaling solution for removing hard water scale from tiles, fixtures, PVC pipes, and equipment." },
  { id: "bright-hand-wash", name: "Bright Hand Wash (Triclosan Based Disinfectant Hand Cleaner)", slug: "bright-hand-wash", image: brightHandWashImg, category: "chemicals", price: 500, description: "Antibacterial hand wash that effectively removes germs while remaining gentle on the skin." },

  { id: "bls-165-ride-on-scrubber", name: "BLS 165 Ride On Scrubber", slug: "bls-165-ride-on-scrubber", image: bls165RideOnScrubberImg, category: "machines", price: 365000, description: "Compact ride-on scrubber designed for efficient cleaning of medium to large commercial spaces." },
  { id: "bls-215-ride-on-scrubber", name: "BLS 215 Ride On Scrubber", slug: "bls-215-ride-on-scrubber", image: bls215RideOnScrubberImg, category: "machines", price: 515000, description: "Heavy-duty dual-brush ride-on scrubber delivering superior cleaning performance for industrial floors." },
  { id: "bls-295-ride-on-scrubber", name: "BLS 295 Ride On Scrubber", slug: "bls-295-ride-on-scrubber", image: bls295RideOnScrubberImg, category: "machines", price: 665490, description: "High-capacity ride-on scrubber built for continuous cleaning of large facilities and warehouses." },
  { id: "bls-90-ride-on-sweeper", name: "BLS 90 Ride On Sweeper", slug: "bls-90-ride-on-sweeper", image: bls90RideOnSweeperImg, category: "machines", price: 385000, description: "Compact battery-powered ride-on sweeper with integrated dust control for factories and commercial premises." },
  { id: "bls-150-ride-on-sweeper", name: "BLS 150 Ride On Sweeper", slug: "bls-150-ride-on-sweeper", image: bls150RideOnSweeperImg, category: "machines", price: 515790, description: "Industrial ride-on sweeper with dual brush system for high-productivity indoor and outdoor cleaning." },
  { id: "bls-180-ride-on-sweeper", name: "BLS 180 Ride On Sweeper", slug: "bls-180-ride-on-sweeper", image: bls180RideOnSweeperImg, category: "machines", price: 620690, description: "Premium ride-on sweeper offering maximum coverage, high efficiency, and excellent maneuverability." },
  { id: "manual-sweeper-hepa-filter", name: "Manual Sweeper with HEPA Filter", slug: "manual-sweeper-hepa-filter", image: manualSweeperHepaFilterImg, category: "machines", price: 32500, description: "Manual walk-behind sweeper with HEPA filtration for effective dust collection in indoor and outdoor areas." },
  { id: "moping-scooter", name: "Moping Scooter", slug: "moping-scooter", image: mopingScooterImg, category: "machines", price: 132500, description: "Battery-powered mopping scooter designed for quick cleaning of large commercial spaces with minimal effort." },
  { id: "bls-1200e-auto-scrubber", name: "BLS 1200E Auto Scrubber", slug: "bls-1200e-auto-scrubber", image: bls1200eAutoScrubberImg, category: "machines", price: 115000, description: "Compact auto scrubber providing powerful floor cleaning with excellent maneuverability." },
  { id: "bls-1500e-auto-scrubber", name: "BLS 1500E Auto Scrubber", slug: "bls-1500e-auto-scrubber", image: bls1500eAutoScrubberImg, category: "machines", price: 118000, description: "Professional auto scrubber with larger water tanks for extended cleaning operations." },
  { id: "bls-1700e-auto-scrubber", name: "BLS 1700E Auto Scrubber", slug: "bls-1700e-auto-scrubber", image: bls1700eAutoScrubberImg, category: "machines", price: 128000, description: "Heavy-duty auto scrubber engineered for high-performance cleaning in demanding commercial environments." },
  { id: "bls-520b-auto-scrubber", name: "BLS 520 B Auto Scrubber", slug: "bls-520b-auto-scrubber", image: bls520bAutoScrubberImg, category: "machines", price: 165000, description: "Portable battery-operated auto scrubber offering efficient cleaning for medium-sized floor areas." },
  { id: "bls-long-handle-mini-scrubber-dryer", name: "BLS Long Handle Mini Scrubber Dryer", slug: "bls-long-handle-mini-scrubber-dryer", image: blsLongHandleMiniScrubberDryerImg, category: "machines", price: 27000, description: "Lightweight cordless scrubber dryer ideal for homes, offices, and compact commercial spaces." },
  { id: "bls-001-polishing-cleaning-machine", name: "BLS-001 Polishing / Cleaning Machine", slug: "bls-001-polishing-cleaning-machine", image: bls001PolishingCleaningMachineImg, category: "machines", price: 10500, description: "Compact floor polishing and cleaning machine suitable for daily maintenance of multiple floor types." },
  { id: "bls-1100-multifunction-single-disc", name: "BLS 1100 Multifunction Single Disc", slug: "bls-1100-multifunction-single-disc", image: bls1100MultifunctionSingleDiscImg, category: "machines", price: 38500, description: "Versatile single-disc floor machine for scrubbing, polishing, and deep cleaning applications." },
  { id: "bls-3000-floor-polishing-machine", name: "BLS 3000 (3 HP - 20 Inch) Floor Polishing Machine", slug: "bls-3000-floor-polishing-machine", image: bls3000FloorPolishingMachineImg, category: "machines", price: 78990, description: "High-performance 3 HP floor polishing machine built for intensive polishing and floor restoration work." },
  { id: "bls-20-ss-carpet-extractor", name: "BLS 20 S.S Carpet Extractor", slug: "bls-20-ss-carpet-extractor", image: bls20SsCarpetExtractorImg, category: "machines", price: 26500, description: "Professional stainless steel carpet extractor designed for deep carpet and upholstery cleaning." },
  { id: "bls-40-ss-carpet-extractor", name: "BLS 40 S.S Carpet Extractor", slug: "bls-40-ss-carpet-extractor", image: bls40SsCarpetExtractorImg, category: "machines", price: 28500, description: "High-capacity stainless steel carpet extractor suitable for large-scale commercial carpet cleaning." },
];
