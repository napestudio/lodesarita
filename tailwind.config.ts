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
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        primary: {
          DEFAULT: "var(--primary)",
          dark: "var(--primary-dark)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          dark: "var(--secondary-dark)",
          foreground: "var(--secondary-foreground)",
        },
        bosque: {
          DEFAULT: "var(--bosque-normal)",
          dark: "var(--parana-purple-dark)",
          light: "var(--parana-purple-light)",
        },
        arena: {
          DEFAULT: "var(--arena-normal)",
          dark: "var(--parana-green-dark)",
          light: "var(--parana-green-light)",
        },
        ocaso: {
          DEFAULT: "var(--ocaso-normal)",
          dark: "var(--parana-orange-dark)",
          light: "var(--parana-orange-light)",
        },
        mar: {
          DEFAULT: "var(--mar-normal)",
          dark: "var(--parana-yellow-dark)",
          light: "var(--parana-yellow-light)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
