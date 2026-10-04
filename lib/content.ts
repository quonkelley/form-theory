/**
 * Editable website content. Presentation components read from here.
 * Only publish facts that have been verified — see docs/site-brief.md.
 */

export const site = {
  name: 'Form Theory',
  founder: 'Shaquon Kelley',
  domain: 'formtheoryworks.com',
  url: 'https://formtheoryworks.com',
  title: 'Form Theory — Independent design and engineering by Shaquon Kelley',
  description:
    'Form Theory builds polished websites, improves web applications, and connects the systems businesses rely on. Independent design and engineering by Shaquon Kelley.',
}

export const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Process', href: '/#process' },
] as const

export const hero = {
  kicker: ['Websites', 'Web applications', 'Integrations'],
  headingLines: ['Thoughtful design.', 'Useful software.'],
  supporting:
    'I build polished websites, improve web applications, and connect the systems your business relies on.',
  founderLine: 'Independent design and engineering by Shaquon Kelley.',
  primaryCta: { label: 'Discuss your project', href: '/#contact' },
  secondaryCta: { label: 'Explore my work', href: '/#work' },
}

/** Shown in the strip directly below the hero. `glyph` maps to the shapes in the hero composition. */
export const capabilities = [
  { label: 'Web experiences', glyph: 'circle' },
  { label: 'Application improvements', glyph: 'frame' },
  { label: 'Connected systems', glyph: 'grid' },
] as const

export type Service = {
  id: string
  title: string
  tagline: string
  description: string
  examples: string[]
  note?: string
}

export const services: Service[] = [
  {
    id: 'applications',
    title: 'Web Application Development & Improvements',
    tagline: 'Make your application work better for the people who depend on it.',
    description: 'Interfaces, backend logic, databases, authentication, and integrations.',
    examples: [
      'Fixing a frustrating signup or checkout flow',
      'Adding a feature your users have requested',
      'Connecting your application to another tool',
    ],
    note: 'New applications can be developed in defined phases.',
  },
  {
    id: 'websites',
    title: 'Websites & Connected Web Experiences',
    tagline: 'Give customers a clear path from discovering your business to taking action.',
    description: 'New websites and redesigns.',
    examples: [
      'Booking and consultation scheduling',
      'Payments, registration, and ecommerce',
      'Connections to the tools you already use',
    ],
  },
  {
    id: 'systems',
    title: 'Business Systems & AI Implementation',
    tagline: 'Reduce repetitive work and make better use of the systems you already have.',
    description: 'AI is introduced only where it serves a clear purpose.',
    examples: [
      'Data integrations between existing systems',
      'Internal tools for your team',
      'Document-processing workflows and AI-assisted features',
    ],
    note: 'We start with a defined process and outcome. Uncertain requirements can be explored through discovery or a bounded pilot.',
  },
]

export type WorkItem = {
  slug: string
  href: string
  client: string
  title: string
  summary: string
  capabilities: string[]
  stack: string[]
  liveUrl?: string
}

/**
 * Published work. Add new entries here once their case study content is verified.
 * FairForm and TheGreenRoomAI are intentionally omitted until their case studies are supplied.
 */
export const work: WorkItem[] = [
  {
    slug: 'lamon-brewster',
    href: '/work/lamon-brewster',
    client: 'Lamon Brewster',
    title: 'Connecting a boxing legacy to today’s training services',
    summary:
      'A custom website for a former heavyweight world champion that tells his story, explains his current training services, and lets prospective clients book consultations and register and pay for lessons.',
    capabilities: ['Visual storytelling', 'Service discovery', 'Consultation booking', 'Lesson registration & payment'],
    stack: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'Stripe', 'Calendly'],
    liveUrl: 'https://lamonbrewster.com',
  },
]

export const about = {
  heading: 'Work directly with the engineer building it.',
  paragraphs: [
    'I’m a full-stack software engineer. My background includes software engineering at Dropbox and Fiserv, alongside client projects and technical teaching.',
    'When you work with me, you work with one person from requirements through design, implementation, testing, and handover. You know who is making decisions about your project, and you can ask them directly.',
    'I use AI to accelerate development, and I keep engineering review and testing in the loop. It speeds up the work; it doesn’t replace judgment or verification. I’m continuing to deepen my experience with AI workflows and agents.',
  ],
  capabilities: [
    'Frontend design & functionality',
    'Backend, databases & authentication',
    'Integrations & deployment',
    'Figma wireframes & mockups',
  ],
}

