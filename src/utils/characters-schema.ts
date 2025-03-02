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
  items: z.array(ItemAPIResponseSchema),
});

export const ItemsFilterAPIResponseSchema = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    race: z.string(),
    image: z.string(),
    affiliation: z.string(),
  })
);

export const SearchFilterSchema = z.object({
  race: z.string(),
});

export const CharacterAPIResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  ki: z.string(),
  maxKi: z.string(),
  race: z.string(),
  gender: z.string(),
  description: z.string(),
  image: z.string(),
  affiliation: z.string(),
  originPlanet: z.nullable(
    z.object({
      id: z.number(),
      name: z.string(),
      description: z.string(),
      image: z.string(),
    })
  ),
  transformations: z.nullable(
    z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        image: z.string(),
        ki: z.string(),
      })
    )
  ),
});

export const TransfortmationsAPIResponseSchema = z.nullable(
  z.object({
    id: z.number(),
    name: z.string(),
    image: z.string(),
    ki: z.string(),
  })
);
