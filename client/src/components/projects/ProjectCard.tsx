import { memo, useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowUpRight, ExternalLink, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Project } from "@/lib/data";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import SpotlightCard from "@/components/ui/SpotlightCard";

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(0, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!isHovered) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateXValue = ((e.clientY - centerY) / rect.height) * -10;
    const rotateYValue = ((e.clientX - centerX) / rect.width) * 10;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <Link href={`/project/${project.id}`}>
      <SpotlightCard className="p-0 border-0 bg-transparent hover:-translate-y-2 !transition-transform !duration-300">
        <motion.article
          className="group relative cursor-pointer rounded-2xl bg-card border border-border overflow-hidden shadow-md"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-purple-500 to-blue-500 opacity-50 blur-sm" />
          </div>

          <div className="relative h-60 overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10" />
            <div className="absolute top-4 left-4 z-20">
              <Badge className="bg-background/90 text-foreground backdrop-blur-sm border-0 shadow-sm">
                {project.category}
              </Badge>
            </div>
            <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-1">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <ArrowUpRight className="h-5 w-5 text-primary-foreground" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-1">
              <div className="flex items-center gap-2 text-white/90 text-sm">
                <ExternalLink className="h-4 w-4" />
                <span>View Case Study</span>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-6 relative bg-card/80 backdrop-blur-sm">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl sm:text-2xl font-bold font-heading group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
            </div>

            <p className="text-muted-foreground text-sm sm:text-base mb-6 line-clamp-2 leading-relaxed font-light">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border/50 group-hover:border-primary/30 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md bg-muted text-muted-foreground">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border/40 group-hover:border-primary/20 transition-colors duration-300">
              <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-1">
                Case Study{" "}
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
              </span>
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full h-8 w-8 p-0 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.article>
      </SpotlightCard>
    </Link>
  );
}

export default memo(ProjectCard);
