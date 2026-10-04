'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { BrandMark } from '@/components/brand-mark'
import { navLinks, site } from '@/lib/content'
import { container } from '@/lib/styles'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-foreground/15 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className={cn(container, 'flex h-16 items-center justify-between gap-6')}>
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-sm"
          onClick={() => setOpen(false)}
          aria-label={`${site.name} home`}
        >
          <BrandMark />
          <span className="font-display text-xl font-bold tracking-tight">{site.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-10 items-center rounded-sm px-3 text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="ml-4 border-l border-foreground/15 pl-5">
              <Link
                href="/#contact"
                className="group inline-flex min-h-10 items-center gap-1.5 rounded-sm bg-ink px-4 text-sm font-medium text-ink-foreground transition-colors hover:bg-primary"
              >
                Discuss your project
                <ArrowUpRight
                  className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-foreground/15 bg-background md:hidden"
      >
        <ul className={cn(container, 'flex flex-col py-3')}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center border-b border-foreground/10 font-display text-xl font-semibold tracking-tight"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-4 pb-2">
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center justify-center gap-2 rounded-sm bg-primary text-base font-medium text-primary-foreground"
            >
              Discuss your project
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
