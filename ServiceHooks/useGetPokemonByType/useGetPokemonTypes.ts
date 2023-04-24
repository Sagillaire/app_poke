import { useQuery } from 'react-query'
import { ApiMethods } from '../../Api/ApiMethods'

export const useGetPokemonTypes = () => {
    const { data, isLoading } = useQuery('useGetPokemonByType',
        () => ApiMethods.getByParams<any>(`type`)
    );

    return { pokeTypes: data, isLoading };
};