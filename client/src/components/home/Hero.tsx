import { memo, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import TextReveal from "@/components/ui/TextReveal";
import TypewriterLoop from "@/components/ui/TypewriterLoop";
import ParticleBackground from "@/components/ui/ParticleBackground";
import GradientOrb from "@/components/ui/GradientOrb";
import MagneticButton from "@/components/ui/MagneticButton";

function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    // Calculate normalized position from -1 to 1
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  // Parallax transforms for orbs
  const x1 = useTransform(smoothMouseX, [-1, 1], [-30, 30]);
  const y1 = useTransform(smoothMouseY, [-1, 1], [-30, 30]);

  const x2 = useTransform(smoothMouseX, [-1, 1], [40, -40]);
  const y2 = useTransform(smoothMouseY, [-1, 1], [40, -40]);

  const x3 = useTransform(smoothMouseX, [-1, 1], [-50, 50]);
  const y3 = useTransform(smoothMouseY, [-1, 1], [-50, 50]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-background"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
          bg-[size:24px_24px]
          [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />

        {/* Particle Background */}
        <ParticleBackground particleCount={60} className="opacity-40" />

        {/* Floating Gradient Orbs with Parallax */}
        <motion.div style={{ x: x1, y: y1 }} className="absolute inset-0">
          <GradientOrb color="primary" size="lg" className="top-20 -left-32" delay={0} />
        </motion.div>
        <motion.div style={{ x: x2, y: y2 }} className="absolute inset-0">
          <GradientOrb color="purple" size="md" className="top-40 right-20" delay={0.5} />
        </motion.div>
        <motion.div style={{ x: x3, y: y3 }} className="absolute inset-0">
          <GradientOrb color="blue" size="md" className="bottom-40 left-20" delay={1} />
        </motion.div>
        <motion.div style={{ x: x1, y: y2 }} className="absolute inset-0">
          <GradientOrb color="pink" size="sm" className="bottom-20 right-40" delay={1.5} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 text-center flex-1 flex flex-col items-center justify-center py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20 backdrop-blur-sm pulse-glow">
            <Sparkles className="h-4 w-4" />
            Open to New Opportunities
          </span>
        </motion.div>

        {/* Headline with animated glow aura */}
        <div className="mb-8 flex flex-col items-center w-full relative">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-[600px] h-[150%] bg-gradient-to-r from-primary/30 to-purple-500/30 blur-[100px] -z-10 rounded-full mix-blend-screen"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight leading-[1] w-full flex flex-col items-center relative z-10">
            <TextReveal text="Building Ideas Into" className="justify-center" delay={0.1} />
            <span className="relative">
              <TextReveal
                text="Digital Reality"
                className="justify-center text-gradient py-2 px-4"
                delay={0.3}
              />
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-blue-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-light"
        >
          Turning ideas into{" "}
          <TypewriterLoop
            words={[
              "clean, working software",
              "full-stack web apps",
              "fast, responsive UIs",
              "real products people use",
            ]}
            className="font-semibold text-primary"
          />{" "}
          — one line at a time.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link href="/projects">
            <MagneticButton
              size="lg"
              className="rounded-full px-10 text-lg h-14 sm:h-16 bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:shadow-primary/40 transition-all duration-300 group overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center">
                Explore Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                animate={{ x: ["100%", "-100%"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />
            </MagneticButton>
          </Link>

          <Link href="/contact">
            <MagneticButton
              variant="outline"
              size="lg"
              className="rounded-full px-10 text-lg h-14 sm:h-16 backdrop-blur-md bg-background/20 border-primary/20 hover:border-primary/50 hover:bg-background/40 transition-all duration-300"
            >
              Get in Touch
            </MagneticButton>
          </Link>
        </motion.div>

        {/* Metadata Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-4 text-sm"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border-green-500/20">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
            <span className="text-muted-foreground font-medium">Open to Opportunities</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll-down arrow */}
      <motion.button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-muted-foreground/60 hover:text-primary transition-colors cursor-pointer p-2"
        aria-label="Scroll down to see more"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.button>
    </section>
  );
}

export default memo(Hero);
