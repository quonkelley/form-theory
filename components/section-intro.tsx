import { eyebrow, rule, sectionHeading } from '@/lib/styles'
import { cn } from '@/lib/utils'

type Props = {
  id: string
  label: string
  heading: React.ReactNode
  aside?: React.ReactNode
  className?: string
}

/** Section opener that mirrors the hero: cobalt-ruled eyebrow, display heading, optional ruled aside column. */
export function SectionIntro({ id, label, heading, aside, className }: Props) {
  return (
    <div className={cn('grid gap-6 lg:grid-cols-12 lg:gap-x-10', className)}>
      <div className="flex flex-col gap-5 lg:col-span-7">
        <p className={eyebrow}>
          <span aria-hidden className="h-px w-8 bg-primary" />
          {label}
        </p>
        <h2 id={id} className={sectionHeading}>
          {heading}
        </h2>
      </div>
      {aside && (
        <div className={cn('lg:col-span-5 lg:self-end lg:border-l lg:pl-10', rule)}>{aside}</div>
      )}
    </div>
  )
}
