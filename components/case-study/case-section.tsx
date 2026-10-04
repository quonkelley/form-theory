import { eyebrow, itemHeading } from '@/lib/styles'
import { cn } from '@/lib/utils'

type Props = {
  index: number
  heading: string
  emphasis?: boolean
  children: React.ReactNode
}

/** One step of the case-study narrative: problem → responsibilities → revision → implementation → validation → result. */
export function CaseSection({ index, heading, emphasis, children }: Props) {
  const id = `case-section-${index}`
  return (
    <section
      aria-labelledby={id}
      className={cn(
        'grid gap-6 border-t py-12 md:grid-cols-12 md:gap-x-10 md:py-16',
        emphasis ? 'border-t-2 border-t-primary' : 'border-foreground/15',
      )}
    >
      <div className="flex flex-col gap-3 md:col-span-4">
        <p className={eyebrow}>
          <span aria-hidden className={cn('size-2', emphasis ? 'bg-primary' : 'bg-foreground')} />
          {String(index).padStart(2, '0')} / 06
        </p>
        <h2 id={id} className={itemHeading}>
          {heading}
        </h2>
      </div>
      <div className="flex max-w-prose flex-col gap-5 text-lg leading-relaxed text-pretty md:col-span-8">{children}</div>
    </section>
  )
}
