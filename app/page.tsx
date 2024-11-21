import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/components/slices";
import { SITE_DESCRPTION, SITE_NAME } from "@/lib/constants";

import { Link as TransitionLink } from "next-transition-router";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("home");

  return (
    <main className="bg-yellow text-center">
      <TransitionLink
        href="/ejem"
        className="text-green underline underline-offset-4"
      >
        ejem
      </TransitionLink>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("home");

  return {
    title: page.data.meta_title || SITE_NAME,
    description: page.data.meta_description || SITE_DESCRPTION,
    openGraph: {
      title: page.data.meta_title || undefined,
      images: [
        {
          url: page.data.meta_image.url || "",
        },
      ],
    },
  };
}
