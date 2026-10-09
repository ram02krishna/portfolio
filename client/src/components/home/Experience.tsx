import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Experience() {
  return (
    <section className="py-16 md:py-20 container mx-auto px-6">
      <SectionHeader badge="Experience" title="Career" highlight="Journey" />

      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 md:pl-10 pb-12 last:pb-0 border-l-2 border-border/50 hover:border-primary transition-colors group"
          >
            <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-[9px] group-hover:scale-125 group-hover:bg-primary transition-all duration-300 shadow-lg shadow-primary/20" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider bg-primary/5 px-3 py-1 rounded-full">
              {exp.year}
            </span>
            <h3 className="text-2xl font-bold mt-4 mb-1 group-hover:text-primary transition-colors">
              {exp.role}
            </h3>
            <p className="text-lg text-foreground/80 font-medium mb-3">{exp.company}</p>
            <p className="text-muted-foreground leading-relaxed text-base">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
