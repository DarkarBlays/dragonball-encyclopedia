import { StateCreator } from "zustand"
import { Races } from "../types"
import { getRaces } from "../services/CharacterService"

export type CharactersSliceType = {
    races: Races
    fetchraces: () => Promise<void>
}

export const createCharacterSlice: StateCreator<CharactersSliceType> = (set) =>({
    races:{
        items: []
    },
    fetchraces: async () => {
        const races = await getRaces()
        set({
            races,
        })
    }
})