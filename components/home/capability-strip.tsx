import { ShapeGlyph } from '@/components/shape-glyph'
import { capabilities } from '@/lib/content'
import { container } from '@/lib/styles'
import { cn } from '@/lib/utils'

export function CapabilityStrip() {
  return (
    <section aria-labelledby="capabilities-heading" className="bg-ink text-ink-foreground">
      <h2 id="capabilities-heading" className="sr-only">
        What I work on
      </h2>
      <ul className={cn(container, 'flex flex-col md:flex-row')}>
        {capabilities.map((item, i) => (
          <li
            key={item.label}
            className={cn(
              'flex items-center gap-5 border-ink-foreground/15 py-6 md:flex-1 md:py-9',
              i > 0 && 'border-t md:border-t-0 md:border-l md:pl-8',
              i < capabilities.length - 1 && 'md:pr-8',
            )}
          >
            <ShapeGlyph shape={item.glyph} inverse />
            <span className="font-display text-2xl leading-tight font-semibold tracking-tight text-balance lg:text-3xl">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
