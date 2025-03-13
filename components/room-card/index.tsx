"use client";
import { PrismicDocument } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { useGlobal } from "@/lib/store";

// gsap.registerPlugin(ScrollTrigger);

export default function RoomCard({ room }: { room: PrismicDocument }) {
  const { openModalWithSelection } = useGlobal();

  const cardRef = useRef<HTMLDivElement>(null);
  const cardTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const imageBig = cardRef.current?.querySelector("[data-image-big]");
    const imageSmall = cardRef.current?.querySelector("[data-image-small]");
    const maskBig = cardRef.current?.querySelector("[data-mask]");
    const maskSmall = cardRef.current?.querySelector("[data-mask-small]");
    const descriptionEl = cardRef.current?.querySelector("[data-description]");
    const ctaEl = cardRef.current?.querySelector("[data-cta]");
    const datas = cardRef.current?.querySelectorAll("[data-datas]");

    if (
      !imageBig ||
      !maskBig ||
      !datas ||
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
        .to(datas, { opacity: 1, duration: 1, ease: "power1.inOut", stagger: 0.05 }, "0.5")
        .to(ctaEl, { opacity: 1, duration: 1, ease: "power1.inOut" }, "0.8");

      ScrollTrigger.create({
        trigger: cardRef.current,
        start: "-200 center",
        end: "center center",
        animation: tl,
        scrub: false,
        //markers: true,
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
      <div className="grid gap-10 items-end xl:items-start md:grid-cols-2">
        <div className="md:group-even:order-2 pt-8 md:block ">
          <div className="relative overflow-hidden rounded-xl">
            <div
              className="absolute h-full w-full inset-0 origin-right z-10 scale-y-105 rounded-xl"
              data-mask
            ></div>
            <PrismicNextImage
              className="object-cover w-[30rem] md:h-[55vh] xl:h-[75vh] 2xl:h-[65vh] scale-105 md:max-w-[45vw] rounded-xl"
              field={room.data.slices[0].primary.miniatura}
              width={room.data.slices[0].primary.miniatura.dimentions?.width}
              height={room.data.slices[0].primary.miniatura.dimentions?.height}
              data-image-big
            />
          </div>
        </div>
        <div className="h-full flex flex-col">
          <div className="pb-10 md:group-even:pt-10 grid space-y-4">
            <h3
              className="text-4xl md:text-7xl font-text font-bold text-yellow md:mb-2 flex gap-5 items-center mt-6 md:mt-0 xl:mt-8"
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
              className="font-text text-white leading-tight text-pretty opacity-0"
              data-description
            >
              {room.data.slices[0].primary.descripcion}
            </p>

            <div className="flex justify-start gap-4">
              {room.data.slices[0].primary.caracteristicas.map(
                (item: any, i: number) => (
                  <div key={i} data-datas className="relative overflow-hidden rounded-xl opacity-0">
                    {/* <div
                      className="absolute h-full w-full inset-0 origin-bottom z-10 scale-y-105"
                      data-mask-small
                    ></div> */}
                    <PrismicNextImage
                      className="object-cover aspect-square rounded-full w-10 bg-yellow p-2"
                      field={item.icon}
                      data-image-small
                      alt=""
                    />
                  </div>
                )
              )}
            </div>
            <button
              onClick={() =>
                openModalWithSelection(
                  room.data.slices[0].primary.titulo.toLowerCase()
                )
              }
              className="text-black font-text font-bold  mt-5 w-max opacity-0 text-xl flex items-center justify-center group/cta"
              data-cta
            >
              <span className="group-hover/cta:bg-black group-hover/cta:text-yellow bg-yellow rounded-full px-6 py-3 relative z-10 transition-colors">
                Reservar
              </span>
              <span className="bg-yellow rounded-full p-3 -translate-x-14 group-hover/cta:translate-x-0 transition-transform duration-300">
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
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M3 10h18" />
                  <path d="M8 14h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 18h.01" />
                  <path d="M12 18h.01" />
                  <path d="M16 18h.01" />
                </svg>
              </span>
            </button>
          </div>
          <div className="relative overflow-hidden rounded-xl md:w-3/5 2xl:w-3/4 mx-auto">
            <div
              className="absolute h-full w-full inset-0 origin-bottom z-10 scale-y-105"
              data-mask-small
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
