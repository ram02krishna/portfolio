import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Window from "./Window";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import { projects, Project } from "@/lib/data";

function Left({ p }: { p: Project }) {
  return (
    <div>
      <h3 className="text-lg font-semibold">{p.title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-ink/90">
        {p.bullets.map((b) => (<li key={b} className="flex gap-2"><span className="font-mono text-emerald">$</span><span>{b}</span></li>))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <span key={t} className="pill">{t}</span>)}</div>
      <div className="mt-4 flex flex-wrap gap-3 font-mono text-xs sm:gap-4 sm:text-sm">
        <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-emerald hover:underline"><ExternalLink size={14} />$ open --live-demo</a>
        <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-cyan hover:underline"><Github size={14} />$ open --github</a>
      </div>
    </div>
  );
}

function Right({ p }: { p: Project }) {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-line bg-bg p-4">
        <p className="font-mono text-xs text-emerald">$ cat {p.metricsCmd}</p>
        <dl className="mt-3 space-y-2">
          {p.metrics.map(([v, l]) => (
            <div key={l} className="flex items-baseline gap-2 sm:gap-3">
              <dt className="min-w-[85px] shrink-0 font-mono text-lg font-bold text-cyan sm:min-w-[110px] sm:text-xl">{v}</dt>
              <dd className="font-mono text-xs text-muted">→ {l}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="rounded-lg border border-line bg-bg p-4">
        <p className="font-mono text-xs text-emerald">$ cat architecture.flow</p>
        <ol className="mt-3 flex flex-wrap items-center gap-2 font-mono text-xs">
          {p.flow.map((s, i) => (
            <li key={s} className="flex items-center gap-2">
              <span className="rounded border border-line bg-card px-2 py-1 text-ink">{s}</span>
              {i < p.flow.length - 1 && <ArrowRight size={12} className="text-emerald" />}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section>
      <SectionHeader id="projects" num="02" name="projects" sub="Selected production systems & real-time applications" />
      <div className="space-y-6">
        {projects.map((p, idx) => (
          <ScrollReveal key={p.file} delay={idx * 100}>
            <Window title={p.file}>
              {p.metrics.length ? (
                <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]"><Left p={p} /><Right p={p} /></div>
              ) : <Left p={p} />}
            </Window>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
