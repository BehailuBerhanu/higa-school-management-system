import type { LucideIcon } from 'lucide-react'
import { TrendingUpIcon, TrendingDownIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { ResultStatus } from '@/lib/data/portal'

export function PortalPageHeader({
  title,
  description,
  actions,
}: {
  title: string
  description?: string
  actions?: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex flex-col gap-1.5">
        <h1 className="font-serif text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          {title}
        </h1>
        {description ? (
          <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
      {actions ? (
        <div className="flex shrink-0 flex-wrap items-center gap-2">
          {actions}
        </div>
      ) : null}
    </div>
  )
}

export function StatCard({
  label,
  value,
  hint,
  icon: Icon,
  trend,
}: {
  label: string
  value: string
  hint?: string
  icon: LucideIcon
  trend?: { value: string; direction: 'up' | 'down' }
}) {
  const TrendIcon = trend?.direction === 'down' ? TrendingDownIcon : TrendingUpIcon

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-3">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {label}
          </span>
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="size-4" aria-hidden />
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-1.5">
        <div className="flex items-end gap-2">
          <span className="font-serif text-3xl font-semibold leading-none tracking-tight">
            {value}
          </span>
          {trend ? (
            <Badge variant="secondary" className="mb-0.5 gap-1">
              <TrendIcon className="size-3" aria-hidden />
              {trend.value}
            </Badge>
          ) : null}
        </div>
        {hint ? (
          <p className="text-xs leading-relaxed text-muted-foreground">
            {hint}
          </p>
        ) : null}
      </CardContent>
    </Card>
  )
}

const statusLabels: Record<ResultStatus, string> = {
  draft: 'Draft',
  submitted: 'Submitted',
  published: 'Published',
}

export function ResultStatusBadge({ status }: { status: ResultStatus }) {
  return (
    <Badge
      variant="outline"
      className={cn(
        'gap-1.5 font-medium',
        status === 'published' && 'border-primary/30 bg-primary/10 text-primary',
        status === 'submitted' &&
          'border-secondary/40 bg-secondary/15 text-secondary-foreground',
        status === 'draft' && 'border-border bg-muted text-muted-foreground',
      )}
    >
      <span
        aria-hidden
        className={cn(
          'size-1.5 rounded-full',
          status === 'published' && 'bg-primary',
          status === 'submitted' && 'bg-secondary',
          status === 'draft' && 'bg-muted-foreground',
        )}
      />
      {statusLabels[status]}
    </Badge>
  )
}

export function GradePill({ grade }: { grade: string }) {
  const strong = grade.startsWith('A')
  const weak = grade === 'F' || grade === 'D'
  return (
    <span
      className={cn(
        'inline-flex min-w-9 items-center justify-center rounded-md px-2 py-0.5 font-mono text-xs font-semibold',
        strong && 'bg-primary/10 text-primary',
        weak && 'bg-destructive/10 text-destructive',
        !strong && !weak && 'bg-muted text-foreground',
      )}
    >
      {grade}
    </span>
  )
}
