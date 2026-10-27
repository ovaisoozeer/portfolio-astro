# portfolio-astro

A bit of fun recreating my portfolio site in Astro.

## Getting started

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built site
```

## Making it yours

- **Personal details, skills and experience**: `src/data/site.ts`
- **Projects**: add a Markdown file to `src/content/projects/`. The frontmatter is validated by `src/content.config.ts`:

  ```md
  ---
  title: My Project
  summary: One-line description shown on cards.
  role: Tech Lead
  client: Some Company                   # optional
  order: 1                               # lower numbers are listed first
  tags: [Dotnet Core, Azure]             # used by the filter on /projects
  link:                                  # optional
    label: www.example.com
    href: https://www.example.com
  featured: true                         # show on the home page (first 3 by order)
  ---
  ```

  Shorter engagements without a write-up go in `otherClients` in `src/data/site.ts`.

- **Colours and fonts**: CSS variables at the top of `src/styles/global.css` (light and dark themes).
- **Deployed URL**: set `site` in `astro.config.mjs`.

## Structure

```
src/
  components/   Header, Footer, ProjectCard
  content/      Project write-ups (Markdown)
  data/         Site content
  layouts/      BaseLayout (meta tags, theme handling)
  pages/        Home, /projects, /projects/[id], 404
  styles/       Global styles
```
