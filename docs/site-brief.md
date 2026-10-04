# Services website: v0 starter and Cursor handoff

Prepared October 3, 2026.

## How to use

1. Paste the v0 starter below into a new project. Attach the actual Lamon Brewster screenshots if available. The prompt supplies business facts; a fresh v0 project does not inherit our conversation.
2. Review the first draft, then refine one section or issue at a time. Example: “Refine only the hero typography and spacing. Preserve the copy, routes, and remaining sections. Show the result on mobile and desktop.”
3. Connect the v0 project to GitHub. Clone the repository in Cursor and check out the branch containing the latest reviewed code. GitHub is the code source of truth. Avoid editing the same files in v0 and Cursor concurrently without synchronizing branches.
4. Exporting or connecting the repository does not require publishing. In the documented GitHub-backed v0 workflow, Publish merges the pull request and initiates production deployment; use previews until ready.
5. Use the Cursor handoff below in Plan Mode. Save the plan to the workspace, then implement focused tasks. For quick, well-defined edits, Agent mode is sufficient.

## v0 starter prompt

Build the first version of my software engineering services website. Act as an experienced web designer and frontend engineer. Create a working implementation, not just a design proposal. This is a focused marketing website that I will refine in v0 and then continue developing in Cursor.

BUSINESS CONTEXT
My name is Shaquon Kelley. This is a solo business: write in first person and do not imply a larger team. I am a full-stack software engineer with experience in frontend design and functionality, backend logic, databases, authentication, integrations, deployment, and Figma wireframes and mockups. I have built client websites and full-stack applications before and after the AI boom.

I use AI to accelerate development, supported by engineering review and testing. I am continuing to develop my expertise in AI workflows and agents. Do not describe me as an established enterprise AI consultancy or claim production AI deployments I have not documented.

My lead service is improving existing web applications and delivering useful features. I also offer business websites, connected customer experiences, integrations, internal tools, and scoped AI implementation. Keep all three service areas visible, with application improvements first.

Target visitors are business owners, founders, and operations or product leaders with a real software problem: a frustrating customer flow, a missing feature, disconnected tools, repetitive work, or a website that needs to support booking, payment, or registration. Avoid restricting the business to landscaping, boxing, or any single industry. Emphasize useful outcomes and a clear project scope. Do not promise guaranteed revenue, savings, or delivery timelines.

The primary website goal is a qualified project inquiry. The secondary goal is demonstrating my capabilities through real project evidence. Do not sell hourly labor, lead with AI buzzwords, or publish invented prices.

SCOPE
Create:
- A homepage at / with hero, services, selected work, about, process, and contact.
- A case study page at /work/lamon-brewster.
- Responsive navigation and footer.

Do not add a dashboard, customer accounts, authentication, subscriptions, a blog, an AI chatbot, or a database for this initial version. Stripe and Calendly belong in the case study, not as integrations on my services website.

HOMEPAGE CONTENT
Hero heading:
“Websites, applications, and workflows that work better for your business.”

Introduction:
“I’m Shaquon Kelley, a software engineer helping businesses build useful web experiences, improve existing applications, and connect the tools their teams rely on.”

Supporting line:
“From booking and payments to custom features and practical AI implementation, I work with you to understand the problem and deliver a clearly defined solution.”

Primary CTA: “Discuss your project” → /#contact.
Secondary CTA: “Explore my work” → /#work.
Make application improvements easy to recognize in the hero or immediately below it.

Services:
1. Web Application Development & Improvements
“Make your application work better for the people who depend on it.”
I improve existing applications and build new functionality across interfaces, customer workflows, backend logic, databases, authentication, and integrations. Examples include fixing a frustrating signup or checkout flow, adding a requested feature, and connecting an application to another tool. New applications can be developed in defined phases.

2. Websites & Connected Web Experiences
“Give customers a clear path from discovering your business to taking action.”
I build and redesign websites that explain services and support useful interactions, including booking, payments, registration, ecommerce, and connections to existing tools.

3. Business Systems & AI Implementation
“Reduce repetitive work and make better use of the systems you already have.”
I help connect software, simplify workflows, and introduce AI where it serves a clear purpose. Projects can include data integrations, internal tools, document-processing workflows, and AI-assisted features. We start with a defined process and outcome; uncertain requirements can be explored through discovery or a bounded pilot.

