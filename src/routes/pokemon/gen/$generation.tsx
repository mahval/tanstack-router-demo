import { createFileRoute, Outlet } from '@tanstack/react-router';
import { PokemonList } from '../../../components/pokemon-list';
import { fetchPokemonListByGeneration } from '../../../pokemon';

export const Route = createFileRoute('/pokemon/gen/$generation')({
	loader: async ({ params: { generation } }) =>
		await fetchPokemonListByGeneration(generation),
	component: RouteComponent,
});

function RouteComponent() {
	const pokemonList = Route.useLoaderData();
	// const { generation } = useParams({ from: '/pokemon/{-$generation}' });
	const { generation } = Route.useParams();
	console.log('generation', generation);

	return (
		<div className="p-2 flex gap-2 max-h-screen">
			{generation && <h2>{`Gen ${generation}`}</h2>}

			<PokemonList pokemonList={pokemonList} />
			<hr />
			<Outlet />
		</div>
	)
}
