import type { CSSProperties } from 'react'

const GRID = { x0: 40, y0: 40, x1: 480, y1: 560, step: 40 }
const FRAME = { x: 80, y: 160, w: 280, h: 360 }
const CIRCLE = { cx: 320, cy: 200, r: 140 }
const BLOCK = { x: 80, y: 440, size: 80 }

const range = (from: number, to: number, step: number) =>
  Array.from({ length: Math.floor((to - from) / step) + 1 }, (_, i) => from + i * step)

const enter = (x: number, y: number, delay: number, scale = 1): CSSProperties =>
  ({
    '--ft-from-x': `${x}px`,
    '--ft-from-y': `${y}px`,
    '--ft-from-scale': scale,
    animationDelay: `${delay}ms`,
  }) as CSSProperties

/**
 * Abstract brand artwork: a measured grid (structure), an outlined frame (form held in structure),
 * and a solid cobalt circle (form) that breaks the frame. Not a depiction of client work.
 */
export function HeroComposition() {
  const verticals = range(GRID.x0, GRID.x1, GRID.step)
  const horizontals = range(GRID.y0, GRID.y1, GRID.step)

  return (
    <svg
      viewBox="0 0 520 600"
      role="img"
      aria-label="Abstract composition of a cobalt circle, an outlined frame, and a measured grid"
      className="h-auto w-full overflow-visible"
    >
      <defs>
        <clipPath id="ft-circle-clip">
          <circle cx={CIRCLE.cx} cy={CIRCLE.cy} r={CIRCLE.r} />
        </clipPath>
      </defs>

      <g className="ft-fade stroke-foreground/12" strokeWidth="1" vectorEffect="non-scaling-stroke">
        {verticals.map((x) => (
          <line key={`v${x}`} x1={x} y1={GRID.y0} x2={x} y2={GRID.y1} />
        ))}
        {horizontals.map((y) => (
          <line key={`h${y}`} x1={GRID.x0} y1={y} x2={GRID.x1} y2={y} />
        ))}
      </g>

      <g className="ft-fade stroke-foreground/45" strokeWidth="1" style={{ animationDelay: '500ms' }}>
        <line x1={FRAME.x} y1={FRAME.y} x2={FRAME.x + FRAME.w} y2={FRAME.y + FRAME.h} strokeDasharray="4 6" />
        <line x1={CIRCLE.cx} y1={GRID.y0 - 16} x2={CIRCLE.cx} y2={GRID.y1 + 16} />
        <line x1={GRID.x0 - 16} y1={CIRCLE.cy} x2={GRID.x1 + 16} y2={CIRCLE.cy} />
      </g>

      <circle
        className="ft-shape fill-primary"
        style={enter(0, 0, 150, 0.55)}
        cx={CIRCLE.cx}
        cy={CIRCLE.cy}
        r={CIRCLE.r}
      />

      <rect
        className="ft-shape fill-foreground"
        style={enter(-48, 0, 350)}
        x={BLOCK.x}
        y={BLOCK.y}
        width={BLOCK.size}
        height={BLOCK.size}
      />

      <rect
        className="ft-shape fill-none stroke-foreground"
        style={enter(32, -32, 250)}
        strokeWidth="3"
        x={FRAME.x}
        y={FRAME.y}
        width={FRAME.w}
        height={FRAME.h}
      />

      <g clipPath="url(#ft-circle-clip)">
        <rect
          className="ft-fade fill-none stroke-background"
          style={{ animationDelay: '900ms' }}
          strokeWidth="3"
          x={FRAME.x}
          y={FRAME.y}
          width={FRAME.w}
          height={FRAME.h}
        />
      </g>

      <g className="ft-fade fill-foreground" style={{ animationDelay: '700ms' }}>
        <circle cx={CIRCLE.cx} cy={CIRCLE.cy} r="5" className="fill-background" />
        <rect x={FRAME.x + FRAME.w - 5} y={FRAME.y + FRAME.h - 5} width="10" height="10" />
        <rect x={FRAME.x - 5} y={FRAME.y - 5} width="10" height="10" />
      </g>
    </svg>
  )
}
