'use client'

import { useSmoothScroll } from '@/hooks/use-smooth-scroll'

export default function RootTemplate({ children }: React.PropsWithChildren) {
  useSmoothScroll()
  return children
}
