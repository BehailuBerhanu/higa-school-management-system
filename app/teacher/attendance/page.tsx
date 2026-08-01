'use client'

import { useState } from 'react'
import { PortalPageHeader } from '@/components/portal/portal-ui'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { studentPortal } from '@/lib/data/portal'

export default function AttendancePage() {
  const [selectedClass, setSelectedClass] = useState('form3a')
  const [attendance, setAttendance] = useState<Record<string, boolean>>({})

  const students = studentPortal.students.slice(0, 35)

  const classes = [
    { value: 'form3a', label: 'Form 3 Alpha' },
    { value: 'form3b', label: 'Form 3 Beta' },
  ]

  const toggleAttendance = (studentId: string) => {
    setAttendance((prev) => ({
      ...prev,
      [studentId]: !prev[studentId],
    }))
  }

  const presentCount = Object.values(attendance).filter(Boolean).length
  const presentPercentage = Math.round((presentCount / students.length) * 100)

  return (
    <div className="space-y-8">
      <PortalPageHeader
        title="Attendance"
        description="Mark and track student attendance"
      />

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Mark Attendance</CardTitle>
              <CardDescription>Record attendance for today's class</CardDescription>
            </div>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {classes.map((cls) => (
                  <SelectItem key={cls.value} value={cls.value}>
                    {cls.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 border rounded-lg bg-card">
              <p className="text-sm text-muted-foreground">Present</p>
              <p className="text-3xl font-bold">{presentCount}</p>
              <p className="text-xs text-muted-foreground mt-1">out of {students.length}</p>
            </div>
            <div className="p-4 border rounded-lg bg-card">
              <p className="text-sm text-muted-foreground">Attendance Rate</p>
              <p className="text-3xl font-bold">{presentPercentage}%</p>
              <p className="text-xs text-muted-foreground mt-1">Absent: {students.length - presentCount}</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox
                      checked={presentCount === students.length}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          const newAttendance: Record<string, boolean> = {}
                          students.forEach((s) => {
                            newAttendance[s.admissionNumber] = true
                          })
                          setAttendance(newAttendance)
                        } else {
                          setAttendance({})
                        }
                      }}
                    />
                  </TableHead>
                  <TableHead>Admission No.</TableHead>
                  <TableHead>Student Name</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.admissionNumber}>
                    <TableCell>
                      <Checkbox
                        checked={attendance[student.admissionNumber] ?? false}
                        onCheckedChange={() => toggleAttendance(student.admissionNumber)}
                      />
                    </TableCell>
                    <TableCell className="font-mono text-xs text-muted-foreground">
                      {student.admissionNumber}
                    </TableCell>
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell className="text-right">
                      <Badge
                        variant={attendance[student.admissionNumber] ? 'default' : 'destructive'}
                      >
                        {attendance[student.admissionNumber] ? 'Present' : 'Absent'}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex gap-3 pt-4">
            <Button className="bg-primary">Submit Attendance</Button>
            <Button variant="outline">Clear All</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
