// Counts read better spelled out in a lede, and a lede that interpolates a
// digit ("9 stories") looks like a bug. This is the bridge: derive the count
// from the array, render it as the word the sentence wants.
const WORDS = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six',
  'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
];

/** Spell a small number; falls back to digits past twelve, where prose gives up too. */
export function inWords(n: number, capitalise = false): string {
  const w = WORDS[n] ?? String(n);
  return capitalise ? w.charAt(0).toUpperCase() + w.slice(1) : w;
}
