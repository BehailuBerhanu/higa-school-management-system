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
  GraduationCapIcon,
  NewspaperIcon,
  MailIcon,
  BookMarkedIcon,
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

      {/* Principal's message — restored to the original two-column portrait layout */}
      <section className="border-y bg-card">
        <div className="mx-auto grid min-w-0 max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[380px_minmax(0,1fr)] lg:items-start">
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
            <QuoteIcon className="size-8 text-secondary" aria-hidden="true" />
            <div className="flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
              <p>Higa Model Boarding School was established in 2017 through collaboration among the District Education Department, local community members and Gogota Care. From the beginning, its purpose has been to widen opportunity for talented students from across Kembata Zone.</p>
              <p>We believe students from rural and regional communities can reach high academic standards without giving up their cultural identity. Our national curriculum is strengthened by practical learning through the school’s dedicated STEM Center and learning resources built with partner support.</p>
              <p>We welcome families and community partners who share our ambition for young people to connect local knowledge with wider educational and career opportunities.</p>
            </div>
            <div className="flex min-w-0 flex-wrap items-center gap-4">
              <Separator className="w-10 shrink-0" />
              <div className="min-w-0">
                <p className="w-full break-words [overflow-wrap:anywhere] font-serif text-base font-semibold leading-tight">Temesgen Daniel</p>
                <p className="text-sm text-muted-foreground">Principal</p>
              </div>
            </div>
            <Button variant="outline" className="self-start" render={<Link href="/about" />}>
              More about the school
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Compact impact panel and visual quick links */}
      <section aria-labelledby="impact-heading" className="relative overflow-hidden border-b bg-background">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 via-blue-50 to-emerald-50 p-5 shadow-sm ring-1 ring-blue-100 sm:p-8 lg:p-10">
            <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-3 flex gap-1.5" aria-hidden="true"><span className="h-1.5 w-8 rounded-full bg-emerald-600" /><span className="h-1.5 w-5 rounded-full bg-amber-400" /></div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600">Our impact</p>
                <h2 id="impact-heading" className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Our Impact in Numbers</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">A legacy of learning, helping students grow into confident future leaders.</p>
              </div>
              <Link href="/about" className="inline-flex w-fit items-center gap-2 rounded-full px-1 py-2 text-sm font-semibold text-blue-800 transition hover:gap-3">Discover our school <ArrowRightIcon className="size-4" aria-hidden="true" /></Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <Link href="/about" className="group flex min-h-36 items-start gap-4 rounded-2xl border border-white/90 bg-white/90 p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md sm:p-5">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 ring-1 ring-blue-200 sm:size-14"><CalendarDaysIcon className="size-6 sm:size-7" aria-hidden="true" /></span>
                <span className="min-w-0 flex-1"><span className="block text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">2017</span><span className="mt-1 block font-semibold text-slate-800">Opened in</span><span className="mt-1 block text-sm leading-5 text-slate-600">2009 Ethiopian Calendar</span></span><ArrowRightIcon className="mt-1 size-5 shrink-0 text-slate-500 transition group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link href="/academics" className="group flex min-h-36 items-start gap-4 rounded-2xl border border-white/90 bg-white/90 p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md sm:p-5">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200 sm:size-14"><GraduationCapIcon className="size-6 sm:size-7" aria-hidden="true" /></span>
                <span className="min-w-0 flex-1"><span className="block text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">Grades 9–12</span><span className="mt-1 block font-semibold text-slate-800">We educate</span><span className="mt-1 block text-sm leading-5 text-slate-600">Secondary and preparatory education</span></span><ArrowRightIcon className="mt-1 size-5 shrink-0 text-slate-500 transition group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link href="/academics" className="group flex min-h-36 items-start gap-4 rounded-2xl border border-white/90 bg-white/90 p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md sm:p-5">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700 ring-1 ring-violet-200 sm:size-14"><FlaskConicalIcon className="size-6 sm:size-7" aria-hidden="true" /></span>
                <span className="min-w-0 flex-1"><span className="block text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">STEM Center</span><span className="mt-1 block font-semibold text-slate-800">Innovation & discovery</span><span className="mt-1 block text-sm leading-5 text-slate-600">Practical science and technology learning</span></span><ArrowRightIcon className="mt-1 size-5 shrink-0 text-slate-500 transition group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link href="/about" className="group flex min-h-36 items-start gap-4 rounded-2xl border border-white/90 bg-white/90 p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md sm:p-5">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-700 ring-1 ring-orange-200 sm:size-14"><UsersIcon className="size-6 sm:size-7" aria-hidden="true" /></span>
                <span className="min-w-0 flex-1"><span className="block text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">3 priorities</span><span className="mt-1 block font-semibold text-slate-800">For a brighter future</span><span className="mt-1 block text-sm leading-5 text-slate-600">Academic excellence, cultural identity and leadership</span></span><ArrowRightIcon className="mt-1 size-5 shrink-0 text-slate-500 transition group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="mt-9 sm:mt-12">
            <div className="mb-5 flex gap-1.5" aria-hidden="true"><span className="h-1.5 w-8 rounded-full bg-emerald-600" /><span className="h-1.5 w-5 rounded-full bg-amber-400" /></div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600">Quick links</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Explore Our School</h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">Find what you need, all in one place.</p>
            <nav aria-label="Homepage quick links" className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {[
                { label: 'About Us', href: '/about', Icon: BookOpenIcon, color: 'bg-blue-100 text-blue-700 ring-blue-200' },
                { label: 'Academics', href: '/academics', Icon: GraduationCapIcon, color: 'bg-emerald-100 text-emerald-700 ring-emerald-200' },
                { label: 'Admissions', href: '/admissions', Icon: BookMarkedIcon, color: 'bg-violet-100 text-violet-700 ring-violet-200' },
                { label: 'Campus Life', href: '/campus-life', Icon: UsersIcon, color: 'bg-orange-100 text-orange-700 ring-orange-200' },
                { label: 'News', href: '/news', Icon: NewspaperIcon, color: 'bg-cyan-100 text-cyan-700 ring-cyan-200' },
                { label: 'Contact', href: '/contact', Icon: MailIcon, color: 'bg-pink-100 text-pink-700 ring-pink-200' },
              ].map(({ label, href, Icon, color }) => (
                <Link key={href} href={href} className="group flex min-h-[76px] min-w-0 items-center gap-3 rounded-xl border border-blue-100 bg-white px-3 py-3 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:flex-col sm:items-start sm:gap-3 sm:p-4 lg:min-h-32">
                  <span className={`flex size-10 shrink-0 items-center justify-center rounded-full ring-1 transition group-hover:scale-105 sm:size-11 ${color}`}><Icon className="size-5 sm:size-6" aria-hidden="true" /></span>
                  <span className="flex min-w-0 flex-1 items-center justify-between gap-1 text-sm font-semibold text-slate-800 sm:w-full sm:text-base"><span className="break-words">{label}</span><ArrowRightIcon className="size-4 shrink-0 text-blue-700 transition group-hover:translate-x-1" aria-hidden="true" /></span>
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
