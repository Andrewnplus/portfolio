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
