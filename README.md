# Shaquon Kelley — Services Website

First-draft marketing site: Next.js App Router, TypeScript, Tailwind CSS v4. No database, auth, or paid services.

> **Status: preview, not launch-ready.** The contact form is not connected and project screenshots are placeholders. See "Before launch" below.

## Local setup

```bash
pnpm install
pnpm dev         # http://localhost:3000
pnpm typecheck   # tsc --noEmit
pnpm build       # production build
```

## Routes

| Route                   | Source                                  |
| ----------------------- | --------------------------------------- |
| `/`                     | `app/page.tsx` — hero, services, work, about, process, contact |
| `/work/lamon-brewster`  | `app/work/lamon-brewster/page.tsx`      |

Homepage anchors: `/#services`, `/#work`, `/#about`, `/#process`, `/#contact`.

## Where to edit content

- **All copy:** `lib/content.ts` (hero, services, work list, about, process, contact, Lamon case study).
- **Add a case study:** add an entry to `work` in `lib/content.ts`, then create `app/work/<slug>/page.tsx` (use the Lamon page as a pattern).
- **Contact validation rules:** `lib/contact-validation.ts` (framework-free; reuse server-side).
- **Theme tokens:** `app/globals.css`. **Fonts:** `app/layout.tsx`.
- **Components:** `components/home/*`, `components/case-study/*`, `components/site-header.tsx`, `components/site-footer.tsx`.

## Missing assets

Rendered as labelled placeholders via `components/screenshot-placeholder.tsx`. Replace with `next/image` once approved:

1. Lamon Brewster — homepage (story + current training) — 16:10
2. Lamon Brewster — training services overview — 16:10
3. Lamon Brewster — consultation booking (Calendly) — 4:5
4. Lamon Brewster — lesson registration & payment (Stripe) — 4:5

Also not yet supplied: FairForm and TheGreenRoomAI case studies (intentionally omitted), a favicon/OG image, contact email, business domain, and social links.

## Before launch: contact integration (required)

`components/home/contact-form.tsx` validates on the client only and **sends nothing**. To launch:

1. Choose a delivery provider (e.g. Resend) and a destination email.
2. Add a Server Action or route handler that re-runs `validateContact` on the server, applies spam protection (honeypot + rate limiting), and keeps secrets in environment variables.
3. Handle loading, provider failure, and duplicate submissions; show success **only** after the provider accepts the message.
4. Remove the preview notice, then verify by sending a real test inquiry and confirming receipt.

If no provider is configured, keep the form visibly unavailable.

## Other launch items

- Set `metadataBase` and the canonical domain in `app/layout.tsx`.
- Confirm all public claims and Lamon images are approved for portfolio use.
- Review budget-range options in `lib/content.ts` (these are visitor-selected ranges, not published prices).
