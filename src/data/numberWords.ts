const WORDS = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six',
  'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
];

export function inWords(n: number, capitalise = false): string {
  const w = WORDS[n] ?? String(n);
  return capitalise ? w.charAt(0).toUpperCase() + w.slice(1) : w;
}
