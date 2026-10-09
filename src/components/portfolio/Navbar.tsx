import { useEffect, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#platforms", label: "Platforms" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" },
    );

    links.forEach((link) => {
      const el = document.getElementById(link.href.substring(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 280);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-background/85 shadow-md backdrop-blur-xl"
          : "border-b border-border/40 bg-background/60 backdrop-blur-lg"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="flex items-center gap-2.5 font-display text-lg font-bold transition-opacity hover:opacity-90"
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg shadow-sm"
            style={{ background: "var(--gradient-brand)" }}
          >
            <Code2 className="h-4 w-4 text-background" />
          </span>
          <span className="text-gradient font-bold tracking-tight">Ram Krishna</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const isActive = activeSection === l.href.substring(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-secondary text-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-2.5">
          <ThemeToggle />

          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border/70 bg-secondary/50 text-foreground transition-colors hover:bg-secondary md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="border-b border-border/80 bg-background/95 backdrop-blur-2xl md:hidden overflow-hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              <ul className="flex flex-col space-y-1">
                {links.map((l) => {
                  const isActive = activeSection === l.href.substring(1);
                  const sectionId = l.href.substring(1);
                  return (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        onClick={(e) => handleMobileNavClick(e, sectionId)}
                        className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-secondary text-foreground font-semibold"
                            : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground"
                        }`}
                      >
                        <span>{l.label}</span>
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-cyan)]" />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
