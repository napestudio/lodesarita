"use client";
import { PrismicDocument } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { Link as TransitionLink } from "next-transition-router";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

export default function RoomCard({ room }: { room: PrismicDocument }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const imageBig = cardRef.current?.querySelector("[data-image-big]");
    const imageSmall = cardRef.current?.querySelector("[data-image-small]");
    const maskBig = cardRef.current?.querySelector("[data-mask]");
    const maskSmall = cardRef.current?.querySelector("[data-mask-small]");
    const descriptionEl = cardRef.current?.querySelector("[data-description]");
    const ctaEl = cardRef.current?.querySelector("[data-cta]");

    if (
      !imageBig ||
      !maskBig ||
      !imageSmall ||
      !maskSmall ||
      !cardTitleRef.current ||
      !descriptionEl ||
      !ctaEl
    )
      return;

    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ paused: true })
        .to(maskBig, { scaleX: 0, duration: 1, ease: "power1.inOut" })
        .to(maskSmall, { scaleY: 0, duration: 1, ease: "power1.inOut" }, "0")
        .to(imageBig, { scale: 1, duration: 1, ease: "power1.inOut" }, "0")
        .to(imageSmall, { scale: 1, duration: 1, ease: "power1.inOut" }, "0")
        .to(
          descriptionEl,
          { opacity: 1, duration: 1, ease: "power1.inOut" },
          "0.5"
        )
        .to(ctaEl, { opacity: 1, duration: 1, ease: "power1.inOut" }, "0.8");

      ScrollTrigger.create({
        trigger: cardRef.current,
        start: "-200 center",
        end: "center center",
        animation: tl,
        scrub: false,
        markers: false,
      });
      const letters = gsap.utils.toArray<HTMLSpanElement>("[data-letter]");

      gsap.fromTo(
        letters,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          stagger: 0.05,
          ease: "power2.out",
          duration: 0.6,
          scrollTrigger: {
            trigger: cardTitleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false,
          },
        }
      );
    }, [cardRef.current]);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} data-letter className="inline-block overflow-hidden">
        <span className="inline-block">{char === " " ? "\u00A0" : char}</span>
      </span>
    ));
  };

  return (
    <div className="group" ref={cardRef}>
      <div className="grid gap-10 items-end md:grid-cols-2">
        <div className="group-even:order-2 group-even:pt-0 group-even:pb-8 pt-8 md:block hidden">
          <div className="relative w-max overflow-hidden rounded-xl">
            <div
              className="absolute h-full w-full bg-white inset-0 origin-right z-10 scale-y-105"
              data-mask
            ></div>
            <PrismicNextImage
              className="object-cover w-[30rem] md:h-[85vh] 2xl:h-[65vh] scale-105"
              field={room.data.slices[0].primary.miniatura}
              data-image-big
            />
          </div>
        </div>
        <div className="h-full flex flex-col justify-between md:group-even:flex-col-reverse md:group-even:order-1">
          <div className="relative overflow-hidden rounded-xl md:w-3/5 2xl:w-3/4 mx-auto">
            <div
              className="absolute h-full w-full bg-white inset-0 origin-bottom z-10 scale-y-105"
              data-mask-small
            ></div>
            <PrismicNextImage
              className="object-cover aspect-square scale-105"
              field={room.data.slices[0].primary.thumbnail_small}
              alt=""
              data-image-small
            />
          </div>

          <div className="pb-10 md:group-even:pt-10 grid">
            <h3
              className="text-4xl md:text-7xl font-text font-bold text-yellow md:mb-2 flex gap-5 items-center mt-6 md:mt-0"
              ref={cardTitleRef}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
              </svg>{" "}
              <span className="inline-block">
                {splitText(room.data.slices[0].primary.titulo)}
              </span>
            </h3>
            <p
              className="font-text text-gray-900 leading-tight text-pretty opacity-0"
              data-description
            >
              {room.data.slices[0].primary.descripcion}
            </p>
            <TransitionLink
              href={`/${room.uid}`}
              className="text-yellow rounded-full px-6 py-2 mt-5 bg-black w-max opacity-0"
              data-cta
            >
              Reservar
            </TransitionLink>
          </div>
        </div>
      </div>
    </div>
  );
}
