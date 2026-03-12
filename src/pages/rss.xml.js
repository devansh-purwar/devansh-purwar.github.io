import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const sorted = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Devansh Purwar — Blog',
    description: "Devansh Purwar's blog — technical articles on software engineering, system design, and cloud infrastructure.",
    site: context.site?.toString() ?? 'https://devansh-purwar.github.io',
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.description ?? undefined,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}/`,
      categories: post.data.tags ?? [],
      author: 'devanshpurwar3@gmail.com (Devansh Purwar)',
    })),
    customData: '<language>en-us</language>',
  });
}
