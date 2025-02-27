import { z } from "zod";

export const RacesAPIResponseSchema = z.object({
  items: z.array(
    z.object({
      race: z.string(),
    })
  ),
});

export const ItemAPIResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  race: z.string(),
  image: z.string(),
  affiliation: z.string(),
});

export const ItemsAPIResponseSchema = z.object({
    items: z.array(ItemAPIResponseSchema)
})