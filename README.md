# portfolio

Engineering portfolio site — evidence-first: every claim links to something you
can read or run.

- Astro static site, zero client-side JavaScript, light/dark via `prefers-color-scheme`
- Content plan and confidentiality rules: `workspace/career/03-portfolio-site-plan.md` (local)
- Deploys to GitHub Pages via `withastro/action`

```bash
npm install
npm run dev      # local preview
npm run build    # dist/
```

Roadmap: P1 scaffold + home + about (done) → P2 first two case-study write-ups
(done) → P3 remaining cases (done) → P4 demos as diagram-first pages, details
held back for the interview (done) → P5 live bookshelf-echo dashboard embed.

Demo pages are deliberately shallow: one hand-authored inline SVG (no JS, themed
via CSS variables), three reader lenses (business / engineering / AI), and a
"what I'd show you in person" list. Config values and prompts go stale; the
shape of a system and the reasons behind it do not.
