import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRightIcon,
  CalendarDaysIcon,
  QuoteIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UsersIcon,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { AnimatedCounter } from '@/components/public/animated-counter'
import { HeroSection } from '@/components/public/hero-section'
import { Reveal, SectionHeading } from '@/components/public/reveal'
import {
  campusLife,
  events,
  gallery,
  news,
  programs,
  stats,
  testimonials,
} from '@/lib/data/school'

const pillars = [
  {
    icon: SparklesIcon,
    title: 'Academic rigour',
    body: 'Weekly assessment cycles, subject advisory and supervised evening study from Grade 7 upwards.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Residential care',
    body: 'Six boarding houses with resident tutors, an on-campus clinic and a full counselling service.',
  },
  {
    icon: UsersIcon,
    title: 'Character formation',
    body: 'House competitions, student-led societies and a service requirement in every senior year.',
  },
]

function formatDate(value: string) {
  return new Date(value).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Stats strip */}
      <section aria-label="School at a glance" className="border-b bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 70}
              className="flex flex-col items-center gap-1.5 text-center"
            >
              <p className="font-serif text-3xl font-bold text-primary sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="max-w-[10rem] text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Why Higa Model"
            title="Three commitments that shape every school day"
            description="Everything from the timetable to the boarding roster is designed around these principles."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 90}>
              <Card className="h-full">
                <CardHeader>
                  <span className="mb-2 inline-flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <pillar.icon className="size-5" aria-hidden="true" />
                  </span>
                  <CardTitle>{pillar.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {pillar.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Principal's message */}
      <section className="border-y bg-card">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[380px_1fr] lg:items-start">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border">
              <Image
                src="/principal-portrait.png"
                alt="Dr. Alemayehu Tesfaye, Principal of Higa Model Boarding School"
                width={760}
                height={950}
                className="h-[24rem] w-full object-cover lg:h-[28rem]"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Principal’s message"
              title="We measure ourselves by what our students become."
            />
            <QuoteIcon
              className="size-8 text-secondary"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                When this school opened its gates in 1998 we had four
                classrooms and thirty-one students. What we had in abundance was
                a conviction that a boarding education, done carefully, can
                change the trajectory of a family.
              </p>
              <p>
                Twenty-eight years later that conviction is unchanged. Our
                teachers still mark every script. Our house tutors still sit
                with students through evening study. And every result published
                on this platform is calculated, verified and released by the
                registrar — never estimated.
              </p>
              <p>
                If you are considering Higa Model for your child, come and walk
                the quadrangle with us. We would be glad to show you the work.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Separator className="w-10" />
              <div>
                <p className="font-serif text-base font-semibold">
                  Dr. Alemayehu Tesfaye
                </p>
                <p className="text-sm text-muted-foreground">
                  Principal · PhD Education Leadership
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              className="self-start"
              render={<Link href="/about" />}
            >
              More about the school
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Academic programmes */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Academics"
            title="Four programmes, one continuous pathway"
            description="Students progress from foundational literacy through to university entrance coaching without ever changing institutions."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, i) => (
            <Reveal key={program.title} delay={i * 80}>
              <Card className="h-full">
                <CardHeader>
                  <Badge variant="secondary" className="mb-1 w-fit">
                    {program.grades}
                  </Badge>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {program.blurb}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-wrap gap-1.5">
                    {program.subjects.map((subject) => (
                      <li key={subject}>
                        <Badge variant="outline" className="font-normal">
                          {subject}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/academics"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    View curriculum
                  </Link>
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Campus life */}
      <section className="border-y bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <Reveal>
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary">
              <span aria-hidden="true" className="h-px w-6 bg-secondary" />
              Campus life
            </p>
            <h2 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              A campus that stays awake with its students
            </h2>
            <p className="mt-3 max-w-2xl text-pretty leading-relaxed opacity-80">
              Boarding is not simply accommodation. It is the structure that
              makes our academic results possible.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {campusLife.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 70}
                className="border-t border-primary-foreground/20 pt-5"
              >
                <h3 className="font-serif text-lg font-semibold text-secondary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed opacity-80">
                  {item.blurb}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140} className="mt-12">
            <Button
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              render={<Link href="/campus-life" />}
            >
              Explore campus life
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Gallery" title="Life at Higa Model" />
          <Button variant="outline" render={<Link href="/gallery" />}>
            View full gallery
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.slice(0, 4).map((item, i) => (
            <Reveal as="li" key={item.src} delay={i * 70}>
              <figure className="group overflow-hidden rounded-xl border">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={640}
                  height={480}
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-56"
                />
                <figcaption className="border-t bg-card px-3 py-2.5 text-xs font-medium text-muted-foreground">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* News + events */}
      <section className="border-t bg-card">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_340px]">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Newsroom"
                title="Latest from the school"
              />
            </Reveal>
            <ul className="mt-10 flex flex-col">
              {news.slice(0, 4).map((item, i) => (
                <Reveal as="li" key={item.slug} delay={i * 70}>
                  <Link
                    href={`/news/${item.slug}`}
                    className="group flex flex-col gap-2 border-t py-6 transition-colors hover:bg-background/60"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="outline">{item.category}</Badge>
                      <time
                        dateTime={item.date}
                        className="text-xs text-muted-foreground"
                      >
                        {formatDate(item.date)}
                      </time>
                    </div>
                    <h3 className="text-pretty text-xl font-semibold tracking-tight group-hover:text-primary">
                      {item.title}
                    </h3>
                    <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                      {item.excerpt}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </ul>
            <Reveal className="mt-8">
              <Button variant="outline" render={<Link href="/news" />}>
                All news
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <Card className="lg:sticky lg:top-32">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CalendarDaysIcon
                    className="size-4 text-primary"
                    aria-hidden="true"
                  />
                  Upcoming events
                </CardTitle>
                <CardDescription>
                  Academic calendar, {new Date().getFullYear()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col">
                  {events.map((event, i) => (
                    <li
                      key={event.title}
                      className={
                        i === 0
                          ? 'flex gap-3 py-3'
                          : 'flex gap-3 border-t py-3'
                      }
                    >
                      <span className="flex size-12 shrink-0 flex-col items-center justify-center rounded-md bg-primary/10 leading-none text-primary">
                        <span className="text-sm font-bold">
                          {new Date(event.date).getDate()}
                        </span>
                        <span className="mt-0.5 text-[10px] font-medium uppercase">
                          {new Date(event.date).toLocaleDateString('en-GB', {
                            month: 'short',
                          })}
                        </span>
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-medium leading-snug">
                          {event.title}
                        </p>
                        <p className="mt-1 truncate text-xs text-muted-foreground">
                          {event.time} · {event.location}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="In their words"
            title="Parents, alumni and staff"
            align="center"
            className="mx-auto"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 90}>
              <Card className="h-full">
                <CardContent className="flex h-full flex-col gap-5 pt-6">
                  <QuoteIcon
                    className="size-6 shrink-0 text-secondary"
                    aria-hidden="true"
                  />
                  <blockquote className="flex-1 text-pretty leading-relaxed">
                    {item.quote}
                  </blockquote>
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-card">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <Reveal className="flex flex-col items-start gap-6 rounded-2xl bg-primary px-6 py-12 text-primary-foreground sm:px-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-balance text-3xl font-bold tracking-tight">
                Admissions for 2026/2027 are now open
              </h2>
              <p className="mt-3 text-pretty leading-relaxed opacity-85">
                Entrance assessments for Grades 1, 7 and 9 run across three
                Saturdays in August. Boarding places are limited.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                render={<Link href="/admissions" />}
              >
                Start an application
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                render={<Link href="/contact" />}
              >
                Book a visit
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
