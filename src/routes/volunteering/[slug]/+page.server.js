import { error } from '@sveltejs/kit';
import data from '$lib/data/volunteering.json';

/** @type {Array<{slug: string, title: string, organization: string, image: string|null, content: any[]}>} */
const volunteeringData = /** @type {any} */ (data);

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
	const item = volunteeringData.find((v) => v.slug === params.slug);

	if (!item) {
		throw error(404, 'Volunteering entry not found');
	}

	return { item };
}
