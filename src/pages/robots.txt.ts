import type { APIRoute } from 'astro';

const site = 'https://devansh-purwar.github.io';

const robots = `
User-agent: *
Allow: /

Sitemap: ${site}/sitemap.xml
`.trim();

export const GET: APIRoute = () =>
  new Response(robots, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
