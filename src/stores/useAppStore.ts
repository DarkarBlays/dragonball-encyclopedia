import { create } from "zustand";
import { CharactersSliceType, createCharacterSlice } from "./characterSlice";
import { devtools } from "zustand/middleware";


export const useAppStore = create<CharactersSliceType>()(devtools((...a) => ({
    ...createCharacterSlice(...a)
})))