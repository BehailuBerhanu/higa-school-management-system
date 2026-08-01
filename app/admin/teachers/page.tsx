'use client'

import { useState } from 'react'
import { PortalPageHeader } from '@/components/portal/portal-ui'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { studentPortal } from '@/lib/data/portal'
import { Search, Plus, Edit, Trash2, Mail, Phone } from 'lucide-react'

export default function AdminTeachersPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const teachers = studentPortal.teachers

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <PortalPageHeader
          title="Teachers"
          description="Manage staff and faculty records"
        />
        <Button className="bg-primary">
          <Plus className="size-4 mr-2" />
          Add Teacher
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Faculty Directory</CardTitle>
          <CardDescription>Total: {filteredTeachers.length} staff members</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 size-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Classes</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTeachers.map((teacher) => (
                  <TableRow key={teacher.id}>
                    <TableCell className="font-medium">{teacher.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{teacher.department}</Badge>
                    </TableCell>
                    <TableCell className="text-sm">
                      <span className="text-muted-foreground">{teacher.classes.length} assigned</span>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">{teacher.email}</TableCell>
                    <TableCell className="text-sm font-medium">{teacher.studentCount}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button size="sm" variant="ghost">
                        <Edit className="size-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-red-500 hover:text-red-600">
                        <Trash2 className="size-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Department Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {['Science', 'Languages', 'Humanities', 'Administration'].map((dept) => (
              <div key={dept} className="flex items-center justify-between py-2 border-b last:border-b-0">
                <span className="text-sm">{dept}</span>
                <Badge variant="secondary">
                  {Math.floor(Math.random() * 8) + 4}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg bg-card">
              <span className="text-sm text-muted-foreground">Avg Class Size</span>
              <span className="font-semibold">35 students</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg bg-card">
              <span className="text-sm text-muted-foreground">Total Classes</span>
              <span className="font-semibold">24</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg bg-card">
              <span className="text-sm text-muted-foreground">Staff Utilization</span>
              <span className="font-semibold">96%</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
