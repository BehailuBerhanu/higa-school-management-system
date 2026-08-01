import Link from 'next/link'
import {
  AwardIcon,
  TrendingUpIcon,
  BookOpenCheckIcon,
  CalendarCheckIcon,
  ArrowRightIcon,
  PinIcon,
  DownloadIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  PortalPageHeader,
  StatCard,
  GradePill,
} from '@/components/portal/portal-ui'
import { StudentTrendChart } from '@/components/portal/student-trend-chart'
import {
  currentStudent,
  studentResults,
  studentTrend,
  announcements,
  total,
  letterGrade,
} from '@/lib/data/portal'
import { events } from '@/lib/data/school'

export default function StudentDashboardPage() {
  const latest = studentResults['Semester 2']
  const totals = latest.map((r) => total(r) ?? 0)
  const average = totals.reduce((a, b) => a + b, 0) / totals.length
  const best = latest.reduce((acc, r) =>
    (total(r) ?? 0) > (total(acc) ?? 0) ? r : acc,
  )
  const previous = studentTrend[studentTrend.length - 2].average
  const delta = average - previous

  const studentNotices = announcements.filter(
    (a) => a.audience !== 'Teachers',
  )

  return (
    <>
      <PortalPageHeader
        title={`Welcome back, ${currentStudent.firstName}`}
        description={`Grade ${currentStudent.grade}-${currentStudent.section} · ${currentStudent.house} · Homeroom ${currentStudent.homeroom}`}
        actions={
          <>
            <Button variant="outline">
              <DownloadIcon data-icon="inline-start" />
              Report card
            </Button>
            <Button render={<Link href="/student/results" />}>
              View full results
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
          </>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Semester average"
          value={average.toFixed(1)}
          hint="Semester 2, across eight subjects"
          icon={TrendingUpIcon}
          trend={{
            value: `${delta >= 0 ? '+' : ''}${delta.toFixed(1)}`,
            direction: delta >= 0 ? 'up' : 'down',
          }}
        />
        <StatCard
          label="Class rank"
          value="3 / 38"
          hint="Grade 10-A, Semester 2"
          icon={AwardIcon}
          trend={{ value: '+1', direction: 'up' }}
        />
        <StatCard
          label="Subjects published"
          value={`${latest.length} / ${latest.length}`}
          hint="All Semester 2 marks released"
          icon={BookOpenCheckIcon}
        />
        <StatCard
          label="Attendance"
          value="97.4%"
          hint="182 of 187 teaching days"
          icon={CalendarCheckIcon}
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Performance trend</CardTitle>
            <CardDescription>
              Semester averages since Grade 9. Your strongest subject this
              semester is {best.subject} at {total(best)} points.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <StudentTrendChart />
          </CardContent>
          <CardFooter className="border-t">
            <p className="text-xs text-muted-foreground">
              Averages are calculated from published marks only. Draft entries
              from teachers are never included.
            </p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Subject breakdown</CardTitle>
            <CardDescription>Semester 2 totals out of 100</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {latest.map((result) => {
              const t = total(result) ?? 0
              return (
                <div key={result.code} className="flex flex-col gap-1.5">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-sm font-medium">
                      {result.subject}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="font-mono text-sm tabular-nums">
                        {t}
                      </span>
                      <GradePill grade={letterGrade(t)} />
                    </span>
                  </div>
                  <Progress value={t} aria-label={`${result.subject}: ${t}%`} />
                </div>
              )
            })}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Recent marks</CardTitle>
            <CardDescription>
              Semester 2 · assessment components and totals
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead className="text-right">Assign.</TableHead>
                  <TableHead className="text-right">Mid 1</TableHead>
                  <TableHead className="text-right">Mid 2</TableHead>
                  <TableHead className="text-right">Final</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                  <TableHead className="text-right">Grade</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {latest.slice(0, 6).map((result) => {
                  const t = total(result)
                  return (
                    <TableRow key={result.code}>
                      <TableCell className="font-medium">
                        {result.subject}
                        <span className="ml-2 font-mono text-xs text-muted-foreground">
                          {result.code}
                        </span>
                      </TableCell>
                      <TableCell className="text-right tabular-nums">
                        {result.assignment}
                      </TableCell>
                      <TableCell className="text-right tabular-nums">
                        {result.mid1}
                      </TableCell>
                      <TableCell className="text-right tabular-nums">
                        {result.mid2}
                      </TableCell>
                      <TableCell className="text-right tabular-nums">
                        {result.final}
                      </TableCell>
                      <TableCell className="text-right font-medium tabular-nums">
                        {t}
                      </TableCell>
                      <TableCell className="text-right">
                        <GradePill grade={letterGrade(t)} />
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="border-t">
            <Button
              variant="ghost"
              size="sm"
              render={<Link href="/student/results" />}
            >
              See all eight subjects
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
          </CardFooter>
        </Card>

        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Announcements</CardTitle>
              <CardDescription>Latest notices for your grade</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {studentNotices.slice(0, 3).map((notice, index) => (
                <div key={notice.id} className="flex flex-col gap-2">
                  {index > 0 ? <Separator className="mb-2" /> : null}
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium leading-snug">
                      {notice.title}
                    </p>
                    {notice.pinned ? (
                      <PinIcon
                        className="mt-0.5 size-3.5 shrink-0 text-secondary-foreground"
                        aria-label="Pinned"
                      />
                    ) : null}
                  </div>
                  <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {notice.body}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {notice.author} &middot; {notice.date}
                  </p>
                </div>
              ))}
            </CardContent>
            <CardFooter className="border-t">
              <Button
                variant="ghost"
                size="sm"
                render={<Link href="/student/announcements" />}
              >
                All announcements
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>School calendar</CardTitle>
              <CardDescription>Next dates that affect you</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {events.slice(0, 4).map((event) => (
                <div key={event.title} className="flex items-start gap-3">
                  <Badge variant="outline" className="shrink-0 font-mono">
                    {event.date.slice(5)}
                  </Badge>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium leading-snug">
                      {event.title}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {event.detail}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
