"use client";
import React from "react";
import dynamic from "next/dynamic";

const Map = dynamic(
  () => import("@/components/maps").then((component) => component.Map),
  { ssr: false }
);

export default function MapComponent() {
  const locations = [
    {
      id: "550e8400-e29b-41d4-a716-446655440000",
      lng: -58.72845526984698,
      lat: -38.5811825920464,
    },
  ];
  
  return (
    <Map center={{ lng: -58.72858, lat: -38.58116 }} locations={locations} />
  );
}
