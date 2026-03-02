import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const sorted = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Devansh Purwar',
    description: 'Software Developer. Blog and notes.',
    site: context.site?.toString() ?? 'https://devansh-purwar.github.io',
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.description ?? undefined,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
