import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919662078551?text=Hello%20Shreem%20Eco%20Ventures%20LLP%2C%20I%27d%20like%20to%20inquire%20about%20your%20products."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-110 transition-transform animate-float"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-accent animate-ping" />
    </a>
  );
}
