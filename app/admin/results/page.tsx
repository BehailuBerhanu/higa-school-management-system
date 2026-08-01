'use client'

import { useState } from 'react'
import { PortalPageHeader } from '@/components/portal/portal-ui'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Plus, Eye, Download, CheckCircle, Clock } from 'lucide-react'

export default function AdminResultsPage() {
  const [selectedClass, setSelectedClass] = useState('all')
  const [selectedTerm, setSelectedTerm] = useState('term3')

  const classes = ['all', 'Form 1A', 'Form 1B', 'Form 2A', 'Form 2B', 'Form 3A', 'Form 3B']
  const terms = ['term1', 'term2', 'term3']

  const results = [
    { id: '1', subject: 'Mathematics', class: 'Form 3 Alpha', submitted: true, teacher: 'Mr. Peter Koech', students: 37, date: '2024-12-15' },
    { id: '2', subject: 'English', class: 'Form 3 Alpha', submitted: true, teacher: 'Ms. Jane Njeri', students: 37, date: '2024-12-14' },
    { id: '3', subject: 'Physics', class: 'Form 3 Alpha', submitted: false, teacher: 'Mr. David Omondi', students: 37, date: null },
    { id: '4', subject: 'Chemistry', class: 'Form 3 Alpha', submitted: true, teacher: 'Ms. Sarah Kipchoge', students: 37, date: '2024-12-13' },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <PortalPageHeader
          title="Results Management"
          description="Track and manage exam results across the school"
        />
        <Button className="bg-primary">
          <Plus className="size-4 mr-2" />
          Release Results
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Results Overview</CardTitle>
          <CardDescription>Filter results by term and class</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Term</label>
              <Select value={selectedTerm} onValueChange={(value) => setSelectedTerm(value || selectedTerm)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="term1">Term 1</SelectItem>
                  <SelectItem value="term2">Term 2</SelectItem>
                  <SelectItem value="term3">Term 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Class</label>
              <Select value={selectedClass} onValueChange={(value) => setSelectedClass(value || selectedClass)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {classes.map((cls) => (
                    <SelectItem key={cls} value={cls}>
                      {cls === 'all' ? 'All Classes' : cls}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Results Submission Status</CardTitle>
          <CardDescription>Term 3 Exam Results - Form 3 Alpha</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead>Teacher</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead>Submitted</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {results.map((result) => (
                  <TableRow key={result.id}>
                    <TableCell className="font-medium">{result.subject}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{result.teacher}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{result.students}</Badge>
                    </TableCell>
                    <TableCell>
                      {result.submitted ? (
                        <div className="flex items-center gap-2">
                          <CheckCircle className="size-4 text-emerald-500" />
                          <span className="text-sm text-muted-foreground">{result.date}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Clock className="size-4 text-amber-500" />
                          <span className="text-sm text-amber-600">Pending</span>
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button size="sm" variant="ghost">
                        <Eye className="size-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Download className="size-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Results Released</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">This term</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending Submission</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Awaiting teachers</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">75%</div>
            <p className="text-xs text-muted-foreground">Of all subjects</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
