import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/data";
import SpotlightCard from "@/components/ui/SpotlightCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Services() {
  return (
    <section className="py-16 md:py-20 container mx-auto px-6">
      <SectionHeader badge="Services" title="Creative" highlight="Solutions." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <SpotlightCard className="h-full group hover:-translate-y-4 hover:border-primary/40 rounded-3xl">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Corner accent */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-700" />

              <CardHeader className="relative z-10 p-8 pb-0">
                <motion.div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-purple-500/15 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm">
                  <service.icon className="h-8 w-8" />
                </motion.div>
                <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300 font-heading tracking-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 p-8 pt-4">
                <p className="text-muted-foreground leading-relaxed font-light group-hover:text-foreground/80 transition-colors duration-500">
                  {service.description}
                </p>
              </CardContent>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
