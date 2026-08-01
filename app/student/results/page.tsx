'use client'

import { useState } from 'react'
import { PortalPageHeader, StatCard } from '@/components/portal/portal-ui'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { TrendingUp } from 'lucide-react'

const mockStudent = {
  name: 'Jane Kipchoge',
  classRank: 3,
  classSize: 35,
  meritPoints: 245,
}

const mockResults = {
  term3: {
    'Mathematics': { teacher: 'Mr. Peter Koech', score: 92, grade: 'A' },
    'English': { teacher: 'Ms. Jane Njeri', score: 88, grade: 'A' },
    'Physics': { teacher: 'Mr. David Omondi', score: 85, grade: 'B+' },
    'Chemistry': { teacher: 'Ms. Sarah Kipchoge', score: 81, grade: 'B' },
    'Biology': { teacher: 'Mr. Paul Kipchoge', score: 79, grade: 'B' },
  },
}

export default function StudentResultsPage() {
  const student = mockStudent
  const [selectedTerm, setSelectedTerm] = useState('term3')

  const terms = [
    { value: 'term1', label: 'Term 1' },
    { value: 'term2', label: 'Term 2' },
    { value: 'term3', label: 'Term 3' },
  ]

  const termResults = mockResults[selectedTerm as keyof typeof mockResults]

  return (
    <div className="space-y-8">
      <PortalPageHeader
        title="Academic Results"
        description="View your exam results and performance reports"
      />

      <div className="grid gap-4 md:grid-cols-4">
        <StatCard icon={TrendingUp} label="Average" value="82%" hint="Overall" />
        <StatCard icon={TrendingUp} label="Rank" value={`${student.classRank}/${student.classSize}`} hint="In class" />
        <StatCard icon={TrendingUp} label="Subjects" value={Object.keys(termResults).length.toString()} hint="Graded" />
        <StatCard icon={TrendingUp} label="Merit" value={student.meritPoints.toString()} hint="Points earned" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Term Results</CardTitle>
          <CardDescription>Select a term to view detailed results</CardDescription>
          <div className="mt-4">
            <Select value={selectedTerm} onValueChange={setSelectedTerm}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {terms.map((term) => (
                  <SelectItem key={term.value} value={term.value}>
                    {term.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead>Teacher</TableHead>
                  <TableHead className="text-right">Score</TableHead>
                  <TableHead className="text-right">Grade</TableHead>
                  <TableHead>Performance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries(termResults).map(([subject, data]) => (
                  <TableRow key={subject}>
                    <TableCell className="font-medium">{subject}</TableCell>
                    <TableCell>{data.teacher}</TableCell>
                    <TableCell className="text-right">{data.score}/100</TableCell>
                    <TableCell className="text-right font-semibold">{data.grade}</TableCell>
                    <TableCell>
                      <Badge className={data.grade === 'A' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}>
                        {data.grade === 'A' ? 'Excellent' : 'Good'}
                      </Badge>
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
            <CardTitle>Strengths</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {['Mathematics', 'Sciences', 'English Literature'].map((subject) => (
                <div key={subject} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{subject}</span>
                  <Badge className="bg-emerald-100 text-emerald-800">Excellent</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Areas to Improve</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {['History', 'Geography'].map((subject) => (
                <div key={subject} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{subject}</span>
                  <Badge className="bg-amber-100 text-amber-800">Good effort needed</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
