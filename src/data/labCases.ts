// The lab card list, extracted from the page so that "how many stories are
// there" is a value and not a sentence somebody has to remember to update.
// Twice now a story was added and the ledes still said the old number — the
// second time, two sessions collided on the same hand-written count in a merge.
//
// Order matters: it is reading order, so a story that answers an earlier one
// (earned-green → alerts-that-triage-themselves) comes after it.
import { facts } from './facts';

export interface LabCase {
  /** Small label above the card title. */
  tag: string;
  /** Page slug under /lab/. */
  slug: string;
  title: string;
  teaser: string;
}

export const labCases: LabCase[] = [
  {
    tag: 'async pipelines',
    slug: 'async-pipeline-three-generations',
    title: 'Three generations of the same pipeline',
    teaser:
      'A file-based queue, then a real broker with retry topology, then a five-service production pipeline with an editorial gate. Same problem, three answers — each one forced by a failure of the last.',
  },
  {
    tag: 'operations',
    slug: 'one-machine-one-operator',
    title: 'One machine, one operator, no silent failures',
    teaser:
      'How a single prod box evolved from hand-run compose to a dual-runtime platform where every config has one source of truth, every failure mode has a voice, and even the monitoring has an external dead-man switch.',
  },
  {
    tag: 'knowledge systems',
    slug: 'knowledge-as-infrastructure',
    title: `Turning ${facts.booksIndexed} books of notes into infrastructure`,
    teaser:
      `Reading notes became a queryable engine: full-text + vector search over ~${facts.booksIndexed} books, served to machines through an authenticated API — so a news pipeline can ask "which of my books resonate with this?"`,
  },
  {
    tag: 'fleet management',
    slug: 'convention-by-reference',
    title: 'A convention copied 1,600 times',
    teaser:
      'A convention plugin centralised how every repository builds. What it did not centralise surfaced years later as 36 GB of duplicated build artifacts and a fleet split across four plugin versions — one root cause, one fix.',
  },
  {
    tag: 'design judgment',
    slug: 'judgment-in-production',
    title: 'Judgment calls, written down',
    teaser:
      'A pricing engine that prefers blanks over guesses, an alert channel that must not report its own death, and a metric that measured the wrong thing — small systems where the design decision is the product.',
  },
  {
    tag: 'operations',
    slug: 'subtraction-as-a-feature',
    title: 'Subtraction is a shipping feature',
    teaser:
      'One stretch of weeks retired an application, two UIs, a monitoring stack, an edge proxy and four CI runners — nothing broke. Removal with criteria, dated data clocks, estate settlement, and decisions that get un-decided.',
  },
  {
    tag: 'distributed systems',
    slug: 'one-machine-at-google-scale',
    title: 'One machine, read as a small Google',
    teaser:
      'Every component on my box is a scaled-down answer to a problem someone published a paper about — Borg, Monarch, Spanner, DiRT. A row-by-row mapping, plus the four things one machine structurally cannot teach.',
  },
  {
    tag: 'observability',
    slug: 'earned-green',
    title: 'A status light is a claim — make every green earned',
    teaser:
      'A Synced badge that promised nothing, a cron that stayed green for eleven days after it died, a red that everyone tolerated. Four lying lights, four fixes, one principle: ask every indicator for its alibi.',
  },
  {
    tag: 'operations · AI',
    slug: 'alerts-that-triage-themselves',
    title: 'Alerts that triage themselves',
    teaser:
      'An alert is a question, and answering it used to require me at a keyboard. A headless agent now investigates on the machine and sends the conclusion — with three ways to say "I already know" that are structurally unable to hide the alert itself.',
  },
];
