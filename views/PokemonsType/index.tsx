'use client'
import { FC, useState } from 'react'
import { PokemonCard } from '../PokemonCard'
import { getPokemonUrlId } from '../../utils'
import { useGetPokemonByType } from '../../ServiceHooks'
import { Loading, PokemonCardView, SelectionCards } from '../../ui'
import { CardContainer, HomeContainer, HomeTittle, LoadingContainer } from '../Home/styled'

export const PokemonsType: FC = () => {
    const [offset, setOffset] = useState<number>(0)
    const { pokeTypes, isLoading } = useGetPokemonByType()

    const handleScroll = (event: Event) => {
        const target = event.target as HTMLElement
        if (target && target.scrollTop + target.offsetHeight === target.scrollHeight) {
            setOffset(offset + 30)
        }
    }

    return (
        <HomeContainer>
            <HomeTittle>
                SELECT YOUR POKEMON!
            </HomeTittle>
            <CardContainer onScroll={handleScroll as any}>
                {pokeTypes?.pokemon?.map((pokemon, i) => {
                    const id = getPokemonUrlId(pokemon?.pokemon.url)
                    return (
                        <SelectionCards key={i} url={pokemon?.pokemon?.name}>
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
