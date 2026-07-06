import tikkaMasalaImg from "@/assets/happykery/tikka masala base gravy.jpg";
import makhaniImg from "@/assets/happykery/Makhani base gravy.jpg";
import kormaImg from "@/assets/happykery/korma base gravy.jpg";
import whiteBaseImg from "@/assets/happykery/White base gravy.jpg";
import jainBaseImg from "@/assets/happykery/jain base gravy.jpg";
import onionTomatoImg from "@/assets/happykery/Onion Tomato.jpg";
import allRounderImg from "@/assets/happykery/all rounder indo-chinese.jpg";
import royalBiryaniImg from "@/assets/happykery/royal dum biriyani.jpg";
import rusticSmokyImg from "@/assets/happykery/Rustic smoky gravy.jpg";
import mumbaiPavBhajiImg from "@/assets/happykery/mumbai pav bhaji.jpg";
import southIndianSambharImg from "@/assets/happykery/south indian sambar.jpg";

export type HappikeryProduct = {
  id: string;
  name: string;
  slug: string;
  /** null until product photography is available */
  image: string | null;
  /** MRP in INR; null when pricing hasn't been finalized yet */
  price: number | null;
};

export const happikeryProducts: HappikeryProduct[] = [
  { id: "tikka-masala-base-gravy", name: "Tikka Masala Base Gravy", slug: "tikka-masala-base-gravy", image: tikkaMasalaImg, price: 132 },
  { id: "makhani-base-gravy", name: "Makhani Base Gravy", slug: "makhani-base-gravy", image: makhaniImg, price: 132 },
  { id: "korma-base-gravy", name: "Korma Base Gravy", slug: "korma-base-gravy", image: kormaImg, price: 123 },
  { id: "white-base-gravy", name: "White Base Gravy", slug: "white-base-gravy", image: whiteBaseImg, price: 141 },
  { id: "jain-base-gravy", name: "Jain Base Gravy", slug: "jain-base-gravy", image: jainBaseImg, price: 132 },
  { id: "onion-tomato-chop-base-gravy", name: "Onion Tomato Chop Base Gravy", slug: "onion-tomato-chop-base-gravy", image: onionTomatoImg, price: 99 },
  { id: "all-rounder-indo-chinese-sauce", name: "All Rounder Indo-Chinese Sauce", slug: "all-rounder-indo-chinese-sauce", image: allRounderImg, price: 123 },
  { id: "royal-dum-biryani-paste", name: "Royal Dum Biryani Paste", slug: "royal-dum-biryani-paste", image: royalBiryaniImg, price: 118 },
  { id: "rustic-smoky-gravy", name: "Rustic Smoky Gravy", slug: "rustic-smoky-gravy", image: rusticSmokyImg, price: 123 },
  { id: "mumbai-pav-bhaji", name: "Mumbai Pav Bhaji", slug: "mumbai-pav-bhaji", image: mumbaiPavBhajiImg, price: 118 },
  { id: "south-indian-sambhar", name: "South Indian Sambhar", slug: "south-indian-sambhar", image: southIndianSambharImg, price: 99 },
];
