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
  /** Books in the searchable notes corpus. Always stated as "roughly".
   *  This replaced a "books read" figure, which was a claim about me that
   *  nobody could check. This one is a query: the library index holds 1,468
   *  books and 35,708 chapters (2026-08-29), refreshed nightly, and it is the
   *  corpus the resonance gate actually searches. Rounded down. */
  booksIndexed: '1,450',
  /** Support tickets resolved at work, cumulative.
   *  Self-reported — no source I can re-derive. Last reviewed 2026-08-29. */
  ticketsResolved: '470',
  /** Third-party vendor APIs onboarded end-to-end.
   *  Self-reported. Last reviewed 2026-08-29. */
  vendorApis: '6',
  /** Years owning the ingest pipeline. Self-reported, and the one number here
   *  that goes stale by doing nothing. Last reviewed 2026-08-29. */
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
