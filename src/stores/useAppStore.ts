import { create } from "zustand";
import { CharactersSliceType, createCharacterSlice } from "./characterSlice";
import { devtools } from "zustand/middleware";
import { createFavoritesSlice, FavoritesSliceType } from "./favoritesSlice";
import { createNotificationSlice, NotificationSliceType } from "./notificationsSlice";


export const useAppStore = create<CharactersSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createCharacterSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a)
})))