Use short descriptions with concrete examples. Do not present cybersecurity audits, penetration testing, compliance consulting, or emergency support as services.

Selected work:
Feature the Lamon Brewster project, linking to its case study. Show that it combines visual presentation with service discovery, booking, and payment.
Do not invent a second case study. FairForm and TheGreenRoomAI are personal application projects, but their detailed case studies will be supplied later. Omit them from published work until that content is available. Make the work layout easy to extend.

About:
Describe direct collaboration with a full-stack engineer through requirements, design, implementation, testing, and handover. Mention AI-assisted development as part of the working method, not a substitute for judgment or verification. Keep this section concise; do not invent credentials, awards, client counts, or years of experience.

Process:
- Discuss: understand the problem, fit, timing, and budget.
- Define: agree scope, deliverables, acceptance criteria, and review checkpoints. Use discovery when important uncertainties remain.
- Build and review: develop in stages and review progress together.
- Test and hand over: verify the agreed workflows and provide relevant documentation and ownership handover. Ongoing support is agreed separately.
Do not invent fixed turnaround times, support SLAs, or unlimited revisions.

Contact heading: “Tell me what you want to improve.”
Supporting copy:
“Have an application that needs improvement, a website project, or a workflow you’d like to simplify? Describe what you want to accomplish and what’s getting in the way. We’ll start by assessing whether I’m a good fit.”

Form:
Required: name, email, company or project name, and problem/project description.
Optional: current website/application URL, budget range, and desired timing. Include “Not sure yet” for budget.
Use visible labels, helpful validation, and clear error states.
For this v0 stage, build the form UI and validation only. Show “Preview form — submissions are not connected yet” and keep actual submission disabled. Never display a fake “message sent” state or discard inquiries silently. Document the real submission integration as a launch requirement for Cursor.
My contact email, business domain, and social links have not been supplied. Do not invent them or publish placeholder links. Do not use Lamon’s contact details as mine.

LAMON BREWSTER CASE STUDY — VERIFIED PROJECT FACTS
Title: “Lamon Brewster: Connecting a Boxing Legacy to Today’s Training Services”
Client: Lamon Brewster, a former heavyweight world champion offering boxing training.
Project URL: https://lamonbrewster.com
Original project stack: HTML, CSS, Tailwind CSS, and JavaScript.
Integrations: Stripe and Calendly.

Problem:
Lamon needed a website that told his story, explained his training services, and let prospective clients book consultations and register and pay for lessons. His audiences included young people, adults, and boxers pursuing competition.

My role:
I owned the project from gathering images and developing copy with the client through design, development, integration, domain and hosting setup, and deployment.

Key design revision:
The initial design emphasized his previous championship career too heavily. Through continued conversations, he clarified that the site also needed to showcase his current work as a trainer. I revised the design and content to balance his boxing history with recent training imagery, services, and ways to take action.

Implementation decisions:
Custom code gave me control over design and customization for this project. Do not claim that custom code is always superior to website builders. Stripe and Calendly supported the payment and scheduling requirements.

Validation:
The client reviewed the work, five people from his team tested it, and the team performed additional testing and review after publication.

Outcome:
A launched website presenting his story and current services, with consultation booking and class registration/payment paths. No measured revenue, conversion uplift, booking growth, or time savings have been supplied. Do not invent those metrics or testimonials. Do not discuss the client’s private financial circumstances.

Present the case study as problem → responsibilities → design revision → implementation → validation → delivered result. Use clear captions explaining what each screenshot demonstrates.

VISUAL DIRECTION
Use a polished, contemporary editorial style with warm off-white surfaces, dark charcoal text, and one restrained cobalt accent. This is a starting direction, not an immutable brand system.
Use strong typography, generous spacing, an intentional grid, readable line lengths, and distinctive project presentation. Make the design feel crafted without clutter. Avoid generic AI imagery, decorative code screenshots, excessive gradients, and repetitive cards for every section.
Use actual project images if I attach them. Lamon screenshots are evidence of client work, not a template for this website’s branding. Present them neatly without stretching, changing their content, or inventing interface screens. Crop phone/browser chrome only if it can be done cleanly.
If images are missing, use clearly labeled local placeholders with sensible dimensions; do not fabricate project screenshots. Text-based work presentation must still look intentional. List missing assets in the handoff documentation.
Use subtle motion only where helpful and respect reduced-motion preferences.

