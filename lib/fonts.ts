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
    },
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
      path: "../assets/fonts/BrandingSemibold.woff2",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../assets/fonts/BrandingMedium.woff2",
      weight: "400",
      style: "medium",
    },
    {
      path: "../assets/fonts/BrandingLight.woff2",
      weight: "200",
      style: "light",
    },
  ],
});

export { primaryFont, secondaryFont };
