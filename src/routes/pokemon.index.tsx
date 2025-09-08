import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/pokemon/')({
	component: PokemonIndexComponent,
});

function PokemonIndexComponent() {
	return <div>Select a Pokemon.</div>;
}
