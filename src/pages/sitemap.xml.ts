import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const site = 'https://devansh-purwar.github.io';

const staticPaths = [
  '',
  '/about',
  '/now',
  '/blog',
  '/projects',
  '/slash',
];

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const blogUrls = posts.map((p) => `/blog/${p.slug}/`);
  const urls = [...staticPaths, ...blogUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${site}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === '' ? '1.0' : path.startsWith('/blog/') ? '0.8' : '0.9'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
