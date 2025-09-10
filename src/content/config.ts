import { z, defineCollection } from "astro:content";

const notas = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string().optional(),
    pubDate: z.coerce.date(),
    tag: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notas };
