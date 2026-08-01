import { cn } from '@/lib/utils'

export function Crest({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-primary font-serif text-sm font-bold tracking-tight text-primary-foreground',
        className,
      )}
    >
      HM
    </span>
  )
}

export function WordMark({
  className,
  subtle,
}: {
  className?: string
  subtle?: boolean
}) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <Crest />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[15px] font-bold tracking-tight">
          Higa Model
        </span>
        <span
          className={cn(
            'mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em]',
            subtle ? 'opacity-70' : 'text-muted-foreground',
          )}
        >
          Boarding School
        </span>
      </span>
    </span>
  )
}
