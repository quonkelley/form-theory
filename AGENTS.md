# AGENTS.md

Services website for Shaquon Kelley (solo software engineer). Next.js App Router, TypeScript, Tailwind CSS v4, pnpm.

## Rules

- **Preserve verified content.** All copy lives in `lib/content.ts`. Facts come from `docs/site-brief.md`. Do not reword verified project facts into stronger claims.
- **Do not invent claims.** No metrics, testimonials, client counts, years of experience, credentials, prices, turnaround times, SLAs, contact details, or social links unless the owner supplies them. Write in first person; never imply a team.
- **Preserve the agreed design** (warm off-white, charcoal, single cobalt accent; Bricolage Grotesque display headings, Hanken Grotesk body; no serif) unless a change is requested. The hero is the design source of truth. Use tokens from `app/globals.css` and the type/spacing classes in `lib/styles.ts`, not raw colors or one-off heading styles.
- **Keep changes scoped** to the request. Don't refactor unrelated files or swap the framework.
- **Use the existing stack.** Prefer server components; add client components only for real interaction. Avoid new dependencies without a clear need.
- **Never fake form delivery.** The contact form must not show success unless a provider has accepted the inquiry.
- **Verify meaningful behavior.** Run `pnpm typecheck` and `pnpm build`, check mobile and desktop, and report what actually ran.
