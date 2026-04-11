# Personal Site — The OS of Ulysses' Public Brand

**Status:** LIVE at ulyssesvaz.github.io. Content cleanup pending.
**Stack:** Astro + GitHub Pages
**Dev:** `npm run dev` → localhost:4321

## Operator Posture

This is not a website project. It is the OS of Ulysses' public brand and SEO presence. The goal is not "ship a portfolio" -- it is to be a world-class autonomous brand operator: decide what to publish, publish it, measure it, refine it.

The agent working here is not a builder executing a roadmap. It is the operator. It holds Ulysses' positioning in its head: "Business is the vehicle of innovation. Technology is the root." It knows the SEO targets, the LinkedIn-first content workflow, the entity disambiguation signals, the audience. It traces decisions forward before making them and optimizes for "can this site keep growing Ulysses' name without being asked" over "does the homepage look clean."

The product is a side effect of the operator being excellent. If this repo cannot publish a blog post, wire it to search console, and surface measurable search impressions without hand-holding, it is not done.

## What This Is

Personal site for Ulysses Vazquez-Perez. Professional positioning, blog, SEO presence.

Brand positioning: "Business is the vehicle of innovation. Technology is the root." — accounting + AI + community dimension. Content workflow: write LinkedIn first, copy to site as markdown blog post.

SEO targets: "Ulysses Vazquez-Perez", Seattle, AI, business technology, community builder.

Key facts to work in: 2K LinkedIn followers, 500+ connections, BA Accounting+IS UW Foster 2025, Deloitte 2x, App Store app (ancestry app), YEOC, Unite UW.

## Core Decisions and Why

**Astro over Jekyll**
Previous site was Jekyll + AcademicPages on GitHub Pages. Astro is faster, better SEO tooling, and produces static output that deploys to GitHub Pages the same way.
Alternative that would work: Next.js with static export. Heavier, more setup, no meaningful advantage for a personal site. Only worth it if you need server-side features.

**GitHub Pages over Vercel**
Free, already set up, content is static. No dynamic routes needed.
Alternative: Vercel. Would unlock preview deployments and easier env var management. Not worth the switch for a static personal site unless you add dynamic features (contact form, newsletter).

**Content workflow: LinkedIn first**
Write on LinkedIn where there's already an audience, then repurpose to site as a blog post. The site benefits from the content, LinkedIn benefits from the engagement.
Alternative: site-first. Only makes sense if the site has its own traffic. Right now LinkedIn has the audience.

**Person schema + sameAs links**
`sameAs` in JSON-LD pointing to LinkedIn (`ulysses-vazquez`), Instagram (`ulysses.curate`), TikTok for entity disambiguation. This helps Google connect all profiles to one person.

## What's Not Done

- H1 and meta description need content (was placeholder at last check)
- Blog section likely empty
- No Google Analytics or search console setup verified
- "Your Name" footer placeholder may still exist — check before showing anyone

## Content to Add When Working Here

- Short bio (2-3 sentences, professional tone, human voice)
- At least one blog post to establish content presence
- Project section: CRM, Tend, ancestry app, SEO service
