import { useEffect, useState } from "react";
import { Github, ArrowUpRight } from "lucide-react";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import { GitHubCalendar } from "react-github-calendar";
import { format } from "date-fns";

const getTooltipText = (activity: { count: number; date: string }) => {
  const count = activity.count;
  const dateText = format(new Date(activity.date), "MMMM do");
  if (count === 0) return `No contributions on ${dateText}.`;
  return `${count} contribution${count === 1 ? "" : "s"} on ${dateText}.`;
};

const platforms = [
  {
    name: "Codeforces",
    handle: "krishnarammhd",
    rating: "1201",
    badge: "Pupil",
    icon: SiCodeforces,
    href: "https://codeforces.com/profile/krishnarammhd",
    color: "#1F8ACB",
    tagline: "Algorithms & speed contests",
  },
  {
    name: "LeetCode",
    handle: "ram_02_Krishna",
    rating: "1725",
    badge: "Top ~15%",
    icon: SiLeetcode,
    href: "https://leetcode.com/u/ram_02_Krishna/",
    color: "#FFA116",
    tagline: "500+ DSA problems solved",
  },
  {
    name: "GitHub",
    handle: "ram02krishna",
    rating: "Active",
    badge: "OSS & Projects",
    icon: Github,
    href: "https://github.com/ram02krishna",
    color: "var(--brand-cyan)",
    tagline: "Backend & DevOps repositories",
  },
];

export function CodingPlatforms() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("light") ? "light" : "dark";
    }
    return "dark";
  });
  const [selectedYear, setSelectedYear] = useState<number | "last">("last");

  useEffect(() => {
    const isLight = document.documentElement.classList.contains("light");
    setTheme(isLight ? "light" : "dark");

    const observer = new MutationObserver(() => {
      const isLight = document.documentElement.classList.contains("light");
      setTheme(isLight ? "light" : "dark");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="platforms" className="relative px-4 py-6 sm:py-8">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--brand-cyan)]">
            // competitive
          </p>
          <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
            Coding <span className="text-gradient">Platforms.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-muted-foreground">
            Where I sharpen problem-solving skills, optimize algorithmic time complexities, and
            build daily consistency.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal bento-card group relative flex flex-col justify-between rounded-3xl p-6"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/60 bg-secondary/50 transition-colors duration-200 group-hover:border-[color:var(--brand-cyan)]/40 group-hover:bg-secondary"
                    style={{ color: p.color }}
                  >
                    <p.icon className="h-5 w-5" />
                  </div>
                  <span
                    className="rounded-full border border-border/60 bg-secondary/50 px-3 py-1 font-mono text-xs font-semibold"
                    style={{ color: p.color }}
                  >
                    {p.badge}
                  </span>
                </div>

                <div className="mt-5">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-xl font-bold text-foreground">{p.name}</h3>
                    <span className="font-mono text-lg font-bold" style={{ color: p.color }}>
                      {p.rating}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{p.tagline}</p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border/40 pt-4 text-xs font-medium text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
                <span className="font-mono text-[11px]">@{p.handle}</span>
                <span className="flex items-center gap-1">
                  View Profile
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="reveal mt-8 flex flex-col items-center">
          <div className="bento-card custom-scrollbar w-full rounded-3xl p-5 sm:p-7 md:p-8">
            <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  GitHub Contributions
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Public commit activity &amp; consistency graph
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 rounded-2xl border border-border/50 bg-secondary/30 p-1.5">
                {(["last", 2026, 2025, 2024] as const).map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`rounded-xl px-3.5 py-1.5 text-xs font-medium transition-colors duration-200 ${
                      selectedYear === year
                        ? "bg-[color:var(--brand-cyan)] text-background font-semibold shadow-sm"
                        : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                    }`}
                  >
                    {year === "last" ? "Last Year" : year}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex w-full justify-center overflow-x-auto pb-1">
              <GitHubCalendar
                username="ram02krishna"
                colorScheme={theme}
                theme={{
                  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                }}
                year={selectedYear}
                fontSize={12}
                blockSize={12.5}
                blockMargin={3.5}
                tooltips={{
                  activity: {
                    text: (activity) => getTooltipText(activity),
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
