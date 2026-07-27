// Single source of truth for the handful of numbers that appear on more than
// one page and drift over time. They used to be typed out per page, which is
// how the repository count once got updated in four files and missed a fifth.
//
// These are display strings rather than numbers: they carry the thousands
// separator and no unit, so a page can write `{facts.repoCount}+ repositories`
// or `{facts.repoCount}-repository platform` and get the grammar it needs.
export const facts = {
  /** Repositories in the personal knowledge platform. */
  repoCount: '1,400',
  /** Books read and kept as structured notes. Always stated as "roughly". */
  booksRead: '800',
  /** Support tickets resolved at work, cumulative. */
  ticketsResolved: '470',
  /** Third-party vendor APIs onboarded end-to-end. */
  vendorApis: '6',
  /** Years owning the ingest pipeline. */
  yearsOwning: '3',
} as const;

// Restated in words in a few places, because a lede reads better spelled out.
// Those are deliberately NOT interpolated — but they are the same facts, so
// change them together with the values above:
//
//   yearsOwning  index.astro          "Three years and counting as the de-facto owner"
//                work/index.astro     "from three-plus years owning"
//   vendorApis   work/index.astro     "Six-plus vendor integrations"
//                work/vendor-integration-platform.astro
//                                     "Six-plus third-party integrations",
//                                     "six-plus vendor APIs evaluated"
