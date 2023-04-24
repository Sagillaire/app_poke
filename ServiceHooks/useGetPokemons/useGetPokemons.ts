import { useState } from 'react'
import { IPokemons } from './types'
import { useQuery } from 'react-query'
import { ApiMethods } from '../../Api/ApiMethods'

export const useGetPokemons = (offset: number, limit = 30) => {
    const [dataPokemons, setDataPokemons] = useState<IPokemons>({ results: [] });
    const { isLoading } = useQuery(
        ['useGetPokemons', offset],
        () => ApiMethods.getByParams<IPokemons>(`pokemon?limit=${limit}&offset=${offset}`),
        {
            onSuccess: (data) => {
                setDataPokemons((prevData) => ({ results: [...prevData.results, ...data.results] }));
            }
        }
    );

    return { pokes: dataPokemons, isLoading };
};