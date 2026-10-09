import { motion } from "framer-motion";

const technologies = [
  "React",
  "TypeScript",
  "Node.js",
  "Express.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Drizzle ORM",
  "Docker",
  "Git",
  "Supabase",
  "MongoDB",
];

export default function TechStack() {
  return (
    <section className="py-16 md:py-20 overflow-hidden bg-background relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 mb-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Powered by Modern Tech
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </motion.div>
      </div>

      <div className="relative flex overflow-hidden group py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {technologies.map((tech, index) => (
            <div key={index} className="mx-12 flex items-center gap-4 group/item">
              <span className="text-4xl md:text-7xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-purple-500 transition-all duration-500 cursor-default select-none transform group-hover/item:scale-110 group-hover/item:-rotate-2">
                {tech}
              </span>
              <div className="w-2 h-2 rounded-full bg-primary/20 group-hover/item:bg-primary transition-colors duration-500" />
            </div>
          ))}
        </div>
        <div className="absolute top-4 animate-marquee2 whitespace-nowrap flex">
          {technologies.map((tech, index) => (
            <div key={`duplicate-${index}`} className="mx-12 flex items-center gap-4 group/item">
              <span className="text-4xl md:text-7xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-purple-500 transition-all duration-500 cursor-default select-none transform group-hover/item:scale-110 group-hover/item:-rotate-2">
                {tech}
              </span>
              <div className="w-2 h-2 rounded-full bg-primary/20 group-hover/item:bg-primary transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Overlay for fading edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
    </section>
  );
}
