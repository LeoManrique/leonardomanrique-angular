export interface PostMeta {
	title: string;
	slug: string;
	description: string;
	date: string;
	tags: string[];
	published: boolean;
}

export interface Post extends PostMeta {
	content: ConstructorOfATypedSvelteComponent;
}
