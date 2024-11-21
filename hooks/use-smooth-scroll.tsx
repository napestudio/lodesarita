import { useGlobal } from '@/lib/store'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'

export function useSmoothScroll() {
  const setScroller = useGlobal((s) => s.setScroller)

  useEffect(() => {
    const lenis = new Lenis()

    setScroller(lenis)

    // Sync ScrollTrigger with Lenis' scroll updates.
    lenis.on('scroll', ScrollTrigger.update)

    function onFrame(time: number) {
      lenis.raf(time * 1000) // Convert GSAP's time to milliseconds for Lenis.
    }

    // Ensure GSAP animations are in sync with Lenis' scroll frame updates.
    gsap.ticker.add(onFrame)

    // Turn off GSAP's default lag smoothing to avoid conflicts with Lenis.
    gsap.ticker.lagSmoothing(0)

    return () => {
      if (lenis?.isScrolling) lenis.stop()
      lenis?.destroy()
      gsap.ticker.remove(onFrame)
    }
  }, [setScroller])
}
