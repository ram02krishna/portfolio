import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const isDark = () => !document.documentElement.classList.contains("light");

    type P = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      hue: number;
      phase: number;
      speed: number;
    };
    let particles: P[] = [];

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(50, Math.floor((w * h) / 28000));
      particles = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.6 + 0.5,
        hue: i % 2 === 0 ? 200 : 305,
        phase: Math.random() * Math.PI * 2,
        speed: 0.4 + Math.random() * 0.4,
      }));
    };

    const LINK_DIST = 130;
    const LINK_DIST_SQ = LINK_DIST * LINK_DIST;

    let tick = 0;

    const draw = () => {
      tick += 0.008;
      ctx.clearRect(0, 0, w, h);

      const dark = isDark();

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        const currentHue = p.hue + Math.sin(tick * p.speed + p.phase) * 20;
        const baseOpacity = dark
          ? 0.35 + 0.3 * Math.sin(tick * p.speed + p.phase)
          : 0.1 + 0.08 * Math.sin(tick * p.speed + p.phase);

        const saturation = dark ? "80%" : "40%";
        const lightness = dark ? "75%" : "55%";

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${currentHue}, ${saturation}, ${lightness}, ${baseOpacity})`;
        ctx.fill();
      }

      ctx.lineWidth = dark ? 0.7 : 0.4;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST_SQ) {
            const dist = Math.sqrt(d2);
            const proximity = 1 - dist / LINK_DIST;
            const lineOpacity = dark ? proximity * 0.18 : proximity * 0.05;
            const blendHue = (a.hue + b.hue) / 2;
            ctx.beginPath();
            ctx.strokeStyle = dark
              ? `hsla(${blendHue}, 80%, 70%, ${lineOpacity})`
              : `hsla(230, 40%, 40%, ${lineOpacity})`;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 250);
    };
    window.addEventListener("resize", onResize, { passive: true });

    const onVis = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(draw);
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      {/* Ambient colour orbs — dark mode only (CSS hides in .light) */}
      <div className="ambient-glow-cyan" />
      <div className="ambient-glow-violet" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ willChange: "contents" }}
      />
    </div>
  );
}
