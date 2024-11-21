import localFont from "next/font/local";

const primaryFont = localFont({
  variable: "--font-primary",
  preload: true,
  display: "swap",
  src: [
    {
      path: "../assets/fonts/Gilton-Bold.woff2",
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
      path: "../assets/fonts/BrandingBold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../assets/fonts/BrandingLight.woff2",
      weight: "400",
      style: "light",
    }
  ],
});

export { primaryFont, secondaryFont };
