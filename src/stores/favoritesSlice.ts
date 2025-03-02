import { StateCreator } from "zustand";
import { Character } from "../types";
import { CharactersSliceType, createCharacterSlice } from "./characterSlice";
import {
  createNotificationSlice,
  NotificationSliceType,
} from "./notificationsSlice";

export type FavoritesSliceType = {
  favorites: Character[];
  handleClickFavorite: (character: Character) => void;
  favoriteExists: (id: Character["id"]) => boolean;
  loadFromStorage: () => void;
};

export const createFavoritesSlice: StateCreator<
  FavoritesSliceType & CharactersSliceType & NotificationSliceType,
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
      createNotificationSlice(set, get, api).showNotification({
        text: "Se elimino de favoritos",
        error: false,
      });
    } else {
      set((state) => ({
        favorites: [...state.favorites, character],
      }));
      createNotificationSlice(set, get, api).showNotification({
        text: "Se agrego a favoritos",
        error: false,
      });
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
