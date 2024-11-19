import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],  
  theme: {
    extend: {
      screens: {
        "3xl": "1680px",
        "4xl": "1920px",
        "5xl": "2560px",
      },
      fontFamily: {
        sans: ["var(--font-primary)", ...defaultTheme.fontFamily.sans],
        text: ["var(--font-secondary)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        verde: {
          DEFAULT: "var(--verde)",
          dark: "var(--verde-dark)",
          light: "var(--verde-light)",
        },
        amarillo: {
          DEFAULT: "var(--amarillo)",
          dark: "var(--amarillo-dark)",
          light: "var(--amarillo-light)",
        },
        naranja: {
          DEFAULT: "var(--naranja)",
          dark: "var(--naranja-dark)",
          light: "var(--naranja-light)",
        },
        celeste: {
          DEFAULT: "var(--celeste)",
          dark: "var(--celeste-dark)",
          light: "var(--celeste-light)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
