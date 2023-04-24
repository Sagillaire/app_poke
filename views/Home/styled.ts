import { device } from '../../utils';
import styled from 'styled-components';

export const HomeContainer = styled.div`
    gap: 40px;
    height: 100%;
    display: flex;
    padding: 20px;
    overflow: auto;
    position: relative;
    align-items: center;
    background: #9c88ff;
    flex-direction: column;
`;

export const CardContainer = styled.div`
    gap: 40px;
    height: auto;
    display: grid;
    user-select: none;
    grid-template-columns: 1fr;

    @media ${device.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${device.laptop} {
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${device.laptopL} {
        grid-template-columns: repeat(4, 1fr);
    }
`;

export const HomeTittle = styled.h1`
    margin: 0;
    color: brown;
    text-align: center;
    letter-spacing: 8px;
    font-family: 'Pokemon_Solid', sans-serif;
`;