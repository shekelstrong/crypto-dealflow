import { articles } from './lib/articles';

export default async function sitemap() {
  const base = 'https://crypto-dealflow.vercel.app';

  const staticPages = [
    '',
    '/articles',
    '/tools',
    '/about',
  ];

  const articlePages = articles.map((a) => `/articles/${a.slug}`);

  const all = [...staticPages, ...articlePages];

  return all.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.7,
  }));
}
