'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogOutIcon, ExternalLinkIcon } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/sidebar'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Crest } from '@/components/brand/crest'
import { navByRole, portalMeta, type PortalRole } from '@/lib/portal-nav'
import { school } from '@/lib/data/school'

export function PortalSidebar({
  role,
  user,
}: {
  role: PortalRole
  user: { name: string; meta: string; initials: string }
}) {
  const pathname = usePathname()
  const meta = portalMeta[role]
  const groups = navByRole[role]

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              tooltip={meta.label}
              render={<Link href={meta.root} />}
            >
              <Crest className="size-8 rounded-md" />
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-serif text-sm font-bold tracking-tight">
                  Higa Model
                </span>
                <span className="truncate text-xs text-muted-foreground">
                  {meta.label}
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {groups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const active =
                    item.href === meta.root
                      ? pathname === item.href
                      : pathname.startsWith(item.href)
                  return (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        isActive={active}
                        tooltip={item.label}
                        render={<Link href={item.href} />}
                      >
                        <item.icon aria-hidden />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                      {item.badge ? (
                        <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                      ) : null}
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <SidebarSeparator />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" tooltip={user.name}>
              <Avatar className="size-8 rounded-md">
                <AvatarFallback className="rounded-md bg-primary/10 text-xs font-semibold text-primary">
                  {user.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="truncate text-sm font-medium">
                  {user.name}
                </span>
                <span className="truncate text-xs text-muted-foreground">
                  {user.meta}
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Public website"
              render={<Link href="/" />}
            >
              <ExternalLinkIcon aria-hidden />
              <span>Public website</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Sign out"
              render={<Link href="/login" />}
            >
              <LogOutIcon aria-hidden />
              <span>Sign out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <p className="px-2 pb-1 text-[10px] text-muted-foreground group-data-[collapsible=icon]:hidden">
          Academic year {school.academicYear}
        </p>
      </SidebarFooter>
    </Sidebar>
  )
}
