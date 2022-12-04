import { getBlogPosts } from '$lib/logic/getBlogPosts';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	try {
		const allPosts = await getBlogPosts();
		if (!allPosts || allPosts.length === 0) {
			throw new Error('No Posts Found');
		}
		return {
			allPosts,
			slug: params.slug
		};
	} catch (err) {
		throw error(500, 'Post Index Not Found');
	}
}
