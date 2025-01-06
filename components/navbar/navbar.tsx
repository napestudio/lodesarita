"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(innerRef.current, {
        yPercent: -200,
        scaleX: 0.5,
        opacity: 1,
      });

      const tl = gsap
        .timeline()
        .to(innerRef.current, {
          yPercent: 0,
          opacity: 1,
          delay: 5,
        })
        .to(innerRef.current, {
          scaleX: 1,
          backgroundColor: "white",
        })
        .to("[data-nav] ul li", {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: -0.1,
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
    <div className="fixed w-dvw py-8 z-50 bottom-10 md:top-0 h-max" ref={ref}>
      <div
        className="rounded-full px-2 mx-auto opacity-0 w-max scale-x-100"
        ref={innerRef}
      >
        <nav className="py-2" ref={navElRef} data-nav>
          <ul
            className="flex list-none overflow-hidden text-base 2xl:text-xl items-center justify-center"
            ref={ulRef}
          >
            {menuItems.map((menuItem) => (
              <li
                key={menuItem.index}
                className="font-text font-bold opacity-0 -translate-y-8 leading-none align-middle"
              >
                <a
                  className="hover:bg-yellow hover:text-green transition-colors py-2 px-4 rounded-full inline-block"
                  href={menuItem.href}
                >
                  {menuItem.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
