import Link from 'next/link'
import { BrandMark } from '@/components/brand-mark'
import { navLinks, site } from '@/lib/content'
import { container } from '@/lib/styles'
import { cn } from '@/lib/utils'

const footerLink =
  'inline-flex min-h-10 items-center rounded-sm text-sm font-medium text-ink-foreground/75 transition-colors hover:text-ink-foreground'

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className={cn(container, 'flex flex-col gap-10 py-14 md:flex-row md:items-end md:justify-between')}>
        <div className="flex max-w-md flex-col gap-4">
          <p className="flex items-center gap-2.5">
            <BrandMark />
            <span className="font-display text-2xl font-bold tracking-tight">{site.name}</span>
          </p>
          <p className="leading-relaxed text-ink-foreground/70 text-pretty">
            Software engineering for web applications, websites, and the workflows that connect them.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={footerLink}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/#contact" className={footerLink}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-ink-foreground/15">
        <div className={cn(container, 'flex items-center justify-between gap-4 py-6 text-sm text-ink-foreground/60')}>
          <p>
            {'© '}
            {new Date().getFullYear()} {site.name}
          </p>
          <p>{site.domain}</p>
        </div>
      </div>
    </footer>
  )
}
