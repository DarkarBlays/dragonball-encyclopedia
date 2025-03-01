import { StateCreator } from "zustand";
import { Character, Items, ItemsFilter, Races, SearchFilter } from "../types";
import {
  getCharacterById,
  getCharacters,
  getRaces,
  getRacesFilter,
} from "../services/CharacterService";

export type CharactersSliceType = {
  races: Races;
  characters: Items;
  charactersfilter: ItemsFilter;
  selectedCharacter: Character;
  modal: boolean;
  fetchraces: () => Promise<void>;
  searchCharacters: () => Promise<void>;
  searchRaces: (SearchFilter: SearchFilter) => Promise<void>;
  selectCharacter: (id: Character["id"]) => Promise<void>;
  closeModal: () => void;
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
  selectedCharacter: {} as Character,
  modal: false,
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
  selectCharacter: async (id) => {
    const selectedCharacter = await getCharacterById(id);
    set({
      selectedCharacter,
      modal: true,
    });
  },
  closeModal: () =>{
    set({
      modal:false,
      selectedCharacter: {} as Character
    })
  }
});
