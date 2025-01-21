import { Content } from "@prismicio/client";
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
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="aspect-[16/9]">
        <PrismicNextImage
          className="h-full w-full object-cover"
          field={slice.primary.miniatura}
          width={slice.primary.miniatura.dimensions?.width}
          height={slice.primary.miniatura.dimensions?.height}
        />
      </div>
      <div className="container py-10">
        <div className="grid md:grid-cols-12 gap-4">
          <div className="md:col-span-8 space-y-4">
            <h2 className="text-4xl text-green">{slice.primary.titulo}</h2>
            <p className="font-text font-normal">
              {slice.primary.descripcion}
            </p>
          </div>
          <div className="md:col-span-4 space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-green text-3xl">Características</h3>
              {slice.primary.caracteristicas.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <PrismicNextImage
                    field={item.icon}
                    width={item.icon.dimensions?.width}
                    height={item.icon.dimensions?.height}
                  />
                  <h3 className="font-text text-2xl font-semibold">
                    {item.caracteristica}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-10">
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
