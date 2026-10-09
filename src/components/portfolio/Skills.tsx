import { useEffect, useState } from "react";
import Xarrow, { Xwrapper } from "react-xarrows";
import { FaAws } from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiNeon,
  SiGit,
  SiGithub,
  SiDocker,
  SiNginx,
  SiGithubactions,
  SiPrisma,
  SiDrizzle,
} from "react-icons/si";

const columns = [
  {
    title: "FRONTEND & UI",
    nodes: [
      { id: "react", label: "React.js", icon: SiReact, color: "#61DAFB" },
      { id: "tailwind", label: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { id: "framer", label: "Framer Motion", icon: SiFramer, color: "#0055FF" },
    ],
  },
  {
    title: "LANGUAGES",
    nodes: [
      { id: "ts", label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { id: "js", label: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    title: "CORE & BACKEND",
    nodes: [
      { id: "next", label: "Next.js", icon: SiNextdotjs, color: "var(--foreground)" },
      { id: "node", label: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { id: "express", label: "Express.js", icon: SiExpress, color: "var(--foreground)" },
    ],
  },
  {
    title: "ORMs",
    nodes: [
      { id: "prisma", label: "Prisma", icon: SiPrisma, color: "var(--foreground)" },
      { id: "drizzle", label: "Drizzle", icon: SiDrizzle, color: "#C5F74F" },
    ],
  },
  {
    title: "STORAGE & CLOUD",
    nodes: [
      { id: "aws", label: "AWS", icon: FaAws, color: "#FF9900" },
      { id: "mongo", label: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { id: "postgres", label: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { id: "neon", label: "Neon", icon: SiNeon, color: "#00E599" },
    ],
  },
  {
    title: "DEVOPS & TOOLS",
    nodes: [
      { id: "git", label: "Git", icon: SiGit, color: "#F05032" },
      { id: "github", label: "GitHub", icon: SiGithub, color: "var(--foreground)" },
      { id: "docker", label: "Docker", icon: SiDocker, color: "#2496ED" },
      { id: "nginx", label: "Nginx", icon: SiNginx, color: "#009639" },
      { id: "cicd", label: "CI/CD", icon: SiGithubactions, color: "#2088FF" },
    ],
  },
];

const connections = [
  { start: "react", end: "ts" },
  { start: "react", end: "js" },
  { start: "tailwind", end: "ts" },
  { start: "tailwind", end: "js" },
  { start: "framer", end: "ts" },

  { start: "ts", end: "next" },
  { start: "ts", end: "node" },
  { start: "js", end: "node" },

  { start: "next", end: "prisma" },
  { start: "next", end: "drizzle" },

  { start: "node", end: "express" },
  { start: "node", end: "prisma" },

  { start: "prisma", end: "postgres" },
  { start: "drizzle", end: "postgres" },
  { start: "drizzle", end: "aws" },
  { start: "drizzle", end: "neon" },

  { start: "express", end: "mongo" },
  { start: "express", end: "postgres" },
  { start: "docker", end: "aws" },
  { start: "docker", end: "nginx" },
  { start: "github", end: "cicd" },
];

export function Skills() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 200);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      setMounted(false);
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => setMounted(true), 400);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      clearTimeout(timer);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="skills" className="relative px-4 py-6 sm:py-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--brand-cyan)]">
            // tools
          </p>
          <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
            the <span className="text-gradient">Tech Stack</span> I use
          </h2>
        </div>

        <div className="hidden lg:block relative w-full overflow-x-auto pb-2">
          <Xwrapper>
            <div className="flex min-w-[1200px] justify-between px-4">
              {columns.map((col, i) => (
                <div key={col.title} className="flex flex-col items-center">
                  <h3 className="mb-12 text-[11px] font-bold tracking-[0.25em] text-muted-foreground uppercase">
                    {col.title}
                  </h3>

                  <div
                    className={`flex flex-col gap-10 ${i % 2 !== 0 && i !== columns.length - 1 ? "mt-16" : ""}`}
                  >
                    {col.nodes.map((node) => (
                      <div key={node.id} id={node.id} className="relative z-10 w-44">
                        <div className="bento-card skill-node relative flex w-full items-center gap-4 rounded-xl px-5 py-3.5 cursor-default">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center transition-transform duration-300">
                            <node.icon className="h-5 w-5" style={{ color: node.color }} />
                          </div>
                          <span className="text-sm font-semibold text-foreground/90 transition-colors duration-300">
                            {node.label}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {mounted &&
              connections.map((conn, i) => (
                <Xarrow
                  key={i}
                  start={conn.start}
                  end={conn.end}
                  color="var(--border)"
                  strokeWidth={2}
                  path="smooth"
                  startAnchor="right"
                  endAnchor="left"
                  curveness={0.4}
                  dashness={{ strokeLen: 4, nonStrokeLen: 4, animation: -1 }}
                  showHead={false}
                />
              ))}
          </Xwrapper>
        </div>

        <div className="lg:hidden grid gap-6 sm:grid-cols-2">
          {columns.map((col) => (
            <div key={col.title} className="bento-card rounded-3xl p-6">
              <h3 className="mb-4 font-mono text-xs font-bold tracking-[0.1em] text-muted-foreground uppercase">
                {col.title}
              </h3>
              <div className="flex flex-col gap-3">
                {col.nodes.map((node) => (
                  <div
                    key={node.id}
                    className="chip-interactive flex items-center gap-3 rounded-xl border border-border/40 bg-secondary/40 px-4 py-3 cursor-default"
                  >
                    <node.icon className="h-5 w-5" style={{ color: node.color }} />
                    <span className="text-sm font-medium text-foreground">{node.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
