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
        <svg viewBox="0 0 390 760" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="higa-wire-glow">
              <stop offset="0" stopColor="#fff1a8" stopOpacity="1" />
              <stop offset=".28" stopColor="#ffd45e" stopOpacity=".72" />
              <stop offset="1" stopColor="#ffd45e" stopOpacity="0" />
            </radialGradient>
            <filter id="higa-wire-blur" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="4" />
            </filter>
            <linearGradient id="higa-torch-line" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#fff0a2" />
              <stop offset="1" stopColor="#c28c24" />
            </linearGradient>
          </defs>
          <g className="higa-wire-orbit higa-wire-orbit-one">
            <ellipse cx="255" cy="235" rx="145" ry="88" />
          </g>
          <g className="higa-wire-orbit higa-wire-orbit-two">
            <ellipse cx="255" cy="235" rx="100" ry="188" />
          </g>
          <g className="higa-wire-orbit higa-wire-orbit-three">
            <path d="M-70 420 C 35 340 105 365 150 460 S 265 595 355 490 S 410 300 480 280" />
          </g>
          <g className="higa-wire-orbit higa-wire-orbit-four">
            <path d="M-60 590 C 70 500 60 390 155 350 S 315 420 405 320 S 350 120 455 55" />
          </g>
          <g className="higa-wire-lights">
            <circle cx="110" cy="175" r="15" fill="url(#higa-wire-glow)" filter="url(#higa-wire-blur)" />
            <circle cx="110" cy="175" r="2.4" fill="#fff0a2" />
            <circle cx="389" cy="236" r="14" fill="url(#higa-wire-glow)" filter="url(#higa-wire-blur)" />
            <circle cx="389" cy="236" r="2.4" fill="#fff0a2" />
            <circle cx="300" cy="395" r="13" fill="url(#higa-wire-glow)" filter="url(#higa-wire-blur)" />
            <circle cx="300" cy="395" r="2.2" fill="#fff0a2" />
            <circle cx="75" cy="515" r="14" fill="url(#higa-wire-glow)" filter="url(#higa-wire-blur)" />
            <circle cx="75" cy="515" r="2.4" fill="#fff0a2" />
          </g>
          <g className="higa-torch-art">
            <circle cx="255" cy="235" r="72" className="higa-torch-ring" />
            <g className="higa-torch-rays">
              <path d="M255 144 V162 M255 308 V326 M164 235 H182 M328 235 H346 M191 171 L203 184 M307 286 L320 299 M319 171 L307 184 M203 286 L190 299" />
            </g>
            <path className="higa-torch-flame higa-torch-flame-outer" d="M255 270 C242 250 226 239 238 216 C241 207 250 201 251 185 C267 205 269 214 266 225 C280 216 280 202 278 195 C299 225 288 250 270 270 Z" />
            <path className="higa-torch-flame higa-torch-flame-inner" d="M255 267 C249 253 246 246 253 234 C259 243 265 248 262 258 Z" />
            <path className="higa-torch-bowl" d="M230 273 H280 L274 283 H236 Z M237 289 H273 L268 298 H242 Z" />
            <path className="higa-torch-stem" d="M243 299 L249 355 H261 L267 299 M248 355 L245 370 H265 L262 355" />
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
