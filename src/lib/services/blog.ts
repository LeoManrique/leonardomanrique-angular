import type { PostMeta, Post } from '$lib/types/blog';

type MdModule = {
	default: ConstructorOfATypedSvelteComponent;
	metadata: Omit<PostMeta, 'slug'>;
};

function slugFromPath(path: string): string {
	return path.split('/').pop()!.replace('.md', '');
}

export async function getPosts(): Promise<PostMeta[]> {
	const modules = import.meta.glob<MdModule>('/src/content/blog/*.md', { eager: true });

	const posts: PostMeta[] = Object.entries(modules)
		.map(([path, module]) => ({
			...module.metadata,
			slug: slugFromPath(path)
		}))
		.filter((post) => post.published)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return posts;
}

export async function getPost(slug: string): Promise<Post | undefined> {
	const modules = import.meta.glob<MdModule>('/src/content/blog/*.md', { eager: true });

	const match = Object.entries(modules).find(([path]) => slugFromPath(path) === slug);
	if (!match) return undefined;

	const [, module] = match;
	return {
		...module.metadata,
		slug,
		content: module.default
	};
}
