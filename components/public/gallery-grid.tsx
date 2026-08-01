'use client'

import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, ExpandIcon } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Item = { src: string; alt: string; caption: string }

export function GalleryGrid({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const active = openIndex === null ? null : items[openIndex]

  function step(direction: 1 | -1) {
    setOpenIndex((current) => {
      if (current === null) return current
      return (current + direction + items.length) % items.length
    })
  }

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {items.map((item, index) => (
          <li
            key={item.src}
            className={cn(
              index === 0 && 'col-span-2 row-span-2 lg:col-span-2',
              index === 5 && 'lg:col-span-2',
            )}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group relative block size-full overflow-hidden rounded-xl border bg-muted text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <img
                src={item.src || '/placeholder.svg'}
                alt={item.alt}
                className={cn(
                  'w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none',
                  index === 0 ? 'aspect-square lg:aspect-[4/3]' : 'aspect-[4/3]',
                )}
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-3 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-sm font-semibold text-primary-foreground">
                  {item.caption}
                </span>
                <ExpandIcon
                  aria-hidden="true"
                  className="size-4 shrink-0 text-secondary"
                />
              </span>
              <span className="sr-only">View {item.caption} larger</span>
            </button>
          </li>
        ))}
      </ul>

      <Dialog
        open={openIndex !== null}
        onOpenChange={(open) => {
          if (!open) setOpenIndex(null)
        }}
      >
        <DialogContent className="max-w-4xl p-2 sm:p-3">
          <DialogTitle className="sr-only">
            {active?.caption ?? 'Gallery image'}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {active?.alt ?? ''}
          </DialogDescription>
          {active ? (
            <div className="flex flex-col gap-3">
              <img
                src={active.src || '/placeholder.svg'}
                alt={active.alt}
                className="max-h-[70vh] w-full rounded-lg object-contain"
              />
              <div className="flex items-center justify-between gap-3 px-1 pb-1">
                <p className="text-sm font-semibold">{active.caption}</p>
                <div className="flex items-center gap-2">
                  <span className="font-sans text-xs tabular-nums text-muted-foreground">
                    {(openIndex ?? 0) + 1} / {items.length}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Previous image"
                    onClick={() => step(-1)}
                  >
                    <ChevronLeftIcon />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Next image"
                    onClick={() => step(1)}
                  >
                    <ChevronRightIcon />
                  </Button>
                </div>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  )
}
