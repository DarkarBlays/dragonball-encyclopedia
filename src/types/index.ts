import {z} from 'zod'
import { CharacterAPIResponseSchema, ItemAPIResponseSchema, ItemsAPIResponseSchema, ItemsFilterAPIResponseSchema, RacesAPIResponseSchema, SearchFilterSchema } from '../utils/characters-schema'

export type Races = z.infer<typeof RacesAPIResponseSchema>

export type Items = z.infer<typeof ItemsAPIResponseSchema>

export type ItemsFilter = z.infer<typeof ItemsFilterAPIResponseSchema>

export type Item = z.infer<typeof ItemAPIResponseSchema>

export type SearchFilter = z.infer<typeof SearchFilterSchema>

export type Character = z.infer<typeof CharacterAPIResponseSchema>