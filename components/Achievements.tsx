import { ExternalLink } from "lucide-react";
import Window from "./Window";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import { links } from "@/lib/data";

export default function Achievements() {
  return (
    <section>
      <SectionHeader id="achievements" num="04" name="achievements.log" />
      <div className="grid auto-rows-fr gap-6 md:grid-cols-3">
        <ScrollReveal delay={100}>
          <Window title="trophy_01.log" className="h-full">
            <h3 className="font-mono text-sm text-emerald">2nd Place / Runner-up @ Genathon</h3>
            <p className="cmt mt-1">IIIT Nagpur Flagship National Hackathon</p>
            <p className="mt-3 text-sm text-ink/90">Built and pitched a working QR-based Visitor Management System MVP in a 48-hour sprint.</p>
          </Window>
        </ScrollReveal>
        <ScrollReveal delay={180}>
          <Window title="qualifier_02.log" className="h-full">
            <h3 className="font-mono text-sm text-emerald">Demonstration Round Qualifier @ Adobe University Hackathon</h3>
            <p className="mt-3 text-sm text-ink/90">Cleared competitive coding screens and system design rounds among thousands of competing teams nationwide.</p>
          </Window>
        </ScrollReveal>
        <ScrollReveal delay={260}>
          <Window title="cp_stats.json" noHoverGlow className="h-full">
            <h3 className="font-mono text-sm text-emerald">Competitive Programming</h3>
            <ul className="mt-3 space-y-2.5 font-mono text-xs sm:text-sm">
              <li>
                <a
                  href={links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex cursor-pointer items-start justify-between gap-2"
                >
                  <div className="flex-1 text-ink/90 leading-snug">
                    <span className="text-muted">LeetCode:</span>{" "}
                    <span>500+ problems solved | Peak Rating: <b className="text-cyan">1725</b></span>
                  </div>
                  <ExternalLink size={12} className="mt-0.5 shrink-0 text-muted/60 transition-colors group-hover:text-emerald" />
                </a>
              </li>
              <li>
                <a
                  href={links.codeforces}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex cursor-pointer items-start justify-between gap-2"
                >
                  <div className="flex-1 text-ink/90 leading-snug">
                    <span className="text-muted">Codeforces:</span>{" "}
                    <span>Pupil | Rating: <b className="text-cyan">1201</b></span>
                  </div>
                  <ExternalLink size={12} className="mt-0.5 shrink-0 text-muted/60 transition-colors group-hover:text-emerald" />
                </a>
              </li>
            </ul>
          </Window>
        </ScrollReveal>
      </div>
    </section>
  );
}
