"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(ScrollTrigger, Flip);
ScrollTrigger.clearScrollMemory("manual");
export function useGsapPlugins() {}
