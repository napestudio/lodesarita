"use client";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/maps"), { ssr: false });

export default function MapComponent() {
  const locations = [{ lng: -58.72858, lat: -38.58116 }];

  return <Map center={{ lng: -58.72858, lat: -38.58116 }} locations={locations} />;
}