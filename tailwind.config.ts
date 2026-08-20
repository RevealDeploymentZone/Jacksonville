import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B5563",
          50: "#e6f4f6",
          100: "#b3dde3",
          200: "#80c6d0",
          300: "#4dafbd",
          400: "#2698aa",
          500: "#0B5563",
          600: "#094a57",
          700: "#073e49",
          800: "#05313b",
          900: "#03252d",
        },
        accent: {
          DEFAULT: "#F26522",
          light: "#f5864a",
          dark: "#d4571d",
        },
        neutral: {
          text: "#0F172A",
          body: "#475569",
          bg: "#F8FAFC",
        },
        success: "#16A34A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        base: ["17px", { lineHeight: "1.65" }],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
