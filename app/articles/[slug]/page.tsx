import type { Metadata } from 'next';
import { articles, getArticleBySlug } from '../../lib/articles';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getArticleBySlug(params.slug);
  if (!a) return { title: 'Not Found' };
  return {
    title: a.title,
    description: a.excerpt,
    openGraph: {
      title: `${a.title} | Crypto Dealflow`,
      description: a.excerpt,
      type: 'article',
      publishedTime: a.date,
      tags: a.tags,
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = getArticleBySlug(params.slug);
  if (!a) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.excerpt,
    datePublished: a.date,
    author: { '@type': 'Organization', name: 'Crypto Dealflow' },
    publisher: { '@type': 'Organization', name: 'Crypto Dealflow', url: 'https://crypto-dealflow.vercel.app' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://crypto-dealflow.vercel.app/articles/${a.slug}` },
    keywords: a.tags.join(', '),
  };

  return (
    <div className="mx-auto max-w-3xl px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="py-6 text-sm text-textMuted">
        <Link href="/articles" className="hover:text-textMain">← Articles</Link>
      </nav>

      <article className="pb-20">
        <header className="mb-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-medium text-brandSoft">
            {a.category}
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{a.title}</h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-textMuted">
            <time dateTime={a.date}>{a.date}</time>
            <span>•</span>
            <span>{a.readTime} read</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {a.tags.map((t) => (
              <span key={t} className="rounded-md border border-white/5 bg-surface px-2 py-1 text-xs text-textMuted">
                {t}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-invert max-w-none text-textMuted">
          <p className="text-lg leading-relaxed text-textMain">{a.excerpt}</p>
          <hr className="my-8 border-white/10" />
          <p className="leading-7">{a.body}</p>
        </div>
      </article>
    </div>
  );
}
