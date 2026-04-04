import data from '$lib/data/achievements.json';

/** @type {Array<{slug: string, title: string, organization: string, image: string|null, content: any[]}>} */
const achievementsData = /** @type {any} */ (data);

/** @type {import('./$types').PageServerLoad} */
export function load() {
	return {
		achievements: achievementsData.map(({ slug, title, organization, image }) => ({
			slug,
			title,
			organization,
			image
		}))
	};
}
