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

  // The three questions every reader has after "is this person any good".
  // Confirmed by Andrew 2026-08-29. Each is a phrase, not a sentence: the
  // templates slot them into running prose, so a null drops the clause
  // instead of leaving a dangling label behind.
  /** Slots after "<role> roles, …". */
  arrangement: 'remote or in Taipei' as string | null,
  /** Stands as its own sentence. */
  availability: 'Open to conversations now' as string | null,
  /** Slots after "Looking at …". */
  markets: 'Taiwan, plus remote-first teams across Asia-Pacific and Europe' as string | null,
} as const;
