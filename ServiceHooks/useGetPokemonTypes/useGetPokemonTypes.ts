import { useState, useEffect } from 'react';
import { useQuery } from 'react-query'
import { ApiMethods } from '../../Api/ApiMethods'

export const useGetPokemonTypes = () => {
    const [counts, setCounts] = useState<any[]>([]);
    const { data, isLoading } = useQuery('useGetPokemonTypes', () => ApiMethods.getByParams<any>(`type`));

    useEffect(() => {
        const getPokemonCountByType = async () => {
            if (data) {
                const promises = await data?.results?.map(async (type: { url: RequestInfo | URL; name: any; }) => {
                    const res = await fetch(type.url);
                    const json = await res.json();
                    return { name: type.name, count: json.pokemon.length };
                });
                const pokemonCounts = await Promise.all(promises);
                setCounts(pokemonCounts);
            }
        };
        getPokemonCountByType();
    }, [data]);

    return { /* pokeTypes: data, */ isLoading, counts };
};
