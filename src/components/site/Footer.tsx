import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Globe, Send, Share2, AtSign } from "lucide-react";
import logo from "@/assets/website logo/shreem_logo_footer.png";
import { InstagramIcon, FacebookIcon } from "@/components/site/SocialIcons";
import { AMRUTEY_SOCIALS, ROYAL_BAGHAN_SOCIALS } from "@/data/social-links";

function BrandSocialLinks({ facebook, instagram, brand }: { facebook: string; instagram: string; brand: string }) {
  return (
    <span className="flex items-center gap-2 shrink-0">
      <a
        href={instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${brand} on Instagram`}
        className="text-primary-foreground/60 hover:text-accent transition-colors"
      >
        <InstagramIcon className="h-3.5 w-3.5" />
      </a>
      <a
        href={facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${brand} on Facebook`}
        className="text-primary-foreground/60 hover:text-accent transition-colors"
      >
        <FacebookIcon className="h-3.5 w-3.5" />
      </a>
    </span>
  );
}

// Social links not finalized yet — hidden for now, restore when ready.
// const socials = [Globe, Share2, AtSign, Send];

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-px mx-auto max-w-7xl py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-5">
            <img src={logo} alt="Shreem Eco Ventures LLP" className="h-12 w-auto object-contain rounded-lg" />
          </div>
          <p className="text-sm opacity-80 leading-relaxed">
            Manufacturers of eco-friendly areca tablewares and trusted suppliers of premium tea, cleaning products, ready-to-eat gravies and catering solutions across India and global markets.
          </p>
          {/* Social links not finalized yet — hidden for now, restore when ready.
          <div className="flex gap-2 mt-5">
            {socials.map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-secondary transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          */}
        </div>

        <div>
          <h4 className="font-display text-base font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2.5 text-sm opacity-80">
            {[
              ["/about", "About Us"],
              ["/products", "Own Brand Products"],
              ["/distributorship", "Distribution"],
              ["/services", "Services"],
              ["/export-inquiry", "Export Inquiry"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-accent transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold mb-4 text-white">Our Products & Services</h4>
          <ul className="space-y-2.5 text-sm opacity-80">
            <li>
              <Link to="/products/$brandId" params={{ brandId: "plantin" }} className="hover:text-accent transition-colors">Areca - Plant In Disposable</Link>
            </li>
            <li className="flex items-center justify-between gap-2">
              <Link to="/products/$brandId" params={{ brandId: "amrutey" }} className="hover:text-accent transition-colors">Amrutey Premium Tea</Link>
              <BrandSocialLinks brand="Amrutey Premium Tea" {...AMRUTEY_SOCIALS} />
            </li>
            <li>
              <Link to="/products" className="hover:text-accent transition-colors">New Annapurna Premium Tea</Link>
            </li>
            <li className="flex items-center justify-between gap-2">
              <Link to="/products" className="hover:text-accent transition-colors">Royal Baghan Premium Tea</Link>
              <BrandSocialLinks brand="Royal Baghan Premium Tea" {...ROYAL_BAGHAN_SOCIALS} />
            </li>
            <li>
              <Link to="/distributorship/happikery" className="hover:text-accent transition-colors">Happikery - Ready to Eat Gravy</Link>
            </li>
            <li>
              <Link to="/products/$brandId" params={{ brandId: "puriora" }} className="hover:text-accent transition-colors">Puriora Cleaning Solutions</Link>
            </li>
            <li>
              <Link to="/distributorship/bls" className="hover:text-accent transition-colors">BLS Cleaning Machines</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-accent transition-colors">Outdoor Catering</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-accent transition-colors">On Ground Market Activities</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold mb-4 text-white">Get in Touch</h4>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" /><span>Shed No. 67, Pushkar Industrial Hub, Opp. Machchunagar, Ahmedabad - 382445</span></li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent" /><span>+91 96620 78551<br/>+91 87803 08763</span></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent" /><a href="mailto:shreem0222@gmail.com" className="hover:text-accent">shreem0222@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px mx-auto max-w-7xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-70">
          <p>© {new Date().getFullYear()} Shreem Eco Ventures LLP. All rights reserved.</p>
          <p>Crafted with care · Made in India</p>
        </div>
      </div>
    </footer>
  );
}
