
import styled from 'styled-components';
import { device } from '../../../utils';
import { getGradient } from '../../../views/PokemonCard/styled';

export const Container = styled.div`
    width: 320px;
    height: auto;
    border-radius: 5px;
    background-color: white;
    outline: 3px solid #49B261;

    @media ${device.mobileL} {
        width: 400px;
    }
`;

export const ImageContainer = styled.div<{ bgColor?: any[] }>`
    width: 100%;
    padding: 5px;
    height: 200px;
    margin: 0 auto;
    background-image: ${({ bgColor }) => bgColor && getGradient(bgColor)};
`;

export const PokemonImage = styled.img`
    width: 100%;
    height: 100%;
`;

export const NamePokemon = styled.h3`
    color: #49B261;
    font-weight: 900;
    margin-bottom: 2px;
    text-transform: capitalize;
`;

export const StatsContainer = styled.div`
    gap: 10px;
    padding: 5px;
    display: grid;
    background-color: #C2E5CA;
    grid-template-columns: repeat(2, 1fr);
`;

export const StatsInfo = styled.h5`
    font-weight: bold;
`;

export const Stats = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const TextInfo = styled.h5`
    font-weight: 600;
    letter-spacing: 1px;
`;