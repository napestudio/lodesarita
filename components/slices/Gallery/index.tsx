"use client";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { cn } from "@/lib/utils";

export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

/**
 * Initial positions for GSAP animations.
 */
const initialStyles = [
  "md:col-start-5 col-span-6 md:col-span-4 row-start-1 md:row-span-5 row-span-3",
  "col-start-7 col-end-13 md:col-start-2 md:col-end-5 md:col-span-2 row-start-5 row-end-9 md:row-start-1 md:row-end-3 md:pl-4 md:pt-4",
  "col-start-7 col-end-13 md:col-start-9 md:col-end-12 col-span-3 row-start-1 md:row-start-1 md:pt-4 row-span-3",
  "col-start-1 col-end-7 md:col-start-9 md:col-span-3 row-start-5 row-end-9 md:row-end-5 md:row-start-4",
  "col-start-7 col-end-13 row-start-4 md:row-start-3 md:col-end-5 md:col-start-2 col-span-3 md:col-span-5",
  "col-start-1 md:col-start-3 col-end-7 md:col-span-2",
  "col-start-1 col-end-7 row-span-4 md:col-end-4 md:col-start-2 md:col-span-3",
];

const Gallery = ({ slice }: GalleryProps): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(gridRef.current, { scale: 1, gap: "1rem" });

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.set(gridRef.current, { scale: 4, gap: "5rem" });

        const tl = gsap.timeline({ paused: true }).to(gridRef.current, {
          scale: 0.9,
          gap: "1.5rem",
          xPercent: 0,
        });

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "center end",
          animation: tl,
          pin: true,
          scrub: true,
          markers: false,
        });
      });
    }, [gridRef.current]);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="py-16 md:py-0 px-5 md:px-0 overflow-hidden"
      ref={sectionRef}
    >
      <div ref={gridRef} className="grid grid-cols-12">
        {slice.primary.imagenes.slice(0, 6).map((image, index) => (
          <div key={index} className={cn("relative", initialStyles[index])}>
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
