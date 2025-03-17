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
    <section className="py-16 md:py-24 bg-green">
      <div className="container">
        <div className="md:py-20 grid md:grid-cols-2 gap-5">
          <div className="flex flex-col items-start justify-center gap-5">
              <PrismicNextImage
                field={slice.primary.logo}
                width={slice.primary.logo.dimensions?.width}
                height={slice.primary.logo.dimensions?.height}
                className="w-60 mx-auto"
              />
            <p className="mb-4 md:mb-0 font-text text-xl font-medium text-justify sm:text-left text-balance text-white leading-6">
              {slice.primary.description}
            </p>
          </div>
          <div>
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
