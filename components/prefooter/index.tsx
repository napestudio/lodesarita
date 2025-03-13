"use client";
import { useEffect, useRef } from "react";
import "./prefooter.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export default function PreFooter() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(titleRef.current, {
        yPercent: 100,
        opacity: 0,
      });
      const tl = gsap.timeline({ paused: true }).to(titleRef.current, {
        yPercent: 0,
        duration: 1,
        opacity: 1,
        ease: "power1.inOut",
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top center",
        end: "center center",
        animation: tl,
        scrub: false,
      });
    }, []);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={containerRef}>
      <h2 className="big_title" ref={titleRef}>
        SARITA
      </h2>
    </div>
  );
}
