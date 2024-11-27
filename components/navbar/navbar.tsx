"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Flip } from "gsap/Flip";
import "./animation.css";
gsap.registerPlugin(Flip);

const menuItems = [
  {
    index: 1,
    label: "Inicio",
    href: "#",
  },
  {
    index: 2,
    label: "Reservas",
    href: "#",
  },
  {
    index: 3,
    label: "Galeria",
    href: "#",
  },
  {
    index: 4,
    label: "Contacto",
    href: "#",
  },
];

export default function NavBar() {
  const ref = useRef(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const navElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(innerRef.current, {
        yPercent: -200,
        opacity: 1,
      });

      const tl = gsap.timeline().to(innerRef.current, {
        yPercent: 0,
        delay: 4,
        onComplete: () => {
          const innerState = Flip.getState(innerRef.current);
          const navState = Flip.getState(navElRef.current);
          innerRef.current?.classList.add("step-1");
          const newInnerState = Flip.getState(innerRef.current);
          const newNavState = Flip.getState(navElRef.current);
          Flip.from(newInnerState, {
            duration: 3,
          });
          Flip.from(newNavState, {
            duration: 3,
          });
          gsap.to("[data-nav] div", {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: -0.1,
          });
        },
      });

      tl.play();

      const showNav = gsap
        .from(ref.current, {
          yPercent: -100,
          duration: 0.4,
          ease: "power2.inOut",
          paused: true,
        })
        .progress(1);

      ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          self.direction === -1 ? showNav.play() : showNav.reverse();
        },
      });
    });

    return () => {
      ctx.kill();
    };
  }, []);

  return (
    <div className="fixed w-full top-2 p-2 z-50" ref={ref}>
      <div
        className="bg-white rounded-full px-3 mx-auto shadow-md opacity-0 w-max"
        ref={innerRef}
      >
        <nav
          className="flex gap-3 text-base 2xl:text-xl place-content-center px-3 py-2 overflow-hidden w-min"
          ref={navElRef}
          data-nav
        >
          {menuItems.map((menuItem) => (
            <div
              key={menuItem.index}
              className="font-text font-bold opacity-0 -translate-y-8"
            >
              <a href={menuItem.href}>{menuItem.label}</a>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
