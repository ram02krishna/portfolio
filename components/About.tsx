import Window from "./Window";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import { stats, principles, internship, education } from "@/lib/data";

export default function About() {
  return (
    <section>
      <SectionHeader id="about_me" num="01" name="about_me" sub="Engineering reliable systems that hold up under real traffic." />
      <div className="grid gap-6 lg:grid-cols-2">
        <ScrollReveal delay={100}>
          <Window title="about_me.md">
            <div className="cmt space-y-1">
              <p>{"// B.Tech in Computer Science & Engineering @ IIIT Nagpur (2023 – Present)"}</p>
              <p>{"// Focused on distributed locking, real-time WebSockets/WebRTC, API performance optimization, and full-stack products shipped to web and Android."}</p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink/90">
              I approach backend engineering with rigor: every slow endpoint gets profiled before it gets rewritten, every shared
              resource gets a concurrency strategy before it gets traffic, and every deploy goes through automated CI/CD. I like
              problems where correctness is the whole point — seat locks under load, delayed jobs, signaling servers, and ledgers that balance to the exact cent.
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-4">
              {stats.map(([v, l]) => (
                <div key={l}>
                  <dt className="font-mono text-2xl font-bold text-emerald">{v}</dt>
                  <dd className="mt-1 font-mono text-xs leading-snug text-muted [overflow-wrap:anywhere]">{l}</dd>
                </div>
              ))}
            </dl>
          </Window>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <Window title="$ cat design_philosophy.json">
            <div className="grid gap-3 sm:grid-cols-2">
              {principles.map(([t, d], i) => (
                <div key={t} className="rounded-lg border border-line bg-bg p-3">
                  <h3 className="font-mono text-sm text-cyan">{i + 1}. {t}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{d}</p>
                </div>
              ))}
            </div>
          </Window>
        </ScrollReveal>
      </div>
      <div id="experience" className="mt-6 scroll-mt-24">
        <ScrollReveal delay={150}>
          <Window title="career_progression.log">
            <h3 className="font-mono text-sm font-semibold text-ink">{internship.role}</h3>
            <p className="cmt mb-3">({internship.when})</p>
            <ul className="space-y-2 text-sm">
              {internship.logs.map((l) => (<li key={l} className="flex gap-2"><span className="font-mono text-emerald">$</span><span className="text-ink/90">{l}</span></li>))}
            </ul>
            <h4 className="mb-2 mt-6 border-t border-line pt-4 font-mono text-xs text-muted">{"// education.log"}</h4>
            <ul className="space-y-1.5 font-mono text-xs sm:text-sm">
              {education.map(([s, d, m]) => (
                <li key={s} className="flex flex-col gap-0.5 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-x-4">
                  <span><span className="text-cyan">{s}</span> — {d}</span>
                  <span className="text-muted text-[11px] sm:text-xs">({m})</span>
                </li>
              ))}
            </ul>
          </Window>
        </ScrollReveal>
      </div>
    </section>
  );
}
