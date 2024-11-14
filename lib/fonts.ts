import localFont from "next/font/local";

const primaryFont = localFont({
  variable: "--font-primary",
  preload: true,
  display: "swap",
  src: [
    {
      path: "../assets/fonts/HelveticaLTStd-Light.woff2",
      weight: "100",
      style: "normal",
    }
  ],
});

const secondaryFont = localFont({
  variable: "--font-secondary",
  preload: true,
  display: "swap",
  src: [
    {
      path: "../assets/fonts/DidotRegular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export { primaryFont, secondaryFont };
