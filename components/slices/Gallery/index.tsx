"use client";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip, ScrollTrigger);

/**
 * Props for `Gallery`.
 */
export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

/**
 * Initial positions for GSAP animations.
 */
const initialPositions = [
  { y: -800, x: -1250 },
  { y: -800 },
  { y: -800, x: 1200 },
  { x: -1200 },
  { y: 0 },
  { x: 1200 },
  { y: 800, x: -1200 },
  { y: 800 },
  { y: 800, x: 1250 },
].map((pos) => ({ ...pos, scale: 4, zIndex: 90 }));

/**
 * Component for "Gallery" Slices.
 */
const Gallery = ({ slice }: GalleryProps): JSX.Element => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded || !heroRef.current) return;
  
    const ctx = gsap.context(() => {
      const elements = Array.from(document.querySelectorAll("[data-image-big]"));
      elements.forEach((el, index) => gsap.set(el, initialPositions[index]));
  
      const tl = gsap.timeline({ paused: true }).to(elements, {
        y: 0,
        x: 0,
        scale: 1,
        ease: "power1.inOut",
      });
  
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top+=50px top",
        end: "bottom+=50px center",
        animation: tl,
        scrub: true,
        pin: true,
        markers: true,
      });
    }, heroRef);
  
    return () => ctx.revert();
  }, [loaded]);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={heroRef} className="bg-black py-16 md:py-26 overflow-hidden">
      <div className="container">
        <div className="text-5xl text-white">
          <PrismicRichText field={slice.primary.title} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {slice.primary.imagenes.map((image, index) => (
            <div key={index} className="relative" data-image-big={index}>
              <div className="aspect-video">
                <PrismicNextImage
                  field={image.imagen}
                  className="h-full w-full object-cover rounded-xl"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
