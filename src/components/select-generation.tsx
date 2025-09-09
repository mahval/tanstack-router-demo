import { Link, useSearch } from '@tanstack/react-router';
import type { Generation } from '../types/types';

export const SelectGeneration = () => {
	const { gen: selectedGen } = useSearch({ from: '/pokemon' });

	return (
		<div className="flex flex-col gap-8">
			<h2 className="text-2xl font-bold text-gray-800">Select a generation.</h2>
			<div className="flex flex-wrap justify-center gap-6">
				{[1, 2, 3, 4, 5].map((gen) => (
					<div key={gen}>
						<Link
							to="/pokemon"
							search={{
								gen: gen as Generation,
							}}
							className={`relative flex items-center justify-center w-28 h-28 rounded-full shadow-lg border-4 border-black bg-gradient-to-b from-red-500 to-white text-black font-bold text-lg hover:scale-105 transition-transform duration-300
								${gen === selectedGen ? 'border-b-4 border-blue-500' : ''}`}
						>
							{/* Pokéball dividing line */}
							<span className="absolute top-1/2 left-0 w-full h-0.5 bg-black"></span>

							{/* Pokéball center button */}
							<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-14 rounded-full bg-white border-4 border-black flex items-center justify-center z-20"></span>

							{/* Text */}
							<span className="z-30">Gen {gen}</span>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};
