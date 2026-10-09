import { Terminal, Server, GitBranch, Cloud, Cpu, Zap } from "lucide-react";
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
  { prefix: "$", text: "cat education.txt", type: "cmd" },
  { text: "B.Tech in CSE @ IIIT Nagpur (Class of 2027)", type: "out" },
  { prefix: "$", text: "cat current_status.txt", type: "cmd" },
  { text: "✔  actively seeking full-time roles", type: "out-green" },
  { text: "✔  building devops side-projects", type: "out-green" },
  { text: "✔  learning k8s & infra-as-code", type: "out-green" },
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
        <div className="reveal mb-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--brand-cyan)]">// journey</p>
          <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
            Where I am{" "}
            <span className="text-gradient">right now</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="bento-card rounded-[2.5rem] overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="flex flex-col justify-center gap-5 p-5 sm:p-8 lg:p-10 border-b md:border-b-0 md:border-r border-border/40">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] shadow-sm backdrop-blur-sm" style={{ color: "var(--brand-violet)" }}>
                Present · Available
              </span>

              <div>
                <h3 className="text-xl font-bold sm:text-2xl lg:text-3xl text-foreground/90 leading-snug">
                  Open to SDE, Backend &amp; DevOps Roles
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  I've been sharpening my skills in backend engineering and DevOps — from writing scalable APIs to containerising services and automating deployments. I love the whole pipeline: code → test → ship → monitor.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Looking for a team where I can own real infrastructure challenges, learn from experienced engineers, and ship things that actually matter.
                </p>
              </div>

              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">Current focus areas</p>
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
                          <span className="text-muted-foreground pl-3 break-words min-w-0">{line.text}</span>
                        )}
                        {line.type === "out-green" && (
                          <span className="pl-3 break-words min-w-0" style={{ color: "#28c840" }}>{line.text}</span>
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
    </section>
  );
}
