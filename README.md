# portfolio

Engineering portfolio site — evidence-first: every claim links to something you
can read or run.

- Astro static site, zero client-side JavaScript, light/dark via `prefers-color-scheme`
- Content plan and confidentiality rules: `workspace/career/03-portfolio-site-plan.md` (local)
- Deploys to GitHub Pages via `withastro/action`

```bash
npm install
npm run check    # astro check — the real gate, see below
npm run dev      # local preview
npm run build    # check + build into dist/
```

Roadmap: P1 scaffold + home + about (done) → P2 first two case-study write-ups
(done) → P3 remaining cases (done) → P4 demos as diagram-first pages, details
held back for the interview (done) → P5 live bookshelf-echo dashboard embed.

## How the pages are built

Every case study and demo opens with **one hand-authored inline SVG** built from
`src/components/Diagram.astro` + `DBox.astro` — no rendering library, so the site
keeps shipping zero client-side JavaScript. Colours come from the CSS variables in
`global.css`, so light and dark both work; on narrow screens the diagram scrolls
inside its own box rather than shrinking its labels. The shared grid is 920 units
wide with 230×60 boxes at x = 10 / 335 / 660.

Pages stay deliberately shallow: a diagram, three reader lenses (business /
engineering / AI), and a "what I'd show you in person" list. Config values,
queue names and prompts go stale; the shape of a system and the reasons behind
it do not.

**`astro check` is not optional.** The diagrams are prop-driven, and a typo'd
prop (`titel` for `title`) renders an empty label instead of failing the build —
a silent, invisible defect. `npm run build` and a dedicated CI job both run the
type check for exactly this reason.

**Numbers that drift live in `src/data/facts.ts`.** Repository count, books read,
tickets resolved and so on are stated on several pages; the module is the single
source of truth, and it lists the few places that restate the same fact in words.
