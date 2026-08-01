import { PageHero } from '@/components/public/page-hero'
import { GalleryGrid } from '@/components/public/gallery-grid'
import { Reveal, SectionHeading } from '@/components/public/reveal'
import { gallery } from '@/lib/data/school'

export const metadata = {
  title: 'Gallery',
  description:
    'Photographs of the campus, laboratories, boarding houses, sport and student life at Higa Model Boarding School.',
}

export default function GalleryPage() {
  return (
    <>
      <PageHero
        crumb="Gallery"
        eyebrow="Campus"
        title="A look around the school"
        description="Classrooms, laboratories, the reading hall, boarding houses and the moments in between."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal className="mb-10">
          <SectionHeading
            eyebrow="Photographs"
            title="Life at Higa Model"
            description="Select any photograph to view it larger. Images are from the current and previous academic years."
          />
        </Reveal>
        <Reveal>
          <GalleryGrid items={gallery} />
        </Reveal>
      </section>
    </>
  )
}
