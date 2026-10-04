import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { lamonCaseStudy as cs } from '@/lib/content'
import { container, eyebrow, pageHeading, primaryAction, rule, sectionHeading } from '@/lib/styles'
import { cn } from '@/lib/utils'
import { ProjectScreenshot } from '@/components/project-screenshot'
import { CaseSection } from '@/components/case-study/case-section'

export const metadata: Metadata = {
  title: 'Lamon Brewster case study',
  description: cs.description,
}

type Shot = (typeof cs.screenshots)[keyof typeof cs.screenshots]

/** Aligns a screenshot with the narrative column so tall images don't dominate the page. */
function CaseFigure({ shot }: { shot: Shot }) {
  return (
    <div className="grid pb-12 md:grid-cols-12 md:gap-x-10 md:pb-16">
      <ProjectScreenshot
        className="md:col-span-8 md:col-start-5"
        {...shot.image}
        caption={shot.caption}
        sizes="(min-width: 1280px) 740px, (min-width: 768px) 66vw, 100vw"
      />
    </div>
  )
}

export default function LamonBrewsterCaseStudy() {
  const { sections: s, screenshots: shots } = cs

  return (
    <article>
      <header className={cn('border-b', rule)}>
        <div className={cn(container, 'flex flex-col gap-10 pt-10 pb-14 md:pt-14 md:pb-20')}>
          <Link
            href="/#work"
            className="inline-flex min-h-11 w-fit items-center gap-2 rounded-sm text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back to work
          </Link>
          <div className="flex max-w-4xl flex-col gap-6">
            <p className={eyebrow}>
              <span aria-hidden className="h-px w-8 bg-primary" />
              Case study · Client website
            </p>
            <h1 className={pageHeading}>{cs.title}</h1>
          </div>

          <dl className="grid gap-x-8 gap-y-6 border-t-2 border-foreground pt-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-2">
              <dt className={eyebrow}>Client</dt>
              <dd className="leading-relaxed">{cs.client}</dd>
            </div>
            <div className="flex flex-col gap-2">
              <dt className={eyebrow}>My role</dt>
              <dd className="leading-relaxed">{cs.role}</dd>
            </div>
            <div className="flex flex-col gap-2">
              <dt className={eyebrow}>Stack & integrations</dt>
              <dd className="leading-relaxed">
                {cs.stack.join(', ')}
                <br />
                {cs.integrations.join(' and ')}
              </dd>
            </div>
            <div className="flex flex-col gap-2">
              <dt className={eyebrow}>Live site</dt>
              <dd>
                <a
                  href={cs.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-sm text-primary underline underline-offset-4"
                >
                  {cs.liveLabel}
                  <ArrowUpRight className="size-4" aria-hidden />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </header>

      <div className={cn(container, 'py-14 md:py-20')}>
        <ProjectScreenshot
          {...shots.hero.image}
          caption={shots.hero.caption}
          sizes="(min-width: 1280px) 1100px, 100vw"
          priority
        />
      </div>

      <div className={cn(container, 'flex flex-col pb-20 md:pb-28')}>
        <CaseSection index={1} heading={s.problem.heading}>
          {s.problem.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
            {cs.audiences.map((a) => (
              <li key={a} className="flex items-center gap-2.5 text-base">
                <span aria-hidden className="size-1.5 shrink-0 bg-primary" />
                {a}
              </li>
            ))}
          </ul>
        </CaseSection>

        <CaseSection index={2} heading={s.responsibilities.heading}>
          {s.responsibilities.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <ul className={cn('grid border-t sm:grid-cols-2 sm:gap-x-8', rule)}>
            {s.responsibilities.list.map((item) => (
              <li key={item} className={cn('border-b py-3 text-base', rule)}>
                {item}
              </li>
            ))}
          </ul>
        </CaseSection>

        <CaseSection index={3} heading={s.revision.heading} emphasis>
          {s.revision.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </CaseSection>

        <CaseFigure shot={shots.services} />

        <CaseSection index={4} heading={s.implementation.heading}>
          {s.implementation.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </CaseSection>

        <CaseFigure shot={shots.pricing} />

        <CaseSection index={5} heading={s.validation.heading}>
          {s.validation.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </CaseSection>

        <CaseSection index={6} heading={s.result.heading}>
          {s.result.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </CaseSection>
      </div>

      <section aria-labelledby="cs-cta" className="bg-ink text-ink-foreground">
        <div className={cn(container, 'flex flex-col gap-6 py-16 md:flex-row md:items-center md:justify-between md:py-20')}>
          <h2 id="cs-cta" className={cn(sectionHeading, 'max-w-2xl')}>
            Need customers to book, register, or pay on your site?
          </h2>
          <Link href="/#contact" className={primaryAction}>
            Discuss your project
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>
    </article>
  )
}
