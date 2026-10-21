import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const systems = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/systems' }),
  schema: z.object({
    callsign: z.string(),
    kind: z.string(),
    tagline: z.string(),
    summary: z.string(),
    status: z.enum(['live', 'design', 'private', 'classified']),
    order: z.number(),
    era: z.string(),
    stack: z.array(z.string()),
    telemetry: z.array(z.object({ k: z.string(), v: z.string() })),
    repo: z.string().url().optional(),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { systems, notes };
