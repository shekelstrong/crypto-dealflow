import { articles } from './lib/articles';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Shield, Cpu, BarChart3 } from 'lucide-react';

export default function HomePage() {
  const featured = articles[0];
  const recent = articles.slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4">
      {/* Hero */}
      <section className="flex flex-col items-start gap-6 py-16 md:py-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-medium text-brandSoft">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand"></span>
          New: DeFi Yield Strategies for 2024
        </div>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
          Navigate crypto markets with clarity.
        </h1>
        <p className="max-w-2xl text-lg text-textMuted">
          Practical insights, tools, and research on crypto trading, binary options, DeFi, Web3, and AI agents — built for real-world decisions.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/articles" className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-white hover:bg-brandSoft">
            Explore articles
            <ArrowRight size={16} />
          </Link>
          <Link href="/tools" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-textMain hover:bg-surfaceAlt">
            Browse tools
          </Link>
        </div>

        {/* Hero abstract shapes */}
        <div className="relative mt-10 w-full overflow-hidden rounded-2xl border border-white/5 bg-surface p-6 md:p-10">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative grid gap-6 md:grid-cols-3">
            <div className="flex flex-col gap-3 rounded-xl border border-white/5 bg-surfaceAlt p-5">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <BarChart3 size={18} />
              </div>
              <div className="text-sm font-semibold text-textMain">Crypto & Trading</div>
              <div className="text-sm text-textMuted">On-chain analysis, trading setups, and market research.</div>
            </div>
            <div className="flex flex-col gap-3 rounded-xl border border-white/5 bg-surfaceAlt p-5">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <TrendingUp size={18} />
              </div>
              <div className="text-sm font-semibold text-textMain">DeFi & Yield</div>
              <div className="text-sm text-textMuted">Yield strategies, protocol comparisons, and risk-adjusted returns.</div>
            </div>
            <div className="flex flex-col gap-3 rounded-xl border border-white/5 bg-surfaceAlt p-5">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Cpu size={18} />
              </div>
              <div className="text-sm font-semibold text-textMain">AI Agents & Web3</div>
              <div className="text-sm text-textMuted">Autonomous agents, on-chain reasoning, and Web3 infrastructure.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-textMain">Featured article</h2>
          <Link href="/articles" className="text-sm text-brand hover:text-brandSoft">View all →</Link>
        </div>
        <Link href={`/articles/${featured.slug}`} className="group block">
          <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-surface p-6 transition hover:border-white/10 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-medium text-brandSoft">
                  {featured.category}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-brandSoft">{featured.title}</h3>
                <p className="mt-2 text-sm text-textMuted">{featured.excerpt}</p>
                <div className="mt-4 flex items-center gap-3 text-xs text-textMuted">
                  <span>{featured.date}</span>
                  <span>•</span>
                  <span>{featured.readTime} read</span>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surfaceAlt text-brand">
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Recent */}
      <section className="py-10 pb-20">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-textMain">Recent articles</h2>
          <Link href="/articles" className="text-sm text-brand hover:text-brandSoft">View all →</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {recent.map((a) => (
            <Link key={a.slug} href={`/articles/${a.slug}`} className="group block">
              <div className="flex h-full flex-col rounded-2xl border border-white/5 bg-surface p-5 transition hover:border-white/10">
                <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium text-brandSoft">
                  {a.category}
                </div>
                <h3 className="text-base font-semibold text-white group-hover:text-brandSoft">{a.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-textMuted">{a.excerpt}</p>
                <div className="mt-auto pt-4 text-xs text-textMuted">
                  {a.date} • {a.readTime} read
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-surface p-8 text-center md:p-12">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand/20 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          </div>
          <div className="relative">
            <div className="mx-auto mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
              <Shield size={20} />
            </div>
            <h3 className="text-xl font-semibold text-white">Join the Telegram channel</h3>
            <p className="mx-auto mt-2 max-w-lg text-sm text-textMuted">
              Get curated signals, on-chain alerts, and research notes before they hit the site.
            </p>
            <a href="https://t.me/crypto_azb" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-white hover:bg-brandSoft">
              Open Telegram
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
