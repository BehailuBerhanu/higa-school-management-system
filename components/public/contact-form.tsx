'use client'

import { useState } from 'react'
import { SendIcon } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Spinner } from '@/components/ui/spinner'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const topics = [
  'Admissions enquiry',
  'Boarding & residence',
  'Fees & payment',
  'Academic records',
  'Employment',
  'Something else',
]

export function ContactForm() {
  const [pending, setPending] = useState(false)
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const element = event.currentTarget
    const form = new FormData(element)
    const next: Record<string, boolean> = {}
    for (const key of ['name', 'email', 'message']) {
      if (!String(form.get(key) ?? '').trim()) next[key] = true
    }
    const email = String(form.get('email') ?? '')
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = true
    setErrors(next)
    if (Object.keys(next).length > 0) {
      toast.error('Please correct the highlighted fields.')
      return
    }
    setPending(true)
    window.setTimeout(() => {
      setPending(false)
      toast.success(
        'Enquiry received. The registrar will reply within two working days.',
      )
      element.reset()
    }, 900)
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <FieldGroup>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field data-invalid={errors.name || undefined}>
            <FieldLabel htmlFor="contact-name">Full name</FieldLabel>
            <Input
              id="contact-name"
              name="name"
              placeholder="Tigist Alemu"
              aria-invalid={errors.name || undefined}
            />
            {errors.name ? (
              <FieldDescription>Please enter your name.</FieldDescription>
            ) : null}
          </Field>

          <Field data-invalid={errors.email || undefined}>
            <FieldLabel htmlFor="contact-email">Email address</FieldLabel>
            <Input
              id="contact-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              aria-invalid={errors.email || undefined}
            />
            {errors.email ? (
              <FieldDescription>
                Enter a valid email address.
              </FieldDescription>
            ) : null}
          </Field>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="contact-phone">Phone (optional)</FieldLabel>
            <Input
              id="contact-phone"
              name="phone"
              type="tel"
              placeholder="+251 …"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="contact-topic">Subject</FieldLabel>
            <Select name="topic" defaultValue={topics[0]}>
              <SelectTrigger id="contact-topic" className="w-full">
                <SelectValue placeholder="Choose a subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {topics.map((topic) => (
                    <SelectItem key={topic} value={topic}>
                      {topic}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        </div>

        <Field data-invalid={errors.message || undefined}>
          <FieldLabel htmlFor="contact-message">Message</FieldLabel>
          <Textarea
            id="contact-message"
            name="message"
            rows={6}
            placeholder="Tell us how we can help."
            aria-invalid={errors.message || undefined}
          />
          <FieldDescription>
            {errors.message
              ? 'Please write a short message.'
              : 'The registrar’s office replies within two working days.'}
          </FieldDescription>
        </Field>

        <Field orientation="horizontal">
          <Button type="submit" disabled={pending}>
            {pending ? (
              <Spinner data-icon="inline-start" />
            ) : (
              <SendIcon data-icon="inline-start" />
            )}
            {pending ? 'Sending…' : 'Send enquiry'}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  )
}
