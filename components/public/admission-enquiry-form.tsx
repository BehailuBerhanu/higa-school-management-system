'use client'

import * as React from 'react'
import { toast } from 'sonner'
import { CheckIcon, ArrowLeftIcon, ArrowRightIcon, SendIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import { Spinner } from '@/components/ui/spinner'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

const steps = [
  { id: 1, label: 'Applicant', hint: 'Who is applying' },
  { id: 2, label: 'Guardian', hint: 'How we reach you' },
  { id: 3, label: 'Review', hint: 'Confirm and send' },
]

const entryGrades = [
  'Grade 7 — Middle School',
  'Grade 8 — Middle School',
  'Grade 9 — Secondary',
  'Grade 10 — Secondary',
  'Grade 11 — Preparatory (Natural Science)',
  'Grade 11 — Preparatory (Social Science)',
]

const boardingOptions = [
  'Full boarding (seven nights)',
  'Weekly boarding (five nights)',
  'Day scholar',
]

type FormState = {
  firstName: string
  lastName: string
  dateOfBirth: string
  entryGrade: string
  currentSchool: string
  boarding: string
  guardianName: string
  relationship: string
  email: string
  phone: string
  city: string
  message: string
  consent: boolean
}

const initialState: FormState = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  entryGrade: '',
  currentSchool: '',
  boarding: '',
  guardianName: '',
  relationship: '',
  email: '',
  phone: '',
  city: '',
  message: '',
  consent: false,
}

