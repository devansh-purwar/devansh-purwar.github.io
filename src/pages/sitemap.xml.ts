import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const site = 'https://devansh-purwar.github.io';

const today = new Date().toISOString().slice(0, 10);

const staticPages = [
  { path: '', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.9' },
  { path: '/now', changefreq: 'weekly', priority: '0.8' },
  { path: '/blog', changefreq: 'weekly', priority: '0.9' },
  { path: '/projects', changefreq: 'monthly', priority: '0.8' },
  { path: '/slash', changefreq: 'monthly', priority: '0.5' },
];

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  const staticEntries = staticPages.map(
    (p) => `  <url>
    <loc>${site}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  );

  const blogEntries = posts.map((p) => {
    const lastmod = (p.data.updatedDate ?? p.data.pubDate).toISOString().slice(0, 10);
    return `  <url>
    <loc>${site}/blog/${p.slug}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticEntries, ...blogEntries].join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
