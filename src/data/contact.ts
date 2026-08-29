// The logistics half of the ask. Separated from roles.ts because these are
// claims about my availability, not about my work: they change for reasons
// that have nothing to do with the site, and getting one wrong wastes a
// reader's time in a way no case study can.
//
// A field left as null is simply not rendered. That is deliberate — an empty
// "Availability:" line is worse than no line, and a guessed one is worse still.
export const contact = {
  email: 'andrew.nplus@gmail.com',
  github: 'https://github.com/Andrewnplus',
  /** Verifiable and stable; safe to state. */
  timezone: 'Asia/Taipei (UTC+8)',

  // ⚠️ Andrew fills these in. They are the three questions every reader of a
  // portfolio has after "is this person any good", and the site currently
  // answers none of them. Nothing here is guessed on your behalf.
  /** e.g. 'Remote (UTC+8 overlap)' | 'Taipei, hybrid' | 'Remote or Taipei' */
  arrangement: null as string | null,
  /** e.g. 'Open to conversations now' | 'Available from November 2026' */
  availability: null as string | null,
  /** e.g. 'Taiwan and remote-first teams in Asia-Pacific or Europe' */
  markets: null as string | null,
} as const;
