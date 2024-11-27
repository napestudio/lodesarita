import { Content } from "@prismicio/client";
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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="h-dvh bg-black"
    >
      <h2>
        {slice.primary.title ? (
          <PrismicRichText field={slice.primary.title} />
        ) : (
          "Galeria"
        )}
      </h2>
    </section>
  );
};

export default Gallery;
