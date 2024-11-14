import { ENABLE_PAGE_TRANSITIONS } from '@/lib/constants'
import { useGlobal } from '@/lib/store'
import delegate, { DelegateEvent } from 'delegate-it'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

// TODO: the operation of the anchors should be in the smooth scroll hook.

type Stage = 'in' | 'out' | 'none'

type Animations = {
  intro: (n: () => void, f: string, t: string) => void
  outro: (n: () => void) => void
}

export function usePageTransition({ intro, outro }: Animations): void {
  const router = useRouter()
  const pathname = usePathname()
  const [transition, setTransition] = useState<Stage>('none')
  const scroller = useGlobal((s) => s.scroller)
  const setStage = useGlobal((s) => s.setStage)
  const [isMenuOpen, setIsMenuOpen] = useGlobal((s) => [
    s.isMenuOpen,
    s.setIsMenuOpen,
  ])

  useEffect(() => {
    if (!ENABLE_PAGE_TRANSITIONS) return

    const handleClick = (event: DelegateEvent) => {
      const target = event.delegateTarget as HTMLAnchorElement
      const href = target?.getAttribute('href')

      // start: handle anchor links
      if (href === pathname) {
        scroller?.scrollTo(0)
        if (isMenuOpen) setIsMenuOpen(false)
      }

      if (href?.includes('#')) {
        const to = href.split('#')
        scroller?.scrollTo('#' + to[1], {
          offset: 0, // TODO: add header height value (when fixed header)
        })
        if (to[0] === pathname) {
          return
        }
      }
      // end: handle anchor links

      if (href?.startsWith('/') && href !== pathname) {
        event.preventDefault()
        setTransition('in')
        setStage('in')

        intro(() => router.push(href), pathname, href)
      }
    }

    const controller = new AbortController()

    delegate('a[href]', 'click', handleClick, {
      signal: controller.signal,
    })

    return () => {
      controller.abort()
    }
  }, [router, pathname, intro, scroller, setStage, isMenuOpen, setIsMenuOpen])

  useEffect(() => {
    if (transition === 'out')
      outro(() => {
        setStage('none')
      })
  }, [transition, outro, setStage])

  useEffect(() => {
    return () => {
      if (transition === 'in') {
        setTransition('out')
        setStage('out')
      }
    }
  }, [transition, pathname, setStage])

  // handle anchor links
  useEffect(() => {
    if (window.location.hash) {
      scroller?.scrollTo(window.location.hash)
    }
  }, [pathname, scroller])
}
