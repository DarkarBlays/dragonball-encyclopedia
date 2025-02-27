import {z} from 'zod'
import { ItemAPIResponseSchema, ItemsAPIResponseSchema, RacesAPIResponseSchema, SearchFilterSchema } from '../utils/characters-schema'

export type Races = z.infer<typeof RacesAPIResponseSchema>

export type Items = z.infer<typeof ItemsAPIResponseSchema>

export type Item = z.infer<typeof ItemAPIResponseSchema>

export type SearchFilter = z.infer<typeof SearchFilterSchema>