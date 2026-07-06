import bright1WashRoomBathroomCleanerImg from "@/assets/BLS/chemicals/Bright 1 – Wash Room  Bathroom Cleaner.webp";
import bright2BkcDisinfectantFloorCleanerImg from "@/assets/BLS/chemicals/Bright 2 BKC – Disinfectant Floor Cleaner.webp";
import bright2ConcentratedHardSurfaceFloorCleanerSanitizerImg from "@/assets/BLS/chemicals/Bright 2 – Concentrated Hard Surface Floor Cleaner Sanitizer.webp";
import bright3GlassMirrorCleanerConcentrateImg from "@/assets/BLS/chemicals/Bright 3 – Glass & Mirror Cleaner Concentrate.webp";
import bright4FurniturePolishImg from "@/assets/BLS/chemicals/Bright 4 – Furniture Polish.webp";
import bright5AirFreshenerImg from "@/assets/BLS/chemicals/Bright 5 – Air Freshener.webp";
import bright6ToiletUrinalBowlCleanerImg from "@/assets/BLS/chemicals/Bright 6 – Toilet  Urinal Bowl Cleaner.webp";
import bright7StainlessSteelPolishImg from "@/assets/BLS/chemicals/Bright 7 – Stainless Steel Polish.webp";
import bright8DishWashAllPurposeCleanerConcentrateImg from "@/assets/BLS/chemicals/Bright 8 – Dish Wash (All Purpose) Cleaner Concentrate.webp";
import bright9AllPurposeCleanerCumSanitizerConcentrateImg from "@/assets/BLS/chemicals/Bright 9 – All Purpose Cleaner Cum Sanitizer Concentrate.webp";
import bright10GrillOvenCleanerConcentrateImg from "@/assets/BLS/chemicals/Bright 10 – Grill & Oven Cleaner Concentrate.webp";
import bright11CloggedDrainCleanerImg from "@/assets/BLS/chemicals/Bright 11 – Clogged Drain Cleaner.webp";
import brightHandWashImg from "@/assets/BLS/chemicals/Bright Hand Wash (Triclosan Based Disinfectant Hand Cleaner).webp";
import bls165RideOnScrubberImg from "@/assets/BLS/machines/BLS 165 Ride On Scrubber.webp";
import bls215RideOnScrubberImg from "@/assets/BLS/machines/BLS 215 Ride On Scrubber.webp";
import bls295RideOnScrubberImg from "@/assets/BLS/machines/BLS 295 Ride On Scrubber.webp";
import bls90RideOnSweeperImg from "@/assets/BLS/machines/BLS 90 Ride On Sweeper.webp";
import bls150RideOnSweeperImg from "@/assets/BLS/machines/BLS 150 Ride On Sweeper.webp";
import bls180RideOnSweeperImg from "@/assets/BLS/machines/BLS 180 Ride On Sweeper.webp";
import manualSweeperHepaFilterImg from "@/assets/BLS/chemicals/Manual Sweeper with HEPA Filter.webp";
import mopingScooterImg from "@/assets/BLS/chemicals/Moping Scooter.webp";
import bls1200eAutoScrubberImg from "@/assets/BLS/machines/BLS 1200E Auto Scrubber.webp";
import bls1500eAutoScrubberImg from "@/assets/BLS/machines/BLS 1500E Auto Scrubber.webp";
import bls1700eAutoScrubberImg from "@/assets/BLS/machines/BLS 1700E Auto Scrubber.webp";
import bls520bAutoScrubberImg from "@/assets/BLS/machines/BLS 520 B Auto Scrubber.webp";
import blsLongHandleMiniScrubberDryerImg from "@/assets/BLS/machines/BLS Long Handle Mini Scrubber Dryer.webp";
import bls001PolishingCleaningMachineImg from "@/assets/BLS/machines/BLS-001 Polishing  Cleaning Machine.webp";
import bls1100MultifunctionSingleDiscImg from "@/assets/BLS/machines/BLS 1100 Multifunction Single Disc.webp";
import bls3000FloorPolishingMachineImg from "@/assets/BLS/machines/BLS 3000 (3 HP - 20 Inch) Floor Polishing Machine.webp";
import bls20SsCarpetExtractorImg from "@/assets/BLS/machines/BLS 20 S.S Carpet Extractor.webp";

