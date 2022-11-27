import { error } from '@sveltejs/kit';

export async function load() {
	try {
		const allPosts = await import(`/src/posts/all-posts.js`);
		return allPosts;
	} catch (err) {
		throw error(500, 'Post Index Not Found');
	}
}
