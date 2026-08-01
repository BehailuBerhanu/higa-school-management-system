import Link from 'next/link'
import { ArrowRightIcon, CalendarIcon, MapPinIcon } from 'lucide-react'
import { PageHero } from '@/components/public/page-hero'
import { Reveal, SectionHeading } from '@/components/public/reveal'
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
import { events, news } from '@/lib/data/school'

export const metadata = {
  title: 'News & Events',
  description:
    'Announcements, academic results, campus developments and the term calendar at Higa Model Boarding School.',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function NewsPage() {
  const [lead, ...rest] = news

  return (
    <>
      <PageHero
        crumb="News & Events"
        eyebrow="Newsroom"
        title="News, notices and the term calendar"
        description="Results, campus developments, student achievement and every date guardians need for the current academic year."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <Card className="overflow-hidden lg:grid lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-0">
            <div className="relative aspect-[16/10] w-full lg:aspect-auto lg:h-full lg:min-h-[22rem]">
              <img
                src="/gallery/graduation-ceremony.png"
                alt="Graduating students celebrating at the annual ceremony"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-5 p-6 sm:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <Badge>Featured</Badge>
                <Badge variant="outline">{lead.category}</Badge>
                <span className="text-xs text-muted-foreground">
                  {formatDate(lead.date)}
                </span>
              </div>
              <h2 className="text-balance text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                {lead.title}
              </h2>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {lead.excerpt}
              </p>
              <Button
                className="w-fit"
                render={<Link href={`/news/${lead.slug}`} />}
              >
                Read the full story
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
            </div>
          </Card>
        </Reveal>

        <Separator className="my-14" />

        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="flex flex-col gap-8">
            <SectionHeading eyebrow="Latest" title="More from the newsroom" />
            <ul className="grid gap-6 sm:grid-cols-2">
              {rest.map((item, index) => (
                <Reveal as="li" key={item.slug} delay={index * 60}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge variant="outline">{item.category}</Badge>
                        <span className="text-xs text-muted-foreground">
                          {formatDate(item.date)}
                        </span>
                      </div>
                      <CardTitle className="mt-3 text-balance text-lg leading-snug">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-pretty leading-relaxed">
                        {item.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="mt-auto">
                      <Link
                        href={`/news/${item.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                      >
                        Read more
                        <ArrowRightIcon aria-hidden="true" className="size-4" />
                      </Link>
                    </CardFooter>
                  </Card>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <SectionHeading eyebrow="Calendar" title="Upcoming dates" />
            <Card>
              <CardContent className="flex flex-col gap-0 p-0">
                {events.map((event, index) => {
                  const date = new Date(event.date)
                  return (
                    <div
                      key={event.title}
                      className="flex items-start gap-4 border-b p-5 last:border-b-0"
                    >
                      <div className="flex size-14 shrink-0 flex-col items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-secondary">
                          {date.toLocaleDateString('en-GB', { month: 'short' })}
                        </span>
                        <span className="text-lg font-bold leading-none">
                          {date.getDate()}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <p className="font-semibold leading-snug">
                          {event.title}
                        </p>
                        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <CalendarIcon aria-hidden="true" className="size-3.5" />
                          {event.time}
                        </p>
                        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MapPinIcon aria-hidden="true" className="size-3.5" />
                          {event.location}
                        </p>
                      </div>
                      <span className="sr-only">
                        {index === 0 ? 'Next event' : ''}
                      </span>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Term dates at a glance</CardTitle>
                <CardDescription className="text-primary-foreground/75">
                  Academic year 2026/2027
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-3 text-sm">
                {[
                  ['Semester one', '7 Sep – 22 Jan'],
                  ['Mid-semester break', '2 Nov – 8 Nov'],
                  ['Semester two', '1 Feb – 26 Jun'],
                  ['National examinations', 'From 6 Jul'],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-baseline justify-between gap-4 border-b border-primary-foreground/15 pb-3 last:border-b-0 last:pb-0"
                  >
                    <span className="opacity-80">{label}</span>
                    <span className="font-sans font-semibold tabular-nums text-secondary">
                      {value}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
