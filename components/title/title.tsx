"use client";

import { splitText } from "@/lib/split-text";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
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
        .to(titleMask, { scaleX: 0, duration: 1, ease: "power1.inOut" });

      ScrollTrigger.create({
        trigger: titleContainerRef.current,
        start: "-200 center",
        end: "center center",
        animation: tl,
        scrub: false,
        markers: true,
      });
    }, [titleContainerRef.current]);
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={titleContainerRef}>
      <h2 className="text-5xl md:text-9xl mb-10 leading-none text-stroke-3 text-transparent z-10 relative">
        {text}
      </h2>
      <div
        className="absolute inset-0 text-green text-5xl md:text-9xl text-stroke-3"
        data-title-background
      >
        {text}
        <div
          className="absolute bg-white w-full h-[200%] -inset-1/4 origin-right rounded-full"
          data-title-mask
        ></div>
      </div>
    </div>
  );
}
