import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/posts/{-$category}')({
	component: PostsComponent,
});

function PostsComponent() {
	const { category } = Route.useParams();

	return <div>{category ? `Posts in ${category}` : 'All Posts'}</div>;
}
