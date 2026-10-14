import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon, GraduationCapIcon, MoveUpRightIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { school } from '@/lib/data/school'

const highlights = [
  'Grades 9–12',
  'Full boarding & day',
  'Selective regional admission',
  'Established 2017',
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
              <stop offset="0" stopColor="#e8c96e" stopOpacity=".38" />
              <stop offset=".24" stopColor="#c6a34d" stopOpacity=".22" />
              <stop offset="1" stopColor="#ffd45e" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="higa-torch-aura">
              <stop offset="0" stopColor="#c4a04b" stopOpacity=".08" />
              <stop offset="1" stopColor="#f2c44f" stopOpacity="0" />
            </radialGradient>
            
          </defs>
          
          <g className="higa-wire-orbit higa-wire-orbit-one">
            <path d="M-65 420 C 8 315, 104 188, 212 150 C 302 118, 394 160, 416 245 C 438 331, 384 399, 315 440 C 249 480, 172 465, 151 402 C 128 335, 182 270, 244 277 C 307 284, 339 346, 309 398" />
            <circle cx="212" cy="150" r="14" className="higa-wire-bloom" />
            <circle cx="212" cy="150" r="2.2" className="higa-wire-point" />
            <circle cx="416" cy="245" r="13" className="higa-wire-bloom" />
            <circle cx="416" cy="245" r="2.1" className="higa-wire-point" />
          </g>
          <g className="higa-wire-orbit higa-wire-orbit-two">
            <path d="M-48 570 C 28 518, 54 435, 105 372 C 158 306, 248 308, 306 369 C 361 428, 344 504, 291 543 C 239 582, 162 570, 133 516 C 101 457, 145 400, 201 409 C 246 416, 266 455, 244 489" />
            <circle cx="105" cy="372" r="13" className="higa-wire-bloom" />
            <circle cx="105" cy="372" r="2" className="higa-wire-point" />
            <circle cx="291" cy="543" r="13" className="higa-wire-bloom" />
            <circle cx="291" cy="543" r="2" className="higa-wire-point" />
          </g>
          <g className="higa-wire-orbit higa-wire-orbit-three">
            <path d="M-35 690 C 37 650, 74 588, 95 533 C 117 475, 166 455, 213 483 C 268 516, 305 590, 390 622" />
            <circle cx="95" cy="533" r="14" className="higa-wire-bloom" />
            <circle cx="95" cy="533" r="2.2" className="higa-wire-point" />
          </g>
          <g className="higa-wire-orbit higa-wire-orbit-four">
            <path d="M-35 235 C 50 310, 65 390, 30 465 S 20 605, 118 653 S 276 694, 390 760" />
          </g>
          <g className="higa-torch-art">
            <circle cx="278" cy="225" r="69" className="higa-torch-ring" />
            <path className="higa-torch-rays" d="M278 132V150 M278 300V318 M185 225H203 M353 225H371 M212 159L225 173 M331 277L344 291 M344 159L331 173 M225 277L212 291 M237 141L244 160 M312 290L319 309 M319 141L312 160 M244 290L237 309" />
            <path className="higa-torch-flame" d="M278 263 C264 244 252 230 262 208 C267 197 275 190 276 174 C294 197 302 211 294 230 C291 239 285 247 278 251 C288 236 278 224 277 211 C267 225 269 239 278 263Z" />
            <path className="higa-torch-bowl" d="M252 265H304L299 275H257Z M260 281H296L292 289H264Z" />
            <path className="higa-torch-stem" d="M265 290L272 352H284L291 290 M272 352L268 365H288L284 352" />
          </g>
        </svg>
      </div>
      <div className="higa-hero-inner relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8 lg:px-10 lg:py-20">
        <div className="higa-hero-copy relative z-10 max-w-2xl">
          <p className="higa-hero-eyebrow inline-flex items-center gap-2">
            <GraduationCapIcon className="size-4" aria-hidden="true" />
            <span>Est. {school.founded} <span className="hero-eyebrow-divider">/</span> Kembata Zone, Ethiopia</span>
          </p>

          <h1 className="higa-hero-title mt-6 text-balance font-serif font-semibold tracking-tight">
            A boarding education built on{' '}
            <span className="higa-title-accent">excellence</span>, discipline
            and character.
          </h1>

          <p className="higa-hero-description mt-6 max-w-xl text-pretty">
            Higa Model Boarding School serves selected high-achieving students in Grades 9–12 from across Kembata Zone, combining rigorous academics with boarding support
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
