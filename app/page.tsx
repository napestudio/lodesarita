
import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/components/slices";
import { SITE_DESCRPTION, SITE_NAME } from "@/lib/constants";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("home");
  
  return (
    <main>
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
      images: [{ url: page.data.meta_image.url || "" }],
    },
  };
}
