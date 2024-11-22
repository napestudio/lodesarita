"use client";
import {
  asText,
  Content,
  ImageField,
  ImageFieldImage,
} from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<ImageField>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({ paused: true }).to(wrapperRef.current, {
        xPercent: -25,
        scale: 0.5,
        ease: "linear",
      });

      ScrollTrigger.create({
        start: "20 top",
        end: "bottom center",
        markers: true,
        animation: scrollTl,
        scrub: true,
        pin: heroRef.current,
      });
    });

    return () => {
      ctx.kill();
    };
  }, []);
  return (
    <header ref={heroRef}>
      <div className="w-full h-dvh p-6">
        <div className="w-full h-full transition-transform" ref={wrapperRef}>
          <PrismicNextImage
            field={slice.primary.imagen}
            className="object-cover w-full h-full object-center rounded-xl overflow-hidden"
          />
        </div>
      </div>
      <div className="h-screen"></div>
    </header>
  );
};

export default Hero;
