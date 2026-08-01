import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon, QuoteIcon } from 'lucide-react'
import { LoginForm } from '@/components/auth/login-form'
import { school } from '@/lib/data/school'

export const metadata: Metadata = {
  title: 'Portal Login',
  description:
    'Sign in to the Higa Model Boarding School student, teacher or administrator portal.',
}

export default function LoginPage() {
  return (
    <main className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-8 px-6 py-10 sm:px-10 lg:px-14">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" aria-label="Higa Model Boarding School home">
            <Image src="/logo.png" alt={school.name} width={48} height={48} className="h-12 w-12" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            <ArrowLeftIcon className="size-4" aria-hidden />
            Back to site
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="flex w-full max-w-md flex-col gap-8">
            <header className="flex flex-col gap-2">
              <h1 className="font-serif text-3xl font-semibold tracking-tight text-balance">
                Sign in to your portal
              </h1>
              <p className="leading-relaxed text-muted-foreground">
                Choose your role, then enter the credentials issued by the
                school office.
              </p>
            </header>

            <LoginForm />
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          Academic year {school.academicYear} &middot; {school.name}
        </p>
      </div>

      <div className="relative hidden lg:block">
        <Image
          src="/hero-campus.png"
          alt="The Higa Model Boarding School campus at golden hour"
          fill
          priority
          sizes="50vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-primary/70 mix-blend-multiply"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-primary via-primary/25 to-transparent"
        />
        <figure className="absolute inset-x-0 bottom-0 flex flex-col gap-5 p-12 text-primary-foreground">
          <QuoteIcon className="size-8 text-secondary" aria-hidden />
          <blockquote className="font-serif text-2xl leading-snug text-balance">
            Every mark, every report and every notice a family needs lives in
            one place — and it is current.
          </blockquote>
          <figcaption className="text-sm text-primary-foreground/70">
            <span className="font-medium text-primary-foreground">
              Academic Records Office
            </span>
            <span className="mx-2">&middot;</span>
            {school.address}
          </figcaption>
        </figure>
      </div>
    </main>
  )
}
