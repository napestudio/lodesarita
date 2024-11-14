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
    <section className="bg-bosque min-h-[200dvh] p-10">
      <h1 className="text-4xl text-arena font-extrabold">Paletas</h1>
      <div className="flex gap-4 justify-center">
        <div className="bg-bosque h-20 w-20 rounded-full border-4 border-white"></div>
        <div className="bg-arena h-20 w-20 rounded-full"></div>
        <div className="bg-ocaso h-20 w-20 rounded-full"></div>
        <div className="bg-mar h-20 w-20 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
