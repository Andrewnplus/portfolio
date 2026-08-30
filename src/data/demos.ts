export interface Demo {
  tag: string;
  slug: string;
  title: string;
  teaser: string;
  short: string;
}

export const demos: Demo[] = [
  {
    tag: 'queues · LLM pipeline',
    slug: 'bookshelf-echo',
    title: 'bookshelf-echo — a pipeline that decides what is worth spending on',
    teaser:
      'Collects AI news from five sources, filters it against my own book library before any model call, and publishes at most one book-informed essay a day. Reliability semantics you can audit; a cost ceiling that parks work in the queue instead of overspending.',
    short: 'a queue-based LLM pipeline that gates spend on relevance',
  },
  {
    tag: 'queues · two runtimes',
    slug: 'voice-studio',
    title: 'voice studio — a paid job crossing a runtime boundary',
    teaser:
      'Paste a video URL and a script, get back an mp3 of that voice reading it. A producer in Kubernetes, a worker on the host, a queue that carries only an id — and a contract between two languages that fails on the first connection rather than the first outage.',
    short: 'a paid job that crosses a runtime boundary',
  },
  {
    tag: 'production · one real shop',
    slug: 'sashimi-printer',
    title: 'sashimi-printer — an LLM in the middle of a working kitchen',
    teaser:
      'Free-form chat messages become printed kitchen tickets. Runs in a real shop, where the interesting question is not the model — it is what happens on the day the model is wrong.',
    short: 'an order-to-printer system in a real shop',
  },
];

export function demoList(): string {
  const s = demos.map((d) => d.short);
  return s.length < 2 ? (s[0] ?? '') : `${s.slice(0, -1).join(', ')}, and ${s[s.length - 1]}`;
}
