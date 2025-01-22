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
        <div className="w-32">
          <PrismicNextImage
            field={slice.primary.logo}
            className="h-full w-full"
          />
        </div>
        <div className="font-text text-yellow font-semibold">
          <h3 className="text-2xl ">Contacto</h3>
          <p className="">Tel.: 2262324027</p>
          <p className="">Mail: lodesaritahosteria@gmail.com</p>
          <p className="">Dir.: Calle 81 #261 (entre 4 y 6), Necochea, Costa Atlántica.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
