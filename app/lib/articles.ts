export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  body: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    slug: 'defi-yield-strategies-2024',
    title: 'Top DeFi Yield Strategies for 2024',
    excerpt: 'A deep dive into low-risk DeFi yield farming strategies, protocol comparisons, and risk-adjusted APY analysis for the upcoming year.',
    category: 'DeFi',
    date: '2024-12-10',
    readTime: '8 min',
    tags: ['DeFi', 'Yield', 'Staking'],
    body: `DeFi continues to evolve with new primitives and evolving risk landscapes. This article compares stablecoin yield vaults, liquidity provisioning on concentrated liquidity DEXs, and staking derivatives. We evaluate each strategy by risk-adjusted APY, smart contract risk, and protocol maturity.`,
  },
  {
    slug: 'binary-options-risk-management',
    title: 'Binary Options Risk Management Guide',
    excerpt: 'How to manage risk when trading binary options: position sizing, win-rate math, and building a sustainable edge over time.',
    category: 'Trading',
    date: '2024-11-28',
    readTime: '6 min',
    tags: ['Binary Options', 'Risk Management', 'Trading'],
    body: `Binary options are high-risk instruments. This guide covers position sizing rules, expectancy math, and practical risk management workflows that help preserve capital and extend trading longevity.`,
  },
  {
    slug: 'web3-ai-agents-overview',
    title: 'Web3 AI Agents Overview',
    excerpt: 'What AI agents mean for Web3: on-chain reasoning, autonomous trading bots, and decentralized agent marketplaces.',
    category: 'AI & Web3',
    date: '2024-11-15',
    readTime: '7 min',
    tags: ['AI', 'Web3', 'Agents'],
    body: `AI agents are moving on-chain. From autonomous trading bots to verifiable inference, this article maps the landscape of Web3 AI agents, their architectures, and practical use cases in DeFi and beyond.`,
  },
  {
    slug: 'crypto-onchain-analysis',
    title: 'Crypto On-Chain Analysis for Traders',
    excerpt: 'Key on-chain metrics every crypto trader should track: exchange flows, realized profit/loss, and network activity signals.',
    category: 'Trading',
    date: '2024-10-22',
    readTime: '9 min',
    tags: ['On-Chain', 'Analytics', 'Trading'],
    body: `On-chain data provides an edge for crypto traders. We cover exchange netflows, realized profit/loss, age consumed, and active address trends — and how to turn raw signals into actionable trading setups.`,
  },
  {
    slug: 'intro-to-smart-contract-security',
    title: 'Intro to Smart Contract Security',
    excerpt: 'A beginner-friendly guide to common smart contract vulnerabilities and how to audit contracts before interacting with them.',
    category: 'Security',
    date: '2024-09-30',
    readTime: '10 min',
    tags: ['Security', 'Smart Contracts', 'DeFi'],
    body: `Smart contract security is essential for anyone using DeFi. This guide explains reentrancy, front-running, oracle manipulation, and access control issues, plus practical steps to verify contract safety.`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
