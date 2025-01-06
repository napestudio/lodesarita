"use client";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Gallery`.
 */
export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

/**
 * Component for "Gallery" Slices.
 */
const Gallery = ({ slice }: GalleryProps): JSX.Element => {
  return (
    <section className="bg-black py-16 md:py-26">
      <div className="container">
        <div className="text-5xl text-white">
          <PrismicRichText field={slice.primary.title} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {slice.primary.imagenes.map((image, index) => (
            <div key={index} className="relative">
              <div className="md:h-64 2xl:h-80">
                <PrismicNextImage
                  field={image.imagen}
                  className="h-full w-full object-cover rounded-xl"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
