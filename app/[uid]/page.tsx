import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { cms } from "@/prismicio";
import { components } from "@/components/slices";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const room = await cms.getByUID("room", uid);
  
  return (
    <div>
      <SliceZone slices={room.data.slices} components={components} />
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const page = await cms.getByUID("room", uid);

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const pages = await cms.getAllByType("room");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
