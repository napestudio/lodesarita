import { cms, createClient } from "@/prismicio";
import { components } from "@/components/slices";
import { SliceZone } from "@prismicio/react";

export default async function Home() {
  const home = await cms.getSingle("home");
  return <SliceZone slices={home.data.slices} components={components} />;
}

// TODO: agregar metadata (ver el script que usamos en paranaextremo)
