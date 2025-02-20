"use client";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Props for `Gallery`.
 */
export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

/**
 * Initial positions for GSAP animations.
 */
const initialPos = { scale: 6, y: -500, gap: 80 };

/**
 * Initial positions for GSAP animations.
 */
const initialStyles = [
  "col-start-1 col-span-4 aspect-[9/16]",
  "col-span-5 aspect-video mt-[3rem]",
  "col-span-3 aspect-square mt-[3rem]",
  "col-start-2 col-span-3 aspect-video",
  "col-start-5 col-span-4 z-50 aspect-square -mt-[16rem]",
  "col-start-9 col-span-4 aspect-video -mt-[16rem]",
  "col-start-9 col-span-3 aspect-square -mt-[13.5rem]",
];

/**
 * Component for "Gallery" Slices.
 */
const Gallery = ({ slice }: GalleryProps): JSX.Element => {
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   if (!loaded || !heroRef.current) return;

  //   const ctx = gsap.context(() => {
  //     gsap.set(gridRef.current, initialPos);
  //     const tl = gsap.timeline({ paused: true }).to(gridRef.current, {
  //       y: 0,
  //       x: 0,
  //       scale: 1,
  //       ease: "power1.inOut",
  //       gap: 20,
  //       stagger: 0.1,
  //     });

  //     ScrollTrigger.create({
  //       trigger: heroRef.current,
  //       start: "top top",
  //       end: "bottom+=500px bottom-=50px",
  //       animation: tl,
  //       scrub: true,
  //       pin: true,
  //       markers: true,
  //     });
  //   }, heroRef);

  //   return () => ctx.revert();
  // }, [loaded]);

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoaded(true), 1500);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <section ref={heroRef} className="bg-black py-16 md:py-26 overflow-hidden">
      <div className="container">
        <div className="text-5xl text-white hidden">
          <PrismicRichText field={slice.primary.title} />
        </div>
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mt-8 square-[5.6]"
        >
          {slice.primary.imagenes.slice(0, 7).map((image, index) => (
            <div
              key={index}
              className={`relative ${initialStyles[index]}`}
              data-image-big={index}
            >
              <PrismicNextImage
                field={image.imagen}
                className="h-full w-full object-cover rounded-xl"
                width={image.imagen.dimensions?.width}
                height={image.imagen.dimensions?.height}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
