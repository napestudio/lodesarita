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
    <section className="py-16 md:py-24 min-h-svh grid items-center overflow-hidden">
      {/* <div className="bg-yellow rounded-3xl py-20 h-full flex items-center flex-col"> */}
      <div className="container">
        <h2 className="text-5xl md:text-9xl text-green mb-10 leading-none">
          Habitaciones
        </h2>
        <div className="space-y-20">
          {rooms.map((room) => (
            <RoomCard room={room} key={room.id} />
          ))}
        </div>
        {/* <div className="space-y-20">
          {rooms.map((room) => (
            <div key={room.id} className="group">
              <div className="grid gap-10 items-end md:grid-cols-2">
                <div className="group-even:order-2 group-even:pt-0 group-even:pb-8 pt-8">
                  <PrismicNextImage
                    className="object-cover shadow-md w-[30rem] md:h-[65vh] rounded-xl"
                    field={room.data.slices[0].primary.miniatura}
                  />
                </div>
                <div className="h-full flex flex-col justify-between group-even:flex-col-reverse group-even:order-1">
                  <PrismicNextImage
                    className="object-cover shadow-md aspect-square md:w-3/4 mx-auto rounded-xl"
                    field={room.data.slices[0].primary.miniatura}
                  />
                  <div className="pb-10 group-even:pt-10">
                    <h3 className="text-7xl font-text font-bold text-yellow mb-2 flex gap-5 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                        <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                        <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                      </svg>{" "}
                      {room.data.slices[0].primary.titulo}
                    </h3>
                    <p className="font-text text-gray-900 leading-tight text-pretty">
                      {room.data.slices[0].primary.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
      {/* </div> */}
    </section>
  );
}
