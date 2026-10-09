import { Mail, Code2, Github, Linkedin, Twitter } from "lucide-react";
const explore = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Platforms", href: "#platforms" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/ram02krishna", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ram-krishna-419528287/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/krishnarammhd", label: "Twitter" },
  { icon: Mail, href: "mailto:krishnarammhd@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border px-4 pb-6 pt-10">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--brand-violet), var(--brand-cyan), transparent)",
        }}
      />

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="flex items-center gap-2 font-display text-3xl font-bold">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg"
                style={{ background: "var(--gradient-brand)" }}
              >
                <Code2 className="h-4 w-4 text-background" />
              </span>
              <span className="text-gradient">Ram Krishna</span>
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Architecting resilient backends and building reliable DevOps pipelines with a focus on
              engineering excellence and scalable infrastructure.
            </p>
            <div className="mt-6 flex items-center gap-3">
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
          </div>

          <div className="md:col-span-1">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Explore
            </p>
            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              {explore.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Stay in touch
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Interested in working together or just want to say hi? My inbox is always open.
            </p>
            <a href="#contact" className="btn-primary-standard mt-5 px-5 py-2.5 text-sm">
              Start a Conversation <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Ram Krishna. All rights reserved.</p>
          <p className="font-mono">crafted in &lt;code/&gt; · deployed with ❤</p>
        </div>
      </div>
    </footer>
  );
}
