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
      muted: "var(--muted)",
      gray: {
        50: "rgb(249, 250, 251)",
        100: "rgb(243, 244, 246)",
        200: "rgb(229, 231, 235)",
        300: "rgb(209, 213, 219)",
        400: "rgb(156, 163, 175)",
        500: "rgb(107, 114, 128)",
        600: "rgb(75, 85, 99)",
        700: "rgb(55, 65, 81)",
        800: "rgb(31, 41, 55)",
        900: "rgb(17, 24, 39)",
        950: "rgb(3, 7, 18)",
      },
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
      transparent: "transparent",
    },
    extend: {
      screens: {
        "3xl": "1680px",
        "4xl": "1920px",
        "5xl": "2560px",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [],
};
export default config;
