import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TextBlock`.
 */
export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

/**
 * Component for "TextBlock" Slices.
 */
const TextBlock = ({ slice }: TextBlockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="py-20 px-10 flex gap-4">
        <div className="w-1/2 flex flex-col items-start justify-center">
          <h2 className="text-2xl">{slice.primary.title}</h2>
          <p className="font-text font-semibold">{slice.primary.description}</p>
        </div>
        <div className="w-1/2">
          <PrismicNextImage
            className="h-full w-full object-cover rounded-xl"
            field={slice.primary.image}
            height={slice.primary.image.dimensions?.height}
            width={slice.primary.image.dimensions?.width}
          />
        </div>
      </div>
    </section>
  );
};

export default TextBlock;
