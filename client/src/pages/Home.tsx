import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import TechStack from "@/components/home/TechStack";
import Services from "@/components/home/Services";
import Experience from "@/components/home/Experience";
import ProjectCard from "@/components/projects/ProjectCard";
import HomeContact from "@/components/home/HomeContact";

import { getFeaturedProjects } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Hero />
        <TechStack />
        <Services />
        <Experience />

        <Stats />

        <section className="py-16 md:py-20 container mx-auto px-6 relative">
          {/* Background Decoration */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
          </div>

          <motion.div
            className="flex flex-col flex-wrap md:flex-row justify-between items-start md:items-end gap-6 mb-16 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-full md:w-auto mt-6">
              <SectionHeader
                align="left"
                badge="Portfolio"
                title="Featured"
                highlight="Works."
                className="mb-0"
              />
            </div>
            <Link href="/projects">
              <Button
                variant="outline"
                className="hidden md:flex group rounded-full px-6 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                View All Projects{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/projects">
              <Button className="rounded-full px-8 shadow-lg shadow-primary/20" size="lg">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        <HomeContact />
      </motion.div>

      <Footer />
    </div>
  );
}
