import styled from 'styled-components';

export const HeaderStyled = styled.header`
    gap: 10px;
    height: 100%;
    display: flex;
    -moz-display: flex;
    -webkit-display: flex;
    padding: 5px 10px;
    grid-area: header;
    align-items: center;
    -moz-align-items: center;
    -webkit-align-items: center;
    background-color: #ffc048;
    justify-content: space-between;
    -moz-justify-content: space-between;
    -webkit-justify-content: space-between;
`;

export const HeaderImg = styled.img`
    width: 50px;
    height: 100%;
    cursor: pointer;
    object-fit: cover;
    border-radius: 50%;
    transition: transform 1s;
    
    :hover {
        transform: rotate(360deg);
        animation: spin 1s linear 1;
    }
`;