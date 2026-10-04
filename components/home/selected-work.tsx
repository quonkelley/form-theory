import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SectionIntro } from '@/components/section-intro'
import { ProjectScreenshot } from '@/components/project-screenshot'
import { lamonCaseStudy, work, type WorkItem } from '@/lib/content'
import { container, eyebrow, lead, primaryAction, rule, sectionSpacing } from '@/lib/styles'
import { cn } from '@/lib/utils'

function WorkFeature({ item }: { item: WorkItem }) {
  const shots = lamonCaseStudy.screenshots
  return (
    <article aria-labelledby={`work-${item.slug}`} className="flex flex-col gap-10 border-t-2 border-foreground pt-8">
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-x-10">
        <div className="flex flex-col gap-4 lg:col-span-7">
          <p className={eyebrow}>
            <span aria-hidden className="size-2 bg-primary" />
            Client website · {item.client}
          </p>
          <h3
            id={`work-${item.slug}`}
            className="font-display text-3xl leading-[1.05] font-bold tracking-tight text-balance md:text-4xl"
          >
            {item.title}
          </h3>
        </div>
        <p className={cn(lead, 'text-muted-foreground lg:col-span-5 lg:self-end lg:border-l lg:pl-10', rule)}>
          {item.summary}
        </p>
      </div>

      <div className="grid items-start gap-x-4 gap-y-8 md:grid-cols-2">
        <ProjectScreenshot
          className="md:col-span-2"
          {...shots.hero.image}
          caption={shots.hero.caption}
          sizes="(min-width: 1280px) 1200px, 100vw"
        />
        {[shots.services, shots.pricing].map((shot) => (
          <ProjectScreenshot
            key={shot.image.src}
            {...shot.image}
            caption={shot.caption}
            sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
          />
        ))}
      </div>

      <dl className={cn('grid gap-8 border-t pt-8 md:grid-cols-3 md:gap-0', rule)}>
        <div className="flex flex-col gap-3 md:pr-8">
          <dt className={eyebrow}>What it does</dt>
          <dd>
            <ul className="flex flex-col gap-1.5 leading-relaxed">
              {item.capabilities.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </dd>
        </div>
        <div className={cn('flex flex-col gap-3 md:border-l md:px-8', rule)}>
          <dt className={eyebrow}>Built with</dt>
          <dd className="leading-relaxed">{item.stack.join(', ')}</dd>
        </div>
        <div className={cn('flex flex-col gap-3 md:border-l md:pl-8', rule)}>
          <dt className="sr-only">Links</dt>
          <dd className="flex flex-col items-start gap-3">
            <Link href={item.href} className={cn(primaryAction, 'w-full sm:w-auto')}>
              Read the case study
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
            {item.liveUrl && (
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1 rounded-sm text-sm font-medium underline underline-offset-4 hover:text-primary"
              >
                Visit live site
                <ArrowUpRight className="size-4" aria-hidden />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
          </dd>
        </div>
      </dl>
    </article>
  )
}

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-heading" className={cn('border-t bg-card', rule, sectionSpacing)}>
      <div className={cn(container, 'flex flex-col gap-14')}>
        <SectionIntro id="work-heading" label="Selected work" heading="Presentation and function, working together." />
        <div className="flex flex-col gap-20">
          {work.map((item) => (
            <WorkFeature key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
