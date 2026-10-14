import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon, GraduationCapIcon, MoveUpRightIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { school } from '@/lib/data/school'

const highlights = [
  'Grades 1–12',
  'Full boarding & day',
  '99.2% pass rate',
  'Founded 1998',
]

function SchoolEmblem() {
  return (
    <div className="hero-emblem-stage" aria-label="Higa Model Boarding School emblem" role="img">
      <div className="hero-emblem-halo" />
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />
      <div className="hero-orbit hero-orbit-three" />
      <span className="hero-orbit-dot hero-orbit-dot-one" />
      <span className="hero-orbit-dot hero-orbit-dot-two" />
      <span className="hero-orbit-dot hero-orbit-dot-three" />
      <div className="hero-emblem-disc">
        <Image
          src="/logo.png"
          alt=""
          width={360}
          height={360}
          priority
          className="hero-emblem-image"
        />
      </div>
      <div className="hero-emblem-caption">
        <span className="hero-caption-rule" />
        <span>Knowledge · Character · Service</span>
        <span className="hero-caption-rule" />
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="higa-hero relative isolate overflow-hidden">
      <div className="higa-hero-grain" aria-hidden="true" />
      <div className="higa-mobile-wire" aria-hidden="true">
        <svg viewBox="0 0 390 620" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="higa-wire-glow">
              <stop offset="0" stopColor="#ffd76a" stopOpacity=".95" />
              <stop offset="1" stopColor="#ffd76a" stopOpacity="0" />
            </radialGradient>
            <filter id="higa-wire-blur" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>
          <g className="higa-wire-trails">
            <path className="higa-wire-path higa-wire-path-a" d="M-80 520 C 8 350, 80 340, 145 405 S 240 590, 330 475 S 370 260, 470 180" />
            <path className="higa-wire-path higa-wire-path-b" d="M-50 580 C 55 430, 40 300, 150 270 S 320 355, 390 240 S 340 70, 440 15" />
            <path className="higa-wire-path higa-wire-path-c" d="M-40 390 C 50 510, 170 520, 230 420 S 180 230, 280 170 S 370 130, 430 220" />
            <path className="higa-wire-path higa-wire-path-d" d="M20 620 C 130 510, 95 420, 185 350 S 340 370, 405 285" />
          </g>
          <g className="higa-wire-nodes">
            <circle cx="145" cy="405" r="13" fill="url(#higa-wire-glow)" filter="url(#higa-wire-blur)" />
            <circle cx="145" cy="405" r="2.8" fill="#ffe08a" />
            <circle cx="330" cy="475" r="11" fill="url(#higa-wire-glow)" filter="url(#higa-wire-blur)" />
            <circle cx="330" cy="475" r="2.5" fill="#ffe08a" />
            <circle cx="280" cy="170" r="10" fill="url(#higa-wire-glow)" filter="url(#higa-wire-blur)" />
            <circle cx="280" cy="170" r="2.3" fill="#ffe08a" />
            <circle cx="185" cy="350" r="9" fill="url(#higa-wire-glow)" filter="url(#higa-wire-blur)" />
            <circle cx="185" cy="350" r="2" fill="#ffe08a" />
          </g>
        </svg>
      </div>
      <div className="higa-hero-inner relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8 lg:px-10 lg:py-20">
        <div className="higa-hero-copy relative z-10 max-w-2xl">
          <p className="higa-hero-eyebrow inline-flex items-center gap-2">
            <GraduationCapIcon className="size-4" aria-hidden="true" />
            <span>Est. {school.founded} <span className="hero-eyebrow-divider">/</span> Bahir Dar, Ethiopia</span>
          </p>

          <h1 className="higa-hero-title mt-6 text-balance font-serif font-semibold tracking-tight">
            A boarding education built on{' '}
            <span className="higa-title-accent">excellence</span>, discipline
            and character.
          </h1>

          <p className="higa-hero-description mt-6 max-w-xl text-pretty">
            Higa Model Boarding School educates 1,482 students from Grade 1 to
            Grade 12 through rigorous academics, supervised residential study
            and a faculty of ninety-six.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="higa-about-button group"
              render={<Link href="/about" />}
            >
              About Higa
              <MoveUpRightIcon className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" data-icon="inline-end" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="higa-portal-button"
              render={<Link href="/login" />}
            >
              Portal Login
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
          </div>

          <p className="mt-6 flex items-center gap-3 text-xs tracking-wide text-white/55">
            <span className="h-px w-8 bg-[var(--higa-gold)]" />
            Learning with purpose since {school.founded}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[35rem] lg:ml-auto">
          <SchoolEmblem />
        </div>
      </div>

      <div className="higa-marquee" aria-label="School highlights">
        <div className="higa-marquee-track">
          {[0, 1].map((copy) => (
            <ul key={copy} className="higa-marquee-list" aria-hidden={copy === 1 ? true : undefined}>
              {highlights.map((item) => (
                <li key={item} className="higa-marquee-item">
                  <span className="higa-marquee-bullet" aria-hidden="true">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
