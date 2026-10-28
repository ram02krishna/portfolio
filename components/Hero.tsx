import { Github, Linkedin, Code2, Trophy } from "lucide-react";
import Window from "./Window";
import TypewriterText from "./TypewriterText";
import { links } from "@/lib/data";

const Prompt = ({ cmd }: { cmd: string }) => (
  <p className="font-mono text-sm">
    <span className="text-emerald">ramkrishna@portfolio</span><span className="text-muted">:</span><span className="text-cyan">~</span>
    <span className="text-muted">$ </span>{cmd}
  </p>
);

export default function Hero() {
  return (
    <section id="top">
      <Window title="ramkrishna — ~/portfolio — zsh — 80×24">
        <div className="space-y-5">
          <p className="cmt">Last login: Wed Oct 28 2026 on ttys001</p>
          <div><Prompt cmd="whoami" /><p className="mt-1 font-mono text-sm text-ink"><span className="text-emerald">→</span> Backend · DevOps · Full-Stack Software Engineer | CSE @ IIIT Nagpur</p></div>
          <div>
            <Prompt cmd="cat welcome.txt" />
            <h1 className="mt-2 min-h-[3.5rem] bg-gradient-to-r from-emerald to-cyan bg-clip-text text-2xl font-extrabold leading-tight text-transparent sm:min-h-[2.75rem] sm:text-3xl md:min-h-[3.75rem] md:text-5xl">
              <TypewriterText text="Hey, welcome to my portfolio! I'm Ram Krishna." speed={35} delay={200} />
            </h1>
          </div>
          <div>
            <Prompt cmd="cat about.txt" />
            <div className="cmt mt-1 space-y-1">
              <p>{"// Computer Science student at IIIT Nagpur building backend systems that hold up under real traffic."}</p>
              <p>{"// Made slow API endpoints 20% faster and managed AWS EC2/Docker deployments during my SDE internship."}</p>
              <p>{"// Engineered a ticketing engine with zero double-bookings under 1,000 concurrent requests & a WebRTC chat platform."}</p>
              <p>{"// Shipped a Splitwise-style expense tracker with exact-cent splits, serving a web app and an Android app from one API."}</p>
            </div>
          </div>
          <div>
            <Prompt cmd="./explore" />
            <div className="mt-3 flex flex-wrap gap-2.5 font-mono text-xs sm:text-sm">
              <a href="#projects" className="rounded bg-emerald px-3.5 py-2 font-semibold text-bg transition hover:brightness-110 sm:px-4">[view_projects]</a>
              <a href={links.resume} download className="rounded border border-cyan px-3.5 py-2 text-cyan transition hover:bg-cyan/10 sm:px-4">[download_resume]</a>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <a className="pill inline-flex items-center gap-1.5 transition-colors hover:border-cyan/50 hover:bg-cyan/5" href={links.github} target="_blank" rel="noopener noreferrer"><Github size={12} />github.com/ram02krishna</a>
              <a className="pill inline-flex items-center gap-1.5 transition-colors hover:border-cyan/50 hover:bg-cyan/5" href={links.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={12} />linkedin</a>
              <a className="pill inline-flex items-center gap-1.5 transition-colors hover:border-cyan/50 hover:bg-cyan/5" href={links.twitter} target="_blank" rel="noopener noreferrer">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                x.com/krishnarammhd
              </a>
              <a className="pill inline-flex items-center gap-1.5 transition-colors hover:border-cyan/50 hover:bg-cyan/5" href={links.leetcode} target="_blank" rel="noopener noreferrer"><Code2 size={12} />leetcode (1725)</a>
              <a className="pill inline-flex items-center gap-1.5 transition-colors hover:border-cyan/50 hover:bg-cyan/5" href={links.codeforces} target="_blank" rel="noopener noreferrer"><Trophy size={12} />codeforces (1201)</a>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-2 border-t border-line pt-3 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span className="flex items-center gap-2"><span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald" />online · open to Backend, DevOps &amp; Full-Stack SDE roles</span>
          <span className="truncate">zsh · 120x40 | Gwalior / Nagpur, IN</span>
        </div>
      </Window>
    </section>
  );
}
