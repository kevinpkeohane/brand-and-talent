# Brand & Talent — brandandtalent.com

A concise, credible one-page site for **Brand & Talent** — a brand, go-to-market, and growth
consultancy that assembles a bespoke team of senior specialists for each engagement, led by one
accountable strategic lead and enabled by agentic AI.

## Positioning
- **Voice:** organization-first (*we / our / Brand & Talent*), with **Kevin Keohane** as
  **founder & strategic lead** and his track record used as evidence — not a personal CV.
- **Model:** assembled senior teams (writers, designers, creatives, strategists, technologists —
  "past masters"), no bloated fixed-agency overhead, one accountable lead, AI-accelerated delivery.
- **Offerings:** Brand Positioning & Strategy · Go-to-Market & Growth · EX→CX & Culture Alignment ·
  AI-Enabled Delivery.
- **Product:** **Go-to-Market Maven™** (gotomarketmaven.com) featured as a key packaged product.

## Design system
- **Palette:** cool black & white (`#0a0a0a` / `#f7f7f5`) with a single **acid-pink** accent (`#ff1e83`).
- **Type:** Inter/system stack for UI, monospace for labels/eyebrows.
- **Motion:** subtle reveal-on-scroll; fully disabled under `prefers-reduced-motion`.
- **No frameworks, no CDNs, no build step.** Plain HTML/CSS/JS — open `index.html` directly.

## Files
| File | Purpose |
|------|---------|
| `index.html` | Semantic markup + JSON-LD (`Organization`/`ProfessionalService`, `Product`, `Person`, `WebSite`, **`FAQPage`**) + expanded OG/Twitter/keywords/geo meta |
| `styles.css` | Black/white + acid-pink system, responsive, accessible focus states (+ FAQ accordion styles) |
| `script.js` | Progressive enhancement only: mobile nav, footer year, reveal-on-scroll |
| `robots.txt` | **NEW** — crawl directives + `Sitemap:` reference for search engines |
| `sitemap.xml` | **NEW** — XML sitemap (home + in-page section anchors + images) |
| `assets/` | Provided logos (`logo-white/black/color/color-bg.svg`) + generated `favicon.svg` |
| `source-docs/` | Kevin's supplied marketing portfolio PDF (linked as downloadable evidence) |

## SEO additions (this revision)
- **`robots.txt`** (root) — allows all crawlers, ready to disallow private/staging paths later, and links the XML sitemap.
- **`sitemap.xml`** (root) — home URL + primary section anchors, with `lastmod`/`changefreq`/`priority` and image entries. Update `<lastmod>` when content changes.
- **Meta tags** — added `keywords`, `robots`/`googlebot` directives, `geo.*`/`ICBM` local-SEO tags, `revisit-after`, and expanded Open Graph / Twitter (`og:image:alt`, `og:locale`, `twitter:image`).
- **Content / keywords** — new **FAQ** section (`#faq`, in nav) targeting high-intent queries (brand consultancy, go-to-market strategy, GTM playbook, EX→CX, agentic AI, assembled senior teams), backed by **FAQPage** structured data eligible for rich results. Also added a `WebSite` JSON-LD node.

> After deploy, submit `https://brandandtalent.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools, and validate the FAQ markup with Google's Rich Results Test.

## Sections
Hero → Trusted-by → **What we do** (4 offerings) → **How we work** (assembled senior teams) →
**Products** (Go-to-Market Maven™) → Track record (stats) → Selected work → AI-enabled delivery →
Testimonials → About / provenance (compact founder + books + awards) → Contact → Footer.

## Content sources
All copy is grounded in supplied/first-party material only:
- The attached **Marketing & Brand Strategy Portfolio** PDF.
- **gotomarketmaven.com** (product claims: comprehensive actionable playbook, AI-powered analysis +
  expert human strategists, ~24–48h / a few days, Fortune 500-level, under $1,000, startup-friendly,
  use cases). Product money-back guarantee wording is intentionally **not** reproduced on the page;
  link to gotomarketmaven.com for current product terms.
- **kevinkeohane.com** positioning.
- Public **LinkedIn** profile `linkedin.com/in/kkeohane`.

## Accessibility
- Skip link, landmark roles, labelled sections, keyboard-visible focus rings.
- Color contrast meets WCAG AA on the dark system (secondary text ≥ 7:1).
- External links use `target="_blank"` + `rel="noopener noreferrer"` with visible ↗ affordance.
- Mobile nav is fully keyboard operable (`Esc` closes).
- `prefers-reduced-motion` removes all transitions/animations.

## Local preview
```bash
cd brandandtalent-site-seo
python3 -m http.server 8080   # then open http://localhost:8080
```

> Note: `robots.txt` and `sitemap.xml` use absolute `https://brandandtalent.com/` URLs, so they work correctly once deployed at the domain root (not needed for local preview).

## Deploy
Static hosting (Netlify, Cloudflare Pages, S3, GitHub Pages). Point `brandandtalent.com` at the
folder root. Update phone/email/product links if they change; JSON-LD mirrors them.

## To personalize later
- Swap the text-based "Trusted by" row for real client SVG logos if licensing allows.
- Add case-study links/imagery to **Selected work**.
- Add more products alongside Go-to-Market Maven™ as they package up.
- Wire the contact CTA to a form endpoint if you want inbound capture (currently `mailto:`).
