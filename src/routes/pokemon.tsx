import { createFileRoute, Outlet } from '@tanstack/react-router';
import { z } from 'zod';
import { PokemonList } from '../components/pokemon-list';
import { fetchPokemonList, fetchPokemonListByGeneration } from '../pokemon';
import type { Generation } from '../types/types';

interface PokemonListSearch {
	gen: Generation | null;
}

export const Route = createFileRoute('/pokemon')({
	validateSearch: (search): PokemonListSearch =>
		search as {
			gen: Generation;
		},
	loaderDeps: ({ search: { gen } }) => ({ gen }),
	loader: ({ deps: { gen } }) => {
		if (gen) {
			return fetchPokemonListByGeneration(gen);
		}

		return fetchPokemonList();
	},
	component: RouteComponent,
});

function RouteComponent() {
	const pokemonList = Route.useLoaderData();
	const { gen } = Route.useSearch();
	// const {} = Route.useSearch();

	return (
		<div>
			<h2 className="">{gen && `Gen ${gen}`}</h2>
			<div className="p-2 flex gap-2 max-h-screen">
				<PokemonList pokemonList={pokemonList} />
				<hr />
				<Outlet />
			</div>
		</div>
	);
}
