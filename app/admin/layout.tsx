import type { Metadata } from 'next'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { PortalSidebar } from '@/components/portal/portal-sidebar'
import { PortalTopbar } from '@/components/portal/portal-topbar'

export const metadata: Metadata = {
  title: {
    default: 'Admin Portal',
    template: '%s · Admin Portal · Higa Model',
  },
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <PortalSidebar
        role="admin"
        user={{
          name: 'Dr. Samuel Kipchoge',
          meta: 'Principal',
          initials: 'SK',
        }}
      />
      <SidebarInset>
        <PortalTopbar role="admin" />
        <main className="flex flex-1 flex-col gap-8 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
