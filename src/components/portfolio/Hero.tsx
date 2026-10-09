import { useEffect, useState } from "react";
import { ArrowRight, Mail, GraduationCap, Layers } from "lucide-react";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import { Button } from "@/components/ui/button";

const ROLES = ["SDE", "Backend Developer", "DevOps Engineer"];

export function Hero() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[idx];
    const speed = deleting ? 35 : 75;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 2000);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIdx((idx + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-4 pt-20 pb-8 sm:pt-24 sm:pb-10 overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="reveal font-display text-4xl font-bold leading-[1.08] sm:text-6xl md:text-7xl tracking-tight">
          <span className="block text-foreground/90 font-medium">Hi, I'm</span>
          <span className="text-gradient">Ram Krishna</span>
        </h1>

        <div className="reveal mx-auto mt-6 flex justify-center">
          <div className="inline-flex min-h-[42px] items-center gap-2.5 rounded-xl border border-border/70 bg-secondary/35 px-4 py-2 font-mono text-sm sm:text-base backdrop-blur-md shadow-sm">
            <span className="font-semibold text-xs sm:text-sm tracking-wider uppercase text-[color:var(--brand-cyan)]">
              role ~/
            </span>
            <span className="font-semibold text-foreground cursor-blink">{text}</span>
          </div>
        </div>

        <p className="reveal mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          SDE, Backend &amp; DevOps Engineer crafting scalable systems, resilient APIs, and
          automated cloud workflows. Passionate about clean code, high performance, and solving
          complex engineering challenges.
        </p>

        <div className="reveal mx-auto mt-8 max-w-2xl text-left">
          <div className="bento-card overflow-hidden rounded-3xl border border-border/60">
            <div className="flex items-center justify-between border-b border-border/50 bg-secondary/80 px-4 py-3 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f56] shadow-sm" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-sm" />
                <span className="h-3 w-3 rounded-full bg-[#27c93f] shadow-sm" />
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] font-medium text-muted-foreground/80 sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-cyan)]" />
                <span>~/portfolio/engineer.ts</span>
              </div>
              <span className="rounded bg-secondary px-2 py-0.5 font-mono text-[10px] text-muted-foreground/70">
                zsh
              </span>
            </div>
            <pre className="overflow-x-auto bg-secondary/20 p-4 font-mono text-[11px] leading-6 sm:p-5 sm:text-sm sm:leading-7">
              <code>
                <div className="flex gap-3 sm:gap-4">
                  <span className="select-none text-muted-foreground/50">01</span>
                  <span>
                    <span style={{ color: "var(--code-keyword)" }}>const</span>{" "}
                    <span style={{ color: "var(--code-variable)" }}>name</span>{" "}
                    <span className="text-muted-foreground">=</span>{" "}
                    <span style={{ color: "var(--code-string)" }}>"Ram Krishna"</span>;
                  </span>
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <span className="select-none text-muted-foreground/50">02</span>
                  <span>
                    <span style={{ color: "var(--code-keyword)" }}>const</span>{" "}
                    <span style={{ color: "var(--code-variable)" }}>role</span>{" "}
                    <span className="text-muted-foreground">=</span>{" "}
                    <span style={{ color: "var(--code-string)" }}>
                      "SDE, Backend & DevOps Engineer"
                    </span>
                    ;
                  </span>
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <span className="select-none text-muted-foreground/50">03</span>
                  <span>
                    <span style={{ color: "var(--code-keyword)" }}>const</span>{" "}
                    <span style={{ color: "var(--code-variable)" }}>status</span>{" "}
                    <span className="text-muted-foreground">=</span>{" "}
                    <span style={{ color: "var(--code-string)" }}>
                      "Writing code & building projects"
                    </span>
                    ;
                  </span>
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <span className="select-none text-muted-foreground/50">04</span>
                  <span>
                    <span style={{ color: "var(--code-keyword)" }}>const</span>{" "}
                    <span style={{ color: "var(--code-variable)" }}>ratings</span>{" "}
                    <span className="text-muted-foreground">=</span> {"{ "}
                    <span style={{ color: "var(--code-property)" }}>codeforces</span>:{" "}
                    <span style={{ color: "var(--code-number)" }}>1201</span>,{" "}
                    <span style={{ color: "var(--code-property)" }}>leetcode</span>:{" "}
                    <span style={{ color: "var(--code-number)" }}>1725</span> {"}"};
                  </span>
                </div>
              </code>
            </pre>
          </div>
        </div>

        <div className="reveal mx-auto mt-6 flex flex-wrap items-center justify-center gap-2">
          <div className="chip-interactive inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/40 px-3.5 py-1.5 text-xs font-medium text-foreground backdrop-blur-md cursor-default">
            <SiCodeforces className="h-3.5 w-3.5 text-[#1F8ACB] shrink-0" />
            <span className="text-muted-foreground">Codeforces:</span>
            <span className="font-semibold text-foreground">1201 (Pupil)</span>
          </div>
          <div className="chip-interactive inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/40 px-3.5 py-1.5 text-xs font-medium text-foreground backdrop-blur-md cursor-default">
            <SiLeetcode className="h-3.5 w-3.5 text-[#FFA116] shrink-0" />
            <span className="text-muted-foreground">LeetCode:</span>
            <span className="font-semibold text-foreground">1725</span>
          </div>
          <div className="chip-interactive inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/40 px-3.5 py-1.5 text-xs font-medium text-foreground backdrop-blur-md cursor-default">
            <GraduationCap className="h-3.5 w-3.5 text-muted-foreground" />
            <span>IIIT Nagpur CSE '27</span>
          </div>
          <div className="chip-interactive inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/40 px-3.5 py-1.5 text-xs font-medium text-foreground backdrop-blur-md cursor-default">
            <Layers className="h-3.5 w-3.5 text-muted-foreground" />
            <span>Backend &amp; DevOps</span>
          </div>
        </div>

        <div className="reveal mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="btn-primary-standard px-8 py-3 text-base">
            <a href="#projects">
              <span className="flex items-center font-medium">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="btn-secondary-standard px-8 py-3 text-base"
          >
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
