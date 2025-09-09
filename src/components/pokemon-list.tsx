import { Link } from '@tanstack/react-router';
import type { PokemonListItem } from '../types/types';

interface Props {
	pokemonList: PokemonListItem[];
}

export const PokemonList = ({ pokemonList }: Props) => {
	return (
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
						key={pokemon.name}
						className="whitespace-nowrap border-b border-gray-300 py-2 capitalize"
					>
						<Link
							to="/pokemon/$pokemonId"
							params={{
								pokemonId: pokemon.name,
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
	);
};
