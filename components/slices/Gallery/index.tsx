"use client";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

/**
 * Props for `Gallery`.
 */
export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

/**
 * Component for "Gallery" Slices.
 */
const Gallery = ({ slice }: GalleryProps): JSX.Element => {
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const video2WrapperRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) return;
    const ctx = gsap.context(() => {
      const state = Flip.getState(heroRef.current);
      const videoState = Flip.getState(videoWrapperRef.current);
      const videoSmallState = Flip.getState(video2WrapperRef.current);
      const textRefState = Flip.getState(textRef.current);

      gsap.set('[data-image-big="0"]', {
        y: -800,
        x: -1250,
        scale: 4,
        zIndex: 90,
      });
      gsap.set('[data-image-big="1"]', { y: -800, scale: 4, zIndex: 90 });
      gsap.set('[data-image-big="2"]', {
        y: -800,
        x: 1200,
        scale: 4,
        zIndex: 90,
      });
      gsap.set('[data-image-big="3"]', { x: -1200, scale: 4, zIndex: 90 });
      gsap.set('[data-image-big="4"]', { y: 0, scale: 4, zIndex: 90 });
      gsap.set('[data-image-big="5"]', { x: 1200, scale: 4, zIndex: 90 });
      gsap.set('[data-image-big="6"]', {
        y: 800,
        x: -1200,
        scale: 4,
        zIndex: 90,
      });
      gsap.set('[data-image-big="7"]', { y: 800, scale: 4, zIndex: 90 });
      gsap.set('[data-image-big="8"]', {
        y: 800,
        x: 1250,
        scale: 4,
        zIndex: 90,
      });

      const tl = gsap
        .timeline({ paused: true })
        .to(
          [
            '[data-image-big="0"]',
            '[data-image-big="1"]',
            '[data-image-big="2"]',
            '[data-image-big="3"]',
            '[data-image-big="4"]',
            '[data-image-big="5"]',
            '[data-image-big="6"]',
            '[data-image-big="7"]',
            '[data-image-big="8"]',
          ],
          {
            y: 0,
            x: 0,
            scale: 1,
            //duration: 1,
            ease: "power1.inOut",
            pin: true,
            //position: "absolute",
            //inset: 0,
          }
        );

      //tl.play();

      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top+=50px top",
        //end: "bottom-=160px center",
        end: "bottom+=50px center",
        animation: tl,
        markers: true,
        scrub: true,
        pin: true,
      });
    }, [heroRef.current]);

    return () => ctx.revert();
  }, [loaded]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      className="bg-black py-16 md:py-26 overflow-hidden"
    >
      <div className="container">
        <div className="text-5xl text-white">
          <PrismicRichText field={slice.primary.title} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {slice.primary.imagenes.map((image, index) => (
            <div key={index} className={`relative`} data-image-big={index}>
              <div className=" aspect-video">
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
