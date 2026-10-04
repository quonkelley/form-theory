import Image from 'next/image'
import { caption as captionStyle } from '@/lib/styles'
import { cn } from '@/lib/utils'

type Props = {
  src: string
  width: number
  height: number
  alt: string
  caption?: string
  sizes: string
  priority?: boolean
  className?: string
}

export function ProjectScreenshot({ src, width, height, alt, caption, sizes, priority, className }: Props) {
  return (
    <figure className={cn('flex flex-col gap-3', className)}>
      <div className="overflow-hidden rounded-md border border-foreground/15 bg-foreground shadow-sm">
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          sizes={sizes}
          priority={priority}
          className="h-auto w-full"
        />
      </div>
      {caption && <figcaption className={captionStyle}>{caption}</figcaption>}
    </figure>
  )
}
