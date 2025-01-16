import { Content } from "@prismicio/client";
import Image from "next/image";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Room`.
 */
export type RoomProps = SliceComponentProps<Content.RoomSlice>;

/**
 * Component for "Room" Slices.
 */
const Room = ({ slice }: RoomProps): JSX.Element => {
  //console.log("🚀 ~ slice:", slice.primary.caracteristicas)
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage
        field={slice.primary.miniatura}
        width={slice.primary.miniatura.dimensions?.width}
        height={slice.primary.miniatura.dimensions?.height}
      />
      <div className="container py-10">
        <h2 className="text-4xl">{slice.primary.titulo}</h2>
        <p>{slice.primary.descripcion}</p>
        <div>
          {slice.primary.caracteristicas.map((item, index) => (
            <div key={index}>
              <h3>{item.caracteristica}</h3>
              <p></p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 ">
          {slice.primary.fotos.map((item, index) => (
            <div key={index} className="">
              <PrismicNextImage
                field={item.foto}
                height={item.foto.dimensions?.height}
                width={item.foto.dimensions?.height}
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Room;
