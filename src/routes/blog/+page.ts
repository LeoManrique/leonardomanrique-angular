import type { PageLoad } from './$types';
import { getPosts } from '$lib/services/blog';

export const load: PageLoad = async () => {
	const posts = await getPosts();
	return { posts };
};
