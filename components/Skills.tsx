import { Download } from "lucide-react";
import Window from "./Window";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import { skills, links } from "@/lib/data";

export default function Skills() {
  return (
    <section>
      <SectionHeader id="skills" num="03" name="skills_matrix" sub="Capabilities across the backend, real-time, and cloud stack" />
      <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((g, idx) => (
          <ScrollReveal key={g.title} delay={idx * 80}>
            <Window title={`${g.title.toLowerCase().replace(/[^a-z]+/g, "_")}.sh`} className="h-full">
              <h3 className="mb-3 font-mono text-sm text-emerald">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-line bg-bg px-2.5 py-1 font-mono text-xs text-cyan"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Window>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal delay={150}>
        <Window title="download_resume.sh" className="mt-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="cmt">{"// Complete overview of backend internships, concurrency benchmarks, and academic credentials"}</p>
            <a href={links.resume} download className="inline-flex items-center gap-2 rounded bg-emerald px-4 py-2 font-mono text-sm font-semibold text-bg hover:brightness-110"><Download size={14} />./download_pdf</a>
          </div>
        </Window>
      </ScrollReveal>
    </section>
  );
}
