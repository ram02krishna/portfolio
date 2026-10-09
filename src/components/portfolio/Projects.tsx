import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

type Project = {
  title: string;
  tag: string;
  desc: string;
  features: string[];
  stack: string[];
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "Event Seat Booking",
    tag: "Full Stack",
    desc: "A concurrency-safe, transaction-isolated event ticketing platform engineered to handle flash-sale traffic spikes, featuring interactive SVG venue seating, delayed worker queues, and zero double-booking guarantee.",
    features: [
      "Atomic row-level locking via PostgreSQL with deterministic lock ordering to mathematically eliminate deadlocks under high concurrency",
      "Interactive SVG seat map with real-time Socket.io multi-client sync and server-authoritative hold countdown timers",
      "BullMQ & Redis delayed auto-release queue for abandoned carts and instant QR code turnstile check-in verification",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
      "Socket.io",
      "Tailwind CSS",
      "Zod",
    ],
    github: "https://github.com/ram02krishna/event-seat-booking",
    live: "https://event-seat-booking-psi.vercel.app/",
  },
  {
    title: "Spendora",
    tag: "Full Stack",
    desc: "A full-stack MERN finance manager where users log income & expenses, set category budgets, visualize spending via interactive charts, and export reports as Excel or PDF — with secure JWT auth and email OTP recovery.",
    features: [
      "Interactive Chart.js dashboards — bar, line & doughnut — with monthly analytics",
      "Budget management with visual usage indicators per category",
      "Excel & PDF report export, rate limiting, Helmet.js security headers",
    ],
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Cloudinary",
      "Tailwind CSS",
      "JWT",
      "Resend",
      "ExcelJS",
    ],
    github: "https://github.com/ram02krishna/spendora-expense-tracker",
    live: "https://spendora-finance.vercel.app/login",
  },
  {
    title: "IIIT Nagpur VMS",
    tag: "Full Stack",
    desc: "A unified campus access & security management system for IIIT Nagpur featuring 6-role RBAC, 10-floor hostel census tracking, 09:30 PM curfew pass enforcement, optical gate QR verification, and live campus telemetry.",
    features: [
      "Interactive 10-floor hostel census matrix tracking 400+ residents with automated 09:30 PM curfew strikes",
      "Dual-checkpoint optical QR scanner (Main & Hostel Gate), walk-in kiosk with webcam badges, & vehicle lookup",
      "Live campus capacity telemetry (1,000 safe limit), overstay security radar with escort dispatch, & SOS beacon",
    ],
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Zustand",
      "Resend",
      "Cloudinary",
      "HTML5 QR",
      "PWA",
      "Vite",
    ],
    github: "https://github.com/ram02krishna/Visitor-Management-System",
    live: "https://iiitn-vms.vercel.app/",
  },
  {
    title: "QuickConnect",
    tag: "Full Stack",
    desc: "An enterprise-grade real-time communication platform featuring 1-on-1 & group chats with sub-millisecond delivery, peer-to-peer WebRTC HD audio/video calling, virtualized message lists, and Upstash Redis presence tracking.",
    features: [
      "Sub-millisecond messaging via Socket.io with delivery/read receipts, typing indicators, & virtualized scrolling (react-virtuoso)",
      "Crystal-clear WebRTC audio/video mesh calls with group signaling, floating Picture-in-Picture (PiP), & screen sharing",
      "Voice notes with interactive audio waveforms & playback speed (1x/1.5x/2x), direct Cloudinary uploads, & Argon2id auth",
    ],
    stack: [
      "Next.js 15",
      "React 19",
      "Socket.io",
      "WebRTC",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Upstash Redis",
      "Tailwind CSS v4",
      "Zustand",
      "TanStack Query",
      "Argon2id",
      "Resend",
      "Cloudinary",
    ],
    github: "https://github.com/ram02krishna/QuickConnect",
    live: "https://quick-connect-chatapp.vercel.app/",
  },
  {
    title: "nanoURL",
    tag: "Full Stack",
    desc: "A sleek, full-stack URL shortening platform built for speed and security — offering deep click analytics (IP, browser, OS, device), password-protected & expiring links, QR code generation, anonymous free-tier shortening, and OTP email verification.",
    features: [
      "Deep click analytics: IP address, browser, OS, and device type per redirect",
      "Password-protected links with custom expiration dates and instant QR code download",
      "Dockerized deployment with Zod-powered centralized validation and Drizzle ORM",
    ],
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Drizzle ORM",
      "Docker",
      "Tailwind CSS",
      "JWT",
      "Zod",
      "Vite",
      "Resend",
    ],
    github: "https://github.com/ram02krishna/nano-url",
    live: "https://getnanourl.vercel.app/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-6 sm:py-8">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--brand-cyan)]">
            // projects
          </p>
          <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
            Selected <span className="text-gradient">work</span>
          </h2>
        </div>

        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((p, i) => {
            const MAX_STACKS = i === 0 ? 8 : 5;
            const visibleStacks = p.stack.slice(0, MAX_STACKS);
            const extraStacks = p.stack.slice(MAX_STACKS);

            return (
              <motion.article
                variants={item}
                key={p.title}
                className={i === 0 ? "md:col-span-2 h-full" : "h-full"}
              >
                <div className="bento-card project-card-hover relative flex h-full flex-col rounded-3xl overflow-hidden">
                  <div className="flex items-center justify-between border-b border-border/50 bg-secondary/50 px-5 py-3 backdrop-blur-md">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
                    </div>
                    <div className="font-mono text-[11px] text-muted-foreground/70">
                      0{i + 1} — {p.tag.toLowerCase()}.app
                    </div>
                    <div className="flex items-center gap-2">
                      {i === 0 && (
                        <span className="rounded-full border border-[color:var(--brand-cyan)]/40 bg-[color:var(--brand-cyan)]/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[color:var(--brand-cyan)] font-semibold">
                          Featured
                        </span>
                      )}
                      <span className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Live
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="mb-2 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
                          {p.title}
                        </h3>
                        {i === 0 && (
                          <p className="font-mono text-xs text-[color:var(--brand-cyan)] mt-0.5">
                            High-Concurrency Ticketing Engine &amp; Real-Time Architecture
                          </p>
                        )}
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

                    <div
                      className={`mt-4 mb-4 flex-1 space-y-2.5 rounded-2xl bg-secondary/20 p-4 border border-border/40 text-xs sm:text-sm text-muted-foreground ${i === 0 ? "grid md:grid-cols-3 md:gap-4 md:space-y-0" : ""}`}
                    >
                      {p.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-cyan)]" />
                          <span className="leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {visibleStacks.map((s) => (
                        <span
                          key={s}
                          className="rounded-lg border border-border/60 bg-secondary/40 px-2.5 py-1 text-[11px] font-medium text-foreground/85"
                        >
                          {s}
                        </span>
                      ))}
                      {extraStacks.length > 0 && (
                        <span
                          title={extraStacks.join(", ")}
                          className="cursor-help rounded-lg border border-border/60 bg-secondary/40 px-2.5 py-1 text-[11px] font-medium text-[color:var(--brand-violet)]"
                        >
                          +{extraStacks.length} more
                        </span>
                      )}
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-3 border-t border-border/50 pt-5">
                      {p.live ? (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary-standard px-4 py-2 text-xs"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Live Preview
                        </a>
                      ) : (
                        <div />
                      )}

                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary-standard px-4 py-2 text-xs"
                        >
                          <Github className="h-3.5 w-3.5" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="reveal mt-10 flex justify-center">
          <a
            href="https://github.com/ram02krishna"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-standard h-12 px-8 text-sm"
          >
            <Github className="h-4 w-4" />
            <span>View all on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
