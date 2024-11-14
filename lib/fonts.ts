import localFont from "next/font/local";

const primaryFont = localFont({
  variable: "--font-primary",
  preload: true,
  display: "swap",
  src: [
    {
      path: "../assets/fonts/Gilton-Bold.otf",
      weight: "700",
      style: "bold",
    }
  ],
});

const secondaryFont = localFont({
  variable: "--font-secondary",
  preload: true,
  display: "swap",
  src: [
    {
      path: "../assets/fonts/Branding-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../assets/fonts/Branding-Light.otf",
      weight: "400",
      style: "light",
    }
  ],
});

export { primaryFont, secondaryFont };
