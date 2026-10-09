import { projects } from "@/lib/data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/projects/ProjectCard";
import { motion } from "framer-motion";
import GradientOrb from "@/components/ui/GradientOrb";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16 md:pt-20 pb-12 md:pb-16">
        {/* Enhanced Hero Section */}
        <section className="relative overflow-hidden mb-8">
          {/* Background with gradients and orbs */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Floating Gradient Orbs */}
            <GradientOrb color="primary" size="lg" className="top-10 -left-20" delay={0} />
            <GradientOrb color="purple" size="md" className="top-20 right-10" delay={1} />
            <GradientOrb color="blue" size="sm" className="bottom-10 left-1/3" delay={2} />
          </div>

          <div className="container mx-auto px-6 py-8 md:py-10 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <SectionHeader
                badge="Projects"
                title="Featured"
                highlight="Works."
                className="mb-6"
              />

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A comprehensive collection of my work in web development, enterprise solutions, and
                corporate websites.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-6">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
