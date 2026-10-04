import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { HeroComposition } from '@/components/home/hero-composition'
import { hero, site } from '@/lib/content'
import { container, primaryAction, secondaryAction } from '@/lib/styles'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section aria-labelledby="hero-heading">
      <div
        className={cn(
          container,
          'grid gap-12 pt-12 pb-14 md:pt-16 lg:grid-cols-12 lg:gap-x-10 lg:pt-20 lg:pb-20',
        )}
      >
        <div className="flex flex-col gap-10 lg:col-span-7 animate-in fade-in slide-in-from-bottom-2 duration-700">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium tracking-wide text-muted-foreground uppercase">
            <span aria-hidden className="h-px w-8 bg-primary" />
            {hero.kicker.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="size-1 bg-foreground/40" />}
                {item}
              </span>
            ))}
          </p>

          <h1
            id="hero-heading"
            className="font-display text-5xl leading-[0.92] font-bold tracking-tighter sm:text-7xl lg:text-[5.75rem]"
          >
            {hero.headingLines.map((line, i) => (
              <span key={line} className={cn('block', i === 1 && 'text-primary')}>
                {line}
              </span>
            ))}
          </h1>

          <div className="flex flex-col gap-8">
            <p className="max-w-lg text-lg leading-relaxed text-pretty md:text-xl">{hero.supporting}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href={hero.primaryCta.href} className={primaryAction}>
                {hero.primaryCta.label}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link href={hero.secondaryCta.href} className={secondaryAction}>
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          <p className="flex items-center gap-3 border-t border-foreground/15 pt-5 text-sm text-muted-foreground">
            <span aria-hidden className="size-2 shrink-0 bg-primary" />
            {hero.founderLine}
          </p>
        </div>

        <div className="relative flex flex-col gap-4 lg:col-span-5 lg:border-l lg:border-foreground/15 lg:pl-10">
          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <HeroComposition />
          </div>
          <div className="flex items-center justify-between border-t border-foreground/15 pt-3 text-sm text-muted-foreground">
            <span>{site.domain}</span>
            <span aria-hidden>Form / Structure</span>
          </div>
        </div>
      </div>
    </section>
  )
}
