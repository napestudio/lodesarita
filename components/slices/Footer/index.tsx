import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Footer`.
 */
export type FooterProps = SliceComponentProps<Content.FooterSlice>;

/**
 * Component for "Footer" Slices.
 */
const Footer = ({ slice }: FooterProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex gap-4 justify-center items-center p-4 bg-green">
        <div className="w-20">
          <PrismicNextImage
            field={slice.primary.logo}
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
