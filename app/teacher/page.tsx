'use client'

import { PortalPageHeader, StatCard } from '@/components/portal/portal-ui'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Users, FileText, CheckCircle, Clock, BookOpen } from 'lucide-react'

const mockTeacher = {
  classes: ['Form 3 Alpha', 'Form 2 Beta', 'Form 1 Gamma'],
  studentCount: 95,
}

const mockStudents = [
  { id: 'HIG-2026-0184', name: 'Mahlet Girma', class: 'Form 3 Alpha', average: 87 },
  { id: 'HIG-2026-0185', name: 'Abeba Tekle', class: 'Form 3 Alpha', average: 92 },
  { id: 'HIG-2026-0186', name: 'Solomon Bekele', class: 'Form 3 Alpha', average: 85 },
]

export default function TeacherDashboard() {
  const teacher = mockTeacher
  const students = mockStudents

  return (
    <div className="space-y-8">
      <PortalPageHeader
        title="Welcome back, Ms. Njeri"
        description="Here's an overview of your teaching activities"
      />

      <div className="grid gap-4 md:grid-cols-4">
        <StatCard icon={BookOpen} label="Classes" value={teacher.classes.length.toString()} hint="Assigned" />
        <StatCard icon={Users} label="Students" value={`${teacher.studentCount}`} hint="Total" />
        <StatCard icon={FileText} label="Assignments" value="12" hint="Active" />
        <StatCard icon={CheckCircle} label="Pending Marks" value="24" hint="To submit" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Today's Classes</CardTitle>
            <CardDescription>Your scheduled sessions for today</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { time: '09:00 AM', class: 'Form 3 Alpha', subject: 'Mathematics' },
              { time: '11:00 AM', class: 'Form 2 Beta', subject: 'Mathematics' },
              { time: '02:00 PM', class: 'Form 1 Gamma', subject: 'Algebra' },
            ].map((session, i) => (
              <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-sm">{session.class}</p>
                  <p className="text-xs text-muted-foreground">{session.subject}</p>
                </div>
                <div className="text-right">
                  <Badge variant="outline">{session.time}</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <FileText className="size-4 mr-2" />
              Record Attendance
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <CheckCircle className="size-4 mr-2" />
              Submit Marks
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Clock className="size-4 mr-2" />
              Set Assignment
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Users className="size-4 mr-2" />
              View Class Performance
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Student Activity</CardTitle>
          <CardDescription>Latest submissions and performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Class</TableHead>
                  <TableHead>Last Activity</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell className="text-sm">{student.class}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">Yesterday 4:30 PM</TableCell>
                    <TableCell className="text-right">
                      <Badge variant="outline">Active</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
