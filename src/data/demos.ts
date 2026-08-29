// Demos = 我自己在跑的、活著的系統。與 /work/ 和 /lab/ 的分工：work 是公司
// 案例、lab 是設計演進，demo 是「現在正在跑、可以當場看」的東西。
// 寫法原則（刻意的）：每頁一張流程圖 + 三個讀者視角（商業 / 工程 / AI），
// 只寫不會過時的結構與判斷，實作細節留到面談當場展開。
//
// 清單住在這裡而不是頁面裡，因為「有幾個 demo」在五個地方被寫成句子
// （首頁描述與卡片、demo 頁的 h1 與描述、about、404）。數量由陣列長度衍生，
// 句子裡的列舉由 short 拼出來——加一個 demo 只要改這個檔案。
export interface Demo {
  /** Small label above the card title. */
  tag: string;
  /** Page slug under /demo/. */
  slug: string;
  title: string;
  teaser: string;
  /** Noun phrase for the running-prose lists elsewhere on the site. */
  short: string;
}

export const demos: Demo[] = [
  {
    tag: 'queues · LLM pipeline',
    slug: 'bookshelf-echo',
    title: 'bookshelf-echo — a pipeline that decides what is worth spending on',
    teaser:
      'Collects AI news from five sources, filters it against my own book library before any model call, and publishes a daily digest. Reliability semantics you can audit; a cost ceiling that parks work in the queue instead of overspending.',
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

/** "a, b and c" — the Oxford comma is deliberate: one of the items contains "and". */
export function demoList(): string {
  const s = demos.map((d) => d.short);
  return s.length < 2 ? (s[0] ?? '') : `${s.slice(0, -1).join(', ')}, and ${s[s.length - 1]}`;
}
