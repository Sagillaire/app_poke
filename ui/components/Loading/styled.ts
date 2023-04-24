import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const LoadingImg = styled.img`
    width: 120px;
    margin: 0 auto;
    display: block;
    animation: ${rotate} 1s linear infinite;
`;