import type { ErrorComponentProps } from '@tanstack/react-router';
import { createFileRoute, ErrorComponent } from '@tanstack/react-router';
import { PokemonDetails } from '../../../../components/pokemon-details';
import { fetchPokemon } from '../../../../pokemon';

export const Route = createFileRoute('/pokemon/gen_/$generation/$pokemonId')({
	loader: async ({ params: { pokemonId } }) => fetchPokemon(pokemonId),
	errorComponent: PostErrorComponent,
	notFoundComponent: () => {
		return <p>Never heard of that Pokémon</p>;
	},
	component: PokemonComponent,
});

export function PostErrorComponent({ error }: ErrorComponentProps) {
	return <ErrorComponent error={error} />;
}

function PokemonComponent() {
	const pokemon = Route.useLoaderData();

	return <PokemonDetails pokemon={pokemon} />;
}
