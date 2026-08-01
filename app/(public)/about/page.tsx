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
    'The history, mission, values and leadership of Higa Model Boarding School, a boarding institution in Bahir Dar founded in 1998.',
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
    year: '1998',
    title: 'The school opens',
    body: 'Four classrooms and thirty-one students on a leased plot on Higa Road.',
  },
  {
    year: '2004',
    title: 'First boarding house',
    body: 'Abay House opens with forty-eight residential places and two resident tutors.',
  },
  {
    year: '2011',
    title: 'Secondary programme accredited',
    body: 'The Regional Education Bureau accredits Grades 9 and 10, and the first national cohort sits its examination.',
  },
  {
    year: '2017',
    title: 'Preparatory streams introduced',
    body: 'Natural and social science streams open for Grades 11 and 12.',
  },
  {
    year: '2023',
    title: 'Digital academic records',
    body: 'Paper mark books are retired in favour of a single verified records platform.',
  },
  {
    year: '2026',
    title: 'Alemu Science Wing',
    body: 'Three teaching laboratories and a demonstration theatre open on the north campus.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="Our story"
        title="Twenty-eight years of building a boarding school worth trusting"
        description="Higa Model began as four classrooms in Bahir Dar. It is now a full Grade 1 to Grade 12 institution with 1,482 students and 96 academic staff."
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
                We are a selective but not exclusive school. Entry is by
                assessment, and once a student is admitted the school takes
                responsibility for the outcome. That means small teaching
                groups, supervised study, and a mark book that is checked every
                single term.
              </p>
              <p>
                Our residential programme exists to protect study time. Students
                arrive at breakfast having slept properly, sit in class with
                their preparation done, and return to a supervised hall in the
                evening. It is unglamorous and it works.
              </p>
              <p>
                We publish our results in full — including the two candidates in
                2026 who did not place. Accountability is not a marketing
                exercise here.
              </p>
            </div>
            <dl className="mt-2 grid grid-cols-2 gap-6 border-t pt-6 sm:grid-cols-4">
              {[
                { k: 'Founded', v: String(school.founded) },
                { k: 'Students', v: '1,482' },
                { k: 'Staff', v: '96' },
                { k: 'Ratio', v: '1 : 15' },
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
                <Card className="h-full">
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
              <Reveal key={person.name} delay={i * 80}>
                <Card className="h-full">
                  <CardContent className="flex flex-col gap-3 pt-6">
                    <span
                      aria-hidden="true"
                      className="flex size-14 items-center justify-center rounded-full bg-primary font-serif text-lg font-bold text-primary-foreground"
                    >
                      {person.name
                        .replace(/^(Dr\.|W\/ro|Ato)\s/, '')
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                    <div>
                      <p className="font-serif text-base font-semibold">
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
