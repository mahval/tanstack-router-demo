import { notFound } from '@tanstack/react-router';
import axios from 'redaxios';
import type { Pokemon, PokemonListResponse, PokemonType } from './types/types';

export type PostType = {
	id: string;
	title: string;
	body: string;
};

export const fetchPokemonList = async () => {
	await new Promise((r) => setTimeout(r, 500));

	return axios
		.get<PokemonListResponse>(
			`https://pokeapi.co/api/v2/pokemon?offset=${0}&limit=${50}`,
		)
		.then((r) => r.data.results)
		.then((r) =>
			r.map((pokemon, index) => ({
				...pokemon,
				id: (index + 1).toString(),
			})),
		);
};

export const fetchPokemon = async (id: string): Promise<Pokemon> => {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	if (!response.ok) throw notFound();
	return response.json();
};

export const fetchPokemonType = async (
	typeId: string,
): Promise<PokemonType> => {
	const response = await fetch(`https://pokeapi.co/api/v2/type/${typeId}`);
	if (!response.ok) throw new Error('Type not found');
	return response.json();
};
