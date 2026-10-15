'use client'

import Image from 'next/image'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import { useRef } from 'react'
import { Badge } from '@/components/ui/badge'
import { Reveal, SectionHeading } from '@/components/public/reveal'
import { faculty } from '@/lib/data/school'

function portraitFor(person: (typeof faculty)[number]) {
  if (person.detail.includes('Mathematics')) return '/maths-teacher.jpg'
  if (person.detail.includes('Chemistry')) return '/chemistry-teacher.jpg'
  if (person.detail.includes('History')) return '/history-teacher.jpg'
  return null
}

export function StaffCarousel() {
  const staffRef = useRef<HTMLDivElement>(null)

  function scrollStaff(direction: -1 | 1) {
    const track = staffRef.current
    if (!track) return
    const card = track.querySelector('article')
    const distance = card ? card.getBoundingClientRect().width + 24 : 340
    track.scrollBy({ left: direction * distance, behavior: 'smooth' })
  }

  return (
    <section className="border-t bg-card py-10 sm:py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 sm:gap-7">
        <Reveal>
          <SectionHeading
            eyebrow="Our people"
            title="Meet Our Staff"
            description="Meet the educators helping Higa students learn, grow and prepare for the future."
          />
        </Reveal>
        <div className="relative">
          <div
            ref={staffRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Higa Model Boarding School staff"
          >
            {faculty.filter((person) => person.role !== 'Principal').map((person) => {
              const portrait = portraitFor(person)
              return (
                <article key={person.name} className="w-[68%] shrink-0 snap-start sm:w-[34%] lg:w-[calc((100%-5rem)/5)]">
                  <div className="h-full overflow-hidden rounded-2xl border bg-background shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    {portrait ? (
                      <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
                        <Image
                          src={portrait}
                          alt={`${person.name}, ${person.role} at Higa Model Boarding School`}
                          fill
                          sizes="(max-width: 640px) 68vw, (max-width: 1024px) 34vw, 20vw"
                          className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                        />
                      </div>
                    ) : (
                      <div className="flex aspect-[4/3] items-center justify-center bg-primary/5 text-4xl font-semibold text-primary" aria-hidden="true">
                        {person.name.split(' ').map((part) => part[0]).join('')}
                      </div>
                    )}
                    <div className="p-3 text-center sm:p-4">
                      <h3 className="break-words font-serif text-base font-semibold leading-tight sm:text-lg">{person.name}</h3>
                      <Badge variant="secondary" className="mt-2">{person.role}</Badge>
                      <p className="mt-2 text-xs text-muted-foreground sm:text-sm">{person.detail}</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
          <button type="button" aria-label="Scroll staff left" onClick={() => scrollStaff(-1)} className="absolute -left-2 top-[34%] z-10 flex size-11 items-center justify-center rounded-full border bg-background/95 text-foreground shadow-md transition hover:bg-background sm:-left-5">
            <ArrowLeftIcon className="size-5" aria-hidden="true" />
          </button>
          <button type="button" aria-label="Scroll staff right" onClick={() => scrollStaff(1)} className="absolute -right-2 top-[34%] z-10 flex size-11 items-center justify-center rounded-full border bg-background/95 text-foreground shadow-md transition hover:bg-background sm:-right-5">
            <ArrowRightIcon className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
