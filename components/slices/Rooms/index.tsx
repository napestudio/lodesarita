import { Content, ImageFieldImage } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { cms } from "@/prismicio";
import RoomCard from "@/components/room-card";
import Title from "@/components/title/title";

/**
 * Props for `Rooms`.
 */
export type RoomsProps = SliceComponentProps<Content.RoomsSlice>;

export default async function Rooms({ slice }: RoomsProps) {
  const rooms = (await cms.getAllByType("room"))?.reverse();

  return (
    <section className="py-16 md:pt-0 md:pb-24 min-h-svh grid items-center overflow-hidden bg-green">
      <div className="container">
        <Title text={"Habitaciones"} />

        <div className="space-y-1 md:space-y-32">
          {rooms.map((room) => (
            <RoomCard room={room} key={room.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
