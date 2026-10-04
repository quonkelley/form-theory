/**
 * Contact form validation. Framework-free so the same rules can be reused
 * server-side once a real submission handler is added (see README).
 */

export type ContactValues = {
  name: string
  email: string
  company: string
  message: string
  url: string
  budget: string
  timing: string
}

export type ContactField = keyof ContactValues
export type ContactErrors = Partial<Record<ContactField, string>>

export const emptyContactValues: ContactValues = {
  name: '',
  email: '',
  company: '',
  message: '',
  url: '',
  budget: '',
  timing: '',
}

export const MESSAGE_MIN = 20
export const MESSAGE_MAX = 4000

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function isValidUrl(value: string) {
  const candidate = /^https?:\/\//i.test(value) ? value : `https://${value}`
  try {
    const url = new URL(candidate)
    return url.hostname.includes('.')
  } catch {
    return false
  }
}

export function validateField(field: ContactField, raw: string): string | undefined {
  const value = raw.trim()
  switch (field) {
    case 'name':
      if (!value) return 'Please enter your name.'
      if (value.length > 120) return 'Please keep your name under 120 characters.'
      return
    case 'email':
      if (!value) return 'Please enter your email so I can reply.'
      if (!EMAIL_PATTERN.test(value)) return 'Please enter a valid email address, like name@company.com.'
      return
    case 'company':
      if (!value) return 'Please enter your company or project name.'
      if (value.length > 160) return 'Please keep this under 160 characters.'
      return
    case 'message':
      if (!value) return 'Please describe what you’d like to improve or build.'
      if (value.length < MESSAGE_MIN)
        return `Please add a little more detail — at least ${MESSAGE_MIN} characters.`
      if (value.length > MESSAGE_MAX) return `Please keep this under ${MESSAGE_MAX} characters.`
      return
    case 'url':
      if (value && !isValidUrl(value)) return 'Please enter a valid URL, like example.com, or leave this blank.'
      return
    default:
      return
  }
}

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {}
  for (const field of Object.keys(values) as ContactField[]) {
    const error = validateField(field, values[field])
    if (error) errors[field] = error
  }
  return errors
}
