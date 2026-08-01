import Link from 'next/link'
import Image from 'next/image'
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { school } from '@/lib/data/school'

const columns = [
  {
    heading: 'School',
    links: [
      { href: '/about', label: 'About us' },
      { href: '/academics', label: 'Academic programmes' },
      { href: '/campus-life', label: 'Campus life' },
      { href: '/gallery', label: 'Gallery' },
    ],
  },
  {
    heading: 'Admissions',
    links: [
      { href: '/admissions', label: 'How to apply' },
      { href: '/admissions#requirements', label: 'Entry requirements' },
      { href: '/admissions#fees', label: 'Boarding & fees' },
      { href: '/contact', label: 'Visit the campus' },
    ],
  },
  {
    heading: 'Portals',
    links: [
      { href: '/login', label: 'Student login' },
      { href: '/login', label: 'Teacher login' },
      { href: '/login', label: 'Administration' },
      { href: '/news', label: 'News & notices' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt={school.name} width={56} height={56} className="h-14 w-14" />
              <div>
                <h3 className="font-serif text-lg font-bold">{school.name}</h3>
                <p className="text-xs opacity-80">Model Boarding School</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed opacity-80">
              A boarding institution founded in {school.founded}, educating
              students from Grade 1 through Grade 12 with rigorous academics
              and residential care.
            </p>
            <ul className="mt-6 flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPinIcon
                  className="mt-0.5 size-4 shrink-0 opacity-70"
                  aria-hidden="true"
                />
                <span className="opacity-90">{school.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneIcon
                  className="size-4 shrink-0 opacity-70"
                  aria-hidden="true"
                />
                <a href={`tel:${school.phone}`} className="hover:underline">
                  {school.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MailIcon
                  className="size-4 shrink-0 opacity-70"
                  aria-hidden="true"
                />
                <a href={`mailto:${school.email}`} className="hover:underline">
                  {school.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3 lg:max-w-2xl">
            {columns.map((col) => (
              <div key={col.heading}>
                <h2 className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
                  {col.heading}
                </h2>
                <ul className="mt-4 flex flex-col gap-2.5 text-sm">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="opacity-80 transition-opacity hover:opacity-100 hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-9 bg-primary-foreground/15" />

        <div className="flex flex-col gap-3 text-xs opacity-70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {school.name}. All rights
            reserved.
          </p>
          <p className="tracking-[0.14em] uppercase">{school.motto}</p>
        </div>
      </div>
    </footer>
  )
}
