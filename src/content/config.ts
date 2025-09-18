import { z, defineCollection } from "astro:content";

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  img: z.string().optional(),
  imgWidth: z.number().optional(),
  imgHeight: z.number().optional(),
  pubDate: z.coerce.date(),
  tag: z.string(),
  draft: z.boolean().default(false),
});

const notas = defineCollection({
  type: "content",
  schema: baseSchema,
});

const steam = defineCollection({
  type: "content",
  schema: baseSchema,
});

export const collections = { notas, steam };
