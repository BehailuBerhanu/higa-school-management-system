import type { Metadata } from 'next'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { PortalSidebar } from '@/components/portal/portal-sidebar'
import { PortalTopbar } from '@/components/portal/portal-topbar'

const teacher = {
  name: 'Ms. Jane Njeri',
  subject: 'Mathematics',
}

export const metadata: Metadata = {
  title: {
    default: 'Teacher Portal',
    template: '%s · Teacher Portal · Higa Model',
  },
}

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <PortalSidebar
        role="teacher"
        user={{
          name: teacher.name,
          meta: teacher.subject,
          initials: teacher.name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase(),
        }}
      />
      <SidebarInset>
        <PortalTopbar role="teacher" />
        <main className="flex flex-1 flex-col gap-8 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
