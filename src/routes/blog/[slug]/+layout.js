import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	try {
		const allPosts = await import('../../../posts/all-posts.js');
		return {
			allPosts,
			slug: params.slug
		};
	} catch (err) {
		throw error(500, 'Post Index Not Found');
	}
}
