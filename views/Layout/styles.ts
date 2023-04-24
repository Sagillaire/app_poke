import styled from 'styled-components';

export const Main = styled.main`
    display: grid;
    height: 100vh;
    background-color: #000;
    grid-template-areas: 'header' 'content';
    grid-template-rows: 60px calc(100vh - 60px);
`;

export const ContentLayout = styled.section`
    grid-area: content;
`;