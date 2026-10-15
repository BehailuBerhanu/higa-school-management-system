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
import { CampusLifeGallery } from '@/components/public/campus-life-gallery'
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

      {/* Impact statistics and quick links — compact second section */}
      <section aria-labelledby="impact-heading" className="border-b bg-card">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Statistics</p>
              <h2 id="impact-heading" className="mt-2 font-serif text-3xl font-bold tracking-tight sm:text-4xl">Our impact in numbers</h2>
              <div className="mt-3 flex gap-2" aria-hidden="true"><span className="h-1 w-8 rounded-full bg-primary" /><span className="h-1 w-16 rounded-full bg-secondary" /></div>
            </div>
            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">About our school <ArrowRightIcon className="size-4" aria-hidden="true" /></Link>
          </div>

          <div className="mt-8 grid overflow-hidden rounded-2xl border bg-background sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex min-h-44 flex-col justify-center gap-2 bg-primary p-6 text-primary-foreground sm:col-span-2 lg:col-span-1">
              <p className="text-sm font-medium text-primary-foreground/80">Opened in</p>
              <p className="font-serif text-4xl font-bold tracking-tight">2017 <span className="text-xl font-medium">GC</span></p>
              <p className="text-sm text-primary-foreground/80">2009 Ethiopian Calendar</p>
              <Link href="/about" className="mt-2 inline-flex w-fit items-center gap-2 rounded-md bg-background px-3 py-2 text-sm font-semibold text-foreground hover:bg-background/90">About us <ArrowRightIcon className="size-4" /></Link>
            </div>
            <div className="flex min-h-44 flex-col justify-center border-t p-6 text-center sm:border-l sm:border-t-0">
              <p className="font-serif text-5xl font-bold text-primary">9–12</p><p className="mt-3 font-semibold">Grades served</p><p className="mt-1 text-sm text-muted-foreground">Secondary and preparatory education</p>
            </div>
            <div className="flex min-h-44 flex-col justify-center border-t p-6 text-center sm:border-l sm:border-t-0">
              <p className="font-serif text-5xl font-bold text-primary">1</p><p className="mt-3 font-semibold">Dedicated STEM Center</p><p className="mt-1 text-sm text-muted-foreground">Practical science and technology learning</p>
            </div>
            <div className="flex min-h-44 flex-col justify-center border-t p-6 text-center sm:border-l sm:border-t-0">
              <p className="font-serif text-5xl font-bold text-primary">3</p><p className="mt-3 font-semibold">Learning priorities</p><p className="mt-1 text-sm text-muted-foreground">Academic excellence, cultural identity and leadership</p>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center">
            <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Quick links</p>
            <nav aria-label="Homepage quick links" className="grid flex-1 grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
              {[
                { label: 'About', href: '/about' },
                { label: 'Academics', href: '/academics' },
                { label: 'Admissions', href: '/admissions' },
                { label: 'Campus life', href: '/campus-life' },
                { label: 'News', href: '/news' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                  {item.label}<ArrowRightIcon className="size-4 shrink-0" aria-hidden="true" />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <CampusLifeGallery />

    </>
  )
}
