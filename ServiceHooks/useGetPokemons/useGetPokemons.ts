import { useState } from 'react'
import { IPokemons } from './types'
import { useQuery } from 'react-query'
import { ApiMethods } from '../../Api/ApiMethods'

export const useGetPokemons = (offset = 0, limit = 20) => {
    const [dataPokemons, setDataPokemons] = useState<IPokemons>()
    const { isLoading } = useQuery(['useGetPokemons', offset, limit],
        () => ApiMethods.getByParams<IPokemons>(`pokemon`, { offset, limit }), {
        onSuccess: (data) => {
            setDataPokemons(data)
        }
    })

    return { pokes: dataPokemons, isLoading }
}