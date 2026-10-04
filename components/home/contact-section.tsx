import { contact } from '@/lib/content'
import { container, eyebrow, lead, rule, sectionHeading, sectionSpacing } from '@/lib/styles'
import { cn } from '@/lib/utils'
import { ContactForm } from './contact-form'

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className={cn('border-t', rule, sectionSpacing)}>
      <div className={cn(container, 'grid gap-12 lg:grid-cols-12 lg:gap-x-10')}>
        <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:col-span-5 lg:self-start">
          <p className={eyebrow}>
            <span aria-hidden className="h-px w-8 bg-primary" />
            Contact
          </p>
          <h2 id="contact-heading" className={sectionHeading}>
            {contact.heading}
          </h2>
          <p className={cn(lead, 'max-w-md text-muted-foreground')}>{contact.body}</p>
        </div>
        <div className={cn('lg:col-span-7 lg:border-l lg:pl-10', rule)}>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
