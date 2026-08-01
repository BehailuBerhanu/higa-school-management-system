'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BellIcon, SearchIcon, CircleUserRoundIcon } from 'lucide-react'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { navByRole, portalMeta, type PortalRole } from '@/lib/portal-nav'
import { announcements } from '@/lib/data/portal'

export function PortalTopbar({ role }: { role: PortalRole }) {
  const pathname = usePathname()
  const meta = portalMeta[role]
  const items = navByRole[role].flatMap((g) => g.items)
  const current = items
    .filter((i) => i.href !== meta.root && pathname.startsWith(i.href))
    .sort((a, b) => b.href.length - a.href.length)[0]

  const notices = announcements.slice(0, 3)

  return (
    <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center gap-3 border-b bg-background/90 px-4 backdrop-blur supports-backdrop-filter:bg-background/70">
      <SidebarTrigger />
      <Separator orientation="vertical" className="h-5" />

      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            {current ? (
              <BreadcrumbLink render={<Link href={meta.root} />}>
                {meta.label}
              </BreadcrumbLink>
            ) : (
              <BreadcrumbPage>{meta.label}</BreadcrumbPage>
            )}
          </BreadcrumbItem>
          {current ? (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{current.label}</BreadcrumbPage>
              </BreadcrumbItem>
            </>
          ) : null}
        </BreadcrumbList>
      </Breadcrumb>

      <div className="ml-auto flex items-center gap-2">
        <InputGroup className="hidden w-56 md:flex">
          <InputGroupInput placeholder="Search" aria-label="Search portal" />
          <InputGroupAddon>
            <SearchIcon aria-hidden />
          </InputGroupAddon>
        </InputGroup>

        <Popover>
          <PopoverTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                aria-label="Notifications"
              />
            }
          >
            <BellIcon aria-hidden />
            <span className="absolute -right-0.5 -top-0.5 flex size-2 rounded-full bg-secondary" />
          </PopoverTrigger>
          <PopoverContent align="end" className="w-80 p-0">
            <div className="flex items-center justify-between gap-2 border-b px-4 py-3">
              <p className="text-sm font-medium">Notifications</p>
              <Badge variant="secondary">{notices.length} new</Badge>
            </div>
            <ul className="flex flex-col divide-y">
              {notices.map((notice) => (
                <li key={notice.id} className="px-4 py-3">
                  <p className="text-sm font-medium leading-snug">
                    {notice.title}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                    {notice.body}
                  </p>
                  <p className="mt-1.5 text-[11px] text-muted-foreground">
                    {notice.author} &middot; {notice.date}
                  </p>
                </li>
              ))}
            </ul>
            <div className="border-t p-2">
              <Button
                variant="ghost"
                size="sm"
                className="w-full"
                render={<Link href={`${meta.root}/announcements`} />}
              >
                View all announcements
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        <Button
          variant="ghost"
          size="icon"
          aria-label="Account"
          render={
            <Link
              href={role === 'admin' ? '/admin/settings' : `${meta.root}/profile`}
            />
          }
        >
          <CircleUserRoundIcon aria-hidden />
        </Button>
      </div>
    </header>
  )
}
