'use client'

import { useRef, useState, type FormEvent } from 'react'
import { AlertCircle, Info } from 'lucide-react'
import { contact } from '@/lib/content'
import {
  emptyContactValues,
  MESSAGE_MAX,
  validateContact,
  validateField,
  type ContactErrors,
  type ContactField,
  type ContactValues,
} from '@/lib/contact-validation'
import { primaryAction } from '@/lib/styles'
import { cn } from '@/lib/utils'

const fieldBase =
  'w-full rounded-md border bg-card px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus-visible:border-primary focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring/40'

const fieldOrder: ContactField[] = ['name', 'email', 'company', 'message', 'url', 'budget', 'timing']

type FieldProps = {
  id: ContactField
  label: string
  required?: boolean
  hint?: string
  error?: string
  children: (props: {
    id: string
    name: string
    'aria-invalid': boolean
    'aria-describedby'?: string
    'aria-required'?: boolean
    className: string
  }) => React.ReactNode
}

function Field({ id, label, required, hint, error, children }: FieldProps) {
  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${id}-error` : undefined
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="flex items-baseline justify-between gap-4 text-sm font-medium">
        <span>{label}</span>
        <span className="text-xs font-normal text-muted-foreground">{required ? 'Required' : 'Optional'}</span>
      </label>
      {hint && (
        <p id={hintId} className="text-sm leading-relaxed text-muted-foreground">
          {hint}
        </p>
      )}
      {children({
        id,
        name: id,
        'aria-invalid': Boolean(error),
        'aria-describedby': describedBy,
        'aria-required': required || undefined,
        className: cn(fieldBase, error ? 'border-destructive' : 'border-foreground/20 hover:border-foreground/40'),
      })}
      {error && (
        <p id={errorId} className="flex items-start gap-2 text-sm text-destructive">
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
          {error}
        </p>
      )}
    </div>
  )
}

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(emptyContactValues)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [touched, setTouched] = useState<Partial<Record<ContactField, boolean>>>({})
  const [status, setStatus] = useState<'idle' | 'invalid' | 'complete'>('idle')
  const summaryRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const update = (field: ContactField, value: string) => {
    setValues((v) => ({ ...v, [field]: value }))
    if (status === 'complete') setStatus('idle')
    if (touched[field]) setErrors((e) => ({ ...e, [field]: validateField(field, value) }))
  }

  const blur = (field: ContactField) => {
    setTouched((t) => ({ ...t, [field]: true }))
    setErrors((e) => ({ ...e, [field]: validateField(field, values[field]) }))
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validateContact(values)
    setErrors(nextErrors)
    setTouched(Object.fromEntries(fieldOrder.map((f) => [f, true])))

    const firstInvalid = fieldOrder.find((f) => nextErrors[f])
    if (firstInvalid) {
      setStatus('invalid')
      formRef.current?.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus()
      return
    }
    // Submission is intentionally not connected in this preview. Nothing is sent.
    setStatus('complete')
    requestAnimationFrame(() => summaryRef.current?.focus())
  }

  const errorCount = Object.values(errors).filter(Boolean).length

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} aria-describedby="form-preview-notice" className="flex flex-col gap-6">
      <div
        id="form-preview-notice"
        className="flex items-start gap-3 rounded-md border border-primary/30 bg-primary/5 px-4 py-3 text-sm leading-relaxed"
      >
        <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
        <p>
          <strong className="font-semibold">{contact.previewNotice}</strong> You can check your details, but nothing
          will be sent from this form yet.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Name" required error={errors.name}>
          {(p) => (
            <input
              {...p}
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={(e) => update('name', e.target.value)}
              onBlur={() => blur('name')}
            />
          )}
        </Field>
        <Field id="email" label="Email" required error={errors.email}>
          {(p) => (
            <input
              {...p}
              type="email"
              autoComplete="email"
              inputMode="email"
              value={values.email}
              onChange={(e) => update('email', e.target.value)}
              onBlur={() => blur('email')}
            />
          )}
        </Field>
      </div>

      <Field id="company" label="Company or project name" required error={errors.company}>
        {(p) => (
          <input
            {...p}
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={(e) => update('company', e.target.value)}
            onBlur={() => blur('company')}
          />
        )}
      </Field>

      <Field
        id="message"
        label="What do you want to improve or build?"
        required
        hint="What are you trying to accomplish, and what’s getting in the way?"
        error={errors.message}
      >
        {(p) => (
          <textarea
            {...p}
            rows={6}
            maxLength={MESSAGE_MAX}
            value={values.message}
            onChange={(e) => update('message', e.target.value)}
            onBlur={() => blur('message')}
            className={cn(p.className, 'min-h-40 resize-y leading-relaxed')}
          />
        )}
      </Field>

      <Field id="url" label="Current website or application URL" error={errors.url}>
        {(p) => (
          <input
            {...p}
            type="text"
            inputMode="url"
            autoComplete="url"
            placeholder="example.com"
            value={values.url}
            onChange={(e) => update('url', e.target.value)}
            onBlur={() => blur('url')}
          />
        )}
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="budget" label="Budget range">
          {(p) => (
            <select {...p} value={values.budget} onChange={(e) => update('budget', e.target.value)}>
              <option value="">Select a range</option>
              {contact.budgetOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          )}
        </Field>
        <Field id="timing" label="Desired timing">
          {(p) => (
            <select {...p} value={values.timing} onChange={(e) => update('timing', e.target.value)}>
              <option value="">Select timing</option>
              {contact.timingOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          )}
        </Field>
      </div>

      <div className="flex flex-col gap-4 border-t border-foreground/15 pt-6">
        <div aria-live="polite" className="empty:hidden">
          {status === 'invalid' && errorCount > 0 && (
            <p className="flex items-start gap-2 text-sm text-destructive">
              <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
              {errorCount === 1 ? 'One field needs attention.' : `${errorCount} fields need attention.`}
            </p>
          )}
        </div>
        {status === 'complete' && (
          <div
            ref={summaryRef}
            tabIndex={-1}
            role="status"
            className="flex items-start gap-3 rounded-md border border-foreground/20 bg-muted px-4 py-3 text-sm leading-relaxed"
          >
            <Info className="mt-0.5 size-4 shrink-0" aria-hidden />
            <p>
              <strong className="font-semibold">Your details look complete, but this inquiry has not been sent.</strong>{' '}
              Submissions aren’t connected in this preview. Please keep a copy of your message.
            </p>
          </div>
        )}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">Preview only — no data leaves this page.</p>
          <button type="submit" className={cn(primaryAction, 'w-full sm:w-auto')}>
            Check my details
          </button>
        </div>
      </div>
    </form>
  )
}
