import { notFound } from '@tanstack/react-router';
import axios from 'redaxios';
import type {
	Generation,
	Pokemon,
	PokemonListByGenerationResponse,
	PokemonListByTypeResponse,
	PokemonListItem,
	PokemonListResponse,
} from './types/types';

export type PostType = {
	id: string;
	title: string;
	body: string;
};

export const fetchPokemonList = async () => {
	await new Promise<PokemonListItem[]>((r) => setTimeout(r, 500));

	return axios
		.get<PokemonListResponse>(
			`https://pokeapi.co/api/v2/pokemon?offset=${0}&limit=${50}`,
		)
		.then((r) => r.data.results)
		.then((r) =>
			r.map((pokemon) => ({
				...pokemon,
			})),
		);
};

export const fetchPokemon = async (id: string): Promise<Pokemon> => {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	if (!response.ok) throw notFound();
	return response.json();
};

export const fetchPokemonListByType = async (type: string) => {
	await new Promise<PokemonListItem[]>((r) => setTimeout(r, 500));

	return axios
		.get<PokemonListByTypeResponse>(
			`https://pokeapi.co/api/v2/type/${type}?offset=${0}&limit=${50}`,
		)
		.then((r) => r.data.pokemon)
		.then((pokemonList) =>
			pokemonList.map((item) => ({
				name: item.pokemon.name,
				url: item.pokemon.url,
			})),
		);
};

export const fetchPokemonListByGeneration = async (generation: Generation) => {
	await new Promise<PokemonListItem[]>((r) => setTimeout(r, 500));

	return axios
		.get<PokemonListByGenerationResponse>(
			`https://pokeapi.co/api/v2/generation/${generation}?offset=${0}&limit=${50}`,
		)
		.then((r) => r.data.pokemon_species);
	// .then((pokemonList) =>
	// 	pokemonList.map((item) => ({
	// 		name: item.pokemon.name,
	// 		url: item.pokemon.url,
	// 	})),
	// );
};
