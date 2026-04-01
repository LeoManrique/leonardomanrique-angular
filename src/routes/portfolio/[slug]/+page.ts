import type { PageLoad } from './$types';
import { getProject } from '$lib/services/portfolio';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	const project = await getProject(params.slug);
	if (!project) throw error(404, 'Project not found');
	return { project };
};
