import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'What Crypto Dealflow is, who it is for, and how to stay connected.',
  openGraph: {
    title: 'About | Crypto Dealflow',
    description: 'What Crypto Dealflow is, who it is for, and how to stay connected.',
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4">
      <section className="py-12 md:py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">About</h1>
        <p className="mt-3 text-textMuted">
          Crypto Dealflow is a research-first publication for people navigating crypto markets, DeFi protocols, and emerging Web3 tech.
        </p>
      </section>

      <section className="space-y-6 pb-20 text-textMuted">
        <p>
          We cover practical topics: on-chain analysis, yield strategies, binary options risk management, smart contract security, and the growing intersection of AI agents and Web3. Everything here is written to help you make clearer, data-driven decisions.
        </p>
        <p>
          Crypto Dealflow is not financial advice. It is a signal-filtering layer: we read the noise so you don’t have to, then publish concise research you can act on.
        </p>
        <p>
          Stay connected via our Telegram channel:
        </p>
        <div className="flex items-center gap-3">
          <a href="https://t.me/crypto_azb" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-white hover:bg-brandSoft">
            t.me/crypto_azb
          </a>
        </div>

        <hr className="border-white/10" />

        <p className="text-xs text-textMuted">
          © {new Date().getFullYear()} Crypto Dealflow. Not financial advice. Do your own research.
        </p>
      </section>
    </div>
  );
}
