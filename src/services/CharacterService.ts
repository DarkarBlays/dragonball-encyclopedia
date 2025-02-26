import axios from "axios"
import { RacesAPIResponseSchema } from "../utils/characters-schema"


export async function getRaces() {
    const url = "https://dragonball-api.com/api/characters?limit=58"

    const {data} = await axios(url)

    const result = RacesAPIResponseSchema.safeParse(data)

    if(result.success){
        return result.data
    }
}