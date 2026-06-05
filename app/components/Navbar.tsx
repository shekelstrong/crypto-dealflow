'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/articles', label: 'Articles' },
    { href: '/tools', label: 'Tools' },
    { href: '/about', label: 'About' },
    { href: 'https://t.me/crypto_azb', label: 'Telegram', external: true },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </span>
          Crypto Dealflow
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) =>
            l.external ? (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="text-sm text-textMuted hover:text-textMain">
                {l.label}
              </a>
            ) : (
              <Link key={l.href} href={l.href} className="text-sm text-textMuted hover:text-textMain">
                {l.label}
              </Link>
            )
          )}
        </div>

        <button className="md:hidden text-textMuted" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-surface px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) =>
              l.external ? (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="text-sm text-textMuted hover:text-textMain" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ) : (
                <Link key={l.href} href={l.href} className="text-sm text-textMuted hover:text-textMain" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
