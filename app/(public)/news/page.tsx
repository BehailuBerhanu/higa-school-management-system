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
        <div className="grid gap-10 lg:grid-cols-[1.5fr_0.8fr]">
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="flex flex-col gap-3">
                <SectionHeading eyebrow="Live from Telegram" title="The latest school updates" />
                <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                  Official announcements and community updates from Higa Model Boarding School's Telegram channel.
                  Posts shown here come directly from the public channel preview.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <iframe
                    src="https://t.me/s/Gogotakanbata"
                    title="Latest posts from Higa Model Boarding School on Telegram"
                    className="block h-[760px] w-full border-0 bg-background"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </CardContent>
              </Card>
            </Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <Button render={<a href="https://t.me/Gogotakanbata" target="_blank" rel="noreferrer" />}>
                Open Telegram channel
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
              <p className="text-sm text-muted-foreground">
                If the feed does not load, open the channel directly.
              </p>
            </div>
          </div>

          <aside className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <SectionHeading eyebrow="Calendar" title="Upcoming dates" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                Dates listed by the school. Check the Telegram channel for the latest announcements or changes.
              </p>
            </div>
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
                        <p className="font-semibold leading-snug">{event.title}</p>
                        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <CalendarIcon aria-hidden="true" className="size-3.5" />
                          {event.time}
                        </p>
                        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MapPinIcon aria-hidden="true" className="size-3.5" />
                          {event.location}
                        </p>
                        <span className="sr-only">{index === 0 ? 'Next event' : ''}</span>
                      </div>
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
                    <span className="font-sans font-semibold tabular-nums text-secondary">{value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>
    </>
  )
}
