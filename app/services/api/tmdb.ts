import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_TMDB_URL, 
    headers: {
      'Content-Type': 'application/json',
    },
  })

export const getLastMovie = async(): Promise<any> => {
    try {
        console.log(process.env.NEXT_PUBLIC_API_KEY)
        const response = await apiClient.get<any>(`/3/movie/latest?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error("Error retrieving movie data", error)
        throw error
    }
}