import axios from "axios";
import { ItemsAPIResponseSchema, RacesAPIResponseSchema } from "../utils/characters-schema";

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