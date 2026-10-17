"use client";
import { useState } from "react";
import Link from "next/link";
import { Terminal, Menu, X } from "lucide-react";

const nav = ["about_me", "experience", "projects", "skills", "achievements"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-3.5 py-2.5 sm:px-4 sm:py-3 font-mono text-xs sm:text-sm">
        <Link href="#top" onClick={() => setIsOpen(false)} className="group flex items-center gap-1.5 sm:gap-2">
          <Terminal size={19} className="text-emerald transition-transform group-hover:scale-110 w-[18px] h-[18px] sm:w-5 sm:h-5" />
          <div className="flex items-center">
            <span className="text-emerald">ramkrishna</span><span className="text-muted">@</span><span className="text-cyan">portfolio</span>
            <span className="cursor ml-1 inline-block h-3.5 w-1.5 sm:h-4 sm:w-2 bg-emerald" />
          </div>
        </Link>
        <ul className="hidden items-center gap-5 md:flex">
          {nav.map((n) => (
            <li key={n}><a href={`#${n}`} className="text-muted transition-colors hover:text-emerald">~/{n}</a></li>
          ))}
          <li><a href="#contact" className="rounded border border-emerald px-3 py-1 text-emerald transition-colors hover:bg-emerald hover:text-bg">./contact</a></li>
        </ul>
        <div className="flex items-center gap-2 md:hidden">
          <a href="#contact" onClick={() => setIsOpen(false)} className="rounded border border-emerald px-2.5 py-1 text-xs text-emerald">./contact</a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded border border-line bg-card/60 p-1 text-emerald hover:border-emerald/50 focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="border-t border-line bg-bg/95 px-4 py-3 backdrop-blur md:hidden">
          <p className="mb-2 font-mono text-xs text-muted">{"// cd to section:"}</p>
          <ul className="space-y-1.5 font-mono text-xs">
            {nav.map((n) => (
              <li key={n}>
                <a
                  href={`#${n}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 rounded px-2 py-1.5 text-ink transition-colors hover:bg-card hover:text-emerald"
                >
                  <span className="text-emerald">▸</span>
                  <span>~/{n}</span>
                </a>
              </li>
            ))}
            <li className="pt-1.5">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 rounded border border-emerald/40 bg-emerald/10 px-2 py-1.5 text-emerald"
              >
                <span>$</span>
                <span>./contact</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
