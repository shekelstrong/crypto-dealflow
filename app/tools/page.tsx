import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tools',
  description: 'Curated tools and platforms for crypto trading, DeFi, on-chain analysis, and AI agents.',
  openGraph: {
    title: 'Tools | Crypto Dealflow',
    description: 'Curated tools and platforms for crypto trading, DeFi, on-chain analysis, and AI agents.',
  },
};

const tools = [
  {
    category: 'On-Chain Analytics',
    items: [
      { name: 'Glassnode', url: 'https://glassnode.com', description: 'On-chain market intelligence and metrics for Bitcoin and Ethereum.' },
      { name: 'Nansen', url: 'https://nansen.ai', description: 'Smart money tracking, token god mode, and wallet labeling.' },
      { name: 'Dune Analytics', url: 'https://dune.com', description: 'Community-powered analytics and SQL dashboards for any chain.' },
    ],
  },
  {
    category: 'DeFi & Yield',
    items: [
      { name: 'DeFiLlama', url: 'https://defillama.com', description: 'TVL aggregator, yield comparisons, and protocol analytics across chains.' },
      { name: 'Yearn Finance', url: 'https://yearn.fi', description: 'Automated yield strategies and vaults with transparent risk profiles.' },
      { name: 'Lido', url: 'https://lido.fi', description: 'Liquid staking for ETH and other assets with simple mint/redeem flows.' },
    ],
  },
  {
    category: 'Trading & Execution',
    items: [
      { name: 'TradingView', url: 'https://tradingview.com', description: 'Charts, indicators, and alerts for crypto and traditional markets.' },
      { name: 'CoinGecko', url: 'https://coingecko.com', description: 'Price tracking, market cap rankings, and exchange volume data.' },
    ],
  },
  {
    category: 'Security & Audits',
    items: [
      { name: 'Revoke.cash', url: 'https://revoke.cash', description: 'Revoke token allowances and reduce wallet attack surface.' },
      { name: 'Immunefi', url: 'https://immunefi.com', description: 'Bug bounty platform for DeFi and smart contract security.' },
    ],
  },
  {
    category: 'AI & Agents',
    items: [
      { name: 'LangChain', url: 'https://langchain.com', description: 'Framework for building LLM-powered applications and agent workflows.' },
      { name: 'AutoGPT', url: 'https://agpt.co', description: 'Autonomous AI agents that can execute multi-step tasks.' },
    ],
  },
];

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <section className="py-12 md:py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Tools</h1>
        <p className="mt-3 max-w-2xl text-textMuted">
          A curated shortlist of platforms, dashboards, and frameworks we use and recommend for research, trading, and building in Web3.
        </p>
      </section>

      <section className="pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {tools.map((g) => (
            <div key={g.category} className="rounded-2xl border border-white/5 bg-surface p-5">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brandSoft">{g.category}</h2>
              <div className="flex flex-col gap-3">
                {g.items.map((t) => (
                  <a key={t.name} href={t.url} target="_blank" rel="noreferrer" className="group flex items-start justify-between gap-3 rounded-xl border border-white/5 bg-surfaceAlt p-4 hover:border-white/10">
                    <div>
                      <div className="text-sm font-semibold text-white">{t.name}</div>
                      <div className="mt-1 text-xs text-textMuted">{t.description}</div>
                    </div>
                    <div className="mt-0.5 text-textMuted group-hover:text-brand">
                      <ExternalLink size={14} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
