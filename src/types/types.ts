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
    id: string;
    name: string;
    url: string;
}

export interface PokemonListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonListItem[];
}

export interface PokemonType {
    id: number;
    name: string;
    pokemon: Array<{
        pokemon: {
            name: string;
            url: string;
        };
    }>;
}

// Search params types
export interface PokemonListSearch {
    page?: number;
    search?: string;
}

interface PokemonDetailSearch {
    tab?: 'stats' | 'moves' | 'info';
}