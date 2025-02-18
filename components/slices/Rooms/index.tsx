import { Content, ImageFieldImage } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { cms } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";

import { Link as TransitionLink } from "next-transition-router";
import RoomCard from "@/components/room-card";

/**
 * Props for `Rooms`.
 */
export type RoomsProps = SliceComponentProps<Content.RoomsSlice>;

/**
 * Component for "Rooms" Slices.
 */
export default async function Rooms({ slice }: RoomsProps) {
  const rooms = (await cms.getAllByType("room"))?.reverse();

  return (
    <section className="py-16 md:py-24 bg-green min-h-svh grid items-center overflow-hidden">
      {/* <div className="bg-yellow rounded-3xl py-20 h-full flex items-center flex-col"> */}
      <div className="container">
        <h2 className="text-5xl md:text-[10rem] z-20 relative text-yellow mb-0 leading-none">
          Habitaciones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          {rooms.map((room) => (
            <RoomCard room={room} key={room.id} />
          ))}
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
