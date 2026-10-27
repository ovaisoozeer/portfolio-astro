import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    client: z.string().optional(),
    // Position on the page; lower numbers come first.
    order: z.number(),
    tags: z.array(z.string()).default([]),
    link: z
      .object({
        label: z.string(),
        href: z.url(),
      })
      .optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
