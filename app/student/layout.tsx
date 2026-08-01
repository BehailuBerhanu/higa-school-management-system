import type { Metadata } from 'next'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { PortalSidebar } from '@/components/portal/portal-sidebar'
import { PortalTopbar } from '@/components/portal/portal-topbar'
import { currentStudent } from '@/lib/data/portal'

export const metadata: Metadata = {
  title: {
    default: 'Student Portal',
    template: '%s · Student Portal · Higa Model',
  },
}

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <PortalSidebar
        role="student"
        user={{
          name: `${currentStudent.firstName} ${currentStudent.lastName}`,
          meta: `Grade ${currentStudent.grade}-${currentStudent.section}`,
          initials: currentStudent.avatarInitials,
        }}
      />
      <SidebarInset>
        <PortalTopbar role="student" />
        <main className="flex flex-1 flex-col gap-8 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
