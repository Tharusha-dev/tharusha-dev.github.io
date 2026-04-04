import data from '$lib/data/volunteering.json';

/** @type {Array<{slug: string, title: string, organization: string, image: string|null, content: any[]}>} */
const volunteeringData = /** @type {any} */ (data);

/** @type {import('./$types').PageServerLoad} */
export function load() {
	return {
		volunteering: volunteeringData.map(({ slug, title, organization, image }) => ({
			slug,
			title,
			organization,
			image
		}))
	};
}