export type BLSCategory = "chemicals" | "machines";

export type BLSProduct = {
  id: string;
  name: string;
  slug: string;
  /** null until product photography is available */
  image: string | null;
  category: BLSCategory;
};

export const blsProducts: BLSProduct[] = [
  { id: "bright-1-wash-room-bathroom-cleaner", name: "Bright 1 – Wash Room / Bathroom Cleaner", slug: "bright-1-wash-room-bathroom-cleaner", image: bright1WashRoomBathroomCleanerImg, category: "chemicals" },
  { id: "bright-2-bkc-disinfectant-floor-cleaner", name: "Bright 2 BKC – Disinfectant Floor Cleaner", slug: "bright-2-bkc-disinfectant-floor-cleaner", image: bright2BkcDisinfectantFloorCleanerImg, category: "chemicals" },
  { id: "bright-2-concentrated-hard-surface-floor-cleaner-sanitizer", name: "Bright 2 – Concentrated Hard Surface Floor Cleaner / Sanitizer", slug: "bright-2-concentrated-hard-surface-floor-cleaner-sanitizer", image: bright2ConcentratedHardSurfaceFloorCleanerSanitizerImg, category: "chemicals" },
  { id: "bright-3-glass-mirror-cleaner-concentrate", name: "Bright 3 – Glass & Mirror Cleaner Concentrate", slug: "bright-3-glass-mirror-cleaner-concentrate", image: bright3GlassMirrorCleanerConcentrateImg, category: "chemicals" },
  { id: "bright-4-furniture-polish", name: "Bright 4 – Furniture Polish", slug: "bright-4-furniture-polish", image: bright4FurniturePolishImg, category: "chemicals" },
  { id: "bright-5-air-freshener", name: "Bright 5 – Air Freshener", slug: "bright-5-air-freshener", image: bright5AirFreshenerImg, category: "chemicals" },
  { id: "bright-6-toilet-urinal-bowl-cleaner", name: "Bright 6 – Toilet / Urinal Bowl Cleaner", slug: "bright-6-toilet-urinal-bowl-cleaner", image: bright6ToiletUrinalBowlCleanerImg, category: "chemicals" },
  { id: "bright-7-stainless-steel-polish", name: "Bright 7 – Stainless Steel Polish", slug: "bright-7-stainless-steel-polish", image: bright7StainlessSteelPolishImg, category: "chemicals" },
  { id: "bright-8-dish-wash-all-purpose-cleaner-concentrate", name: "Bright 8 – Dish Wash (All Purpose) Cleaner Concentrate", slug: "bright-8-dish-wash-all-purpose-cleaner-concentrate", image: bright8DishWashAllPurposeCleanerConcentrateImg, category: "chemicals" },
  { id: "bright-9-all-purpose-cleaner-cum-sanitizer-concentrate", name: "Bright 9 – All Purpose Cleaner Cum Sanitizer Concentrate", slug: "bright-9-all-purpose-cleaner-cum-sanitizer-concentrate", image: bright9AllPurposeCleanerCumSanitizerConcentrateImg, category: "chemicals" },
  { id: "bright-10-grill-oven-cleaner-concentrate", name: "Bright 10 – Grill & Oven Cleaner Concentrate", slug: "bright-10-grill-oven-cleaner-concentrate", image: bright10GrillOvenCleanerConcentrateImg, category: "chemicals" },
  { id: "bright-11-clogged-drain-cleaner", name: "Bright 11 – Clogged Drain Cleaner", slug: "bright-11-clogged-drain-cleaner", image: bright11CloggedDrainCleanerImg, category: "chemicals" },
  { id: "bright-12-concentrated-descalent", name: "Bright 12 – Concentrated Descalent", slug: "bright-12-concentrated-descalent", image: null, category: "chemicals" },
  { id: "bright-hand-wash", name: "Bright Hand Wash (Triclosan Based Disinfectant Hand Cleaner)", slug: "bright-hand-wash", image: brightHandWashImg, category: "chemicals" },

  { id: "bls-165-ride-on-scrubber", name: "BLS 165 Ride On Scrubber", slug: "bls-165-ride-on-scrubber", image: bls165RideOnScrubberImg, category: "machines" },
  { id: "bls-215-ride-on-scrubber", name: "BLS 215 Ride On Scrubber", slug: "bls-215-ride-on-scrubber", image: bls215RideOnScrubberImg, category: "machines" },
  { id: "bls-295-ride-on-scrubber", name: "BLS 295 Ride On Scrubber", slug: "bls-295-ride-on-scrubber", image: bls295RideOnScrubberImg, category: "machines" },
  { id: "bls-90-ride-on-sweeper", name: "BLS 90 Ride On Sweeper", slug: "bls-90-ride-on-sweeper", image: bls90RideOnSweeperImg, category: "machines" },
  { id: "bls-150-ride-on-sweeper", name: "BLS 150 Ride On Sweeper", slug: "bls-150-ride-on-sweeper", image: bls150RideOnSweeperImg, category: "machines" },
  { id: "bls-180-ride-on-sweeper", name: "BLS 180 Ride On Sweeper", slug: "bls-180-ride-on-sweeper", image: bls180RideOnSweeperImg, category: "machines" },
  { id: "manual-sweeper-hepa-filter", name: "Manual Sweeper with HEPA Filter", slug: "manual-sweeper-hepa-filter", image: manualSweeperHepaFilterImg, category: "machines" },
  { id: "moping-scooter", name: "Moping Scooter", slug: "moping-scooter", image: mopingScooterImg, category: "machines" },
  { id: "bls-1200e-auto-scrubber", name: "BLS 1200E Auto Scrubber", slug: "bls-1200e-auto-scrubber", image: bls1200eAutoScrubberImg, category: "machines" },
  { id: "bls-1500e-auto-scrubber", name: "BLS 1500E Auto Scrubber", slug: "bls-1500e-auto-scrubber", image: bls1500eAutoScrubberImg, category: "machines" },
  { id: "bls-1700e-auto-scrubber", name: "BLS 1700E Auto Scrubber", slug: "bls-1700e-auto-scrubber", image: bls1700eAutoScrubberImg, category: "machines" },
  { id: "bls-520b-auto-scrubber", name: "BLS 520 B Auto Scrubber", slug: "bls-520b-auto-scrubber", image: bls520bAutoScrubberImg, category: "machines" },
  { id: "bls-long-handle-mini-scrubber-dryer", name: "BLS Long Handle Mini Scrubber Dryer", slug: "bls-long-handle-mini-scrubber-dryer", image: blsLongHandleMiniScrubberDryerImg, category: "machines" },
  { id: "bls-001-polishing-cleaning-machine", name: "BLS-001 Polishing / Cleaning Machine", slug: "bls-001-polishing-cleaning-machine", image: bls001PolishingCleaningMachineImg, category: "machines" },
  { id: "bls-1100-multifunction-single-disc", name: "BLS 1100 Multifunction Single Disc", slug: "bls-1100-multifunction-single-disc", image: bls1100MultifunctionSingleDiscImg, category: "machines" },
  { id: "bls-3000-floor-polishing-machine", name: "BLS 3000 (3 HP - 20 Inch) Floor Polishing Machine", slug: "bls-3000-floor-polishing-machine", image: bls3000FloorPolishingMachineImg, category: "machines" },
  { id: "bls-20-ss-carpet-extractor", name: "BLS 20 S.S Carpet Extractor", slug: "bls-20-ss-carpet-extractor", image: bls20SsCarpetExtractorImg, category: "machines" },
  { id: "bls-40-ss-carpet-extractor", name: "BLS 40 S.S Carpet Extractor", slug: "bls-40-ss-carpet-extractor", image: null, category: "machines" },
];