export const process = [
  {
    title: 'Discuss',
    description: 'We talk through the problem, whether I’m a good fit, your timing, and your budget.',
  },
  {
    title: 'Define',
    description:
      'We agree on scope, deliverables, acceptance criteria, and review checkpoints. If important questions remain open, we start with discovery.',
  },
  {
    title: 'Build and review',
    description: 'I develop in stages, and we review progress together along the way.',
  },
  {
    title: 'Test and hand over',
    description:
      'I verify the agreed workflows and provide the relevant documentation and ownership handover. Ongoing support is agreed separately.',
  },
]

export const contact = {
  heading: 'Tell me what you want to improve.',
  body: 'Have an application that needs improvement, a website project, or a workflow you’d like to simplify? Describe what you want to accomplish and what’s getting in the way. We’ll start by assessing whether I’m a good fit.',
  previewNotice: 'Preview form — submissions are not connected yet.',
  budgetOptions: [
    'Not sure yet',
    'Under $5,000',
    '$5,000 – $15,000',
    '$15,000 – $30,000',
    '$30,000+',
  ],
  timingOptions: ['Flexible', 'Within the next month', 'In 1–3 months', 'In 3+ months'],
}

export const lamonCaseStudy = {
  title: 'Lamon Brewster: Connecting a Boxing Legacy to Today’s Training Services',
  description:
    'Case study: a custom website for former heavyweight world champion Lamon Brewster, combining his story with training services, consultation booking, and lesson registration and payment.',
  client: 'Lamon Brewster, former heavyweight world champion offering boxing training',
  liveUrl: 'https://lamonbrewster.com',
  liveLabel: 'lamonbrewster.com',
  stack: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript'],
  integrations: ['Stripe', 'Calendly'],
  role: 'End-to-end: content, design, development, integrations, hosting, and deployment',
  audiences: ['Young people', 'Adults', 'Boxers pursuing competition'],
  sections: {
    problem: {
      heading: 'The problem',
      body: [
        'Lamon needed a website that told his story, explained his training services, and let prospective clients book consultations and register and pay for lessons.',
        'The site had to speak to several audiences at once: young people, adults, and boxers pursuing competition.',
      ],
    },
    responsibilities: {
      heading: 'My responsibilities',
      body: [
        'I owned the project end to end — from gathering images and developing copy with Lamon, through design, development, and integration, to domain and hosting setup and deployment.',
      ],
      list: [
        'Image gathering and copy development with the client',
        'Visual design and layout',
        'Front-end development',
        'Stripe and Calendly integration',
        'Domain and hosting setup',
        'Deployment',
      ],
    },
    revision: {
      heading: 'The key design revision',
      body: [
        'The initial design emphasized his championship career too heavily. Through continued conversations, Lamon clarified that the site also needed to showcase his current work as a trainer.',
        'I revised the design and content to balance his boxing history with recent training imagery, clear service descriptions, and direct ways to take action.',
      ],
    },
    implementation: {
      heading: 'Implementation decisions',
      body: [
        'For this project, custom code gave me control over the design and the level of customization Lamon needed.',
        'Stripe handled lesson payments and Calendly handled consultation scheduling, covering the two actions prospective clients most needed to take.',
        'The pricing section is where visitors compare group, 1:1, and boxer training and choose how to book.',
      ],
    },
    validation: {
      heading: 'Validation',
      body: [
        'Lamon reviewed the work, and five people from his team tested it before launch. The team performed additional testing and review after publication.',
      ],
    },
    result: {
      heading: 'Delivered result',
      body: [
        'A launched website that presents Lamon’s story alongside his current training services, with clear paths to book a consultation and to register and pay for classes.',
      ],
    },
  },
  /** Real screenshots supplied by the owner. Booking and payment interfaces are described in text, not shown. */
  screenshots: {
    hero: {
      label: 'Homepage — story and current training',
      caption:
        'The homepage balances Lamon’s championship history with his current work as a trainer.',
      image: {
        src: '/work/lamon-brewster/home.png',
        width: 1904,
        height: 988,
        alt: 'Lamon Brewster homepage hero: a dark ring photo behind the gold headline “Mind of a Champion” and a “Start your journey” button.',
      },
    },
    services: {
      label: 'Training services overview',
      caption: 'Service descriptions help young people, adults, and competitive boxers find the right training.',
      image: {
        src: '/work/lamon-brewster/services.png',
        width: 1566,
        height: 984,
        alt: 'Training services section with a photo of mitt work above cards for Personal, Behavioral, and Fight For Life training.',
      },
    },
    pricing: {
      label: 'Group & personal training rates',
      caption:
        'Group and personal training rates, with booking options and a consultation path for competitive boxers.',
      image: {
        src: '/work/lamon-brewster/pricing.png',
        width: 1304,
        height: 875,
        alt: 'Pricing section with three cards for Group Training, 1:1 Personal Training, and Boxer Training, each with booking buttons.',
      },
    },
  },
}
