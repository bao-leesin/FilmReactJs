import { get } from "../utils/request";

export const showTopFilm = async() => {
    const res= await get("/film/show/top")

    return res.data
}

export const showGenres = async () => {
    const res = await get("/genre/show")

    return res.data
}



