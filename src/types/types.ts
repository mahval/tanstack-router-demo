export interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: {
        front_default: string;
        front_shiny: string;
    };
    types: {
        type: {
            name: string;
            url: string;
        };
    }[];
    stats: {
        base_stat: number;
        stat: {
            name: string;
        };
    }[];
    moves: {
        move: {
            name: string;
        };
    }[];
}

export interface PokemonListItem {
    name: string;
    url: string;
}

export interface PokemonListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonListItem[];
}

export interface PokemonListByTypeResponse {
    pokemon: { pokemon: PokemonListItem; slot: number }[]
}

export interface PokemonListByGenerationResponse {
    pokemon_species: PokemonListItem[]
}

export interface PokemonListSearch {
    page?: number;
    search?: string;
}

export type Generation = 1 | 2 | 3 | 4 | 5;