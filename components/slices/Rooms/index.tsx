import { Content, ImageFieldImage } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { cms } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";

import { Link as TransitionLink } from "next-transition-router";

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
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-5xl">Habitaciones</h2>
        {/* Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {rooms.map((room) => (
            <TransitionLink
              href={`${room.uid}`}
              key={room.id}
              className="rounded-xl overflow-hidden border border-muted bg-white"
            >
              <div className="aspect-[4/3]">
                <PrismicNextImage
                  className="object-cover w-full h-full"
                  field={room.data.slices[0].primary.miniatura}
                />
              </div>
              <div className="flex justify-between gap-4 items-start p-4">
                <div>
                  <h3 className="text-2xl font-text font-bold mb-2">
                    {room.data.slices[0].primary.titulo}
                  </h3>
                  <ul className="mb-3 flex justify-start gap-2">
                    {room.data.slices[0].primary.caracteristicas.map(
                      (item: any, i: number) => (
                        <li key={i} className="flex items-center w-4">
                          <PrismicNextImage
                            field={item.icon}
                            width={item.icon.dimensions?.width}
                            height={item.icon.dimensions?.height}
                          />
                        </li>
                      )
                    )}
                  </ul>
                  <p className="text-muted-foreground font-text font-semibold text-sm text-pretty line-clamp-7">
                    {room.data.slices[0].primary.descripcion}
                  </p>
                </div>
                <div className="hidden flex-col items-end">
                  <div className="text-3xl font-text font-bold leading-[1]">
                    $200
                  </div>
                  <div className="text-sm text-muted-foreground font-text font-semibold leading-[1]">
                    por noche
                  </div>
                </div>
              </div>
            </TransitionLink>
          ))}
        </div>
      </div>
    </section>
  );
}
