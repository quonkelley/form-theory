import { SectionIntro } from '@/components/section-intro'
import { process } from '@/lib/content'
import { body, container, minorHeading, rule, sectionSpacing } from '@/lib/styles'
import { cn } from '@/lib/utils'

export function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className={cn('border-t bg-muted', rule, sectionSpacing)}>
      <div className={cn(container, 'flex flex-col gap-16')}>
        <SectionIntro id="process-heading" label="Process" heading="A clearly defined path from problem to handover." />

        <ol className="grid gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => {
            const isLast = i === process.length - 1
            return (
              <li key={step.title} className="relative flex flex-col gap-5 border-t-2 border-foreground pt-8 md:pr-8">
                {/* Track node: squares mark each stage; the final stage resolves to the cobalt circle. */}
                <span
                  aria-hidden
                  className={cn(
                    'absolute -top-[7px] left-0 size-3',
                    isLast ? 'rounded-full bg-primary' : 'bg-foreground',
                  )}
                />
                <span
                  aria-hidden
                  className={cn(
                    'font-display text-6xl leading-none font-bold tracking-tighter',
                    isLast ? 'text-primary' : 'text-foreground',
                  )}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className={minorHeading}>
                  <span className="sr-only">{`Step ${i + 1}: `}</span>
                  {step.title}
                </h3>
                <p className={cn(body, 'text-muted-foreground')}>{step.description}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
