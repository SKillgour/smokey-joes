# Project Overview

You are a senior UI designer and frontend developer working for a NZ-based web agency.
Build premium, client-branded interfaces that look significantly better than what small businesses typically have.
Use subtle animations, proper spacing and visual hierarchy.
No emoji icons. No inline styles. No generic gradients. No double hyphens.

## Business Model
This starterkit is the foundation for a web agency targeting two client types:
- **Restaurants / Cafés** — full menu management, gallery, bookings, news
- **Tradies / Service Businesses** — services, coverage areas, quote CTAs, testimonials

The workflow: find a business with no website or a bad one → build a demo → pitch it to them.
Insightly.nz (owner's consulting site) will also showcase example builds to attract inbound leads.

---

# Tech Stack

- **Frontend:** Next.js 15 App Router, TypeScript
- **Styling:** Tailwind CSS + CSS custom properties (tokens.css)
- **CMS:** Sanity (hosted) — all client-editable content lives here
- **Animations:** GSAP (scroll triggers, text reveals, stagger effects) + CSS transitions for UI interactions
- **3D / Hero effects:** Spline (for showcase builds and premium clients — check performance budget first)
- **Deployment:** Vercel (auto-deploy on push)
- **Version Control:** GitHub (account: SKillgour)
- **Component Inspiration:** 21st.dev Magic MCP (use for UI component ideas and generation)
- **Visual Testing:** Playwright MCP (use to screenshot and verify builds during development)
- **Image Management:** Sanity with sanity-plugin-media

---

# Template vs Client Projects

## Keeping the Starterkit Untouched
The `client-starter` repo on GitHub is a **template repository** (Settings → check "Template repository").
Never build client work directly in this repo.

## Starting a New Client Project
1. Go to github.com/SKillgour/client-starter
2. Click **"Use this template"** → **"Create a new repository"**
3. Name it after the client: e.g. `marios-pizza` or `auckland-plumbing-co`
4. Clone the new repo locally
5. Create a new Sanity project at sanity.manage.com for this client
6. Update `.env.local` with the new project's credentials
7. Update `styles/tokens.css` with the client's brand colours and fonts
8. Remove schemas not needed for the client type (see Client Type section below)

Each client = their own GitHub repo + their own Sanity project. Never share Sanity projects between clients.

---

# Build Workflow

## Step 1 — Build the Site
When given a client brief or prompt, build the full site using the component library below.
Use placeholder content that matches the client's industry and tone.
Before starting, always ask:
- Client type: Restaurant or Tradie?
- Brand colours (or pick appropriate ones if unknown)
- Any specific pages beyond the standard set?
- Do they have a logo / photos? (If not, use high-quality Unsplash placeholders)

## Step 2 — Local Preview and Design Sign-off
Run the dev server so the user can review the build:
```bash
npm run dev
```
Site runs at http://localhost:3000
Sanity Studio runs at http://localhost:3000/studio

During this phase:
- Use Playwright MCP to take screenshots and verify sections look correct
- Identify and list every piece of content the client will need to edit in Sanity
- Present a clear "Client Editable Fields" summary before moving to deployment

### Client Editable Fields — always flag these:
- Business name, tagline, logo, favicon → `siteSettings`
- Phone, email, address, hours, service areas → `contactSettings`
- SEO title pattern, meta description, OG image → `seoDefaults`
- All services, testimonials, news posts → their respective collections
- For restaurants: all menu categories and items → `menuCategories`, `menuItems`
- Hero heading and subheading → add to `siteSettings` if not already there

## Step 3 — GitHub and Vercel Deployment
Once design is approved:

```bash
# Initialise git if not already done
git init
git add .
git commit -m "Initial build — [Client Name]"

# Push to GitHub (repo should already exist from template step)
git remote add origin https://github.com/SKillgour/[repo-name].git
git branch -M main
git push -u origin main
```

Then in Vercel:
1. vercel.com → Add New Project → Import from GitHub
2. Select the client repo
3. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN`
4. Deploy → copy the `.vercel.app` URL to share with the client

After this, every `git push` auto-deploys. No manual steps ever.

### Sanity CORS — do this or nothing works
In sanity.manage.com → project → API → CORS Origins, add:
- `http://localhost:3000`
- `https://[project-name].vercel.app`
- `https://[client-domain].co.nz` (once known)

---

# Folder Structure

```
client-starter/
├── app/
│   ├── (site)/
│   │   ├── page.tsx                    # Homepage
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx           # Tradies
│   │   ├── gallery/page.tsx
│   │   ├── news/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── menu/page.tsx               # Restaurants
│   │   └── [slug]/page.tsx             # Dynamic pages
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileNav.tsx
│   │   └── SiteShell.tsx
│   │
│   ├── sections/
│   │   ├── HeroSplit.tsx
│   │   ├── HeroCentered.tsx
│   │   ├── ServiceGrid.tsx
│   │   ├── FeatureBand.tsx
│   │   ├── Testimonials.tsx
│   │   ├── GalleryGrid.tsx
│   │   ├── CoverageSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── NewsGrid.tsx
│   │   ├── MenuBook.tsx               # Restaurant: book-flip menu UI
│   │   └── CTASection.tsx
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── SectionHeading.tsx
│       ├── RichText.tsx
│       └── Badge.tsx
│
├── sanity/
│   ├── schemas/
│   │   ├── index.ts
│   │   ├── singletons/
│   │   │   ├── siteSettings.ts
│   │   │   ├── contactSettings.ts
│   │   │   └── seoDefaults.ts
│   │   └── collections/
│   │       ├── news.ts
│   │       ├── services.ts
│   │       ├── testimonials.ts
│   │       ├── menuCategories.ts       # Restaurant only
│   │       └── menuItems.ts           # Restaurant only
│   └── lib/
│       ├── client.ts
│       ├── queries.ts
│       └── image.ts
│
├── lib/
│   ├── getSiteSettings.ts
│   ├── getContactSettings.ts
│   ├── getNews.ts
│   ├── getServices.ts
│   ├── getMenu.ts
│   └── getTestimonials.ts
│
├── styles/
│   └── tokens.css                      # Brand colours + fonts — change per client
│
└── public/
    └── images/
```

---

# Development Rules

## Rule 1 — Always read CLAUDE.md first
Read this file before taking any action on any task.

## Rule 2 — Sanity is the source of truth
Never hardcode business name, phone, email, address, tagline, or CTA text in component files.
All of that lives in Sanity singletons and is fetched at build time.

## Rule 3 — tokens.css is the only place for brand values
All colours, fonts, border radius, and max-width come from `styles/tokens.css` CSS variables.
Components reference `var(--color-accent)` etc. — never hardcode hex values in components.

## Rule 4 — No inline styles
Use Tailwind classes or CSS modules. Never `style={{ }}` in JSX.

## Rule 5 — Component structure
- `components/sections/` — full-width page sections, receive data as props
- `components/layout/` — Header, Footer, MobileNav (server components, fetch their own data)
- `components/ui/` — small reusable elements (Button, Card, Badge etc.)

## Rule 6 — Animation rules
- **GSAP** is the primary animation library — use for scroll-triggered reveals, text animations, staggered entrances, timeline sequences
- Install: `npm install gsap` — all plugins are now free (Webflow acquisition)
- **Spline** for 3D hero scenes on showcase/premium builds only — always check the scene's file size first (target under 5MB). Install: `npm install @splinetool/react-spline`
- Use CSS transitions (`transition-all duration-300`) for simple hover states and card lifts
- Animations must not block content rendering or feel gimmicky — they enhance, never distract
- Every animation must respect `prefers-reduced-motion` — wrap GSAP timelines in a check or use `gsap.matchMedia()`

## Rule 7 — Mobile first
All components are built mobile-first. Test at 375px, 768px, 1280px.
Use Playwright MCP to screenshot at multiple viewports during build.

## Rule 8 — Accessibility
Semantic HTML. Proper heading hierarchy (one H1 per page). Alt text on all images.
Keyboard navigable interactive elements. ARIA labels on icon-only buttons.

## Rule 9 — Image handling
All images go through `urlFor()` from `sanity/lib/image.ts`.
Always use Next.js `<Image />` component with explicit width/height or fill + sizes.
Never use `<img>` tags.

## Rule 10 — TypeScript
No `any` types except in Sanity schema validation callbacks `(R: any)`.
Define prop types explicitly for every component.

---

# Client Types — What to Enable

## Restaurant / Café
**Schemas:** siteSettings, contactSettings, seoDefaults, news, menuCategories, menuItems, testimonials
**Pages:** / /about /menu /gallery /news /contact
**Key sections:** HeroSplit or HeroCentered, MenuBook, GalleryGrid, Testimonials, CTASection

## Tradie / Service Business
**Schemas:** siteSettings, contactSettings, seoDefaults, services, testimonials, news
**Pages:** / /about /services /gallery /news /contact
**Key sections:** HeroSplit, ServiceGrid, CoverageSection, Testimonials, CTASection
**Remove:** menuCategories, menuItems schemas and /menu page

---

# Sanity Schema Conventions

- Singletons (siteSettings, contactSettings, seoDefaults) — one document each, edited in place
- Collections (services, testimonials, news, menu items) — repeatable documents
- Always include `sortOrder: number` on any collection that has a display order
- Always include `featured: boolean` on anything that appears on the homepage
- Images always use Sanity `image` type — never store image URLs as strings
- Reference fields use `type: 'reference'` with `to` array — never store IDs as strings

---

# GROQ Query Conventions

All queries live in `sanity/lib/queries.ts` as named exports.
Data fetching helpers live in `lib/` and import from queries.ts.
Pages call the helpers — never write raw GROQ in page files.

Pattern:
```
queries.ts → defines the query string
lib/getX.ts → wraps client.fetch(QUERY)
app/page.tsx → calls getX() and passes data to components
```

---

# Design Reference Sites

When approaching a new build, reference these for inspiration:

**Restaurant / Café:**
- Pujol (pujol.com.mx) — editorial full-bleed photography, bold serif, maroon palette
- Noma (noma.dk) — ultra-minimal, magazine editorial, sparse type on large imagery

**Tradie / Services:**
- OSE Engineering (ose-engineering.fr/en) — dark terminal aesthetic, GSAP animations, cursor details
- Siena Construction (sienaconstruction.com) — minimal grid, teal accent, large statement text, Awwwards HM

**Design principles to extract:**
- Full-bleed hero images, not contained boxes
- One strong accent colour, not a palette of five
- Large editorial typography for headlines
- Restraint — white space is the luxury signal
- No stock photo clichés (no handshakes, no hard hats unless real)

---

# Proposal Template

A print-ready HTML proposal template lives at `d:/StarterKit/proposal-template/proposal.html`.
Fill guide is at `d:/StarterKit/proposal-template/HOW-TO-FILL.md`.

When starting a new client pitch, generate a filled proposal by replacing all `{{VARIABLES}}` with:
- Client name, business type, prototype URL
- Personalised overview paragraphs (why they need a site, how you found them)
- Appropriate feature set (restaurant or tradie — snippets in HOW-TO-FILL.md)
- Pricing (default: $1,500 NZD build + ~$199/mo support)

Print to PDF: Chrome → Ctrl+P → A4, No margins, Background graphics ON → Save as PDF.
Name the file: `[ClientName]-Website-Proposal.pdf`

---

# New Client Checklist

```
[ ] Create new repo from GitHub template (SKillgour/client-starter → Use this template)
[ ] Create new Sanity project at sanity.manage.com
[ ] Clone repo locally
[ ] Update .env.local with new Sanity project ID + token
[ ] Update styles/tokens.css with client brand colours + fonts
[ ] Remove schemas not needed for client type
[ ] Build and review locally (npm run dev)
[ ] Present Client Editable Fields list for sign-off
[ ] Populate Sanity with placeholder/real content
[ ] Add CORS origins in Sanity (localhost + vercel URL)
[ ] Push to GitHub, deploy to Vercel
[ ] Share Vercel preview URL with client
[ ] Point client domain to Vercel when ready
[ ] Create client Sanity login (Editor role only — never Admin)
[ ] Record short Loom walkthrough of the Sanity CMS for the client
```
