import { error } from '@sveltejs/kit';
import data from '$lib/data/achievements.json';

/** @type {Array<{slug: string, title: string, organization: string, image: string|null, content: any[]}>} */
const achievementsData = /** @type {any} */ (data);

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
	const item = achievementsData.find((v) => v.slug === params.slug);

	if (!item) {
		throw error(404, 'Achievements entry not found');
	}

	return { item };
}
