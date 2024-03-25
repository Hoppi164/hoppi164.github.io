export async function getBlogPosts() {
	const blogPostFiles = import.meta.glob('../../posts/*.md');

	let blogPostData = [];

	for (let path in blogPostFiles) {
		blogPostData.push(
			blogPostFiles[path]().then(({ metadata }) => {
				return { ...metadata };
			})
		);
	}

	const allPosts = await Promise.all(blogPostData);
	let sortedPosts = allPosts.sort((a, b) => new Date(a.date) - new Date(b.date));
	if (!sortedPosts || sortedPosts.length === 0) {
		throw new Error('No Posts Found');
	}
	return sortedPosts;
}
