import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { news, school } from '@/lib/data/school'

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = news.find((item) => item.slug === slug)
  if (!article) return { title: 'Article not found' }
  return { title: article.title, description: article.excerpt }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = news.find((item) => item.slug === slug)
  if (!article) notFound()

  const related = news.filter((item) => item.slug !== slug).slice(0, 3)
  const published = new Date(article.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <article className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link href="/">Home</Link>} />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link href="/news">News</Link>} />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="max-w-[16rem] truncate">
              {article.title}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.7fr_1fr]">
        <div className="flex flex-col gap-8">
          <header className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-3">
              <Badge>{article.category}</Badge>
              <time
                dateTime={article.date}
                className="text-xs text-muted-foreground"
              >
                {published}
              </time>
            </div>
            <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {article.title}
            </h1>
            <p className="border-l-2 border-secondary pl-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              {article.excerpt}
            </p>
          </header>

          <div className="overflow-hidden rounded-xl border">
            <img
              src="/gallery/campus-quadrangle.png"
              alt="The Higa Model Boarding School campus"
              className="aspect-[16/9] w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-5 leading-relaxed">
            {article.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-pretty">
                {paragraph}
              </p>
            ))}
          </div>

          <Separator />

          <footer className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Published by the {school.shortName} communications office.
            </p>
            <Button variant="outline" render={<Link href="/news" />}>
              <ArrowLeftIcon data-icon="inline-start" />
              All news
            </Button>
          </footer>
        </div>

        <aside className="flex flex-col gap-4">
          <h2 className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Related stories
          </h2>
          {related.map((item) => (
            <Card key={item.slug}>
              <CardContent className="flex flex-col gap-2.5 p-5">
                <Badge variant="outline" className="w-fit">
                  {item.category}
                </Badge>
                <Link
                  href={`/news/${item.slug}`}
                  className="text-pretty font-semibold leading-snug underline-offset-4 hover:underline"
                >
                  {item.title}
                </Link>
                <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {item.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}

          <Card className="bg-muted">
            <CardContent className="flex flex-col gap-3 p-5">
              <p className="font-semibold">Applying for a place?</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Admissions for the {school.academicYear} year are open at all
                entry points.
              </p>
              <Button
                size="sm"
                className="w-fit"
                render={<Link href="/admissions" />}
              >
                Admissions
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
            </CardContent>
          </Card>
        </aside>
      </div>
    </article>
  )
}
