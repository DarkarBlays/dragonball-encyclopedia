import axios from "axios";
import {
  CharacterAPIResponseSchema,
  ItemsAPIResponseSchema,
  ItemsFilterAPIResponseSchema,
  RacesAPIResponseSchema,
} from "../utils/characters-schema";
import { Character, SearchFilter } from "../types";

export async function getRaces() {
  const url = `${import.meta.env.VITE_BD_API}/characters?limit=58`;

  const { data } = await axios(url);

  const result = RacesAPIResponseSchema.safeParse(data);

  if (result.success) {
    return result.data;
  }
}

export async function getCharacters() {
  const url = `${import.meta.env.VITE_BD_API}/characters?limit=58`;

  const { data } = await axios(url);

  const result = ItemsAPIResponseSchema.safeParse(data);

  if (result.success) {
    return result.data;
  }
}

export async function getRacesFilter(filter: SearchFilter) {
  try {
    const url = `${import.meta.env.VITE_BD_API}/characters?race=${filter.race}`;

    const { data } = await axios(url);

    const result = ItemsFilterAPIResponseSchema.safeParse(data);

    if (result.success) {
      return result.data;
    } else {
      console.error("Error al validar la respuesta del API", result.error);
      return [];
    }
  } catch (error) {
    console.error("Error al obtener personajes filtrados:", error);
    return [];
  }
}

export async function getCharacterById(id: Character["id"]) {
  try {
    const url = `${import.meta.env.VITE_BD_API}/characters/${id}`;

    const { data } = await axios(url);

    const result = CharacterAPIResponseSchema.safeParse(data);


    if (result.success) {
      return result.data;
    } else {
      console.error("Error al validar la respuesta del API", result.error);
      const validatedData = CharacterAPIResponseSchema.parse(data);
      return validatedData;
    }
  } catch (error) {
    console.error("Error al obtener personajes filtrados:", error);
  }
}
