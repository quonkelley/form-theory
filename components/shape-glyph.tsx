import { cn } from '@/lib/utils'

export type Shape = 'circle' | 'frame' | 'grid'

/** The three hero shapes at icon size. `inverse` is for use on the ink surface. */
export function ShapeGlyph({ shape, inverse, className }: { shape: Shape; inverse?: boolean; className?: string }) {
  const line = inverse ? 'stroke-ink-foreground' : 'stroke-foreground'
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={cn('size-8 shrink-0', className)}>
      {shape === 'circle' && <circle cx="16" cy="16" r="13" className="fill-primary" />}
      {shape === 'frame' && <rect x="5" y="3" width="22" height="26" className={cn('fill-none', line)} strokeWidth="2.5" />}
      {shape === 'grid' && (
        <g className={cn(line, 'opacity-80')} strokeWidth="1.5">
          {[4, 12, 20, 28].map((p) => (
            <g key={p}>
              <line x1={p} y1="4" x2={p} y2="28" />
              <line x1="4" y1={p} x2="28" y2={p} />
            </g>
          ))}
        </g>
      )}
    </svg>
  )
}
