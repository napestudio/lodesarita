"use client";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
// import { Flip } from "gsap/Flip";
import "./hero.css";
import { useGlobal } from "@/lib/store";

// gsap.registerPlugin(Flip);

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const { isModalOpen, setIsModalOpen, selectedValue, setSelectedValue } =
    useGlobal();
  const scroller = useGlobal((s) => s.scroller);
  const { openModalWithSelection } = useGlobal();

  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const video2WrapperRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const state = Flip.getState(heroRef.current);
      const videoState = Flip.getState(videoWrapperRef.current);
      const videoSmallState = Flip.getState(video2WrapperRef.current);
      const textRefState = Flip.getState(textRef.current);
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // scroller?.stop();
        const tl = gsap.timeline({ paused: true }).to("[data-logo]", {
          opacity: 1,
          duration: 1,
          onComplete: () => {
            heroRef.current?.classList.add("step1");
            Flip.from(state, {
              duration: 1,
              ease: "power1.inOut",
            });
            Flip.from(videoState, {
              duration: 1,
              ease: "power1.inOut",
            });
            Flip.from(videoSmallState, {
              duration: 1,
              ease: "power1.inOut",
            });
            Flip.from(textRefState, {
              duration: 1,
              ease: "power1.inOut",
              onComplete: () => {
                const textRefState = Flip.getState(textRef.current);
                const videoSmallState = Flip.getState(video2WrapperRef.current);
                heroRef.current?.classList.add("step2");
                Flip.from(textRefState, {
                  delay: 1,
                  duration: 1,
                  ease: "power1.inOut",
                  // absolute: true,
                }).to(
                  "[data-paragraph-big] [data-line]",
                  {
                    y: 0,
                    stagger: 0.2,
                    duration: 1,
                    ease: "power1.inOut",
                  },
                  "-1.5"
                );
                Flip.from(videoSmallState, {
                  duration: 1,
                  ease: "power1.inOut",
                  delay: 1,
                }).to(ctaRef.current, {
                  y: 0,
                  opacity: 1,
                  // onComplete: () => {
                  //   scroller?.start();
                  // },
                });
              },
            });
          },
        });

        tl.play();
      });

      mm.add("(max-width: 768px)", () => {
        gsap.to(ctaRef.current, {
          y: 0,
          opacity: 1,
        });
        gsap.to("[data-paragraph-big] [data-line]", {
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power1.inOut",
        });
      });
    }, [heroRef.current]);

    return () => ctx.revert();
  }, [scroller]);

  return (
    <header ref={heroRef} className="w-dvw max-w-full bg-green" data-hero>
      <div className="w-full h-max md:h-dvh p-6 grid grid-cols-12 md:grid-rows-6 grid-rows-3 gap-6">
        <div
          className="w-full h-full rounded-3xl overflow-hidden col-start-1 col-end-13 md:row-start-1 row-start-2 md:row-end-5"
          ref={videoWrapperRef}
          data-video
        >
          <video
            //  @ts-ignore
            src={slice.primary.videos[0]?.video.url}
            muted
            playsInline
            autoPlay
            loop
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="w-full rounded-3xl overflow-hidden col-start-1 md:col-end-10 col-end-8 md:row-start-5 row-start-1
           md:row-span-2"
          ref={video2WrapperRef}
          data-video-small
        >
          <video
            //  @ts-ignore
            src={slice.primary.videos[1]?.video.url}
            muted
            playsInline
            autoPlay
            loop
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col md:flex-row px-2 text-yellow w-full md:row-start-5 md:row-end-7 col-start-1 col-end-13 md:col-end-10 justify-between">
          <div
            className="text-2xl xl:text-5xl 3xl:text-8xl leading-none text-left flex flex-col"
            data-paragraph-big
          >
            <span className="overflow-hidden">
              <span data-line className="inline-block -translate-y-56">
                Vení
              </span>
            </span>
            <span className="overflow-hidden">
              <span data-line className="inline-block -translate-y-56">
                a nuestras
              </span>
            </span>
            <span className="overflow-hidden">
              <span data-line className="inline-block -translate-y-56">
                Playas
              </span>
            </span>
          </div>
          <div
            className="text-2xl xl:text-5xl 3xl:text-8xl text-right leading-none flex flex-col justify-end"
            data-paragraph-big
          >
            <span className="overflow-hidden">
              <span data-line className="inline-block -translate-y-56">
                Vení
              </span>
            </span>
            <span className="overflow-hidden">
              <span data-line className="inline-block -translate-y-56">
                a nuestros
              </span>
            </span>
            <span className="overflow-hidden">
              <span data-line className="inline-block -translate-y-56">
                Bosques
              </span>
            </span>
          </div>
        </div>
        <div
          className="md:col-start-10 col-start-8 row-start-1 col-end-13 md:row-end-7 md:row-start-5 w-full text-yellow flex flex-col justify-between overflow-hidden"
          ref={textRef}
          data-logo-area
        >
          <PrismicNextImage
            field={slice.primary.imagen}
            className="h-full mx-auto w-[90%] object-contain"
            data-logo
          />

          <button
            onClick={() => openModalWithSelection("doble")}
            className="w-full text-center py-3 bg-yellow rounded-xl relative font-text font-bold text-green-dark opacity-0 translate-y-full md:mt-0 mt-2"
            data-cta
            ref={ctaRef}
          >
            Reservar
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
