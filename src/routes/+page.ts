import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const [homeRes, aboutRes, qualificationRes] = await Promise.all([
		fetch('/assets/data/home.json'),
		fetch('/assets/data/about.json'),
		fetch('/assets/data/qualification.json')
	]);

	return {
		home: await homeRes.json(),
		about: await aboutRes.json(),
		qualification: await qualificationRes.json()
	};
};
