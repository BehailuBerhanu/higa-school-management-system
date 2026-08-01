'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MenuIcon, PhoneIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { school } from '@/lib/data/school'
import { cn } from '@/lib/utils'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/academics', label: 'Academics' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/campus-life', label: 'Campus Life' },
  { href: '/news', label: 'News' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-primary text-primary-foreground md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-6 text-xs">
          <p className="tracking-wide">
            Academic year {school.academicYear} · Admissions open for
            2026/2027
          </p>
          <a
            href={`tel:${school.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-1.5 font-medium hover:underline"
          >
            <PhoneIcon className="size-3.5" aria-hidden="true" />
            {school.phone}
          </a>
        </div>
      </div>

      <div
        className={cn(
          'border-b bg-background/85 backdrop-blur transition-shadow',
          scrolled && 'shadow-sm',
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
          <Link href="/" aria-label={`${school.name} home`} className="flex items-center gap-3">
            <Image src="/logo.png" alt={school.name} width={48} height={48} className="h-12 w-12" />
            <div className="hidden sm:block">
              <div className="text-sm font-bold text-primary">{school.name}</div>
              <div className="text-xs text-muted-foreground">Model Boarding School</div>
            </div>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
          >
            {nav.map((item) => {
              const active =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'relative rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    active
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {item.label}
                  {active ? (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-secondary"
                    />
                  ) : null}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className="hidden sm:inline-flex"
              render={<Link href="/login" />}
            >
              Portal login
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                render={
                  <Button variant="outline" size="icon" className="lg:hidden">
                    <MenuIcon />
                    <span className="sr-only">Open navigation menu</span>
                  </Button>
                }
              />
              <SheetContent side="right" className="w-[85vw] max-w-sm">
                <SheetHeader>
                  <SheetTitle className="text-left flex items-center gap-2">
                    <Image src="/logo.png" alt={school.name} width={40} height={40} className="h-10 w-10" />
                    <span>{school.name}</span>
                  </SheetTitle>
                </SheetHeader>
                <nav
                  aria-label="Mobile"
                  className="flex flex-col gap-1 px-4 pb-6"
                >
                  {nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button
                    className="mt-3"
                    render={
                      <Link href="/login" onClick={() => setOpen(false)} />
                    }
                  >
                    Portal login
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
