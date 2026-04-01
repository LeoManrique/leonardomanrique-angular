export interface ProjectMeta {
	title: string;
	slug: string;
	description: string;
	tech: string[];
	repo?: string;
	live?: string;
	image?: string;
	order: number;
	published: boolean;
}

export interface Project extends ProjectMeta {
	content: ConstructorOfATypedSvelteComponent;
}
