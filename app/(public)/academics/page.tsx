import type { Metadata } from 'next'
import { CheckIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { PageHero } from '@/components/public/page-hero'
import { Reveal, SectionHeading } from '@/components/public/reveal'
import { programs } from '@/lib/data/school'

export const metadata: Metadata = {
  title: 'Academics',
  description:
    'Academic programmes, curriculum, assessment structure and grading scale at Higa Model Boarding School, Grades 9 to 12.',
}

const assessment = [
  { component: 'Continuous assignment', weight: 10, detail: 'Homework, class work and practical write-ups across the semester.' },
  { component: 'Mid-semester examination I', weight: 20, detail: 'Written paper in week six covering the first curriculum block.' },
  { component: 'Mid-semester examination II', weight: 20, detail: 'Written paper in week twelve covering the second block.' },
  { component: 'Final examination', weight: 50, detail: 'Comprehensive paper sat under examination conditions in week eighteen.' },
]

const faqs = [
  {
    q: 'How is the semester average calculated?',
    a: 'Each subject total is the sum of the four assessment components out of one hundred. The semester average is the arithmetic mean of every subject total the student is registered for. All arithmetic is performed by the records system — no mark is calculated by hand.',
  },
  {
    q: 'When are results released to students?',
    a: 'Subject teachers submit marks at the end of the assessment window. The registrar verifies the submission and publishes results per class and semester. Only published results are visible in the student portal.',
  },
  {
    q: 'Can a mark be corrected after publication?',
    a: 'Yes. A correction must be requested in writing by the subject teacher and approved by the Academic Dean. Every change is recorded in the audit log with the previous and new value.',
  },
  {
    q: 'What determines promotion to the next grade?',
    a: 'A student must achieve an overall average of at least fifty and must not carry a failing grade in more than one core subject. Borderline cases are reviewed individually by the promotion committee.',
  },
  {
    q: 'Are the grading bands fixed?',
    a: 'The bands below apply to the current academic year. They are configurable by the administration and reviewed annually before the first semester begins.',
  },
]

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        crumb="Academics"
        eyebrow="Curriculum"
        title="A focused pathway from Grade 9 to university entrance"
        description="The Ethiopian national secondary curriculum, enriched with university-preparatory depth and practical STEM learning."
      />

      {/* Programmes */}
      <section className="mx-auto w-full max-w-7xl min-w-0 px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Programmes"
            title="Secondary and preparatory study"
            description="Each stage has its own timetable structure, but assessment weighting is identical across the school."
          />
        </Reveal>
        <div className="mt-12 flex flex-col gap-6">
          {programs.map((program, i) => (
            <Reveal key={program.title} delay={i * 70}>
              <Card>
                <div className="grid gap-6 p-6 lg:grid-cols-[220px_1fr_260px] lg:items-start">
                  <div>
                    <Badge variant="secondary">{program.grades}</Badge>
                    <h3 className="mt-3 font-serif text-2xl font-bold tracking-tight">
                      {program.title}
                    </h3>
                  </div>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    {program.blurb}
                  </p>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Core subjects
                    </p>
                    <ul className="mt-3 flex flex-col gap-1.5">
                      {program.subjects.map((subject) => (
                        <li
                          key={subject}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckIcon
                            className="size-4 shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          {subject}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Assessment */}
      <section className="border-y bg-card">
        <div className="mx-auto grid w-full max-w-7xl min-w-0 gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2">
          <Reveal className="min-w-0">
            <SectionHeading
              eyebrow="Assessment"
              title="How a subject mark is built"
              description="Every subject in every grade uses the same four components, totalling one hundred marks per semester."
            />
            <div className="mt-8 w-full min-w-0 max-w-full overflow-x-auto rounded-xl border bg-background">
              <Table className="w-full min-w-[320px]">
                <TableHeader>
                  <TableRow>
                    <TableHead>Component</TableHead>
                    <TableHead className="w-20 text-right">Marks</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {assessment.map((row) => (
                    <TableRow key={row.component}>
                      <TableCell>
                        <p className="font-medium">{row.component}</p>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          {row.detail}
                        </p>
                      </TableCell>
                      <TableCell className="text-right align-top font-mono font-semibold tabular-nums">
                        {row.weight}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-muted/50">
                    <TableCell className="font-semibold">
                      Semester total
                    </TableCell>
                    <TableCell className="text-right font-mono font-bold tabular-nums">
                      100
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Reveal>

          <Reveal delay={120} className="min-w-0">
            <SectionHeading
              eyebrow="Grading system"
              title="Marks and performance bands"
              description="Student performance is assessed using numerical marks out of 100. The school does not use letter grades."
            />
            <div className="mt-8 overflow-hidden rounded-xl border bg-background">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mark range</TableHead>
                    <TableHead>Performance description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { range: '97+', description: 'Exceptional' },
                    { range: '93–96', description: 'Outstanding' },
                    { range: '90–92', description: 'Excellent' },
                    { range: '87–89', description: 'Very Good' },
                    { range: '83–86', description: 'Good' },
                    { range: '80–82', description: 'Solid (Minimum Continuation Threshold)' },
                    { range: '78–79', description: 'Unsatisfactory (Reassessment Required)' },
                    { range: '74–77', description: 'Poor (Final Warning Issued)' },
                    { range: '73 & below', description: 'Dismissal from school' },
                  ].map((band) => (
                    <TableRow key={band.range}>
                      <TableCell className="font-mono font-semibold tabular-nums">
                        {band.range}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {band.description}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Academic calendar */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Structure"
            title="The academic year"
            description="Two semesters of eighteen teaching weeks, each closing with a published result cycle."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              title: 'Semester one',
              window: 'September – January',
              items: [
                'Weeks 1–5 · First curriculum block',
                'Week 6 · Mid-semester examination I',
                'Weeks 7–11 · Second curriculum block',
                'Week 12 · Mid-semester examination II',
                'Weeks 13–17 · Revision and practicals',
                'Week 18 · Final examination and publication',
              ],
            },
            {
              title: 'Semester two',
              window: 'February – July',
              items: [
                'Weeks 1–5 · Third curriculum block',
                'Week 6 · Mid-semester examination I',
                'Weeks 7–11 · Fourth curriculum block',
                'Week 12 · Mid-semester examination II',
                'Weeks 13–17 · National examination preparation',
                'Week 18 · Final examination, publication and promotion',
              ],
            },
          ].map((sem, i) => (
            <Reveal key={sem.title} delay={i * 90}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{sem.title}</CardTitle>
                  <CardDescription>{sem.window}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="flex flex-col gap-2.5">
                    {sem.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-sm leading-relaxed"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-secondary"
                        />
                        {item}
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t bg-card">
        <div className="mx-auto w-full max-w-3xl min-w-0 px-4 py-14 sm:px-6 sm:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="Questions"
              title="Assessment and records"
              align="center"
            />
          </Reveal>
          <Reveal delay={100} className="mt-10">
            <Accordion className="w-full min-w-0 max-w-full overflow-hidden rounded-xl border bg-background px-3 sm:px-4">
              {faqs.map((faq) => (
                <AccordionItem key={faq.q} value={faq.q}>
                  <AccordionTrigger className="min-w-0 whitespace-normal break-words text-left text-base font-medium">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="break-words text-pretty leading-relaxed text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </>
  )
}
