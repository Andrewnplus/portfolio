// One index over every piece of evidence on the site, keyed by slug.
//
// The point is the split that makes role pages possible without duplication:
// a case study, lab story or demo describes *itself* exactly once, in its own
// data module. Anything audience-specific — which items a particular reader
// should see, in what order, and why they should care — lives in roles.ts and
// never touches the evidence itself. So /for/backend/ and /for/fde/ can
// disagree about what matters without ever disagreeing about what happened.
import { labCases } from './labCases';
import { demos } from './demos';
import { workCases } from './workCases';

export type EvidenceKind = 'work' | 'lab' | 'demo';

export interface EvidenceItem {
  kind: EvidenceKind;
  slug: string;
  title: string;
  tag: string;
  teaser: string;
  /** Site-relative, without the base path — pages prefix it themselves. */
  href: string;
}

const items: EvidenceItem[] = [
  ...workCases.map((c) => ({ ...c, kind: 'work' as const, href: `/work/${c.slug}/` })),
  ...labCases.map((c) => ({ ...c, kind: 'lab' as const, href: `/lab/${c.slug}/` })),
  ...demos.map((d) => ({
    kind: 'demo' as const,
    slug: d.slug,
    title: d.title,
    tag: d.tag,
    teaser: d.teaser,
    href: `/demo/${d.slug}/`,
  })),
];

const bySlug = new Map(items.map((i) => [i.slug, i]));

/**
 * Look up one piece of evidence, or fail the build.
 *
 * Deliberately a throw rather than a filter: a role page that quietly drops an
 * item because somebody renamed a slug would look completely healthy while
 * showing a reader less than it claims. The same reasoning as `astro check`
 * being a hard gate — a silent omission is the defect worth failing over.
 */
export function evidenceBySlug(slug: string): EvidenceItem {
  const found = bySlug.get(slug);
  if (!found) {
    throw new Error(
      `roles.ts references "${slug}", which is not a case study, lab story or demo. ` +
        `Known slugs: ${[...bySlug.keys()].join(', ')}`,
    );
  }
  return found;
}

export const allEvidence = items;
