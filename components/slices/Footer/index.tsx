import PreFooter from "@/components/prefooter";
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
    <section className="pb-20">
      <PreFooter />

      <div className="flex flex-col gap-8 justify-between items-center">
        <div className="font-text text-yellow font-semibold text-center">
          <p className="">Tel.: 2262324027</p>
          <p className="">Mail: lodesaritahosteria@gmail.com</p>
          <p className="">
            Calle 81 #261 (entre 4 y 6), Necochea, Costa Atlántica.
          </p>
        </div>
        <div className="w-44">
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
