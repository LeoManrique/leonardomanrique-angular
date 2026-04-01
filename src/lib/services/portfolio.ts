import type { ProjectMeta, Project } from '$lib/types/portfolio';

type MdModule = {
	default: ConstructorOfATypedSvelteComponent;
	metadata: Omit<ProjectMeta, 'slug'>;
};

function slugFromPath(path: string): string {
	return path.split('/').pop()!.replace('.md', '');
}

export async function getProjects(): Promise<ProjectMeta[]> {
	const modules = import.meta.glob<MdModule>('/src/content/portfolio/*.md', { eager: true });

	const projects: ProjectMeta[] = Object.entries(modules)
		.map(([path, module]) => ({
			...module.metadata,
			slug: slugFromPath(path)
		}))
		.filter((project) => project.published)
		.sort((a, b) => a.order - b.order);

	return projects;
}

export async function getProject(slug: string): Promise<Project | undefined> {
	const modules = import.meta.glob<MdModule>('/src/content/portfolio/*.md', { eager: true });

	const match = Object.entries(modules).find(([path]) => slugFromPath(path) === slug);
	if (!match) return undefined;

	const [, module] = match;
	return {
		...module.metadata,
		slug,
		content: module.default
	};
}
