import { motion } from "framer-motion";

export function ProductTile({
  name,
  image,
  description,
  price,
  i,
}: {
  name: string;
  image: string | null;
  /** Omit to hide the description row. */
  description?: string | null;
  /** Omit entirely to hide the price row (e.g. pricing not published yet). */
  price?: number | null;
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
        {price !== undefined && (
          <p className="mt-1.5 text-base font-bold text-secondary">
            {price != null ? `MRP ₹${price.toLocaleString("en-IN")}` : "Coming Soon"}
          </p>
        )}
      </div>
    </motion.div>
  );
}
