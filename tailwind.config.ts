import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  theme: {
    fontFamily: {
      sans: ["var(--font-primary)", ...defaultTheme.fontFamily.sans],
      text: ["var(--font-secondary)", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      white: "var(--white)",
      black: "var(--black)",
      green: {
        DEFAULT: "var(--green)",
        dark: "var(--green-dark)",
        light: "var(--green-light)",
      },
      yellow: {
        DEFAULT: "var(--yellow)",
        dark: "var(--yellow-dark)",
        light: "var(--yellow-light)",
      },
      orange: {
        DEFAULT: "var(--orange)",
        dark: "var(--orange-dark)",
        light: "var(--orange-light)",
      },
      bluelight: {
        DEFAULT: "var(--bluelight)",
        dark: "var(--bluelight-dark)",
        light: "var(--bluelight-light)",
      },
    },
    extend: {
      screens: {
        "3xl": "1680px",
        "4xl": "1920px",
        "5xl": "2560px",
      },
    },
  },
  plugins: [],
};
export default config;
