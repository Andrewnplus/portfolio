import { contact } from './contact';

export type RoleSlug = 'backend' | 'fullstack' | 'fde';

export interface Role {
  slug: RoleSlug;
  label: string;
  summary: string;
  ask: string;
  evidence: { slug: string; why: string }[];
  limit: string;
}

export const roles: Role[] = [
  {
    slug: 'backend',
    label: 'Backend engineer',
    summary:
      'Owning a data pipeline end to end: ingestion, queues, correctness under load, and the migrations nobody sees.',
    ask: 'I am looking for backend work where owning the pipeline is the job rather than a rotation — vendor data in, guarantees out, and enough rope to fix the cause instead of the symptom. The evidence below is ordered for that question.',
    evidence: [
      {
        slug: 'import-calc-performance',
        why: 'The short version is "−84% requests". The reason it leads here is the second half: a service-time analysis that corrected my own conclusion and found the real bottleneck somewhere else.',
      },
      {
        slug: 'sync-to-async-export',
        why: 'The standard backend problem — a request that cannot finish inside a timeout — solved with job de-duplication and object-storage delivery rather than a bigger timeout.',
      },
      {
        slug: 'rabbitmq-4x-preemption',
        why: 'A broker upgrade that would have broken every consumer, traced across two language bindings and fixed before it shipped. Reading release notes is a backend skill.',
      },
      {
        slug: 'kpi-calculation-platform',
        why: 'Spec-first: OpenAPI contract, then schema, then the calculation path — six models built the same way, so the seventh is a routine rather than a project.',
      },
      {
        slug: 'bookshelf-echo',
        why: 'The same discipline where you can actually read the code: at-least-once with idempotent consumers, a retry ladder into a dead letter, and a spend ceiling that parks work in the queue.',
      },
      {
        slug: 'async-pipeline-three-generations',
        why: 'Three answers to one problem across three years, each forced by a real failure of the last — the reasoning I would bring to your queue design, not just the result.',
      },
      {
        slug: 'online-data-migration',
        why: 'An online migration with a transitional backfill and no data loss, which is the part of backend work that never makes a demo.',
      },
    ],
    limit:
      'What this framing leaves out: almost everything I have built for a person to actually touch. If you need someone who also owns the surface, read the full-stack page.',
  },
  {
    slug: 'fullstack',
    label: 'Full-stack engineer',
    summary:
      'Shipping the whole path — schema, service, and the screen someone taps — for products where one person carries all of it.',
    ask: 'I am looking for work where one engineer is trusted with the whole path, from the table to the thing a person taps, and is expected to keep it running afterwards. Everything below is something I took the whole way.',
    evidence: [
      {
        slug: 'sashimi-printer',
        why: 'Chat message to thermal printer: model, pricing engine, an owner-facing admin screen, an Android app, and the daily settlement — one person, one shop, every layer.',
      },
      {
        slug: 'voice-studio',
        why: 'A login page, an API, a queue, a worker in another language and another runtime, and a download — built as one path, with the contract between the halves as the interesting part.',
      },
      {
        slug: 'judgment-in-production',
        why: 'The full-stack decision that matters most is what the screen shows when the backend is unsure. This one prefers a blank a human can fill over a number that looks right.',
      },
      {
        slug: 'vendor-integration-platform',
        why: 'Six repositories per integration, from parser to public API contract — the width of a feature at work, not just the depth of a service.',
      },
      {
        slug: 'knowledge-as-infrastructure',
        why: 'Notes to index to authenticated API to a consumer that is not me — the same end-to-end move, taken far enough that another system depends on it.',
      },
      {
        slug: 'bookshelf-echo',
        why: 'The back half of a product I also designed the front of: the pipeline, the cost ceiling, and the static site a reader actually sees.',
      },
    ],
    limit:
      'What this framing leaves out: the deep single-system work — profiling, broker semantics, online migrations. That is on the backend page.',
  },
  {
    slug: 'fde',
    label: 'Forward-deployed engineer',
    summary:
      'Building against a real user in a real room: ambiguous requirements, a model that will be wrong, and someone waiting for the thing to work today.',
    ask: 'I am looking for work where the requirements arrive as somebody else\'s problem rather than a ticket, where I am close enough to the user to watch the software fail, and where operating what I built is part of the job. That describes how I have been working already.',
    evidence: [
      {
        slug: 'sashimi-printer',
        why: 'The clearest case I have: a real shop, a non-technical owner, orders in free-form chat, and requirements I learned by reconciling ten days of real tickets against what the model did with them.',
      },
      {
        slug: 'judgment-in-production',
        why: 'What a forward-deployed system does when it is unsure decides whether the user trusts it next week. This one leaves a blank rather than guessing a price, on purpose.',
      },
      {
        slug: 'alerts-that-triage-themselves',
        why: 'Deployed software you cannot walk away from: the alert investigates itself and sends me a conclusion, and the suppressions are built so they can never hide the alert from the human.',
      },
      {
        slug: 'earned-green',
        why: 'Four status lights that were lying. Being close to production means the difference between a dashboard that reassures and one that reports.',
      },
      {
        slug: 'voice-studio',
        why: 'A small tool taken from idea to a logged-in user in a day and a half, with the cost controls in from the start because every request spends someone\'s money.',
      },
      {
        slug: 'vendor-integration-platform',
        why: 'Six external vendors, each with their own API, their own outages and their own idea of what a timestamp is — integration work where the other side is not yours to fix.',
      },
    ],
    limit:
      'What this framing leaves out: I have not done this with an enterprise customer or a travel schedule. The room in these stories is a kitchen, a team, and my own on-call.',
  },
];

export const roleBySlug = (slug: string) => roles.find((r) => r.slug === slug);
export { contact };
