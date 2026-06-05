import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2 text-lg font-semibold text-white">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </span>
            Crypto Dealflow
          </div>
          <p className="mt-2 text-sm text-textMuted">
            Practical research and tools for crypto, binary options, DeFi, Web3, and AI agents.
          </p>
        </div>

        <div className="flex gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-textMuted">Explore</span>
            <Link href="/" className="text-sm text-textMuted hover:text-textMain">Home</Link>
            <Link href="/articles" className="text-sm text-textMuted hover:text-textMain">Articles</Link>
            <Link href="/tools" className="text-sm text-textMuted hover:text-textMain">Tools</Link>
            <Link href="/about" className="text-sm text-textMuted hover:text-textMain">About</Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-textMuted">Community</span>
            <a href="https://t.me/crypto_azb" target="_blank" rel="noreferrer" className="text-sm text-textMuted hover:text-textMain">Telegram</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-xs text-textMuted">
          <span>© {new Date().getFullYear()} Crypto Dealflow</span>
          <span>Not financial advice.</span>
        </div>
      </div>
    </footer>
  );
}
