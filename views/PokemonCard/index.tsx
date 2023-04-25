import { FC } from 'react'
import { PokeId, PokeImg, PokeImgContainer, PokemonCardContainer, PokeName, PokeType, PokeTypeContainer, TextInfo } from './styled'
import { useGetPokeById } from '../../ServiceHooks'
import { Loading } from '../../ui'

export const PokemonCard: FC<{ id: string }> = ({ id }) => {
    const { pokemon, isLoading } = useGetPokeById(id)

    return (
        isLoading
            ? <Loading />
            : <PokemonCardContainer bgColor={pokemon?.types} >
                {/* POKEMON NUMBER */}
                <PokeId>#{pokemon?.id}</PokeId>

                {/* NAME */}
                <PokeName>{pokemon?.name}</PokeName>

                {/* TYPE */}
                <PokeTypeContainer>
                    <TextInfo>Type:</TextInfo>
                    {pokemon?.types?.map((type, i) => (
                        <PokeType key={`types-${i}`} bgColor={type?.type?.name} >
                            {type?.type?.name}
                        </PokeType>
                    ))}
                </PokeTypeContainer>

                {/* POKEMON IMAGE */}
                <PokeImgContainer>
                    <PokeImg
                        hasImg={Boolean(pokemon?.sprites?.other?.dream_world?.front_default) || Boolean(pokemon?.sprites?.other?.home?.front_default)}
                        src={`${pokemon?.sprites?.other?.dream_world?.front_default || pokemon?.sprites?.other?.home?.front_default || '/images/pokeball.png'}`}
                    />
                </PokeImgContainer>
            </PokemonCardContainer>
    )
}
