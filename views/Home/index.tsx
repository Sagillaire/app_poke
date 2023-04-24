'use client'
import { FC, useState } from 'react'
import { PokemonCard } from '../PokemonCard'
import { getPokemonUrlId } from '../../utils'
import { useGetPokemons } from '../../ServiceHooks'
import { CardContainer, HomeContainer, HomeTittle } from './styled'
import { Loading, PaginationPokeOffset, PokemonCardView, SelectionCards } from '../../ui'

export const HomeView: FC = () => {
    const [offset, setOffset] = useState<number>(0)
    const { pokes, isLoading } = useGetPokemons(offset)

    return (
        <HomeContainer>
            <HomeTittle>
                SELECT YOUR FAVORITE POKEMON!
            </HomeTittle>
            <PaginationPokeOffset
                pokes={pokes}
                offset={offset}
                setOffset={setOffset}
                isLoading={isLoading}
            />
            {isLoading
                ? <Loading />
                : <CardContainer>
                    {pokes?.results?.map((pokemon, i) => {
                        const id = getPokemonUrlId(pokemon.url)
                        return (
                            <SelectionCards key={i} url={pokemon?.name}>
                                <PokemonCard id={`${id}`} />
                            </SelectionCards>
                        )
                    })}
                </CardContainer>
            }
            {!isLoading && (<PaginationPokeOffset
                pokes={pokes}
                offset={offset}
                setOffset={setOffset}
                isLoading={isLoading}
            />)}

            <PokemonCardView />
        </HomeContainer>
    )
}
