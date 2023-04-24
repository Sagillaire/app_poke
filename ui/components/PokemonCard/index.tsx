'use client'
import { FC } from "react"
import { Modal } from "../Modal"
import { Loading } from "../Loading"
import { usePokemonModal } from "./Hooks"
import { PokeId, PokeType, PokeTypeContainer } from "../../../views/PokemonCard/styled"
import { useGetPokeByIdAction } from "../../../ServiceHooks/useGetPokeById/useGetPokeById"
import { Container, ImageContainer, NamePokemon, PokemonImage, Stats, StatsContainer, StatsInfo, TextInfo } from "./styled"

export const PokemonCardView: FC = () => {
    const { open, handleClosePokeModal } = usePokemonModal()
    const { pokemon, isLoading } = useGetPokeByIdAction()

    return (
        <Modal open={open} onClose={handleClosePokeModal}>
            {isLoading
                ? (
                    <Loading />
                )
                : (
                    <Container>
                        <ImageContainer bgColor={pokemon?.types}>
                            <PokeId>#{pokemon?.id}</PokeId>
                            <PokemonImage src={pokemon?.sprites?.other?.dream_world?.front_default} />
                        </ImageContainer>
                        <div style={{ padding: '10px 5px' }}>
                            <NamePokemon>{pokemon?.id}. {pokemon?.name}</NamePokemon>
                            <PokeTypeContainer>
                                <TextInfo>Type:</TextInfo>
                                {pokemon?.types?.map((type, i) => (
                                    <PokeType key={`types-${i}`} bgColor={type?.type?.name} >
                                        {type?.type?.name}
                                    </PokeType>
                                ))}
                            </PokeTypeContainer>
                        </div>
                        <StatsContainer>
                            <h4 style={{ gridColumn: '1/-1' }} >Base stats:</h4>
                            {pokemon?.stats?.map((stat, i) => (
                                <Stats key={i}>
                                    <StatsInfo>{stat?.stat?.name?.toUpperCase()}:</StatsInfo>
                                    <span style={{ fontSize: '12px' }}>{stat?.base_stat}</span>
                                </Stats>
                            ))}
                        </StatsContainer>
                    </Container>
                )
            }
        </Modal>
    )
}