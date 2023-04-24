import { useEffect } from 'react'
import { IPokeByID } from './types'
import { useSearchParams } from 'next/navigation'
import { ApiMethods } from '../../Api/ApiMethods'
import { useMutation, useQuery } from 'react-query'

export const useGetPokeById = (id: string) => {
    const { data, isLoading } = useQuery([`PokemonsById-${id}`, id],
        () => ApiMethods.getById<IPokeByID>(`pokemon`, id))

    return { pokemon: data, isLoading }
}

export const useGetPokeByIdAction = () => {
    const searchParams = useSearchParams()
    const pokeName = searchParams.get('name')
    const { mutateAsync: searchPoke, isLoading, data } = useMutation(
        (id: any) => ApiMethods.getById<IPokeByID>(`pokemon`, id))

    useEffect(() => {
        if (pokeName) {
            searchPoke(pokeName)
        }
    }, [pokeName])

    return { isLoading, pokemon: data }
}