import {
  Terminal,
  Server,
  GitBranch,
  Cloud,
  Cpu,
  Zap,
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const focusAreas = [
  { icon: Server, label: "Backend APIs", color: "var(--brand-cyan)" },
  { icon: Cloud, label: "Cloud & AWS", color: "var(--brand-violet)" },
  { icon: GitBranch, label: "CI/CD Pipelines", color: "var(--brand-pink)" },
  { icon: Terminal, label: "Linux & Shell", color: "var(--brand-cyan)" },
  { icon: Cpu, label: "Docker & K8s", color: "var(--brand-violet)" },
  { icon: Zap, label: "Automation", color: "var(--brand-pink)" },
];

const terminalLines = [
  { prefix: "$", text: "whoami", type: "cmd" },
  { text: "ram_krishna  →  sde, backend & devops engineer", type: "out" },
  { prefix: "$", text: "cat experience.txt", type: "cmd" },
  {
    text: "✔  Software Development Intern @ Simphy Softwares Pvt. Ltd. (3 months)",
    type: "out-green",
  },
  { prefix: "$", text: "cat education.txt", type: "cmd" },
  { text: "B.Tech in CSE @ IIIT Nagpur (Class of 2027)", type: "out" },
  { prefix: "$", text: "cat current_status.txt", type: "cmd" },
  { text: "✔  actively seeking full-time roles & internships", type: "out-green" },
  { text: "✔  building high-concurrency distributed systems", type: "out-green" },
  { text: "✔  mastering k8s & infra-as-code", type: "out-green" },
  { prefix: "$", text: "echo $AVAILABLE", type: "cmd" },
  { text: "true  —  open to remote & hybrid", type: "out" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const lineVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-6 sm:py-8">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-8 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--brand-cyan)]">
            // experience &amp; journey
          </p>
          <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-muted-foreground">
            Hands-on professional software engineering experience alongside ongoing technical
            pursuits.
          </p>
        </div>

        <div className="space-y-8">
          {/* Work Experience Card: Simphy Softwares Pvt. Ltd. */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="bento-card rounded-[2.5rem] overflow-hidden"
          >
            {/* Header bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/50 bg-secondary/50 px-6 sm:px-8 py-4 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--brand-cyan)]/20 to-[color:var(--brand-violet)]/20 border border-[color:var(--brand-cyan)]/30 text-[color:var(--brand-cyan)] shadow-sm">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      Simphy Softwares Pvt. Ltd.
                    </h3>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-400">
                      Internship
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground mt-0.5">
                    <span className="text-foreground/90 font-medium">
                      Software Development Intern
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-[color:var(--brand-cyan)]" />
                      Gwalior, India
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-border/60 bg-secondary/60 px-3.5 py-1.5 font-mono text-xs text-muted-foreground shadow-sm">
                <Calendar className="h-3.5 w-3.5 text-[color:var(--brand-cyan)]" />
                <span className="font-semibold text-foreground/90">3 Months</span>
              </div>
            </div>

            {/* Experience Body */}
            <div className="p-6 sm:p-8 lg:p-10 space-y-6">
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                Served as a Software Development Intern contributing to core software modules and
                interactive visualization workflows for{" "}
                <span className="text-foreground font-semibold">SimPHY</span> — an educational 2D/3D
                physics simulation engine used by students, researchers, and academic institutions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-border/40 bg-secondary/20 p-4 sm:p-5 transition-colors hover:border-border/80">
                  <div className="flex items-center gap-2 text-xs font-semibold text-foreground mb-2">
                    <span className="h-2 w-2 rounded-full bg-[color:var(--brand-cyan)]" />
                    Feature Development
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    Developed interactive UI components and modular tools for physics simulations,
                    enabling seamless user manipulation of mechanical models and force vectors.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/40 bg-secondary/20 p-4 sm:p-5 transition-colors hover:border-border/80">
                  <div className="flex items-center gap-2 text-xs font-semibold text-foreground mb-2">
                    <span className="h-2 w-2 rounded-full bg-[color:var(--brand-violet)]" />
                    Performance &amp; Rendering
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    Optimized canvas rendering and real-time state updates to guarantee stable frame
                    rates during complex multi-body mathematical computations.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/40 bg-secondary/20 p-4 sm:p-5 transition-colors hover:border-border/80">
                  <div className="flex items-center gap-2 text-xs font-semibold text-foreground mb-2">
                    <span className="h-2 w-2 rounded-full bg-[color:var(--brand-pink)]" />
                    Code Quality &amp; Agile
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    Collaborated directly with engineering leads, participated in code reviews,
                    resolved edge-case defects, and managed feature branches using Git.
                  </p>
                </div>
              </div>

              {/* Skills Footer */}
              <div className="pt-4 border-t border-border/40 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70 mr-1">
                    Technologies:
                  </span>
                  {[
                    "JavaScript",
                    "React",
                    "Simulation Logic",
                    "UI/UX Engineering",
                    "Git",
                    "Performance Optimization",
                    "Problem Solving",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="chip-interactive cursor-default rounded-lg border border-border/60 bg-secondary/40 px-2.5 py-1 text-xs font-medium text-foreground/85"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Completed Internship
                </span>
              </div>
            </div>
          </motion.div>

          {/* Current Status & Future Opportunities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="bento-card rounded-[2.5rem] overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="flex flex-col justify-center gap-5 p-5 sm:p-8 lg:p-10 border-b md:border-b-0 md:border-r border-border/40">
                <span
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] shadow-sm backdrop-blur-sm"
                  style={{ color: "var(--brand-violet)" }}
                >
                  Present · Available
                </span>

                <div>
                  <h3 className="text-xl font-bold sm:text-2xl lg:text-3xl text-foreground/90 leading-snug">
                    Open to SDE, Backend &amp; DevOps Roles
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Building upon hands-on software development experience, I specialize in
                    high-concurrency backend engineering and DevOps — from writing scalable
                    transaction-isolated APIs to containerising services and automating CI/CD
                    pipelines.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Seeking full-time roles and internships where I can solve real infrastructure
                    challenges, collaborate with experienced engineers, and ship robust systems.
                  </p>
                </div>

                <div>
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                    Current focus areas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {focusAreas.map(({ icon: Icon, label, color }) => (
                      <span
                        key={label}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-secondary/40 px-3 py-1.5 text-xs font-medium text-foreground/80 transition-all duration-200 hover:border-opacity-80 hover:bg-secondary/60"
                      >
                        <Icon className="h-3 w-3" style={{ color }} />
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-5 p-5 sm:p-7 lg:p-8 bg-secondary/10">
                <div className="rounded-2xl border border-border/40 overflow-hidden">
                  <div className="flex items-center justify-between border-b border-border/50 bg-secondary/80 px-5 py-3 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-[#ff5f57] shadow-sm" />
                      <span className="h-3 w-3 rounded-full bg-[#febc2e] shadow-sm" />
                      <span className="h-3 w-3 rounded-full bg-[#28c840] shadow-sm" />
                    </div>
                    <span className="flex-1 text-center font-mono text-[11px] font-medium text-muted-foreground/80 sm:text-xs">
                      ~ bash — status check
                    </span>
                    <div className="w-[52px]" />
                  </div>

                  <div className="bg-secondary/40 dark:bg-black/40 p-3 sm:p-5 font-mono text-[10px] sm:text-xs leading-5 sm:leading-6 overflow-x-auto">
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-1"
                    >
                      {terminalLines.map((line, i) => (
                        <motion.div key={i} variants={lineVariants} className="flex gap-2 min-w-0">
                          {line.prefix && (
                            <span style={{ color: "var(--brand-cyan)" }}>{line.prefix}</span>
                          )}
                          {line.type === "cmd" && (
                            <span className="text-foreground/90">{line.text}</span>
                          )}
                          {line.type === "out" && (
                            <span className="text-muted-foreground pl-3 break-words min-w-0">
                              {line.text}
                            </span>
                          )}
                          {line.type === "out-green" && (
                            <span className="pl-3 break-words min-w-0" style={{ color: "#28c840" }}>
                              {line.text}
                            </span>
                          )}
                        </motion.div>
                      ))}

                      <motion.div variants={lineVariants} className="flex items-center gap-2 mt-1">
                        <span style={{ color: "var(--brand-cyan)" }}>$</span>
                        <span className="cursor-blink text-foreground/60" />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="btn-primary-standard w-full justify-center px-6 py-3 text-sm sm:w-auto"
                >
                  <Zap className="h-4 w-4" />
                  Let's work together
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
