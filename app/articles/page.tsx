import type { Metadata } from 'next';
import { articles } from '../lib/articles';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Curated research and guides on crypto trading, DeFi, binary options, Web3, and AI agents.',
  openGraph: {
    title: 'Articles | Crypto Dealflow',
    description: 'Curated research and guides on crypto trading, DeFi, binary options, Web3, and AI agents.',
  },
};

export default function ArticlesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: articles.map((a, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      url: `https://crypto-dealflow.vercel.app/articles/${a.slug}`,
      name: a.title,
    })),
  };

  return (
    <div className="mx-auto max-w-7xl px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="py-12 md:py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Articles</h1>
        <p className="mt-3 max-w-2xl text-textMuted">
          Research notes, strategy guides, and practical walkthroughs for crypto markets, DeFi protocols, and emerging tech.
        </p>
      </section>

      <section className="pb-20">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <article key={a.slug} className="group">
              <Link href={`/articles/${a.slug}`}>
                <div className="flex h-full flex-col rounded-2xl border border-white/5 bg-surface p-5 transition hover:border-white/10">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-medium text-brandSoft">
                    {a.category}
                  </div>
                  <h2 className="text-base font-semibold text-white group-hover:text-brandSoft">{a.title}</h2>
                  <p className="mt-2 line-clamp-3 text-sm text-textMuted">{a.excerpt}</p>
                  <div className="mt-auto flex items-center gap-3 pt-4 text-xs text-textMuted">
                    <time dateTime={a.date}>{a.date}</time>
                    <span>•</span>
                    <span>{a.readTime} read</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
