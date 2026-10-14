import type { Metadata } from 'next'
import Image from 'next/image'
import {
  AwardIcon,
  BookOpenIcon,
  HeartHandshakeIcon,
  ScaleIcon,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { PageHero } from '@/components/public/page-hero'
import { Reveal, SectionHeading } from '@/components/public/reveal'
import { faculty, school } from '@/lib/data/school'

export const metadata: Metadata = {
  title: 'About the school',
  description:
    'The history, mission, values and leadership of Higa Model Boarding School, a selective secondary boarding school in Kembata Zone, Ethiopia, established in 2009 EC (2017 GC).',
}

const values = [
  {
    icon: BookOpenIcon,
    title: 'Scholarship',
    body: 'We teach the syllabus completely and assess it honestly. No result is ever inflated.',
  },
  {
    icon: ScaleIcon,
    title: 'Integrity',
    body: 'Every academic record is auditable. Marks are entered by the subject teacher and released by the registrar.',
  },
  {
    icon: HeartHandshakeIcon,
    title: 'Care',
    body: 'A boarding school stands in for the family. Our tutors know every student in their house by name.',
  },
  {
    icon: AwardIcon,
    title: 'Ambition',
    body: 'We prepare students for competitive university entry and expect them to aim for it.',
  },
]

const milestones = [
  {
    year: '2009 EC / 2017 GC',
    title: 'Higa Model opens',
    body: 'The school launches on a campus that previously served as a university property, through collaboration among the District Education Department, local community members and Gogota Care.',
  },
  {
    year: '2009 EC / 2017 GC',
    title: 'Community partnership',
    body: 'The school begins its work as a regional boarding school through collaboration between education leaders, the local community and Gogota Care.',
  },
  {
    year: '2017+',
    title: 'Selective secondary education',
    body: 'Higa serves high-achieving students from across Kembata Zone, with admission based on strong performance in the national Grade 8 examination.',
  },
  {
    year: 'STEM',
    title: 'Practical science and technology',
    body: 'A dedicated STEM Center developed with Stempower supports practical learning in ICT, engineering concepts and science experiments.',
  },
  {
    year: 'Library',
    title: 'Learning resources strengthened',
    body: 'WEEMA International and Roots Ethiopia support improvements to the central library, textbooks, reference books and science-learning resources.',
  },
  {
    year: 'Today',
    title: 'Local roots, wider horizons',
    body: 'Higa’s vision is to help students from regional and rural communities achieve academic excellence while staying connected to their cultural identity.'
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="Our story"
        title="A regional school with an ambitious vision"
        description="Established in 2009 EC (2017 GC), Higa Model Boarding School serves high-achieving students from across Kembata Zone, pairing academic ambition with cultural identity and opportunity."
      />

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="flex flex-col gap-5">
            <SectionHeading
              eyebrow="Mission"
              title="To give every student the academic foundation and the character to earn their own place."
            />
            <div className="flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                Higa Model is a selective regional boarding school. Students are chosen from across Kembata Zone based on outstanding performance in the national Grade 8 examination.
              </p>
              <p>
                The school delivers Ethiopia’s national secondary curriculum and extends learning through a dedicated STEM Center, computer facilities and practical science and engineering activities.
              </p>
              <p>
                The school’s founding vision is to show that students from rural and regional communities can excel academically without losing their cultural identity.
              </p>
            </div>
            <dl className="mt-2 grid grid-cols-2 gap-6 border-t pt-6 sm:grid-cols-4">
              {[
                { k: 'Founded', v: String(school.founded) },
                { k: 'Grades', v: '9–12' },
                { k: 'Reach', v: 'Kembata Zone' },
                { k: 'Focus', v: 'STEM' },
              ].map((item) => (
                <div key={item.k}>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {item.k}
                  </dt>
                  <dd className="mt-1 font-serif text-2xl font-bold text-primary">
                    {item.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl border">
              <Image
                src="/gallery/campus-quadrangle.png"
                alt="The central quadrangle of Higa Model Boarding School"
                width={960}
                height={720}
                className="h-[22rem] w-full object-cover lg:h-[30rem]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="border-y bg-card">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Values"
              title="Four values, applied consistently"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 80}>
                <Card className="h-full min-w-0 overflow-hidden">
                  <CardHeader>
                    <span className="mb-2 inline-flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <value.icon className="size-5" aria-hidden="true" />
                    </span>
                    <CardTitle>{value.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {value.body}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="Milestones" title="How the school grew" />
        </Reveal>
        <ol className="mt-12 flex flex-col">
          {milestones.map((item, i) => (
            <Reveal as="li" key={item.year} delay={i * 60}>
              <div className="flex flex-col gap-2 border-t py-6 sm:flex-row sm:gap-10">
                <p className="w-24 shrink-0 font-serif text-2xl font-bold text-secondary">
                  {item.year}
                </p>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Leadership */}
      <section className="border-t bg-card">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Leadership"
              title="The senior team"
              description="Four senior leaders share responsibility for academics, boarding and pastoral care."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {faculty.map((person, i) => (
              <Reveal key={person.name} delay={i * 80} className="min-w-0">
                <Card className="h-full min-w-0 overflow-hidden">
                  <CardContent className="flex min-w-0 flex-col items-stretch gap-3 pt-6">
                    {(() => {
                      const portrait =
                        person.role === 'Principal'
                          ? '/principal-portrait.jpg'
                          : person.detail.includes('Mathematics')
                            ? '/maths-teacher.jpg'
                            : person.detail.includes('Chemistry')
                              ? '/chemistry-teacher.jpg'
                              : null

                      return portrait ? (
                        <div className="relative mx-auto aspect-[4/5] w-full max-w-[18rem] overflow-hidden rounded-xl bg-primary/5 sm:max-w-none">
                          <Image
                            src={portrait}
                            alt={`${person.name}, ${person.role} at Higa Model Boarding School`}
                            fill
                            sizes="(max-width: 639px) 80vw, (max-width: 1023px) 40vw, 22vw"
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <span
                          aria-hidden="true"
                          className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary font-serif text-lg font-bold text-primary-foreground"
                        >
                          {person.name
                            .replace(/^(Dr\.|W\/ro|Ato)\s/, '')
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </span>
                      )
                    })()}
                    <div className="w-full min-w-0 text-center">
                      <p className="mx-auto w-full min-w-0 whitespace-normal break-words [overflow-wrap:anywhere] font-serif text-base font-semibold leading-tight">
                        {person.name}
                      </p>
                      <Badge variant="secondary" className="mt-2">
                        {person.role}
                      </Badge>
                      <p className="mt-3 text-sm text-muted-foreground">
                        {person.detail}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
