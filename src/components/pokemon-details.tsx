import type { Pokemon } from '../types/types';

interface Props {
	pokemon: Pokemon;
}

export const PokemonDetails = ({ pokemon }: Props) => (
	<div className="w-full bg-white p-8">
		<div className="max-w-md bg-white rounded-lg shadow-md p-8">
			{/* Header */}
			<div className="text-center mb-4">
				<h1 className="text-2xl font-bold text-gray-800 capitalize mb-1">
					{pokemon.name}
				</h1>
				<p className="text-gray-500">
					#{pokemon.id.toString().padStart(3, '0')}
				</p>
			</div>

			{/* Image */}
			<div className="text-center mb-4">
				<img
					src={pokemon.sprites.front_default}
					alt={pokemon.name}
					className="w-32 h-32 mx-auto"
				/>
			</div>

			{/* Types */}
			<div className="mb-4">
				<h3 className="font-semibold text-gray-700 mb-2">Type</h3>
				<div className="flex gap-2">
					{pokemon.types.map(({ type }) => (
						<span
							key={type.name}
							className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium capitalize"
						>
							{type.name}
						</span>
					))}
				</div>
			</div>

			{/* Basic Info */}
			<div className="grid grid-cols-2 gap-4 text-sm">
				<div>
					<span className="font-semibold text-gray-700">Height:</span>
					<p className="text-gray-600">{pokemon.height / 10} m</p>
				</div>
				<div>
					<span className="font-semibold text-gray-700">Weight:</span>
					<p className="text-gray-600">{pokemon.weight / 10} kg</p>
				</div>
			</div>

			{/* Top Stats */}
			<div className="mt-4">
				<h3 className="font-semibold text-gray-700 mb-2">Top Stats</h3>
				<div className="space-y-2">
					{pokemon.stats.slice(0, 3).map(({ stat, base_stat }) => (
						<div key={stat.name} className="flex items-center justify-between">
							<span className="text-sm capitalize text-gray-600">
								{stat.name.replace('-', ' ')}
							</span>
							<span className="font-semibold text-gray-800">{base_stat}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	</div>
);