export function AdmissionEnquiryForm() {
  const [step, setStep] = React.useState(1)
  const [values, setValues] = React.useState<FormState>(initialState)
  const [touched, setTouched] = React.useState(false)
  const [pending, setPending] = React.useState(false)

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }))
  }

  const stepOneMissing =
    !values.firstName || !values.lastName || !values.entryGrade
  const stepTwoMissing = !values.guardianName || !values.email || !values.phone

  function next() {
    if (step === 1 && stepOneMissing) {
      setTouched(true)
      return
    }
    if (step === 2 && stepTwoMissing) {
      setTouched(true)
      return
    }
    setTouched(false)
    setStep((s) => Math.min(3, s + 1))
  }

  function back() {
    setTouched(false)
    setStep((s) => Math.max(1, s - 1))
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!values.consent) {
      setTouched(true)
      return
    }
    setPending(true)
    window.setTimeout(() => {
      setPending(false)
      toast.success('Enquiry submitted', {
        description: `Reference HIG-${Math.floor(Math.random() * 9000 + 1000)}. The registrar will contact ${values.email} within two working days.`,
      })
      setValues(initialState)
      setStep(1)
      setTouched(false)
    }, 900)
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Admission enquiry</CardTitle>
        <CardDescription>
          Three short steps. Nothing is binding — the registrar reviews your
          enquiry and invites you to the next assessment sitting.
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-8">
        <ol className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-0">
          {steps.map((item, index) => {
            const complete = step > item.id
            const active = step === item.id
            return (
              <li
                key={item.id}
                className="flex flex-1 items-center gap-3"
                aria-current={active ? 'step' : undefined}
              >
                <span
                  className={cn(
                    'flex size-9 shrink-0 items-center justify-center rounded-full border text-sm font-medium transition-colors',
                    complete && 'border-primary bg-primary text-primary-foreground',
                    active && 'border-primary bg-primary/10 text-primary',
                    !complete &&
                      !active &&
                      'border-border bg-muted text-muted-foreground',
                  )}
                >
                  {complete ? (
                    <CheckIcon className="size-4" aria-hidden />
                  ) : (
                    item.id
                  )}
                </span>
                <span className="flex flex-col">
                  <span
                    className={cn(
                      'text-sm font-medium',
                      active ? 'text-foreground' : 'text-muted-foreground',
                    )}
                  >
                    {item.label}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {item.hint}
                  </span>
                </span>
                {index < steps.length - 1 ? (
                  <Separator className="ml-2 hidden flex-1 sm:block" />
                ) : null}
              </li>
            )
          })}
        </ol>

        <Separator />

        <form id="admission-enquiry" onSubmit={submit}>
          {step === 1 ? (
            <FieldGroup>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field data-invalid={touched && !values.firstName ? true : undefined}>
                  <FieldLabel htmlFor="firstName">Applicant first name</FieldLabel>
                  <Input
                    id="firstName"
                    value={values.firstName}
                    onChange={(e) => set('firstName', e.target.value)}
                    aria-invalid={touched && !values.firstName ? true : undefined}
                    placeholder="Selam"
                  />
                  {touched && !values.firstName ? (
                    <FieldDescription>First name is required.</FieldDescription>
                  ) : null}
                </Field>
                <Field data-invalid={touched && !values.lastName ? true : undefined}>
                  <FieldLabel htmlFor="lastName">Applicant last name</FieldLabel>
                  <Input
                    id="lastName"
                    value={values.lastName}
                    onChange={(e) => set('lastName', e.target.value)}
                    aria-invalid={touched && !values.lastName ? true : undefined}
                    placeholder="Bekele"
                  />
                  {touched && !values.lastName ? (
                    <FieldDescription>Last name is required.</FieldDescription>
                  ) : null}
                </Field>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="dateOfBirth">Date of birth</FieldLabel>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={values.dateOfBirth}
                    onChange={(e) => set('dateOfBirth', e.target.value)}
                  />
                </Field>
                <Field
                  data-invalid={touched && !values.entryGrade ? true : undefined}
                >
                  <FieldLabel htmlFor="entryGrade">Entry grade</FieldLabel>
                  <Select
                    value={values.entryGrade}
                    onValueChange={(value) => set('entryGrade', String(value))}
                  >
                    <SelectTrigger
                      id="entryGrade"
                      className="w-full"
                      aria-invalid={
                        touched && !values.entryGrade ? true : undefined
                      }
                    >
                      <SelectValue placeholder="Select a grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {entryGrades.map((grade) => (
                          <SelectItem key={grade} value={grade}>
                            {grade}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {touched && !values.entryGrade ? (
                    <FieldDescription>
                      Choose the grade the applicant is entering.
                    </FieldDescription>
                  ) : null}
                </Field>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="currentSchool">Current school</FieldLabel>
                  <Input
                    id="currentSchool"
                    value={values.currentSchool}
                    onChange={(e) => set('currentSchool', e.target.value)}
                    placeholder="Name of present school"
                  />
                  <FieldDescription>
                    Leave blank if the applicant is not currently enrolled.
                  </FieldDescription>
                </Field>
                <Field>
                  <FieldLabel htmlFor="boarding">Boarding preference</FieldLabel>
                  <Select
                    value={values.boarding}
                    onValueChange={(value) => set('boarding', String(value))}
                  >
                    <SelectTrigger id="boarding" className="w-full">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {boardingOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
              </div>
            </FieldGroup>
          ) : null}

          {step === 2 ? (
            <FieldGroup>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field
                  data-invalid={touched && !values.guardianName ? true : undefined}
                >
                  <FieldLabel htmlFor="guardianName">
                    Parent or guardian name
                  </FieldLabel>
                  <Input
                    id="guardianName"
                    value={values.guardianName}
                    onChange={(e) => set('guardianName', e.target.value)}
                    aria-invalid={
                      touched && !values.guardianName ? true : undefined
                    }
                    placeholder="Full name"
                  />
                  {touched && !values.guardianName ? (
                    <FieldDescription>
                      We need a guardian on record.
                    </FieldDescription>
                  ) : null}
                </Field>
                <Field>
                  <FieldLabel htmlFor="relationship">
                    Relationship to applicant
                  </FieldLabel>
                  <Input
                    id="relationship"
                    value={values.relationship}
                    onChange={(e) => set('relationship', e.target.value)}
                    placeholder="Mother, father, guardian"
                  />
                </Field>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <Field data-invalid={touched && !values.email ? true : undefined}>
                  <FieldLabel htmlFor="guardianEmail">Email address</FieldLabel>
                  <Input
                    id="guardianEmail"
                    type="email"
                    value={values.email}
                    onChange={(e) => set('email', e.target.value)}
                    aria-invalid={touched && !values.email ? true : undefined}
                    placeholder="name@example.com"
                  />
                  {touched && !values.email ? (
                    <FieldDescription>
                      A valid email is required for the invitation letter.
                    </FieldDescription>
                  ) : null}
                </Field>
                <Field data-invalid={touched && !values.phone ? true : undefined}>
                  <FieldLabel htmlFor="guardianPhone">Phone number</FieldLabel>
                  <Input
                    id="guardianPhone"
                    type="tel"
                    value={values.phone}
                    onChange={(e) => set('phone', e.target.value)}
                    aria-invalid={touched && !values.phone ? true : undefined}
                    placeholder="+251 91 234 5678"
                  />
                  {touched && !values.phone ? (
                    <FieldDescription>
                      Phone number is required.
                    </FieldDescription>
                  ) : null}
                </Field>
              </div>

              <Field>
                <FieldLabel htmlFor="city">City or town</FieldLabel>
                <Input
                  id="city"
                  value={values.city}
                  onChange={(e) => set('city', e.target.value)}
                  placeholder="Addis Ababa"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="message">
                  Anything we should know
                </FieldLabel>
                <Textarea
                  id="message"
                  rows={4}
                  value={values.message}
                  onChange={(e) => set('message', e.target.value)}
                  placeholder="Learning support needs, sibling already enrolled, scholarship interest."
                />
              </Field>
            </FieldGroup>
          ) : null}

          {step === 3 ? (
            <FieldGroup>
              <dl className="grid gap-x-8 gap-y-4 rounded-xl border bg-muted/40 p-5 sm:grid-cols-2">
                <SummaryRow
                  label="Applicant"
                  value={`${values.firstName} ${values.lastName}`.trim()}
                />
                <SummaryRow label="Date of birth" value={values.dateOfBirth} />
                <SummaryRow label="Entry grade" value={values.entryGrade} />
                <SummaryRow label="Boarding" value={values.boarding} />
                <SummaryRow
                  label="Current school"
                  value={values.currentSchool}
                />
                <SummaryRow label="Guardian" value={values.guardianName} />
                <SummaryRow label="Relationship" value={values.relationship} />
                <SummaryRow label="Email" value={values.email} />
                <SummaryRow label="Phone" value={values.phone} />
                <SummaryRow label="City" value={values.city} />
                {values.message ? (
                  <div className="sm:col-span-2">
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      Notes
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed">
                      {values.message}
                    </dd>
                  </div>
                ) : null}
              </dl>

              <FieldSet>
                <FieldLegend className="sr-only">Consent</FieldLegend>
                <Field
                  orientation="horizontal"
                  data-invalid={touched && !values.consent ? true : undefined}
                >
                  <Checkbox
                    id="consent"
                    checked={values.consent}
                    onCheckedChange={(checked) => set('consent', checked === true)}
                    aria-invalid={touched && !values.consent ? true : undefined}
                  />
                  <FieldLabel htmlFor="consent" className="font-normal">
                    I confirm the details above are accurate and consent to Higa
                    Model Boarding School contacting me about this enquiry.
                  </FieldLabel>
                </Field>
                {touched && !values.consent ? (
                  <FieldDescription>
                    Please confirm before submitting.
                  </FieldDescription>
                ) : null}
              </FieldSet>
            </FieldGroup>
          ) : null}
        </form>
      </CardContent>

      <CardFooter className="flex flex-wrap items-center justify-between gap-3 border-t bg-muted/30">
        <p className="text-xs text-muted-foreground">
          Step {step} of {steps.length}
        </p>
        <div className="flex gap-2">
          {step > 1 ? (
            <Button type="button" variant="outline" onClick={back}>
              <ArrowLeftIcon data-icon="inline-start" />
              Back
            </Button>
          ) : null}
          {step < 3 ? (
            <Button type="button" onClick={next}>
              Continue
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
          ) : (
            <Button type="submit" form="admission-enquiry" disabled={pending}>
              {pending ? (
                <Spinner data-icon="inline-start" />
              ) : (
                <SendIcon data-icon="inline-start" />
              )}
              {pending ? 'Submitting' : 'Submit enquiry'}
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-medium">
        {value ? value : <span className="text-muted-foreground">—</span>}
      </dd>
    </div>
  )
}
