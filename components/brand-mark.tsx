import { cn } from '@/lib/utils'

/** Compact form of the hero composition: solid circle, outlined frame. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={cn('size-6 shrink-0', className)}>
      <circle cx="15" cy="9" r="7" className="fill-primary" />
      <rect x="3" y="5" width="13" height="16" className="fill-none stroke-current" strokeWidth="2" />
    </svg>
  )
}
