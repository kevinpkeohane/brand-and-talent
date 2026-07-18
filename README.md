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
| `index.html` | Semantic markup + JSON-LD (`Organization`/`ProfessionalService`, `Product`, `Person`) + OG/Twitter meta |
| `styles.css` | Black/white + acid-pink system, responsive, accessible focus states |
| `script.js` | Progressive enhancement only: mobile nav, footer year, reveal-on-scroll |
| `assets/` | Provided logos (`logo-white/black/color/color-bg.svg`) + generated `favicon.svg` |
| `source-docs/` | Kevin's supplied marketing portfolio PDF (linked as downloadable evidence) |

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
cd brandandtalent-site
python3 -m http.server 8080   # then open http://localhost:8080
```

## Deploy
Static hosting (Netlify, Cloudflare Pages, S3, GitHub Pages). Point `brandandtalent.com` at the
folder root. Update phone/email/product links if they change; JSON-LD mirrors them.

## To personalize later
- Swap the text-based "Trusted by" row for real client SVG logos if licensing allows.
- Add case-study links/imagery to **Selected work**.
- Add more products alongside Go-to-Market Maven™ as they package up.
- Wire the contact CTA to a form endpoint if you want inbound capture (currently `mailto:`).
