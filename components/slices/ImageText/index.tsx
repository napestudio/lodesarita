import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ImageText`.
 */
export type ImageTextProps = SliceComponentProps<Content.ImageTextSlice>;

/**
 * Component for "ImageText" Slices.
 */
const ImageText = ({ slice }: ImageTextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container">
        <div className="py-20 grid md:grid-cols-2 gap-5">
          <div className="flex flex-col items-start justify-center gap-5">
            <h2 className="text-2xl">{slice.primary.title}</h2>
            <p className="font-text font-semibold text-balance">
              {slice.primary.description}
            </p>
          </div>
          <div className="">
            <PrismicNextImage
              className="h-full w-full object-cover rounded-xl"
              field={slice.primary.image}
              height={slice.primary.image.dimensions?.height}
              width={slice.primary.image.dimensions?.width}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageText;
