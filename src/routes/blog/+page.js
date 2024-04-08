import { getBlogPosts } from '$lib/logic/getBlogPosts';
import { error } from '@sveltejs/kit';

export async function load() {
	try {
		const allPosts = await getBlogPosts();
		if (!allPosts || allPosts.length === 0) {
			throw new Error('No Posts Found');
		}
		return { allPosts };
	} catch (err) {
		throw error(500, `Cannot Load Post Index \n\nMessage:\n${err.message}\n\nStack:\n${err.stack}`);
	}
}
