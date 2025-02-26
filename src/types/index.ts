import {z} from 'zod'
import { ItemAPIResponseSchema, ItemsAPIResponseSchema, RacesAPIResponseSchema } from '../utils/characters-schema'

export type Races = z.infer<typeof RacesAPIResponseSchema>

export type Items = z.infer<typeof ItemsAPIResponseSchema>

export type Item = z.infer<typeof ItemAPIResponseSchema>