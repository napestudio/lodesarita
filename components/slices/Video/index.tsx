"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import VideoModal from "./modal";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Video`.
 */
export type VideoProps = SliceComponentProps<Content.VideoSlice>;

/**
 * Component for "Video" Slices.
 */
const Video = ({ slice }: VideoProps): JSX.Element => {
  const isSmallScreen = useMediaQuery("(min-width: 56.25em)");
  const [openModal, setOpenModal] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  function handleModal() {
    setOpenModal(!openModal);
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (isSmallScreen) {
        gsap.set(videoRef.current, {
          clipPath: "polygon(20% 10%, 80% 10%, 80% 90%, 20% 90%)",
        });
        const scrollTl = gsap.timeline({ paused: true }).to(videoRef.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "none",
        });

        ScrollTrigger.create({
          animation: scrollTl,
          trigger: sectionRef.current,
          start: "top center",
          end: "+=200 center",
          markers: false,
          scrub: true,
        });
      }
    });
    return () => ctx.revert();
  }, [isSmallScreen]);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-10 overflow-hidden bg-green"
    >
      <div
        className="overflow-hidden relative w-full h-full cursor-pointer mx-auto max-w-[90vw] rounded-3xl"
        ref={videoRef}
      >
        <div
          className="sm:hidden w-full h-full flex items-center justify-center absolute inset-0"
          onClick={() => setOpenModal(true)}
        ></div>
        {"image" in slice.primary && (
          <PrismicNextImage
            field={slice.primary.image}
            width={slice.primary.image.dimensions?.width}
            height={slice.primary.image.dimensions?.height}
            className="object-cover h-full w-full"
            onClick={() => setOpenModal(true)}
            data-cursor-image
          />
        )}
        {"video" in slice.primary && (
          <video
            className={`inset object-cover h-full w-full`}
            //  @ts-ignore
            src={slice.primary.video.url}
            autoPlay
            playsInline
            muted
            loop
            onClick={() => setOpenModal(true)}
            data-cursor-video
          />
        )}
      </div>
      <VideoModal
        action={handleModal}
        open={openModal}
        ytUrl={slice.primary.urlyoutube!}
      />
    </section>
  );
};

export default Video;
