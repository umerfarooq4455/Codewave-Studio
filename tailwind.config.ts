import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FBF8F2",
          100: "#F5EFE6",
          200: "#EFE9DC",
          300: "#E5DFD3",
        },
        ink: {
          900: "#0A0A0A",
          800: "#1A1A1A",
          700: "#2A2A22",
          600: "#3A3A30",
          500: "#6B6B5C",
          400: "#8A8778",
        },
        lime: {
          DEFAULT: "#C4F542",
          400: "#D4F76B",
          500: "#C4F542",
          600: "#A6E020",
          700: "#8BC313",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Instrument Serif'", "Georgia", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
