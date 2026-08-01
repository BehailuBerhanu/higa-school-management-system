'use client'

import { useEffect, useRef, useState } from 'react'

export function AnimatedCounter({
  value,
  suffix = '',
  duration = 1600,
}: {
  value: number
  suffix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setDisplay(value)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || started.current) return
        started.current = true
        const start = performance.now()
        let frame = 0

        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setDisplay(value * eased)
          if (p < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(frame)
      },
      { threshold: 0.35 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [value, duration])

  const isDecimal = !Number.isInteger(value)
  const shown = isDecimal ? display.toFixed(1) : Math.round(display).toString()

  return (
    <span ref={ref} className="tabular-nums">
      {shown}
      {suffix}
    </span>
  )
}
