import axios from "axios";
import { ItemsAPIResponseSchema, RacesAPIResponseSchema } from "../utils/characters-schema";
import { SearchFilter } from "../types";

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

export async function getRacesFilter(filter:SearchFilter) {

  try {
    const url = `${import.meta.env.VITE_BD_API}/characters?race=${filter.race}`;
    
    const { data } = await axios(url);

    const result = ItemsAPIResponseSchema.safeParse(data);

    if (result.success) {
      return result.data;
    } else {
      console.error("Error al validar la respuesta del API", result.error);
      return { items: [] }; // Retorna un array vacío en caso de error
    }
  } catch (error) {
    console.error("Error al obtener personajes filtrados:", error);
    return { items: [] }; // Retorna un array vacío en caso de error
  }
  
}