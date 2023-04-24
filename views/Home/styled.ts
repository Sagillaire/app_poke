import styled from 'styled-components';
import { device } from '../../utils';

export const HomeContainer = styled.div`
    gap: 40px;
    height: 100%;
    display: flex;
    overflow: auto;
    position: relative;
    align-items: center;
    background: #9c88ff;
    flex-direction: column;
`;

export const CardContainer = styled.div`
    gap: 40px;
    width: 100%;
    padding: 20px;
    height: 100vh;
    display: grid;
    overflow: auto;
    padding-top: 10px;
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

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: #EC8526;
    }
`;

export const HomeTittle = styled.h1`
    margin: 0;
    color: brown;
    text-align: center;
    letter-spacing: 8px;
    font-family: 'Pokemon_Solid', sans-serif;
`;

export const LoadingContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    background-color: rgba(0 ,0 ,0 , .5);
`;