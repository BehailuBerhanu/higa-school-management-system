import Link from 'next/link'
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  UserCheckIcon,
} from 'lucide-react'
import { PageHero } from '@/components/public/page-hero'
import { ContactForm } from '@/components/public/contact-form'
import { Reveal, SectionHeading } from '@/components/public/reveal'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { school } from '@/lib/data/school'

export const metadata = {
  title: 'Contact',
  description:
    'Contact the registrar, admissions office and boarding dean at Higa Model Boarding School in Bahir Dar, Ethiopia.',
}

const details = [
  {
    icon: MapPinIcon,
    label: 'Campus address',
    lines: [school.address, 'Amhara Region, Ethiopia'],
  },
  {
    icon: PhoneIcon,
    label: 'Telephone',
    lines: [school.phone, 'Registrar ext. 102 · Boarding ext. 118'],
  },
  {
    icon: MailIcon,
    label: 'Email',
    lines: [school.email, 'registrar@higamodel.edu.et'],
  },
  {
    icon: ClockIcon,
    label: 'Office hours',
    lines: ['Monday – Friday, 08:00 – 17:00', 'Saturday, 08:00 – 12:00'],
  },
]

const contacts = [
  {
    office: 'Admissions Office',
    person: 'W/ro Hirut Bekele',
    role: 'Academic Dean',
    email: 'admissions@higamodel.edu.et',
  },
  {
    office: 'Registrar',
    person: 'Ato Yonas Girma',
    role: 'Registrar',
    email: 'registrar@higamodel.edu.et',
  },
  {
    office: 'Boarding & Welfare',
    person: 'Ato Getachew Molla',
    role: 'Dean of Boarding',
    email: 'boarding@higamodel.edu.et',
  },
  {
    office: 'Finance',
    person: 'W/ro Meseret Tadesse',
    role: 'Bursar',
    email: 'finance@higamodel.edu.et',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Get in touch"
        title="Speak to the right office"
        description="Admissions, academic records, boarding and finance each have a named contact. Send an enquiry and we will route it for you."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {details.map((detail, index) => (
            <Reveal as="li" key={detail.label} delay={index * 60}>
              <Card className="h-full">
                <CardContent className="flex flex-col gap-3 p-6">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <detail.icon aria-hidden="true" className="size-5" />
                  </span>
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {detail.label}
                  </p>
                  <div className="flex flex-col gap-1">
                    {detail.lines.map((line) => (
                      <p key={line} className="text-sm leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </ul>

        <Separator className="my-14" />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Enquiry form"
              title="Send us a message"
              description="Complete the form and the relevant office will respond within two working days."
            />
            <Card>
              <CardContent className="p-6 sm:p-8">
                <ContactForm />
              </CardContent>
            </Card>
          </Reveal>

          <div className="flex flex-col gap-8">
            <Reveal className="flex flex-col gap-6">
              <SectionHeading eyebrow="Directory" title="Named contacts" />
              <Card>
                <CardContent className="flex flex-col p-0">
                  {contacts.map((contact) => (
                    <div
                      key={contact.office}
                      className="flex flex-col gap-1.5 border-b p-5 last:border-b-0"
                    >
                      <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                        {contact.office}
                      </p>
                      <p className="flex items-center gap-2 font-semibold">
                        <UserCheckIcon
                          aria-hidden="true"
                          className="size-4 text-muted-foreground"
                        />
                        {contact.person}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {contact.role}
                      </p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="w-fit text-sm text-primary underline-offset-4 hover:underline"
                      >
                        {contact.email}
                      </a>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </Reveal>

            <Reveal>
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>Visiting the campus</CardTitle>
                  <CardDescription>
                    Guided tours run every Wednesday at 10:00. Please register
                    at least two days in advance.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <div className="relative overflow-hidden rounded-lg border">
                    <img
                      src="/gallery/campus-quadrangle.png"
                      alt="The main entrance quadrangle of the school campus"
                      className="aspect-[16/10] w-full object-cover"
                    />
                    <span className="absolute bottom-3 left-3 rounded-md bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                      Main gate · Higa Road
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    render={<Link href="/admissions" />}
                  >
                    Book a tour via admissions
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
