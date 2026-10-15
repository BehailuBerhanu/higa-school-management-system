'use client'

import { ArrowLeftIcon, ArrowRightIcon, PlayIcon } from 'lucide-react'
import { useRef } from 'react'
import { Reveal, SectionHeading } from '@/components/public/reveal'

const videos = [
  {
    title: 'Life at Higa',
    source: 'Facebook Reel',
    embed: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1057882577166704%2F&show_text=false&width=560',
    link: 'https://www.facebook.com/reel/1057882577166704/',
    aspect: 'aspect-[9/16]',
  },
  {
    title: 'Higa Model Boarding School',
    source: 'YouTube',
    embed: 'https://www.youtube.com/embed/WJ1dngMtxvI',
    link: 'https://youtu.be/WJ1dngMtxvI?si=6s09-jappFSMVYCO',
    aspect: 'aspect-video',
  },
]

export function CampusLifeVideos() {
  const trackRef = useRef<HTMLDivElement>(null)

  function scroll(direction: -1 | 1) {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('article')
    track.scrollBy({ left: direction * (card ? card.getBoundingClientRect().width + 24 : 320), behavior: 'smooth' })
  }

  return (
    <section className="border-b bg-muted/30 py-12 sm:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="See campus life"
            title="Life at Higa, in motion"
            description="Take a closer look at moments and experiences from our school community."
          />
        </Reveal>
        <div className="relative">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Campus life videos"
          >
            {videos.map((video) => (
              <article key={video.title} className="w-[82%] shrink-0 snap-start sm:w-[46%] lg:w-[32%]">
                <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
                  <div className={`relative ${video.aspect} overflow-hidden bg-black`}>
                    <iframe
                      src={video.embed}
                      title={video.title}
                      className="absolute inset-0 h-full w-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="eager"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                  <div className="flex items-center gap-3 p-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <PlayIcon className="size-4" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="truncate font-medium">{video.title}</h3>
                      <p className="text-sm text-muted-foreground">{video.source}</p>
                      <a href={video.link} target="_blank" rel="noreferrer" className="mt-1 inline-block text-sm font-medium text-primary underline underline-offset-4">If the video doesn’t load, watch on {video.source}</a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <button type="button" aria-label="Scroll videos left" onClick={() => scroll(-1)} className="absolute -left-2 top-[38%] z-10 flex size-10 items-center justify-center rounded-full border bg-background/95 shadow-md sm:-left-4">
            <ArrowLeftIcon className="size-5" aria-hidden="true" />
          </button>
          <button type="button" aria-label="Scroll videos right" onClick={() => scroll(1)} className="absolute -right-2 top-[38%] z-10 flex size-10 items-center justify-center rounded-full border bg-background/95 shadow-md sm:-right-4">
            <ArrowRightIcon className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
