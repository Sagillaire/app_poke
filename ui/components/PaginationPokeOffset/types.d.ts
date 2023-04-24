export type TPaginationPokeOffset = {
    offset:             number;
    isLoading:          boolean;
    pokes?:             IPokemons;
    setOffset:          (offset: number) => void;
}

export interface IPokemons {
    count?:    number;
    next?:     null;
    previous?: null;
    results?:  Result[];
}

export interface Result {
    name?: string;
    url?:  string;
}