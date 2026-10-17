import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#121214",
        card: "#1e1e1e",
        line: "#38383a",
        bar: "#28282c",
        emerald: "#10b981",
        cyan: "#06b6d4",
        muted: "#98989d",
        ink: "#f5f5f7",
      },
      fontFamily: { mono: ["var(--font-mono)", "monospace"], sans: ["var(--font-sans)", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
