import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon, GraduationCapIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HeroCanvas } from '@/components/public/hero-canvas'
import { school } from '@/lib/data/school'

const highlights = [
  'Grades 1 – 12',
  'Full boarding & day',
  '99.2% pass rate',
  'Founded 1998',
]

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      <Image
        src="/hero-campus.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(105deg,var(--color-primary)_8%,color-mix(in_oklab,var(--color-primary),black_35%)_92%)] opacity-90"
      />
      <HeroCanvas />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-14 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:py-28">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]">
            <GraduationCapIcon className="size-3.5" aria-hidden="true" />
            Est. {school.founded} · Bahir Dar
          </p>

          <h1 className="mt-6 text-balance font-serif text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
            A boarding education built on{' '}
            <span className="text-secondary">excellence</span>, discipline and
            character.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed opacity-85 sm:text-lg">
            Higa Model Boarding School educates 1,482 students from Grade 1 to
            Grade 12 through rigorous academics, supervised residential study
            and a faculty of ninety-six.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              render={<Link href="/admissions" />}
            >
              Apply for admission
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              render={<Link href="/login" />}
            >
              Portal login
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 opacity-85">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-secondary"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative w-full max-w-md lg:ml-auto">
          <div className="overflow-hidden rounded-2xl border border-primary-foreground/20 shadow-2xl">
            <Image
              src="/gallery/library-reading-hall.png"
              alt="Students studying in the Higa Model reading hall"
              width={720}
              height={900}
              className="h-[26rem] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden max-w-[15rem] rounded-xl border border-primary-foreground/20 bg-background p-4 text-foreground shadow-xl sm:block">
            <p className="font-serif text-2xl font-bold text-primary">212/214</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Grade 12 candidates placed at public universities in 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
