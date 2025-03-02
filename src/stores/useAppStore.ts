import { create } from "zustand";
import { CharactersSliceType, createCharacterSlice } from "./characterSlice";
import { devtools } from "zustand/middleware";
import { createFavoritesSlice, FavoritesSliceType } from "./favoritesSlice";


export const useAppStore = create<CharactersSliceType & FavoritesSliceType>()(devtools((...a) => ({
    ...createCharacterSlice(...a),
    ...createFavoritesSlice(...a)
})))