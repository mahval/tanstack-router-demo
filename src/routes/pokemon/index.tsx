import { createFileRoute } from '@tanstack/react-router';
import { SelectGeneration } from '../../components/select-generation';

export const Route = createFileRoute('/pokemon/')({
	component: PokemonIndexComponent,
});

function PokemonIndexComponent() {
	return (
		<div>
			<div>Select a Pokemon or a gen</div>
			<SelectGeneration />
		</div>
	);
}
