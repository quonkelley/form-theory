import { SectionIntro } from '@/components/section-intro'
import { ShapeGlyph, type Shape } from '@/components/shape-glyph'
import { services } from '@/lib/content'
import { body, caption, container, eyebrow, itemHeading, sectionSpacing } from '@/lib/styles'
import { cn } from '@/lib/utils'

const shapeFor: Record<string, Shape> = { applications: 'frame', websites: 'circle', systems: 'grid' }

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className={sectionSpacing}>
      <div className={cn(container, 'flex flex-col gap-14')}>
        <SectionIntro
          id="services-heading"
          label="Services"
          heading={
            <>
              <span className="block">Improve what exists.</span>
              <span className="block">Build what’s next.</span>
            </>
          }
        />

        <ul className="flex flex-col">
          {services.map((service, i) => {
            const isLead = i === 0
            const muted = isLead ? 'text-ink-foreground/70' : 'text-muted-foreground'
            return (
              <li
                key={service.id}
                aria-labelledby={`service-${service.id}`}
                className={cn(
                  'grid gap-8 py-10 md:grid-cols-12 md:gap-x-10 md:py-12',
                  isLead ? 'rounded-md bg-ink px-6 text-ink-foreground md:px-10' : 'border-foreground/15',
                  i > 1 && 'border-t',
                )}
              >
                <div className="flex flex-col gap-5 md:col-span-5">
                  <div className="flex items-center gap-4">
                    <ShapeGlyph shape={shapeFor[service.id] ?? 'frame'} inverse={isLead} />
                    {isLead && (
                      <span className={cn(eyebrow, 'text-ink-foreground/70')}>Application improvements</span>
                    )}
                  </div>
                  <h3 id={`service-${service.id}`} className={itemHeading}>
                    {service.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-pretty">{service.tagline}</p>
                </div>

                <div
                  className={cn(
                    'grid gap-8 sm:grid-cols-2 md:col-span-7 md:border-l md:pl-10',
                    isLead ? 'md:border-ink-foreground/15' : 'md:border-foreground/15',
                  )}
                >
                  <div className="flex flex-col gap-4">
                    <p className={cn(body, muted)}>{service.description}</p>
                    {service.note && <p className={cn(caption, muted)}>{service.note}</p>}
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className={cn(eyebrow, muted)}>For example</p>
                    <ul className="flex flex-col">
                      {service.examples.map((ex) => (
                        <li
                          key={ex}
                          className={cn(
                            'flex gap-3 border-b py-3 leading-relaxed',
                            isLead ? 'border-ink-foreground/15' : 'border-foreground/15',
                          )}
                        >
                          <span aria-hidden className="mt-2.5 size-1.5 shrink-0 bg-primary" />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
