// Single source of truth for the handful of numbers that appear on more than
// one page and drift over time. They used to be typed out per page, which is
// how the repository count once got updated in four files and missed a fifth.
//
// These are display strings rather than numbers: they carry the thousands
// separator and no unit, so a page can write `{facts.repoCount}+ repositories`
// or `{facts.repoCount}-repository platform` and get the grammar it needs.
export const facts = {
  /** Repositories in the personal knowledge platform.
   *  Last checked 2026-08-29: the portal's nightly health scan fetches an
   *  index from 1,771 deployed book sites, before note stations, handbooks
   *  and the platform repos themselves. Always stated with a "+". */
  repoCount: '1,700',
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
// (labCount and demoCount used to be listed here. They are now derived from
//  src/data/labCases.ts and src/data/demos.ts via inWords(), because a ledger
//  entry still relies on someone reading it — and twice it was not read.)
//
//   vendorApis   work/index.astro     "Six-plus vendor integrations"
//                work/vendor-integration-platform.astro
//                                     "Six-plus third-party integrations",
//                                     "six-plus vendor APIs evaluated"
