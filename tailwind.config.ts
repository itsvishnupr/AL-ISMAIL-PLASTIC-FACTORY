import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        industrial: {
          red: "#9B1C1C",
          charcoal: "#1B1B1B",
          orange: "#D66A22",
          steel: "#76808E",
          silver: "#D7D1C8",
          graphite: "#101114"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "Sora", "Poppins", "system-ui", "sans-serif"]
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0, 0, 0, 0.18)",
        redglow: "0 18px 60px rgba(155, 28, 28, 0.32)"
      },
      backgroundImage: {
        "steel-grid":
          "linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
