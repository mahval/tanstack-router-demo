import { createFileRoute, Link, Outlet } from '@tanstack/react-router';
import { fetchPokemonList } from '../pokemon';

export const Route = createFileRoute('/pokemon')({
	loader: fetchPokemonList,
	component: RouteComponent,
});

function RouteComponent() {
	const pokemonList = Route.useLoaderData();

	return (
		<div className="p-2 flex gap-2 max-h-screen">
			<ul className="list-none pl-4 overflow-auto min-w-48">
				{[
					...pokemonList,
					{
						id: 'i-do-not-exist',
						name: 'i-do-not-exist',
						url: 'Non-existent URL',
					},
				].map((pokemon) => {
					return (
						<li
							key={pokemon.id}
							className="whitespace-nowrap border-b border-gray-300 py-2 capitalize"
						>
							<Link
								to="/pokemon/$pokemonId"
								params={{
									pokemonId: pokemon.id,
								}}
								className="block py-1 text-blue-600 hover:opacity-75"
								activeProps={{ className: 'font-bold underline' }}
							>
								<div>{pokemon.name}</div>
							</Link>
						</li>
					);
				})}
			</ul>
			<hr />
			<Outlet />
		</div>
	);
}
