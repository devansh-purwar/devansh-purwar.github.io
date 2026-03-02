# Devansh Purwar — Portfolio & Blog

Minimal Astro site: portfolio, blog, and a **/now** page. Inspired by text-first personal sites.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
```

Output is in `dist/`.

## Deploy to GitHub Pages

1. **Push the repo** (including `.github/workflows/deploy.yml`) to GitHub. The workflow runs on every push to `main`. If your default branch is `master`, edit the workflow and change `branches: [main]` to `branches: [master]`.

2. **Turn on GitHub Pages**: In the repo go to **Settings → Pages**. Under **Build and deployment**, set **Source** to **GitHub Actions**.

3. After the workflow runs, the site will be live at **https://devansh-purwar.github.io** (for a repo named `devansh-purwar.github.io`).

## Add your CV

Put `devansh_cv.pdf` in the `public/` folder so the “Download CV” link works.

## Blog posts

Add `.md` or `.mdx` files in `src/content/blog/` with frontmatter:

```yaml
---
title: Your post title
description: Optional short description
pubDate: 2025-03-02
draft: false
---
```

## Structure

- **/** — Home: short intro, link to /now and /about, recent posts, projects teaser
- **/about** — Work history, education, skills, achievements, contact
- **/now** — What you’re doing now (update when you like)
- **/blog** — All posts
- **/projects** — Project list with descriptions and GitHub links

Content for the portfolio is in `src/data/profile.ts` (sourced from your about me file).
