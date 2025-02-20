"use client";
import { PrismicDocument } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { Link as TransitionLink } from "next-transition-router";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RoomCard({ room }: { room: PrismicDocument }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const imageBig = cardRef.current?.querySelector("[data-image-big]");
    const imageSmall = cardRef.current?.querySelector("[data-image-small]");
    const maskBig = cardRef.current?.querySelector("[data-mask]");
    const maskSmall = cardRef.current?.querySelector("[data-mask-small]");

    if (
      !imageBig ||
      !maskBig ||
      !imageSmall ||
      !maskSmall ||
      !cardTitleRef.current
    )
      return;

    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ paused: true })
        .to(maskBig, { scaleX: 0, duration: 1, ease: "power1.inOut" })
        .to(maskSmall, { scaleY: 0, duration: 1, ease: "power1.inOut" }, "0")
        .to(imageBig, { scale: 1, duration: 1, ease: "power1.inOut" }, "0")
        .to(imageSmall, { scale: 1, duration: 1, ease: "power1.inOut" }, "0");

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
        <div className="group-even:order-2 group-even:pt-0 group-even:pb-8 pt-8">
          <div className="relative w-max overflow-hidden rounded-xl">
            <div
              className="absolute h-full w-full bg-white inset-0 origin-right z-10"
              data-mask
            ></div>
            <PrismicNextImage
              className="object-cover w-[30rem] md:h-[85vh] 2xl:h-[65vh] scale-105"
              field={room.data.slices[0].primary.miniatura}
              data-image-big
            />
          </div>
        </div>
        <div className="h-full flex flex-col justify-between group-even:flex-col-reverse group-even:order-1">
          <div className="relative overflow-hidden rounded-xl bg-black md:w-3/5 2xl:w-3/4 mx-auto">
            <div
              className="absolute h-full w-full bg-white inset-0 origin-bottom z-10 "
              data-mask-small
            ></div>
            <PrismicNextImage
              className="object-cover shadow-md aspect-square scale-105"
              field={room.data.slices[0].primary.miniatura}
              data-image-small
            />
          </div>

          <div className="pb-10 group-even:pt-10 grid">
            <h3
              className="text-7xl font-text font-bold text-yellow mb-2 flex gap-5 items-center"
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
            <p className="font-text text-gray-900 leading-tight text-pretty">
              {room.data.slices[0].primary.descripcion}
            </p>
            <TransitionLink
              href={`/${room.uid}`}
              className="text-yellow rounded-full px-6 py-2 mt-5 bg-black w-max"
            >
              Reservar
            </TransitionLink>
          </div>
        </div>
      </div>
    </div>
  );
}
