import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#D3C7AD",
          "bg-light": "#DDD4BE",
          "bg-dark": "#C5B89C",
          primary: "#754437",
          "primary-dark": "#5E3429",
          "primary-light": "#8A5244",
          secondary: "#686751",
          "secondary-light": "#7D7C64",
          accent: "#28374A",
          "accent-light": "#374D65",
          surface: "#E8E0CE",
          "surface-dark": "#C0B498",
          text: "#1C1A18",
          "text-muted": "#5A5245",
        },
      },
      fontFamily: {
        persian: ["Vazirmatn", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 20px rgba(40, 55, 74, 0.08)",
        card: "0 4px 30px rgba(40, 55, 74, 0.10)",
        "card-hover": "0 8px 40px rgba(40, 55, 74, 0.16)",
        primary: "0 4px 20px rgba(117, 68, 55, 0.25)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
