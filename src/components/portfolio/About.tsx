import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  User,
  GraduationCap,
  Server,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const socials = [
    { icon: Github, href: "https://github.com/ram02krishna", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ram-krishna-419528287/",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://x.com/krishnarammhd", label: "Twitter" },
    { icon: Mail, href: "mailto:krishnarammhd@gmail.com", label: "Email" },
  ];

  return (
    <section id="about" className="relative px-4 py-6 sm:py-8 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-6 text-center">
          <p className="section-label-ndot">// about</p>
          <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
            A little bit <span className="text-gradient">about me.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-muted-foreground">
            Building reliable backend architectures, automated deployments, and scalable software.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          <motion.div
            className="reveal bento-card flex flex-col justify-between rounded-3xl p-6 sm:p-7 md:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6 aspect-square w-full max-w-[300px] sm:max-w-[330px] overflow-hidden rounded-3xl border border-border/80 animate-float">
                <img
                  src="/profile.png"
                  alt="Ram Krishna"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling?.classList.remove("hidden");
                  }}
                />
                <div className="hidden h-full w-full flex items-center justify-center bg-secondary/50">
                  <User className="h-28 w-28 text-muted-foreground/30" strokeWidth={1} />
                </div>
              </div>

              <h3 className="font-display text-2xl font-bold text-foreground">Ram Krishna</h3>
              <p className="font-mono text-xs text-muted-foreground mt-0.5">@ram02krishna</p>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-3.5 py-1.5 text-xs font-medium text-foreground/90 backdrop-blur-sm">
                <span>Open for SDE, Backend &amp; DevOps roles</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3 border-t border-border/50 pt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="social-icon-btn flex h-10 w-10 items-center justify-center rounded-2xl border border-border/70 bg-secondary/50 text-foreground hover:text-[color:var(--brand-cyan)] hover:border-[color:var(--brand-cyan)]/50"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-col gap-5 md:col-span-7">
            <motion.div
              className="reveal bento-card rounded-3xl p-6 sm:p-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <div className="mb-3 flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-[color:var(--brand-cyan)]">
                  <Server className="h-4 w-4" />
                </span>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-cyan)]">
                  Core Focus
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Open to SDE, Backend &amp; DevOps Roles
              </h3>

              <div className="mt-3 space-y-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                <p>
                  Hi, I'm Ram Krishna. Over the past few years, I've dedicated myself to understanding
                  systems under the hood — architecting high-concurrency REST microservices, tuning
                  database queries, and automating containerized CI/CD deployments.
                </p>
                <p>
                  I'm actively seeking full-time and internship opportunities where I can contribute
                  to mission-critical infrastructure, write clean and maintainable code, and
                  collaborate with forward-thinking engineering teams.
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 pt-2 border-t border-border/40">
                {[
                  "REST Microservices",
                  "Docker & AWS",
                  "PostgreSQL & Prisma",
                  "CI/CD Workflows",
                  "System Design",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="chip-interactive cursor-default rounded-lg border border-border/60 bg-secondary/30 px-2.5 py-1 text-xs font-medium text-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="reveal bento-card rounded-3xl p-6 sm:p-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15 }}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-[color:var(--brand-violet)]">
                  <GraduationCap className="h-4 w-4" />
                </span>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-violet)]">
                  Education &amp; Background
                </span>
              </div>

              <div className="relative border-l border-border/70 ml-2 pl-5 space-y-6">
                <div className="relative">
                  <span className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full bg-[color:var(--brand-violet)]" />
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="font-display text-base sm:text-lg font-bold text-foreground">
                        Indian Institute of Information Technology, Nagpur
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        B.Tech in Computer Science &amp; Engineering
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full border border-border/70 bg-secondary/60 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-foreground">
                      2023 — 2027
                    </span>
                  </div>
                  <div className="mt-2.5 flex flex-wrap gap-1.5 text-[11px] text-muted-foreground">
                    <span className="rounded bg-secondary/40 px-2 py-0.5 border border-border/40">
                      Data Structures &amp; Algorithms
                    </span>
                    <span className="rounded bg-secondary/40 px-2 py-0.5 border border-border/40">
                      DBMS
                    </span>
                    <span className="rounded bg-secondary/40 px-2 py-0.5 border border-border/40">
                      OS
                    </span>
                    <span className="rounded bg-secondary/40 px-2 py-0.5 border border-border/40">
                      Computer Networks
                    </span>
                  </div>
                </div>

                <div className="relative">
                  <span className="absolute -left-[24px] top-1.5 h-2 w-2 rounded-full bg-[color:var(--brand-cyan)]" />
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="font-display text-sm sm:text-base font-semibold text-foreground">
                        Sanskar Public School, Gwalior
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Senior Secondary (Class XII, CBSE Board)
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-[color:var(--brand-cyan)]/40 bg-[color:var(--brand-cyan)]/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[color:var(--brand-cyan)]">
                        81%
                      </span>
                      <span className="font-mono text-[11px] text-muted-foreground">2022</span>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <span className="absolute -left-[24px] top-1.5 h-2 w-2 rounded-full bg-muted-foreground/60" />
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="font-display text-sm sm:text-base font-semibold text-foreground">
                        St. Paul's School, Gwalior
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Secondary School (Class X, CBSE Board)
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-emerald-400">
                        88%
                      </span>
                      <span className="font-mono text-[11px] text-muted-foreground">2020</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="reveal bento-card flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl p-6 md:col-span-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            <div>
              <h4 className="font-display text-lg font-bold text-foreground">
                Looking for my full resume?
              </h4>
              <p className="text-sm text-muted-foreground mt-0.5">
                Download my up-to-date resume with technical skills, education, and past work.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/Resume.pdf"
                download="Ram_Krishna_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-standard px-6 py-3 text-sm"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a href="#contact" className="btn-secondary-standard px-6 py-3 text-sm">
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
