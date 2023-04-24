import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* POKEMON FONT */
    @font-face {
        font-family: 'Pokemon_Solid';
        src: url('/fonts/Pokemon_Solid/pokemonsolid.ttf') format('truetype');
    }

    /* POPPINS FONT */
    @font-face {
        font-family: 'Poppins-Black';
        src: url('fonts/Poppins/Poppins-Black.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Poppins-Regular';
        src: url('/fonts/Poppins/Poppins-Regular.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Poppins-Thin';
        src: url('/fonts/Poppins/Poppins-Thin.ttf') format('truetype');
    }

    body {
        font-family: 'Poppins-Regular', sans-serif;
    }
`;