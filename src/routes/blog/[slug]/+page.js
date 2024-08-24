// @ts-nocheck
export async function load({ params }) {
	const post = await import(`../how-secure-is-ethereum.md`);
	const { title, date } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date
	};
}