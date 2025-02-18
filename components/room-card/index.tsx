import { PrismicDocument } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { Link as TransitionLink } from "next-transition-router";

export default function RoomCard({ room }: { room: PrismicDocument }) {
  return (
    <TransitionLink
      href={`${room.uid}`}
      className="col-span-1 md:even:col-span-3 md:col-span-2 group"
    >
      <div className="rounded-xl overflow-hidden bg-white p-2 h-full">
        <div className="relative">
          <PrismicNextImage
            className="object-cover w-full aspect-video md:h-72 rounded-xl overflow-hidden"
            field={room.data.slices[0].primary.miniatura}
          />
          <div className="absolute w-full h-full inset-0 grid place-content-end justify-start p-2">
            <ul className="flex justify-start gap-2 bg-white px-4 py-3  rounded-full">
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
          </div>
        </div>
        <div className="flex justify-between gap-4 items-start p-4">
          <div>
            <h3 className="text-3xl font-text font-bold mb-2">
              {room.data.slices[0].primary.titulo}
            </h3>

            <p className="text-muted-foreground font-text font-medium text-base  leading-tight text-pretty">
              {room.data.slices[0].primary.descripcion}
            </p>
          </div>
        </div>
      </div>
    </TransitionLink>
  );
}
