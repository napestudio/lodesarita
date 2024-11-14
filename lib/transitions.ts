import { gsap } from 'gsap'

export const intro = (next: () => void, from: string, to: string) => {
  gsap
    .timeline({
      onComplete: next,
    })
    .to('body', {
      autoAlpha: 0,
      duration: 0.3,
    })
}

export const outro = (next: () => void) => {
  gsap
    .timeline({
      onComplete: next,
    })
    .to('body', {
      autoAlpha: 1,
      duration: 0.3,
    })
}
