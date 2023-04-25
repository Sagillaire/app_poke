import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router';
import { ApiMethods } from '../../Api/ApiMethods'
import { IPokeType } from './types';

export const useGetPokemonByType = () => {
    const router = useRouter()
    const typeId = router?.query?.id as string

    useEffect(() => {
        if (!typeId) {
            router.push('/')
        }
    }, [typeId])

    const { data, isLoading } = useQuery('useGetPokemonByType',
        () => ApiMethods.getByParams<IPokeType>(`type/${typeId}`)
    );

    return { pokeTypes: data, isLoading };
};