"use client";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { cn } from "@/lib/utils";

export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

/**
 * Initial positions for GSAP animations.
 */
const initialStyles = [
  "col-start-5 col-span-4 row-start-1 row-span-5",
  "col-start-9 col-span-2 row-start-2",
  "col-start-9 col-span-3 row-start-1 pt-4",
  "col-start-9 col-span-3 row-start-3 pb-16",
  "col-start-2 col-span-3 pt-16",
  "col-start-3 col-span-2",
  "col-start-2 col-span-3 pb-8",
];

const Gallery = ({ slice }: GalleryProps): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(gridRef.current, { scale: 4, gap: "75px" });
      const tl = gsap.timeline({ paused: true }).to(gridRef.current, {
        scale: 1,
        gap: "25px",
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center center",
        end: "center end",
        animation: tl,
        pin: true,
        scrub: true,
        markers: false,
      });
    }, [gridRef.current]);

    return () => ctx.revert();
  }, []);
  return (
    <section className="py-16 md:pt-32 overflow-hidden" ref={sectionRef}>
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 md:grid-row-6 lg:grid-cols-12 mx-auto"
      >
        {slice.primary.imagenes.slice(0, 7).map((image, index) => (
          <div
            key={index}
            className={cn("relative", initialStyles[index])}
            data-image-big={index}
          >
            <PrismicNextImage
              field={image.imagen}
              className="w-full h-full object-cover rounded-xl"
              width={image.imagen.dimensions?.width}
              height={image.imagen.dimensions?.height}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
