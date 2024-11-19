import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Sparkle } from "lucide";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section className="bg-arena min-h-[100dvh] p-10">
      <div className=" space-y-10">
        <h1 className="text-4xl text-bosque font-extrabold items-center justify-center gap-4 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-sparkle text-bosque"
          >
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
          </svg>{" "}
          Lo de Sarita{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-sparkle text-bosque"
          >
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
          </svg>
        </h1>

        <div className="flex gap-8 items-center">
          <h2 className="text-2xl text-bosque font-text font-bold text-center uppercase">
            Branding Bold
          </h2>
          <p className="text-bosque font-text font-bold">
            ABCDEFGHIJKLMNÑOPQRSTUVWXYZ abcdefghijklmnñopqrstuvwxyz 1234567890
          </p>
        </div>
        <div className="flex gap-8 items-center">
          <h2 className="text-2xl text-bosque font-text text-center uppercase">
            Branding Bold
          </h2>
          <p className="text-bosque font-text">
            ABCDEFGHIJKLMNÑOPQRSTUVWXYZ abcdefghijklmnñopqrstuvwxyz 1234567890
          </p>
        </div>
      </div>
      <div className="flex gap-4 justify-center">
        <div className="bg-bosque h-20 w-20 rounded-full"></div>
        <div className="bg-arena h-20 w-20 rounded-full border-4 border-bosque"></div>
        <div className="bg-ocaso h-20 w-20 rounded-full"></div>
        <div className="bg-mar h-20 w-20 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
