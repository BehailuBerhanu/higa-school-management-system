import type { Metadata } from 'next'
import { CheckCircle2Icon, FileTextIcon, InfoIcon } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
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
import { PageHero } from '@/components/public/page-hero'
import { Reveal, SectionHeading } from '@/components/public/reveal'
import { AdmissionEnquiryForm } from '@/components/public/admission-enquiry-form'

export const metadata: Metadata = {
  title: 'Admissions',
  description:
    'Entry points, assessment dates, requirements and boarding fees for admission to Higa Model Boarding School for the 2026/2027 academic year.',
}

const steps = [
  {
    step: '01',
    title: 'Submit an enquiry',
    body: 'Complete the enquiry form below or visit the registrar’s office. You will receive an application reference within two working days.',
  },
  {
    step: '02',
    title: 'Lodge the application file',
    body: 'Submit the completed form together with the required documents. Late files are held for the following assessment round.',
  },
  {
    step: '03',
    title: 'Sit the entrance assessment',
    body: 'Candidates sit papers in English and Mathematics. Grade 9 applicants additionally sit an integrated science paper.',
  },
  {
    step: '04',
    title: 'Interview and house allocation',
    body: 'Shortlisted candidates attend a family interview with the Dean of Boarding, after which a house is allocated.',
  },
  {
    step: '05',
    title: 'Offer and confirmation',
    body: 'Offers are issued in order of merit. A place is confirmed once the boarding agreement is signed and the first term deposit is settled.',
  },
]

const entryPoints = [
  { grade: 'Grade 1', places: 60, assessment: '8 August 2026', papers: 'Readiness interview' },
  { grade: 'Grade 7', places: 80, assessment: '15 August 2026', papers: 'English · Mathematics' },
  { grade: 'Grade 9', places: 80, assessment: '22 August 2026', papers: 'English · Mathematics · Science' },
  { grade: 'Grade 11', places: 40, assessment: '22 August 2026', papers: 'Stream-specific papers' },
]

const requirements = [
  'Completed application form signed by a parent or legal guardian',
  'Original and copy of the most recent school report',
  'Birth certificate or equivalent proof of age',
  'Transfer letter from the previous school, where applicable',
  'Four recent passport photographs',
  'Medical record including immunisation history',
]

const fees = [
  { item: 'Tuition (per semester)', day: '9,800 ETB', boarding: '9,800 ETB' },
  { item: 'Boarding & meals (per semester)', day: '—', boarding: '14,500 ETB' },
  { item: 'Laboratory & library levy (annual)', day: '1,200 ETB', boarding: '1,200 ETB' },
  { item: 'Registration (one-off)', day: '900 ETB', boarding: '900 ETB' },
]

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        crumb="Admissions"
        eyebrow="2026 / 2027 intake"
        title="Admissions are open for Grades 1, 7, 9 and 11"
        description="Entry is by assessment and interview. Boarding places are limited and offered strictly in order of merit."
      />

      {/* Process */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="Five steps from enquiry to enrolment"
          />
        </Reveal>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.step} delay={i * 70}>
              <Card className="h-full">
                <CardHeader>
                  <p className="font-serif text-3xl font-bold text-secondary">
                    {step.step}
                  </p>
                  <CardTitle className="mt-1">{step.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {step.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Entry points */}
      <section id="requirements" className="border-y bg-card">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Entry points"
              title="Assessment dates and available places"
            />
          </Reveal>

          <Reveal delay={100} className="mt-10">
            <div className="overflow-hidden rounded-xl border bg-background">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Entry point</TableHead>
                    <TableHead className="text-right">Places</TableHead>
                    <TableHead>Assessment date</TableHead>
                    <TableHead>Papers</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {entryPoints.map((row) => (
                    <TableRow key={row.grade}>
                      <TableCell className="font-medium">{row.grade}</TableCell>
                      <TableCell className="text-right font-mono tabular-nums">
                        {row.places}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{row.assessment}</Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {row.papers}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <Reveal>
              <h3 className="flex items-center gap-2 font-serif text-xl font-bold">
                <FileTextIcon
                  className="size-5 text-primary"
                  aria-hidden="true"
                />
                Required documents
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {requirements.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2Icon
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100} id="fees">
              <h3 className="font-serif text-xl font-bold">
                Fees, 2026/2027
              </h3>
              <div className="mt-5 overflow-hidden rounded-xl border bg-background">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead className="text-right">Day</TableHead>
                      <TableHead className="text-right">Boarding</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {fees.map((row) => (
                      <TableRow key={row.item}>
                        <TableCell className="text-sm">{row.item}</TableCell>
                        <TableCell className="text-right font-mono text-sm tabular-nums">
                          {row.day}
                        </TableCell>
                        <TableCell className="text-right font-mono text-sm tabular-nums">
                          {row.boarding}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <Alert className="mt-5">
                <InfoIcon />
                <AlertTitle>Bursaries available</AlertTitle>
                <AlertDescription>
                  Up to twenty full and forty partial bursaries are awarded each
                  year on combined merit and need. Indicate your interest on the
                  enquiry form.
                </AlertDescription>
              </Alert>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Enquiry"
            title="Start an application"
            description="Submit the form and the registrar’s office will respond with an application reference and assessment slot."
            align="center"
          />
        </Reveal>
        <Reveal delay={100} className="mt-10">
          <AdmissionEnquiryForm />
        </Reveal>
      </section>
    </>
  )
}
