import { StateCreator } from "zustand";
import { Character } from "../types";
import { CharactersSliceType, createCharacterSlice } from "./characterSlice";

export type FavoritesSliceType = {
  favorites: Character[];
  handleClickFavorite: (character: Character) => void;
  favoriteExists: (id: Character["id"]) => boolean;
  loadFromStorage: () => void;
};

export const createFavoritesSlice: StateCreator<
  FavoritesSliceType & CharactersSliceType,
  [],
  [],
  FavoritesSliceType
> = (set, get, api) => ({
  favorites: [],
  handleClickFavorite: (character) => {
    if (get().favoriteExists(character.id)) {
      set((state) => ({
        favorites: state.favorites.filter(
          (favorite) => favorite.id !== character.id
        ),
      }));
    }

    createCharacterSlice(set, get, api).closeModal();
    
    localStorage.setItem("favorites", JSON.stringify(get().favorites));
  },
  favoriteExists: (id) => {
    return get().favorites.some((favorite) => favorite.id === id);
  },
  loadFromStorage: () => {
    const storedFavorites = localStorage.getItem("favorites");

    if (storedFavorites) {
      set({
        favorites: JSON.parse(storedFavorites),
      });
    }
  },
});
