export type PokemonType =
    | 'normal'
    | 'fire'
    | 'water'
    | 'electric'
    | 'grass'
    | 'ice'
    | 'fighting'
    | 'poison'
    | 'ground'
    | 'flying'
    | 'psychic'
    | 'bug'
    | 'rock'
    | 'ghost'
    | 'dragon'
    | 'dark'
    | 'steel'
    | 'fairy'
    | 'shadow'
    | 'unknown';

export const getPokemonTypeColorCard = (type: PokemonType) => {
    const getPokemonTypeColor: Record<PokemonType, string> = {
        normal: '#C9C9A9',
        fire: '#F5AC78',
        water: '#9DB7F5',
        electric: '#FAE078',
        grass: '#A7DB8D',
        ice: '#BCE6E6',
        fighting: '#D67873',
        poison: '#C183C1',
        ground: '#EBD69D',
        flying: '#C6B7F5',
        psychic: '#FA92B2',
        bug: '#C6D16E',
        rock: '#D1C17D',
        ghost: '#A292BC',
        dragon: '#A27DFA',
        dark: '#A29288',
        steel: '#D1D1E0',
        fairy: '#F4BDC9',
        shadow: '#333333',
        unknown: '#D3D3D3'
    }

    return getPokemonTypeColor[type]
}

export const getPokemonTypeColor = (type: PokemonType) => {
    const getPokemonTypeColor: Record<PokemonType, string> = {
        normal: '#A8A878',
        fire: '#F08030',
        water: '#6890F0',
        electric: '#F8D030',
        grass: '#78C850',
        ice: '#98D8D8',
        fighting: '#C03028',
        poison: '#A040A0',
        ground: '#E0C068',
        flying: '#A890F0',
        psychic: '#F85888',
        bug: '#A8B820',
        rock: '#B8A038',
        ghost: '#705898',
        dragon: '#7038F8',
        dark: '#705848',
        steel: '#B8B8D0',
        fairy: '#EE99AC',
        shadow: '#333333',
        unknown: '#D3D3D3'
    }

    return getPokemonTypeColor[type]
}