"use client";

import { splitText } from "@/lib/split-text";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);
interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  const titleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleMask =
        titleContainerRef.current?.querySelector("[data-title-mask]");
      if (!titleMask) return;
      const tl = gsap
        .timeline({ paused: true })
        .to(titleMask, { scaleY: 0, duration: 1.5, ease: "power1.inOut" });

      ScrollTrigger.create({
        trigger: titleContainerRef.current,
        start: "-200 center",
        end: "center center",
        animation: tl,
        scrub: false,
      });
    }, [titleContainerRef.current]);
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-max" ref={titleContainerRef}>
      <h2 className="text-5xl md:text-9xl mb-10 text-stroke-3 text-yellow z-10 relative pt-1">
        {text}
      </h2>
      {/* <div
        className="absolute inset-0 text-yellow text-5xl md:text-9xl text-stroke-3 pt-1"
        data-title-background
      >
        {text}
        <div
          className="absolute bg-yellow w-full h-[200%]  origin-top"
          data-title-mask
        ></div>
      </div> */}
    </div>
  );
}
