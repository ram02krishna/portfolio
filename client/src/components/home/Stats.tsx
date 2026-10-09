import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Code2, FolderGit2, Award, Coffee } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";

const stats = [
  {
    label: "Skills Mastered",
    value: 8,
    suffix: "+",
    icon: Code2,
    colorClass: "text-blue-500",
    borderClass: "border-blue-500",
  },
  {
    label: "Projects Completed",
    value: 4,
    suffix: "+",
    icon: FolderGit2,
    colorClass: "text-purple-500",
    borderClass: "border-purple-500",
  },
  {
    label: "Certifications Earned",
    value: 1,
    suffix: "+",
    icon: Award,
    colorClass: "text-orange-500",
    borderClass: "border-orange-500",
  },
  {
    label: "Cups of Coffee",
    value: 125,
    suffix: "+",
    icon: Coffee,
    colorClass: "text-green-500",
    borderClass: "border-green-500",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <SpotlightCard className="h-full group p-8 text-center hover:-translate-y-2 hover:border-primary/40 rounded-[24px] shadow-sm hover:shadow-xl transition-all duration-500">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Corner accent */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-700 pointer-events-none" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex justify-center mb-5">
                    <div
                      className={`w-14 h-14 rounded-full border-2 ${stat.borderClass} ${stat.colorClass} flex items-center justify-center bg-background/50 group-hover:scale-110 transition-transform duration-500`}
                    >
                      <stat.icon className="h-6 w-6 stroke-[2]" />
                    </div>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple-500 transition-all duration-300">
                    {inView ? (
                      <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                    ) : (
                      <span>0{stat.suffix}</span>
                    )}
                  </h3>
                  <p className="text-muted-foreground font-medium text-sm group-hover:text-foreground/80 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
