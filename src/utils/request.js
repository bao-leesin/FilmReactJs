import axios from "axios";

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 1000
})

export const get =  async(path) => {
    try {
        const response = await request.get(path)
        return response
    } catch (error) {
        
    }
}

export default request


