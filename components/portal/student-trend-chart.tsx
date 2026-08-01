'use client'

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'
import { studentTrend } from '@/lib/data/portal'

const config = {
  average: { label: 'Semester average', color: 'var(--chart-1)' },
} satisfies ChartConfig

export function StudentTrendChart() {
  return (
    <ChartContainer config={config} className="h-64 w-full">
      <AreaChart data={studentTrend} margin={{ left: 4, right: 12, top: 8 }}>
        <defs>
          <linearGradient id="studentTrendFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-average)" stopOpacity={0.3} />
            <stop offset="100%" stopColor="var(--color-average)" stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey="term"
          tickLine={false}
          axisLine={false}
          tickMargin={10}
        />
        <YAxis
          domain={[60, 100]}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          width={34}
        />
        <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
        <Area
          dataKey="average"
          type="monotone"
          stroke="var(--color-average)"
          strokeWidth={2}
          fill="url(#studentTrendFill)"
          dot={{ r: 3, strokeWidth: 2, fill: 'var(--background)' }}
          activeDot={{ r: 5 }}
        />
      </AreaChart>
    </ChartContainer>
  )
}
