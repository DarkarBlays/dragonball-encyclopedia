import { StateCreator } from "zustand";
import { Items, ItemsFilter, Races, SearchFilter } from "../types";
import {
  getCharacters,
  getRaces,
  getRacesFilter,
} from "../services/CharacterService";

export type CharactersSliceType = {
  races: Races;
  characters: Items;
  charactersfilter: ItemsFilter;
  fetchraces: () => Promise<void>;
  searchCharacters: () => Promise<void>;
  searchRaces: (SearchFilter: SearchFilter) => Promise<void>;
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
  charactersfilter: {} as ItemsFilter,
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
  searchRaces: async (filter) => {
    const charactersfilter = await getRacesFilter(filter);
    set({
      charactersfilter,
    });
  },
});
