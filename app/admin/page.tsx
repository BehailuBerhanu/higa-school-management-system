'use client'

import { PortalPageHeader, StatCard } from '@/components/portal/portal-ui'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { studentPortal } from '@/lib/data/portal'
import { Users, BookOpen, TrendingUp, AlertCircle, BarChart3, Activity } from 'lucide-react'

export default function AdminDashboard() {
  const students = studentPortal.students
  const teachers = studentPortal.teachers

  return (
    <div className="space-y-8">
      <PortalPageHeader
        title="Administration Dashboard"
        description="School-wide management and analytics"
      />

      <div className="grid gap-4 md:grid-cols-4">
        <StatCard icon={Users} label="Students" value={students.length.toString()} hint="Active" />
        <StatCard icon={BookOpen} label="Teachers" value={teachers.length.toString()} hint="Staff" />
        <StatCard icon={BarChart3} label="Classes" value="12" hint="Total" />
        <StatCard icon={Activity} label="Avg Attendance" value="94%" hint="Overall" />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Student Enrollment</CardTitle>
            <CardDescription>By form level</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {[
              { form: 'Form 1', count: 120 },
              { form: 'Form 2', count: 115 },
              { form: 'Form 3', count: 110 },
              { form: 'Form 4', count: 105 },
            ].map((item) => (
              <div key={item.form} className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{item.form}</span>
                <Badge variant="secondary">{item.count}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Staff Distribution</CardTitle>
            <CardDescription>By department</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {[
              { dept: 'Science', count: 8 },
              { dept: 'Languages', count: 6 },
              { dept: 'Humanities', count: 5 },
              { dept: 'Administration', count: 4 },
            ].map((item) => (
              <div key={item.dept} className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{item.dept}</span>
                <Badge variant="secondary">{item.count}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">System Status</CardTitle>
            <CardDescription>Portal health</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <div className="size-2 rounded-full bg-emerald-500" />
              <span>Portal: Operational</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="size-2 rounded-full bg-emerald-500" />
              <span>Database: Connected</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="size-2 rounded-full bg-emerald-500" />
              <span>Backups: Current</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
          <CardDescription>Latest system events</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                icon: Users,
                title: 'New Student Admitted',
                desc: 'Adhiambo Jane (Form 1)',
                time: '2 hours ago',
              },
              {
                icon: BookOpen,
                title: 'Results Released',
                desc: 'Term 3 Exam Results Published',
                time: '5 hours ago',
              },
              {
                icon: AlertCircle,
                title: 'Attendance Alert',
                desc: '3 students with low attendance',
                time: '8 hours ago',
              },
              {
                icon: TrendingUp,
                title: 'Report Generated',
                desc: 'Monthly Performance Report',
                time: '1 day ago',
              },
            ].map((activity, i) => {
              const Icon = activity.icon
              return (
                <div key={i} className="flex items-start gap-3 pb-3 border-b last:border-b-0 last:pb-0">
                  <Icon className="size-4 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.desc}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{activity.time}</span>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Links</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {[
            'Manage Students',
            'Manage Teachers',
            'Generate Reports',
            'Academic Settings',
            'View Announcements',
            'System Settings',
          ].map((link) => (
            <Button key={link} variant="outline" className="justify-start">
              {link}
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
