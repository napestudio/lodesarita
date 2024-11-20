import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section className="bg-yellow min-h-[100dvh] p-10">
      <div className=" space-y-10">
        <h1 className="text-4xl text-green font-extrabold items-center justify-center gap-4 flex">
          Lo de Sarita
        </h1>

        <div className="flex gap-8 items-center">
          <h2 className="text-2xl text-verde font-text font-bold text-center uppercase">
            Branding Bold
          </h2>
          <p className="text-verde font-text font-bold">
            ABCDEFGHIJKLMNÑOPQRSTUVWXYZ abcdefghijklmnñopqrstuvwxyz 1234567890
          </p>
        </div>
        <div className="flex gap-8 items-center">
          <h2 className="text-2xl text-green font-text text-center uppercase">
            Branding Bold
          </h2>
          <p className="text-green font-text">
            ABCDEFGHIJKLMNÑOPQRSTUVWXYZ abcdefghijklmnñopqrstuvwxyz 1234567890
          </p>
        </div>
      </div>
      <div className="flex gap-4 justify-center">
        <div className="bg-green h-20 w-20 rounded-full"></div>
        <div className="bg-yellow h-20 w-20 rounded-full border-4 border-green"></div>
        <div className="bg-orange h-20 w-20 rounded-full"></div>
        <div className="bg-bluelight h-20 w-20 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;