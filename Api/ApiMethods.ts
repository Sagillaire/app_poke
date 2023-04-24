import './interceptors'
import axios from "axios"


export class ApiMethods {
    static POKEMON_API = process.env.POKEMON_API

    static async get<T>(endpoint: string): Promise<T> {
        try {
            const response = await axios.get<T>(`${ApiMethods.POKEMON_API}/${endpoint}`)
            return response.data
        } catch (error) {
            return Promise.reject(error);
        }
    }

    static async getById<T>(endpoint: string, id: number | string): Promise<T> {
        try {
            const response = await axios.get<T>(`${ApiMethods.POKEMON_API}/${endpoint}/${id}`)
            return response.data
        } catch (error) {
            return Promise.reject(error)
        }
    }

    static async getByParams<T>(endpoint: string, params?: any): Promise<T> {
        try {
            const response = await axios.get<T>(`${ApiMethods.POKEMON_API}/${endpoint}`, {
                params
            })
            return response.data
        } catch (error) {
            return Promise.reject(error);
        }
    }
}