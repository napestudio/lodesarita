import "@/app/globals.css";
import { Client } from "@/components/client";
import {
  ENABLE_PRISMIC_PREVIEW,
  GOOGLE_ANALYTICS_ID,
  IS_PROD,
  SITE_DESCRPTION,
  SITE_LANG,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";
import { primaryFont, secondaryFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { repositoryName } from "@/prismicio";
//import { GoogleAnalytics } from "@next/third-parties/google";
import { PrismicPreview } from "@prismicio/next";
import type { Metadata } from "next";
import { Providers } from "./providers";
import NavBar from "@/components/navbar/navbar";
import Modal from "@/components/modal";

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_NAME}`,
    default: SITE_NAME,
  },
  description: SITE_DESCRPTION,
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/favicon.ico",
    apple: [
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon-57x57.png",
        sizes: "57x57",
      },
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon-114x114.png",
        sizes: "114x114",
      },
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon-72x72.png",
        sizes: "72x72",
      },
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon-144x144.png",
        sizes: "144x144",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang={SITE_LANG}
      className={cn([primaryFont.variable, secondaryFont.variable])}
    >
      <body className="bg-green">
        <Client />
        <Modal />
        {/* <NavBar /> */}
        {children}
        {(IS_PROD || ENABLE_PRISMIC_PREVIEW) && (
          <PrismicPreview repositoryName={repositoryName} />
        )}
        {/*IS_PROD && GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
        )*/}
      </body>
    </html>
  );
}
