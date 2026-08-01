'use client'

import { useState } from 'react'
import { PortalPageHeader } from '@/components/portal/portal-ui'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { studentPortal } from '@/lib/data/portal'
import { AlertCircle, CheckCircle } from 'lucide-react'

export default function MarksEntryPage() {
  const [selectedClass, setSelectedClass] = useState('form3a')
  const [selectedAssessment, setSelectedAssessment] = useState('term3')
  const [marks, setMarks] = useState<Record<string, number>>({})

  const students = studentPortal.students.slice(0, 10)
  const classes = [
    { value: 'form3a', label: 'Form 3 Alpha' },
    { value: 'form3b', label: 'Form 3 Beta' },
    { value: 'form2a', label: 'Form 2 Alpha' },
  ]
  const assessments = [
    { value: 'term3', label: 'Term 3 Exam' },
    { value: 'caw1', label: 'CAW 1' },
    { value: 'caw2', label: 'CAW 2' },
  ]

  const updateMark = (studentId: string, value: string) => {
    const numValue = parseInt(value) || 0
    setMarks((prev) => ({ ...prev, [studentId]: Math.min(100, Math.max(0, numValue)) }))
  }

  const getMark = (studentId: string) => {
    return marks[studentId] ?? ''
  }

  const submittedCount = Object.keys(marks).length
  const totalCount = students.length

  return (
    <div className="space-y-8">
      <PortalPageHeader
        title="Marks Entry"
        description="Record and manage student marks"
      />

      <Card>
        <CardHeader>
          <CardTitle>Assessment Information</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">Class</label>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger>
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
          <div className="space-y-2">
            <label className="text-sm font-medium">Assessment</label>
            <Select value={selectedAssessment} onValueChange={setSelectedAssessment}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {assessments.map((assess) => (
                  <SelectItem key={assess.value} value={assess.value}>
                    {assess.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Student Marks - Form 3 Alpha</CardTitle>
              <CardDescription>Mathematics - {selectedAssessment === 'term3' ? 'Term 3 Exam' : 'Class Assessment'}</CardDescription>
            </div>
            <div className="text-right">
              <Badge variant="outline" className="mb-2">
                {submittedCount}/{totalCount} submitted
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Admission No.</TableHead>
                  <TableHead>Student Name</TableHead>
                  <TableHead className="w-24">Mark (/100)</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.admissionNumber}>
                    <TableCell className="font-mono text-xs text-muted-foreground">
                      {student.admissionNumber}
                    </TableCell>
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        value={getMark(student.admissionNumber)}
                        onChange={(e) => updateMark(student.admissionNumber, e.target.value)}
                        className="w-20"
                        placeholder="0"
                      />
                    </TableCell>
                    <TableCell>
                      {getMark(student.admissionNumber) !== '' ? (
                        <CheckCircle className="size-4 text-emerald-500" />
                      ) : (
                        <AlertCircle className="size-4 text-muted-foreground" />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-6 flex gap-3">
            <Button className="bg-primary">
              Submit Marks
            </Button>
            <Button variant="outline">
              Save as Draft
            </Button>
            <Button variant="outline">
              Clear All
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
