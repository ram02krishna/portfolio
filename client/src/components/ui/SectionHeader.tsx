import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge: string;
  title: string;
  highlight?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "relative mb-16",
        align === "center"
          ? "text-center flex flex-col items-center"
          : "text-left flex flex-col items-start",
        className,
      )}
    >
      {/* Decorative dots based on screenshot */}
      {align === "left" && (
        <div className="absolute -top-6 -left-4 pointer-events-none">
          <div className="w-2 h-2 rounded-full bg-primary/70 absolute top-0 left-0" />
          <div className="w-8 h-8 rounded-full bg-secondary/80 border border-border absolute top-2 left-3" />
        </div>
      )}
      {align === "center" && (
        <div className="absolute -top-6 left-[40%] pointer-events-none hidden sm:block">
          <div className="w-2 h-2 rounded-full bg-primary/70 absolute top-0 left-0" />
          <div className="w-8 h-8 rounded-full bg-secondary/80 border border-border absolute top-2 left-6" />
        </div>
      )}

      <Badge
        variant="secondary"
        className="mb-6 px-4 py-1.5 text-xs uppercase tracking-[0.2em] font-semibold text-primary bg-primary/10 hover:bg-primary/20 border-transparent rounded-full z-10"
      >
        {badge}
      </Badge>

      <div className="absolute inset-0 flex justify-center -translate-y-6 z-0 pointer-events-none">
        <div className="w-1/2 h-28 bg-gradient-to-r from-foreground/8 via-primary/12 to-purple-500/10 blur-3xl rounded-full" />
      </div>

      <h2
        className={cn(
          "text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight relative z-10 mb-4",
          align === "center" && "text-center",
        )}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-purple-500 pb-2">
          {title}
          {highlight ? ` ${highlight.replace(/\.$/, "")}.` : ""}
        </span>
      </h2>
    </motion.div>
  );
}
