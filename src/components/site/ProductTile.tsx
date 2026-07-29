import { motion } from "framer-motion";

export function ProductTile({
  name,
  image,
  description,
  price,
  horecaPack,
  i,
}: {
  name: string;
  image: string | null;
  /** Omit to hide the description row. */
  description?: string | null;
  /** Omit entirely to hide the price row (e.g. pricing not published yet). */
  price?: number | null;
  /** Optional bulk/Horeca pack variant; when set, replaces the single price row with a dual pack-size/MRP row. */
  horecaPack?: { size: string; price: number };
  i: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.04 }}
      className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all"
    >
      <div className="aspect-square overflow-hidden bg-surface p-3">
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            width={600}
            height={600}
            className="h-full w-full object-contain"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Coming Soon</span>
          </div>
        )}
      </div>
      <div className="px-4 pb-4 pt-3">
        <h3 className="font-display text-sm font-semibold text-primary leading-snug line-clamp-2">{name}</h3>
        {description && (
          <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-3">{description}</p>
        )}
        {horecaPack && price != null ? (
          <div className="mt-2 space-y-1 text-xs">
            <div className="flex flex-wrap items-baseline gap-1.5">
              <span className="font-semibold uppercase tracking-wide text-muted-foreground">Pack Sizes:</span>
              <span className="text-foreground/80">100 g / {horecaPack.size}</span>
            </div>
            <div className="flex flex-wrap items-baseline gap-1.5">
              <span className="font-semibold uppercase tracking-wide text-muted-foreground">MRP:</span>
              <span className="text-sm font-bold text-secondary">
                ₹{price.toLocaleString("en-IN")} / ₹{horecaPack.price.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
        ) : (
          price !== undefined && (
            <p className="mt-1.5 text-base font-bold text-secondary">
              {price != null ? `MRP ₹${price.toLocaleString("en-IN")}` : "Coming Soon"}
            </p>
          )
        )}
      </div>
    </motion.div>
  );
}
