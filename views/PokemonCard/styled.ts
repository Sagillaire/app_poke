import styled from 'styled-components';
import { PokemonType, getPokemonTypeColor, getPokemonTypeColorCard } from '../../utils';

export const getGradient = (colors: any) => {
    const gradientColors = colors.map(({ type: { name } }: any) =>
        getPokemonTypeColorCard(name)
    );
    if (gradientColors.length === 1) return `linear-gradient(to bottom, ${gradientColors[0]}, ${gradientColors[0]})`
    return `linear-gradient(to bottom, ${gradientColors.join(', ')})`;
};

type TPokemonCardContainer = {
    bgColor?: any[];
}
export const PokemonCardContainer = styled.div<TPokemonCardContainer>`
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    position: relative;
    padding-bottom: 40px;
    flex-direction: column;
    background-image: ${({ bgColor }) => bgColor && getGradient(bgColor)};
`;

export const TextInfo = styled.h5`
    color: white;
    font-weight: 600;
    letter-spacing: 1px;
`;

export const PokeId = styled.span`
    top: 10px;
    right: 20px;
    opacity: .3;
    color: white;
    font-size: 2em;
    position: absolute;
    font-family: 'Poppins-Black', sans-serif;
`;

export const PokeName = styled.h2`
    margin-bottom: 15px;
    letter-spacing: 4px;
    color: white;
    text-transform: capitalize;
    font-family: 'Pokemon_Solid', sans-serif;
`;

export const PokeTypeContainer = styled.div`
    gap: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

type TPokeType = {
    bgColor?: string;
}
export const PokeType = styled.span<TPokeType>`
    color: white;
    font-size: 12px;
    padding: 2px 5px;
    border-radius: 5px;
    outline: 1px solid silver;
    color: white;
    text-transform: capitalize;
    background-color: ${({ bgColor }) =>
        getPokemonTypeColor(bgColor as PokemonType)};
`;

export const PokeImgContainer = styled.div`
    right: 5px;
    width: 130px;
    bottom: 8px;
    height: 135px;
    position: absolute;
`;

export const PokeImg = styled.img`
    right: 5px;
    width: 100%;
    height: 100%;
    bottom: 10px;
`;