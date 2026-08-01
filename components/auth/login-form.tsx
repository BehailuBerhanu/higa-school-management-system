'use client'

import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  EyeIcon,
  EyeOffIcon,
  GraduationCapIcon,
  PresentationIcon,
  ShieldCheckIcon,
  LogInIcon,
  InfoIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Spinner } from '@/components/ui/spinner'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group'

const roles = [
  {
    id: 'student',
    label: 'Student',
    icon: GraduationCapIcon,
    identifier: 'Student ID',
    placeholder: 'HIG-2026-0184',
    href: '/student',
    hint: 'Use the ID printed on your student card.',
  },
  {
    id: 'teacher',
    label: 'Teacher',
    icon: PresentationIcon,
    identifier: 'Staff email',
    placeholder: 'name@higa.edu.et',
    href: '/teacher',
    hint: 'Your school email address, not a personal one.',
  },
  {
    id: 'admin',
    label: 'Administrator',
    icon: ShieldCheckIcon,
    identifier: 'Admin email',
    placeholder: 'registrar@higa.edu.et',
    href: '/admin',
    hint: 'Administrator sessions are logged in the audit trail.',
  },
] as const

export function LoginForm() {
  const router = useRouter()
  const [role, setRole] = React.useState<string>('student')
  const [pending, setPending] = React.useState<string | null>(null)

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
    destination: string,
    id: string,
  ) {
    event.preventDefault()
    setPending(id)
    window.setTimeout(() => router.push(destination), 550)
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs value={role} onValueChange={(value) => setRole(String(value))}>
        <TabsList className="grid h-auto w-full grid-cols-3">
          {roles.map((item) => (
            <TabsTrigger
              key={item.id}
              value={item.id}
              className="h-9 flex-col gap-0 sm:h-8 sm:flex-row sm:gap-1.5"
            >
              <item.icon data-icon="inline-start" aria-hidden />
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {roles.map((item) => (
          <TabsContent key={item.id} value={item.id} className="pt-4">
            <form onSubmit={(e) => handleSubmit(e, item.href, item.id)}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor={`${item.id}-identifier`}>
                    {item.identifier}
                  </FieldLabel>
                  <Input
                    id={`${item.id}-identifier`}
                    name="identifier"
                    autoComplete="username"
                    placeholder={item.placeholder}
                    defaultValue={item.placeholder}
                    required
                  />
                  <FieldDescription>{item.hint}</FieldDescription>
                </Field>

                <PasswordField id={item.id} />

                <Field orientation="horizontal">
                  <Checkbox id={`${item.id}-remember`} name="remember" />
                  <FieldLabel
                    htmlFor={`${item.id}-remember`}
                    className="font-normal"
                  >
                    Keep me signed in on this device
                  </FieldLabel>
                </Field>

                <Button type="submit" disabled={pending === item.id}>
                  {pending === item.id ? (
                    <Spinner data-icon="inline-start" />
                  ) : (
                    <LogInIcon data-icon="inline-start" />
                  )}
                  {pending === item.id
                    ? 'Signing in'
                    : `Sign in to ${item.label.toLowerCase()} portal`}
                </Button>
              </FieldGroup>
            </form>
          </TabsContent>
        ))}
      </Tabs>

      <Alert>
        <InfoIcon />
        <AlertTitle>Interface preview</AlertTitle>
        <AlertDescription>
          Authentication is not wired up. Credentials are pre-filled — press
          sign in to open the selected portal.
        </AlertDescription>
      </Alert>

      <p className="text-center text-sm text-muted-foreground">
        Lost your credentials?{' '}
        <Link
          href="/contact"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          Contact the registrar
        </Link>
      </p>
    </div>
  )
}

function PasswordField({ id }: { id: string }) {
  const [visible, setVisible] = React.useState(false)

  return (
    <Field>
      <div className="flex items-center justify-between gap-2">
        <FieldLabel htmlFor={`${id}-password`}>Password</FieldLabel>
        <Link
          href="/contact"
          className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          Forgot password?
        </Link>
      </div>
      <InputGroup>
        <InputGroupInput
          id={`${id}-password`}
          name="password"
          type={visible ? 'text' : 'password'}
          autoComplete="current-password"
          defaultValue="higa-demo-2026"
          required
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            type="button"
            size="icon-xs"
            onClick={() => setVisible((v) => !v)}
            aria-label={visible ? 'Hide password' : 'Show password'}
          >
            {visible ? <EyeOffIcon aria-hidden /> : <EyeIcon aria-hidden />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}
