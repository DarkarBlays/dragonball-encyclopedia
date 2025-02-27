import { StateCreator } from "zustand";
import { Items, Races } from "../types";
import { getCharacters, getRaces } from "../services/CharacterService";

export type CharactersSliceType = {
  races: Races;
  characters: Items;
  fetchraces: () => Promise<void>;
  searchCharacters: () => Promise<void>;
};

export const createCharacterSlice: StateCreator<CharactersSliceType> = (
  set
) => ({
  races: {
    items: [],
  },
  characters: {
    items: [],
  },
  fetchraces: async () => {
    const races = await getRaces();
    set({
      races,
    });
  },
  searchCharacters: async () => {
    const characters = await getCharacters();
    set({ characters });
  },
});
