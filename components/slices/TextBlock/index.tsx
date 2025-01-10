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
      <div className="p-10 overflow-hidden text-balance">
        <h2>{slice.primary.title}</h2>
        <PrismicRichText field={slice.primary.description} />
        <PrismicNextImage
          field={slice.primary.image}
          height={slice.primary.image.dimensions?.height}
          width={slice.primary.image.dimensions?.width}
        />
      </div>
    </section>
  );
};

export default TextBlock;
