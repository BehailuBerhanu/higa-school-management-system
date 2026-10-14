import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRightIcon,
  CalendarDaysIcon,
  FlaskConicalIcon,
  BookOpenIcon,
  QuoteIcon,
  ShieldCheckIcon,
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
  news,
  programs,
  stats,
  testimonials,
} from '@/lib/data/school'

const pillars = [
  {
    icon: FlaskConicalIcon,
    title: 'STEM Beyond the Textbook',
    body: 'Students put theory into practice in three science laboratories, while the Higa robotics team builds and tests real-world engineering projects.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'A 99.2% National Exam Pass Rate',
    body: 'A strong record built on weekly assessments, subject advising and supervised evening study — helping students approach national examinations with confidence.',
  },
  {
    icon: BookOpenIcon,
    title: 'Clubs, Creativity & Leadership',
    body: 'From debate and robotics to drama, environmental projects and the student journal, learners have space to explore interests and lead alongside their studies.',
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
            eyebrow="Why Higa Model Boarding School"
            title="Ambitious academics. Real-world discovery. Confident leaders."
            description="From hands-on science to a strong national exam record and student-led clubs, Higa gives learners room to achieve and grow."
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
        <div className="mx-auto grid min-w-0 max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[380px_minmax(0,1fr)] lg:items-start">
          <Reveal className="min-w-0">
            <div className="w-full min-w-0 overflow-hidden rounded-2xl border">
              <Image
                src="/principal-portrait.jpg"
                alt="Temesgen Daniel, Principal of Higa Model Boarding School"
                width={760}
                height={950}
                className="h-[24rem] w-full object-cover object-[center_28%] lg:h-[28rem]"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="flex min-w-0 flex-col gap-6">
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
                Higa Model Boarding School was established in 2017 through
                collaboration among the District Education Department, local
                community members and Gogota Care. From the beginning, its
                purpose has been to widen opportunity for talented students
                from across Kembata Zone.
              </p>
              <p>
                We believe students from rural and regional communities can
                reach high academic standards without giving up their cultural
                identity. Our national curriculum is strengthened by practical
                learning through the school’s dedicated STEM Center and learning
                resources built with partner support.
              </p>
              <p>
                We welcome families and community partners who share our
                ambition for young people to connect local knowledge with wider
                educational and career opportunities.
              </p>
            </div>
            <div className="flex min-w-0 flex-wrap items-center gap-4">
              <Separator className="w-10 shrink-0" />
              <div className="min-w-0">
                <p className="w-full break-words [overflow-wrap:anywhere] font-serif text-base font-semibold leading-tight">
                  Temesgen Daniel
                </p>
                <p className="text-sm text-muted-foreground">Principal</p>
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


    </>
  )
}
