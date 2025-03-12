"use client";
import PreFooter from "@/components/prefooter";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

/**
 * Props for `Footer`.
 */
export type FooterProps = SliceComponentProps<Content.FooterSlice>;

/**
 * Component for "Footer" Slices.
 */
const Footer = ({ slice }: FooterProps): JSX.Element => {
  const footerBottomRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footerEl = document.querySelector("[data-footer]");
    if (!footerEl) return;
    const p = footerEl.querySelectorAll("[data-footer] p");

    const ctx = gsap.context(() => {
      gsap.set(p, {
        opacity: 0,
      });
      gsap.set(logoRef.current, {
        opacity: 0,
      });
      const tl = gsap
        .timeline({ paused: true })
        .to(p, {
          duration: 1,
          opacity: 1,
          ease: "power1.inOut",
          stagger: 0.05,
          delay: 0.2,
        })
        .to(
          logoRef.current,
          {
            duration: 1,
            opacity: 1,
            ease: "power1.inOut",
          },
          "<"
        );

      ScrollTrigger.create({
        trigger: footerEl,
        start: "top center",
        end: "center center",
        animation: tl,
        scrub: false,
        markers: false,
      });
    }, [footerBottomRef.current]);

    return () => ctx.revert();
  }, []);
  return (
    <footer className="pb-20" data-footer>
      <div className="overflow-hidden">
        <PreFooter />
      </div>

      <div
        className="flex flex-col gap-8 justify-between items-center"
        ref={footerBottomRef}
      >
        <div
          className="font-text text-yellow font-semibold text-center"
          data-fadein
        >
          <p className="">Tel.: 2262324027</p>
          <p className="">Mail: lodesaritahosteria@gmail.com</p>
          <p className="">
            Calle 81 #261 (entre 4 y 6), Necochea, Costa Atlántica.
          </p>
        </div>
        <div className="w-44" ref={logoRef}>
          <PrismicNextImage
            field={slice.primary.logo}
            className="h-full w-full"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
