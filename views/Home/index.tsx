'use client'
import { FC, useState } from 'react'
import { PokemonCard } from '../PokemonCard'
import { getPokemonUrlId } from '../../utils'
import { useGetPokemons } from '../../ServiceHooks'
import { Loading, PokemonCardView, SelectionCards } from '../../ui'
import { CardContainer, HomeContainer, HomeTittle, LoadingContainer } from './styled'

export const HomeView: FC = () => {
    const [offset, setOffset] = useState<number>(0)
    const { pokes, isLoading } = useGetPokemons(offset)

    const handleScroll = (event: Event) => {
        const target = event.target as HTMLElement
        if (target && target.scrollTop + target.offsetHeight === target.scrollHeight) {
            setOffset(offset + 30)
        }
    }

    return (
        <HomeContainer>
            <HomeTittle>
                YOUR POKEDEX!
            </HomeTittle>
            <CardContainer onScroll={handleScroll as any}>
                {pokes?.results?.map((pokemon, i) => {
                    const id = getPokemonUrlId(pokemon.url)
                    return (
                        <SelectionCards key={i} url={pokemon?.name}>
                            <PokemonCard id={`${id}`} />
                        </SelectionCards>
                    )
                })}
            </CardContainer>
            {isLoading && (
                <LoadingContainer>
                    <Loading />
                </LoadingContainer>
            )}
            <PokemonCardView />
        </HomeContainer>
    )
}
