# Crypto Dealflow

A modern Next.js 14 site for crypto, binary options, DeFi, Web3, and AI agent research. Built for an English-speaking audience, it features a dark theme, SVG-driven visuals, responsive design, and full SEO readiness.

## Pages

- **Home (/)** — Landing page with hero, featured articles, recent articles grid, and Telegram CTA
- **Articles (/articles)** — Blog listing with Schema.org `ItemList`
- **Article (/articles/[slug])** — Dynamic article pages with `generateStaticParams`, `generateMetadata`, Open Graph, and Schema.org `Article` JSON-LD
- **Tools (/tools)** — Curated tools and platforms grouped by category
- **About (/about)** — Project description and Telegram link

## Tech Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS 3
- `lucide-react` (icons)
- SEO: `robots.txt`, `sitemap.ts`, Open Graph, Schema.org JSON-LD

## Getting Started

```bash
cd /root/projects/crypto-dealflow
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build

```bash
npm run build
```

## SEO Checklist

- [x] `sitemap.ts` with dynamic article routes
- [x] `robots.txt` allowing all crawlers
- [x] Open Graph metadata on every page
- [x] Schema.org `Article` JSON-LD on article pages
- [x] Schema.org `ItemList` JSON-LD on articles listing
- [x] Semantic HTML (`article`, `time`, `nav`, `header`, `main`, `footer`)

## Telegram

Channel: [https://t.me/crypto_azb](https://t.me/crypto_azb)
