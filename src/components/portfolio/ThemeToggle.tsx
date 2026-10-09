import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [light, setLight] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "light";
      return document.documentElement.classList.contains("light");
    }
    return false;
  });

  useEffect(() => {
    const isLight = document.documentElement.classList.contains("light");
    setLight(isLight);
  }, []);

  const toggle = (event: React.MouseEvent) => {
    const next = !light;

    if (!document.startViewTransition) {
      applyTheme(next);
      return;
    }

    const transition = document.startViewTransition(() => {
      applyTheme(next);
    });

    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`],
        },
        {
          duration: 400,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  };

  const applyTheme = (isLight: boolean) => {
    setLight(isLight);
    document.documentElement.classList.toggle("light", isLight);
    document.documentElement.classList.toggle("dark", !isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="glass inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-border/70 text-foreground transition-all duration-200 hover:opacity-85"
    >
      <div className="relative flex h-5 w-5 items-center justify-center">
        <Sun
          className={`h-4.5 w-4.5 sm:h-5 sm:w-5 transition-all duration-300 ${
            light ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0 absolute"
          }`}
        />
        <Moon
          className={`h-4.5 w-4.5 sm:h-5 sm:w-5 transition-all duration-300 ${
            light ? "-rotate-90 scale-0 opacity-0 absolute" : "rotate-0 scale-100 opacity-100"
          }`}
        />
      </div>
    </button>
  );
}
