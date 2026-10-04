import { about, site } from '@/lib/content'
import { body, container, eyebrow, lead, rule, sectionHeading, sectionSpacing } from '@/lib/styles'
import { cn } from '@/lib/utils'

export function About() {
  const [first, ...rest] = about.paragraphs

  return (
    <section id="about" aria-labelledby="about-heading" className={cn('border-t', rule, sectionSpacing)}>
      <div className={cn(container, 'grid gap-12 lg:grid-cols-12 lg:gap-x-10')}>
        <div className="flex flex-col gap-5 lg:col-span-5">
          <p className={eyebrow}>
            <span aria-hidden className="h-px w-8 bg-primary" />
            About
          </p>
          <h2 id="about-heading" className={sectionHeading}>
            {about.heading}
          </h2>
          <p className={cn('flex items-center gap-3 border-t pt-5 text-sm text-muted-foreground', rule)}>
            <span aria-hidden className="size-2 shrink-0 bg-primary" />
            {site.founder}, {site.name}
          </p>
        </div>

        <div className={cn('flex flex-col gap-10 lg:col-span-7 lg:border-l lg:pl-10', rule)}>
          <div className="flex max-w-prose flex-col gap-5">
            <p className={lead}>{first}</p>
            {rest.map((p) => (
              <p key={p} className={cn(body, 'text-muted-foreground')}>
                {p}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <h3 className={eyebrow}>Across the stack</h3>
            <ul className={cn('grid border-t sm:grid-cols-2 sm:gap-x-8', rule)}>
              {about.capabilities.map((c) => (
                <li key={c} className={cn('flex items-center gap-3 border-b py-3', rule)}>
                  <span aria-hidden className="size-1.5 shrink-0 bg-foreground" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
