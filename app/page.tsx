import { Terminal } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl space-y-16 px-3.5 pb-16 pt-20 sm:space-y-20 sm:px-4 sm:pt-24 md:space-y-24">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <footer className="border-t border-line bg-card/30 py-8 font-mono text-xs text-muted">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <p className="flex items-center gap-1.5">
                <Terminal size={14} className="text-emerald shrink-0" />
                <span className="text-emerald">ramkrishna@portfolio</span>
                <span className="text-muted">:</span>
                <span className="text-cyan">~</span>
                <span className="text-muted">$ </span>
                <span className="text-ink">./system_status.sh --copyright</span>
              </p>
              <p className="text-[11px] text-ink/80 sm:text-xs">
                [OK] © {new Date().getFullYear()} Ram Krishna. All rights reserved.
              </p>
              <p className="cmt text-[11px]">
                {"// Engineered with Next.js, TypeScript & Tailwind CSS · Process exited with status 0"}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#top"
                className="inline-flex items-center gap-1 rounded border border-line bg-bg px-2.5 py-1 text-[11px] text-cyan transition-colors hover:border-emerald/50 hover:text-emerald"
              >
                <span>↑</span> [return_to_top]
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
