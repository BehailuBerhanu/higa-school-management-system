'use client'

import Image from 'next/image'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import { useRef } from 'react'
import { Badge } from '@/components/ui/badge'
import { Reveal, SectionHeading } from '@/components/public/reveal'
import { faculty } from '@/lib/data/school'

function portraitFor(person: (typeof faculty)[number]) {
  if (person.role === 'Principal') return '/principal-portrait.jpg'
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
    <section className="border-t bg-card py-16 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 sm:gap-10">
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
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Higa Model Boarding School staff"
          >
            {faculty.map((person) => {
              const portrait = portraitFor(person)
              return (
                <article key={person.name} className="w-[78%] shrink-0 snap-start sm:w-[44%] lg:w-[calc((100%-4.5rem)/4)]">
                  <div className="h-full overflow-hidden rounded-2xl border bg-background shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    {portrait ? (
                      <div className="relative aspect-[4/5] overflow-hidden bg-primary/5">
                        <Image
                          src={portrait}
                          alt={`${person.name}, ${person.role} at Higa Model Boarding School`}
                          fill
                          sizes="(max-width: 640px) 78vw, (max-width: 1024px) 44vw, 25vw"
                          className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                        />
                      </div>
                    ) : (
                      <div className="flex aspect-[4/5] items-center justify-center bg-primary/5 text-4xl font-semibold text-primary" aria-hidden="true">
                        {person.name.split(' ').map((part) => part[0]).join('')}
                      </div>
                    )}
                    <div className="p-4 text-center sm:p-5">
                      <h3 className="break-words font-serif text-lg font-semibold leading-tight">{person.name}</h3>
                      <Badge variant="secondary" className="mt-2">{person.role}</Badge>
                      <p className="mt-3 text-sm text-muted-foreground">{person.detail}</p>
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
