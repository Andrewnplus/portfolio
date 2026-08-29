# portfolio

Engineering portfolio site — evidence-first: every claim links to something you
can read or run.

- Astro static site, zero client-side JavaScript, light/dark via `prefers-color-scheme`
- Confidentiality rule, since the plan document that used to hold it is gone: work
  case studies describe the shape of a system and the judgment calls, never an
  employer's configuration, customer names or internal figures. Personal-system
  pages may name components; anything that goes stale monthly stays off the page
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

P5 is blocked, and deliberately not worked around. On 2026-08-29 the pipeline's
dashboard answered 401 — it sits behind the site's auth gate — and the two open
feeds are not embeddable either: `daily.json` stopped at 2026-07-27 when digests
were retired, and `essay.json` sits at 2026-08-15 because the pipeline is under a
*declared* pause. Embedding any of them would put a number on this site that
looks broken and is actually correct, which is the exact failure `/lab/earned-green/`
argues against. P5 waits for a public endpoint that is fresh by construction.

Content as of 2026-08-29: six work case studies, nine lab stories, three demos,
and a dated `/timeline/`. **The lab and demo lists are data, not markup** —
`src/data/labCases.ts` and `src/data/demos.ts` — and every count on the site is
derived from `.length` through `inWords()` in `src/data/numberWords.ts`. Adding a
story means editing one array; no lede needs to be found and corrected. That is a
fix for a real bug: the count drifted twice, and the second time two sessions
collided on the same hand-written number in a merge.

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

## Measurement

Until 2026-08-29 this was the only system here with no instrumentation, which
is an odd thing to admit on a site whose lab section argues that an indicator
with no failure mode is decoration. Three sources now answer the three
questions, and none of them costs a line of client-side JavaScript:

| Question | Source |
|---|---|
| Does anyone read this, and which page? | Cloudflare zone analytics (path + referrer) |
| Which audience framing lands? | The `/for/<role>/` paths are distinct URLs — the reading orders double as the instrument |
| Does anyone click through to the code? | GitHub repo → Insights → Traffic → referring sites |

**The one manual step:** `nplus.page` is on Cloudflare DNS but its records are
grey-clouded, so traffic goes straight to GitHub Pages and Cloudflare sees
nothing. Flip the A records to Proxied — the same deploy-then-flip that
`nplus.wiki` already went through for its gate worker — and set SSL/TLS to
**Full**. Flexible would loop, because Pages serves a valid certificate and
expects HTTPS.

No beacon, no third-party script, no cookie banner: the site still ships zero
client-side JavaScript, and the measurement lives one layer below it.

**`astro check` is not optional.** The diagrams are prop-driven, and a typo'd
prop (`titel` for `title`) renders an empty label instead of failing the build —
a silent, invisible defect. `npm run build` and a dedicated CI job both run the
type check for exactly this reason.

**Numbers that drift live in `src/data/facts.ts`.** Repository count, books read,
tickets resolved and so on are stated on several pages; the module is the single
source of truth, and it lists the few places that restate the same fact in words.
