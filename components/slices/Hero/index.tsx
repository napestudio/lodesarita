"use client";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Flip } from "gsap/Flip";
import "./hero.css";

gsap.registerPlugin(Flip);

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const [loaded, setLoaded] = useState(false);

  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const video2WrapperRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loaded) return;
    const state = Flip.getState(heroRef.current);
    const videoState = Flip.getState(videoWrapperRef.current);
    const videoSmallState = Flip.getState(video2WrapperRef.current);
    const textRefState = Flip.getState(textRef.current);

    const tl = gsap
      .timeline({ paused: true })
      .to("[data-logo]", {
        opacity: 1,
        duration: 1,
        onComplete: () => {
          heroRef.current?.classList.add("step1");
          Flip.from(state, {
            duration: 1,
            ease: "power1.inOut",
            absolute: true,
          });
          Flip.from(videoState, {
            duration: 1,
            ease: "power1.inOut",
            absolute: true,
          });
          Flip.from(videoSmallState, {
            duration: 1,
            ease: "power1.inOut",
            absolute: true,
          });
          Flip.from(textRefState, {
            duration: 1,
            ease: "power1.inOut",
            absolute: true,
            onComplete: () => {
              const textRefState = Flip.getState(textRef.current);
              const videoState = Flip.getState(videoWrapperRef.current);
              const videoSmallState = Flip.getState(video2WrapperRef.current);
              heroRef.current?.classList.add("step2");
              gsap.to("[data-paragraph-big] [data-line]", {
                y: 150,
                stagger: 0.15,
                duration: 0.5,
                ease: "power1.inOut",
                delay: 1,
              });
              Flip.from(textRefState, {
                delay: 2,
                duration: 1,
                ease: "power1.inOut",
                absolute: true,
              });
              Flip.from(videoState, {
                duration: 1,
                ease: "power1.inOut",
                absolute: true,
                delay: 1.5,
              });
              Flip.from(videoSmallState, {
                duration: 1,
                ease: "power1.inOut",
                absolute: true,
                delay: 2,
              });
              gsap.to("[data-paragraph]", {
                opacity: 1,
                delay: 2,
              });
              gsap.to("[data-paragraph] [data-line]", {
                y: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power1.inOut",
                delay: 1,
              });
            },
          });
        },
      })
      .to("[data-paragraph-big] [data-line]", {
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power1.inOut",
      });

    tl.play();
  }, [loaded]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header ref={heroRef} className="w-dvw max-w-full bg-green" data-hero>
      <div className="w-full h-dvh p-6 grid grid-cols-12 grid-rows-6 gap-6">
        <div
          className="w-full h-full rounded-3xl overflow-hidden col-start-1 col-end-12 row-start-1 row-end-5"
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
          className="w-full rounded-3xl overflow-hidden col-start-1 col-end-9 row-start-5 row-span-2"
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
        <div className="px-2 text-yellow w-full row-start-5 col-start-1 col-end-10 ">
          <div
            className="text-3xl 2xl:text-5xl leading-none text-left flex flex-col"
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
            className="text-3xl 2xl:text-5xl text-right leading-none flex flex-col"
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
          className="p-5 col-start-10 col-end-13 w-full text-yellow"
          ref={textRef}
          data-text
        >
          <PrismicNextImage
            field={slice.primary.imagen}
            className="opacity-0 "
            data-logo
          />
          <div className="px-2 text-white w-full flex justify-between">
            <div
              className="text-lg 2xl:text-3xl leading-none text-left opacity-0 flex flex-col"
              data-paragraph
            >
              <span className="overflow-hidden">
                <span data-line className="inline-block translate-y-56">
                  Vení
                </span>
              </span>
              <span className="overflow-hidden">
                <span data-line className="inline-block translate-y-56">
                  a nuestras
                </span>
              </span>
              <span className="overflow-hidden">
                <span data-line className="inline-block translate-y-56">
                  Playas
                </span>
              </span>
            </div>
            <div
              className="text-lg 2xl:text-3xl text-right leading-none opacity-0 flex flex-col"
              data-paragraph
            >
              <span className="overflow-hidden">
                <span data-line className="inline-block translate-y-56">
                  Vení
                </span>
              </span>
              <span className="overflow-hidden">
                <span data-line className="inline-block translate-y-56">
                  a nuestros
                </span>
              </span>
              <span className="overflow-hidden">
                <span data-line className="inline-block translate-y-56">
                  Bosques
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
