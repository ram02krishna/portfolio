import { Mail, Phone, Send, ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

const socials = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    handle: "ram-krishna",
    href: "https://www.linkedin.com/in/ram-krishna-419528287/",
    color: "var(--brand-violet)",
    bg: "oklch(0.7 0.22 305 / 0.12)",
    border: "oklch(0.7 0.22 305 / 0.30)",
  },
  {
    icon: FaXTwitter,
    label: "X (Twitter)",
    handle: "@krishnarammhd",
    href: "https://x.com/krishnarammhd",
    color: "var(--foreground)",
    bg: "oklch(0.5 0.01 260 / 0.10)",
    border: "oklch(0.5 0.01 260 / 0.25)",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    handle: "ram02krishna",
    href: "https://github.com/ram02krishna",
    color: "var(--brand-cyan)",
    bg: "oklch(0.82 0.16 200 / 0.08)",
    border: "oklch(0.82 0.16 200 / 0.25)",
  },
];

const direct = [
  {
    icon: Mail,
    label: "Email",
    value: "krishnarammhd@gmail.com",
    href: "mailto:krishnarammhd@gmail.com",
    color: "var(--brand-cyan)",
    bg: "oklch(0.82 0.16 200 / 0.1)",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 92440 88448",
    href: "tel:+919244088448",
    color: "var(--brand-pink)",
    bg: "oklch(0.74 0.2 350 / 0.1)",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative px-4 py-6 sm:py-8">
      <div className="mx-auto max-w-5xl">
        <div className="reveal mb-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--brand-cyan)]">
            // contact
          </p>
          <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            I'm open to new opportunities and would love to hear from you — whether it's a role, a
            collaboration, or just a chat.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="bento-card rounded-[2.5rem] p-5 sm:p-8 lg:p-10 mb-6"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {direct.map(({ icon: Icon, label, value, href, color, bg }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-3 sm:gap-4 rounded-2xl border border-border/40 p-3.5 sm:p-5 transition-all duration-200 hover:border-[color:var(--brand-cyan)]/50 hover:bg-secondary/60"
                style={{ background: bg }}
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/30"
                  style={{ background: bg }}
                >
                  <Icon className="h-5 w-5" style={{ color }} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground/70">
                    {label}
                  </p>
                  <p className="mt-0.5 truncate text-xs sm:text-sm font-medium text-foreground/90 transition-colors group-hover:text-foreground">
                    {value}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground/40 transition-colors duration-200 group-hover:text-foreground/70" />
              </a>
            ))}
          </div>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-border/40" />
            <span className="font-mono text-[11px] text-muted-foreground/50 uppercase tracking-[0.15em]">
              or find me on
            </span>
            <div className="h-px flex-1 bg-border/40" />
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {socials.map(({ icon: Icon, label, handle, href, color, bg, border }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-row sm:flex-col items-center sm:items-center gap-4 sm:gap-3 rounded-2xl border p-4 sm:p-5 text-left sm:text-center transition-all duration-200 hover:border-[color:var(--brand-cyan)]/50 hover:bg-secondary/60"
                style={{ background: bg, borderColor: border }}
              >
                <div
                  className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-border/20"
                  style={{ background: bg }}
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" style={{ color }} />
                </div>
                <div className="flex-1 sm:flex-none">
                  <p className="text-sm font-semibold text-foreground/90">{label}</p>
                  <p className="mt-0.5 font-mono text-xs text-muted-foreground/70">{handle}</p>
                </div>
                <span className="hidden sm:flex items-center gap-1 rounded-full border border-border/30 px-3 py-1 text-[10px] font-medium text-muted-foreground/60 transition-colors duration-200 group-hover:border-border/60 group-hover:text-foreground/70">
                  View Profile <ArrowUpRight className="h-3 w-3" />
                </span>
                <ArrowUpRight className="sm:hidden h-4 w-4 shrink-0 text-muted-foreground/40 group-hover:text-foreground/70 transition-colors duration-200" />
              </a>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center">
          <a
            href="mailto:krishnarammhd@gmail.com"
            className="btn-primary-standard w-full justify-center px-8 py-4 text-base sm:w-auto"
          >
            <Send className="h-4 w-4" />
            Send me an email
          </a>
        </div>
      </div>
    </section>
  );
}
