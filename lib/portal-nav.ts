import {
  LayoutDashboardIcon,
  FileTextIcon,
  MegaphoneIcon,
  UserRoundIcon,
  SettingsIcon,
  BookOpenIcon,
  ClipboardPenIcon,
  UsersRoundIcon,
  PresentationIcon,
  LibraryIcon,
  SchoolIcon,
  CalendarRangeIcon,
  BadgeCheckIcon,
  ChartBarIcon,
  ShieldIcon,
  type LucideIcon,
} from 'lucide-react'

export type NavItem = {
  href: string
  label: string
  icon: LucideIcon
  badge?: string
}

export type NavGroup = {
  label: string
  items: NavItem[]
}

export type PortalRole = 'student' | 'teacher' | 'admin'

export const portalMeta: Record<
  PortalRole,
  { label: string; root: string; description: string }
> = {
  student: {
    label: 'Student Portal',
    root: '/student',
    description: 'Results, notices and personal records',
  },
  teacher: {
    label: 'Teacher Portal',
    root: '/teacher',
    description: 'Classes, marks entry and notices',
  },
  admin: {
    label: 'Admin Portal',
    root: '/admin',
    description: 'Full school administration',
  },
}

export const studentNav: NavGroup[] = [
  {
    label: 'Overview',
    items: [
      { href: '/student', label: 'Dashboard', icon: LayoutDashboardIcon },
      { href: '/student/results', label: 'My Results', icon: FileTextIcon },
    ],
  },
  {
    label: 'School',
    items: [
      {
        href: '/student/announcements',
        label: 'Announcements',
        icon: MegaphoneIcon,
        badge: '2',
      },
    ],
  },
  {
    label: 'Account',
    items: [
      { href: '/student/profile', label: 'My Profile', icon: UserRoundIcon },
      { href: '/student/settings', label: 'Settings', icon: SettingsIcon },
    ],
  },
]

export const teacherNav: NavGroup[] = [
  {
    label: 'Overview',
    items: [
      { href: '/teacher', label: 'Dashboard', icon: LayoutDashboardIcon },
      { href: '/teacher/classes', label: 'My Classes', icon: BookOpenIcon },
    ],
  },
  {
    label: 'Assessment',
    items: [
      {
        href: '/teacher/marks',
        label: 'Marks Entry',
        icon: ClipboardPenIcon,
        badge: '2',
      },
    ],
  },
  {
    label: 'School',
    items: [
      {
        href: '/teacher/announcements',
        label: 'Announcements',
        icon: MegaphoneIcon,
      },
      { href: '/teacher/profile', label: 'My Profile', icon: UserRoundIcon },
    ],
  },
]

export const adminNav: NavGroup[] = [
  {
    label: 'Overview',
    items: [{ href: '/admin', label: 'Dashboard', icon: LayoutDashboardIcon }],
  },
  {
    label: 'People',
    items: [
      { href: '/admin/students', label: 'Students', icon: UsersRoundIcon },
      { href: '/admin/teachers', label: 'Teachers', icon: PresentationIcon },
      { href: '/admin/users', label: 'Users & Roles', icon: ShieldIcon },
    ],
  },
  {
    label: 'Academic Structure',
    items: [
      { href: '/admin/subjects', label: 'Subjects', icon: LibraryIcon },
      { href: '/admin/classes', label: 'Classes', icon: SchoolIcon },
      {
        href: '/admin/academic-years',
        label: 'Academic Years',
        icon: CalendarRangeIcon,
      },
    ],
  },
  {
    label: 'Records',
    items: [
      {
        href: '/admin/results',
        label: 'Results & Publishing',
        icon: BadgeCheckIcon,
        badge: '3',
      },
      { href: '/admin/reports', label: 'Reports', icon: ChartBarIcon },
      {
        href: '/admin/announcements',
        label: 'Announcements',
        icon: MegaphoneIcon,
      },
    ],
  },
  {
    label: 'Account',
    items: [
      { href: '/admin/settings', label: 'Settings', icon: SettingsIcon },
    ],
  },
]

export const navByRole: Record<PortalRole, NavGroup[]> = {
  student: studentNav,
  teacher: teacherNav,
  admin: adminNav,
}
