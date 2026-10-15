import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  BedDoubleIcon,
  FlaskConicalIcon,
  LibraryIcon,
  TrophyIcon,
  UsersRoundIcon,
  HeartPulseIcon,
  ClockIcon,
  ArrowRightIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { PageHero } from '@/components/public/page-hero'
import { Reveal, SectionHeading } from '@/components/public/reveal'
import { campusLife } from '@/lib/data/school'

export const metadata: Metadata = {
  title: 'Campus Life',
  description:
    'Boarding houses, laboratories, library, sport, clubs and pastoral care at Higa Model Boarding School.',
}

const icons = [
  BedDoubleIcon,
  FlaskConicalIcon,
  LibraryIcon,
  TrophyIcon,
  UsersRoundIcon,
  HeartPulseIcon,
]

const dayRhythm = [
  { time: '05:30', label: 'Rising bell', detail: 'Wash, tidy, house inspection' },
  { time: '06:15', label: 'Morning study', detail: 'Supervised silent revision' },
  { time: '07:30', label: 'Breakfast', detail: 'Dining hall, house tables' },
  { time: '08:15', label: 'Assembly', detail: 'Notices, flag, house briefing' },
  { time: '08:30', label: 'Period 1–4', detail: 'Core academic block' },
  { time: '12:30', label: 'Lunch & rest', detail: 'Dining hall, then free period' },
  { time: '14:00', label: 'Period 5–7', detail: 'Practicals, electives, labs' },
  { time: '16:30', label: 'Sport & clubs', detail: 'Inter-house leagues, societies' },
  { time: '18:30', label: 'Dinner', detail: 'Dining hall' },
  { time: '19:30', label: 'Evening study', detail: 'Prep with duty tutor on call' },
  { time: '21:30', label: 'House time', detail: 'Reading, letters, quiet games' },
  { time: '22:00', label: 'Lights out', detail: 'Dormitory rounds by resident tutor' },
]

const houses = [
  { name: 'Abay', colour: 'Blue', motto: 'Steady as the river' },
  { name: 'Simien', colour: 'Green', motto: 'Climb higher' },
  { name: 'Awash', colour: 'Amber', motto: 'Carry the current' },
  { name: 'Bale', colour: 'Maroon', motto: 'Rooted and rising' },
  { name: 'Rift', colour: 'Slate', motto: 'Depth before height' },
  { name: 'Tana', colour: 'Teal', motto: 'Wide and calm' },
]

const clubs = [
  'Debate & Public Speaking',
  'Robotics & Electronics',
  'Environment Club',
  'Drama & Theatre',
  'The Higa Journal',
  'Mathematics Olympiad',
  'Choir & Traditional Music',
  'Chess Society',
  'Community Service Corps',
  'Model United Nations',
  'Photography',
  'Coding Club',
]

const pastoral = [
  {
    title: 'Resident tutors',
    body: 'Each house has two resident tutors living on site, responsible for a group of no more than twenty students.',
  },
  {
    title: 'Counselling service',
    body: 'A full-time counsellor holds confidential weekly drop-in hours and runs transition support for new boarders.',
  },
  {
    title: 'Health clinic',
    body: 'An on-campus clinic staffed by a full-time nurse, with a visiting physician twice weekly and a referral arrangement with a nearby hospital.',
  },
  {
    title: 'Guardian contact',
    body: 'Structured Sunday call windows, a termly written house report, and two parent conference days each year.',
  },
]

export default function CampusLifePage() {
  return (
    <>
      <PageHero
        eyebrow="Campus Life"
        title="A structured day, a settled home"
        description="Boarding at Higa is deliberately ordered. Students know what each hour asks of them, and every hour is supervised by an adult who knows their name."
        crumb="Campus Life"
      />

      <section className="border-b bg-background py-20 sm:py-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Facilities"
              title="What the campus provides"
              description="Twenty-two acres of teaching, residential and recreational space, maintained for continuous year-round use."
            />
          </Reveal>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {campusLife.map((item, index) => {
              const Icon = icons[index % icons.length]
              return (
                <Reveal as="li" key={item.title} delay={index * 60}>
                  <Card className="h-full">
                    <CardHeader>
                      <span className="mb-2 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription className="leading-relaxed">
                        {item.blurb}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground sm:py-24">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-6 text-center">
          <Reveal className="flex flex-col items-center gap-6">
            <h2 className="font-serif text-3xl font-semibold text-balance sm:text-4xl">
              Come and see a normal Tuesday
            </h2>
            <p className="text-pretty leading-relaxed text-primary-foreground/80">
              We do not stage open days. Book a visit on any teaching day and
              you will see the timetable exactly as the students live it.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                render={<Link href="/contact" />}
              >
                Book a visit
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                render={<Link href="/admissions" />}
              >
                Admissions process
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
