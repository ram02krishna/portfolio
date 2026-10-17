import { ReactNode } from "react";

export default function Window({ title, right, children, className = "", noHoverGlow = false }: {
  title: string; right?: ReactNode; children: ReactNode; className?: string; noHoverGlow?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-line bg-card shadow-[0_18px_45px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.04)] transition-all duration-200 ${
        noHoverGlow ? "" : "hover:border-emerald/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.75),0_0_24px_-6px_rgba(16,185,129,0.3)]"
      } ${className}`}
    >
      <div className="relative flex items-center justify-between border-b border-line bg-bar px-3.5 py-2.5 sm:px-4">
        {/* macOS Traffic Lights */}
        <div className="flex items-center gap-2 z-10">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/60 shadow-inner" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/60 shadow-inner" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f] border border-[#1aab29]/60 shadow-inner" />
        </div>

        {/* Centered macOS Window Title */}
        <div className="absolute inset-x-16 text-center truncate font-mono text-xs text-muted/90 select-none">
          {title}
        </div>

        {/* Right-aligned content */}
        <div className="ml-auto flex items-center z-10">
          {right}
        </div>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}
