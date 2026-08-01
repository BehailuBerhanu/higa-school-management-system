import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export function PageHero({
  eyebrow,
  title,
  description,
  crumb,
}: {
  eyebrow: string
  title: string
  description?: string
  crumb: string
}) {
  return (
    <section className="relative isolate overflow-hidden border-b bg-primary text-primary-foreground">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07] hairline-grid"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <Breadcrumb>
          <BreadcrumbList className="text-primary-foreground/70">
            <BreadcrumbItem>
              <BreadcrumbLink
                render={
                  <Link href="/" className="hover:text-primary-foreground">
                    Home
                  </Link>
                }
              />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-secondary">
                {crumb}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-pretty leading-relaxed opacity-85">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  )
}