TECHNICAL REQUIREMENTS
Use Next.js App Router, TypeScript, and Tailwind CSS with current compatible stable dependencies. Keep the lockfile. Prefer server components; use client components only for real interaction. Keep the architecture simple and avoid unnecessary libraries.
Store editable website content in a clearly organized module, separate from presentation. Use reusable components where useful.
Include semantic HTML, keyboard-accessible navigation, visible focus states, accessible contrast, appropriate alt text, descriptive page titles and metadata, and optimized images.
Check mobile, tablet, and desktop layouts. Avoid horizontal overflow, tiny text, and clipped buttons.
All implemented internal links must work. Do not include placeholder social links.
Keep credentials out of the repository. No paid external services are required for the first draft.

DELIVERABLES
Implement the homepage and case study as a working first draft. Add a README with local setup commands, route structure, editable content locations, missing assets, and the contact integration required before launch.
Save this business brief as docs/site-brief.md for the Cursor handoff.
Include a concise root AGENTS.md: preserve verified content; do not invent claims; preserve the agreed design unless a change is requested; keep changes scoped; use the existing stack; verify meaningful behavior.
Run the available build/type/lint checks and report what actually ran. Do not claim a check passed if it was not run.
Finish with a brief explanation of the design, implemented scope, missing items, and checks. Make reasonable design decisions and proceed without a long questionnaire.

## Cursor handoff prompt

I am continuing this services website from v0. Start in Plan Mode by inspecting the existing repository, AGENTS.md, docs/site-brief.md, README, package scripts, routes, and contact form. Preserve the current design and verified business content.

Assess readiness for launch and give me a prioritized plan with concrete files, acceptance criteria, and verification steps. Do not rebuild the site or replace its framework merely to simplify your work.

Priorities:
1. Identify build/runtime problems, broken links, responsive issues, and accessibility problems.
2. Replace the preview-only contact form with a real server-side submission flow once I provide the destination email and choose a delivery provider. Validate on the server, add proportionate spam protection, keep secrets server-side, and handle loading, failures, and duplicate submission. Show success only after the provider accepts the inquiry, and document how receipt will be verified. If a provider is not configured, keep the form visibly unavailable; do not fake delivery.
3. Replace missing project assets with supplied images and finalize metadata when I supply the business domain.
4. Keep the implementation lightweight and editable. Add focused tests for meaningful behavior such as validation, provider failure, and success—not tests that just mirror markup.
5. Run the relevant checks and review both desktop and mobile flows. Report remaining launch blockers accurately.

Ask only for information that blocks the next implementation step. Save the plan to the workspace. After I accept it, implement one focused task at a time and show the resulting diff and verification. Do not publish or enable paid services without my instruction.

## Suggested follow-up prompts for v0

- “Review this first draft from the perspective of a buyer needing an existing web app improved. Identify unclear service copy and propose targeted changes. Preserve verified facts and do not invent outcomes.”
- “Refine only the selected-work section and Lamon case study image presentation using the attached screenshots. Preserve screenshot content and aspect ratios. Make captions explain the booking, service discovery, and design decisions.”
- “Check the current pages at narrow mobile, tablet, and desktop widths. Fix overflow, navigation, spacing, and focus-state problems without redesigning the site. Run the available checks and report the result.”

## Items to provide before launch

- Actual project images and any additional approved case study.
- Final contact email and delivery provider.
- Business domain and any real social/profile links to include.
- Confirmation that public claims and images are approved for portfolio use.
- Verified contact submission and receipt, working links, and mobile review.

## Official guidance checked

- [v0 text prompting](https://v0.app/docs/text-prompting): specific requirements, context, technical and visual direction, incremental implementation, and failure states.
- [v0 screenshots and files](https://v0.app/docs/screenshots): visual references can accompany the prompt.
- [v0 GitHub integration](https://v0.app/docs/github): repository connection, working branches, previews, pull requests, and publishing behavior.
- [Cursor Plan Mode](https://cursor.com/docs/agent/plan-mode): inspect, plan, review, then build; save plans to the workspace.
- [Cursor rules](https://cursor.com/docs/rules): concise actionable repository instructions; root AGENTS.md is supported for straightforward projects.

The particular visual style and two-page scope above are recommendations for this business, rather than requirements imposed by those tools. This brief asks for a preview first; the website is not launch-ready until real contact delivery and missing assets are completed.

