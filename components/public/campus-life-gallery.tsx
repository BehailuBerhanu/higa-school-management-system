'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Reveal, SectionHeading } from '@/components/public/reveal'

const photos = [
  { src: '/students-at-classroom.jpg', title: 'In the Classroom', alt: 'Students learning in the classroom' },
  { src: '/students-at-competition.jpg', title: 'Academic Competitions', alt: 'Students taking part in a competition' },
  { src: '/students-at-exam.jpg', title: 'Exam Time', alt: 'Students taking an examination' },
  { src: '/students-at-flag.jpg', title: 'School Assembly', alt: 'Students gathered for a school flag ceremony' },
  { src: '/students-at-graduation.jpg', title: 'Graduation Day', alt: 'Students celebrating graduation' },
  { src: '/students-at-lifeexperiencetraining.jpg', title: 'Life Experience Training', alt: 'Students participating in life experience training' },
  { src: '/students-at-trip.jpg', title: 'Learning Beyond Campus', alt: 'Students on an educational trip' },
  { src: '/students-at-welcomeday.jpg', title: 'Welcome Day', alt: 'Students taking part in welcome day' },
]

export function CampusLifeGallery() {
  const galleryRef = useRef<HTMLDivElement>(null)

  function scrollGallery(direction: -1 | 1) {
    const gallery = galleryRef.current
    if (!gallery) return
    const card = gallery.querySelector('article')
    const distance = card ? card.getBoundingClientRect().width + 20 : 360
    gallery.scrollBy({ left: direction * distance, behavior: 'smooth' })
  }

  return (
    <section className="border-t bg-card py-20 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="A glimpse of campus life"
            title="Around the school"
            description="A look at learning, achievement and shared experiences at Higa Model Boarding School."
            align="center"
            className="mx-auto"
          />
        </Reveal>
        <div className="relative">
          <div
            ref={galleryRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Campus life photos"
          >
            {photos.map((photo) => (
              <article
                key={photo.src}
                className="group w-[82%] shrink-0 snap-start sm:w-[46%] lg:w-[calc((100%-3.75rem)/4)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 82vw, (max-width: 1024px) 46vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold tracking-tight">
                  {photo.title}
                </h3>
              </article>
            ))}
          </div>
          <button
            type="button"
            aria-label="Scroll campus life photos left"
            onClick={() => scrollGallery(-1)}
            className="absolute -left-2 top-[38%] z-10 flex size-11 items-center justify-center rounded-full border bg-background/95 text-foreground shadow-md transition hover:bg-background sm:-left-5"
          >
            <ArrowLeftIcon className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Scroll campus life photos right"
            onClick={() => scrollGallery(1)}
            className="absolute -right-2 top-[38%] z-10 flex size-11 items-center justify-center rounded-full border bg-background/95 text-foreground shadow-md transition hover:bg-background sm:-right-5"
          >
            <ArrowRightIcon className="size-5" aria-hidden="true" />
          </button>
        </div>
        <div className="flex justify-center">
          <Button variant="outline" render={<Link href="/campus-life" />}>
            Explore campus life
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </div>
      </div>
    </section>
  )
}
