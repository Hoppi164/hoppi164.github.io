<script>
	/** @type {import('./$types').PageData} */
	export let data;

	function findCurrentIndex(allPosts, currentSlug) {
		return allPosts.allPosts.findIndex((post) => post.slug === currentSlug);
	}

	$: currentIndex = findCurrentIndex(data.allPosts, data.slug);
	$: previousPost = data.allPosts.allPosts[currentIndex - 1] || null;
	$: nextPost = data.allPosts.allPosts[currentIndex + 1] || null;
</script>

<link rel="stylesheet" href="/prism.css" data-noprefix />
<nav>
	<a href={previousPost?.url} disabled={!previousPost}>Previous Post</a>
	<a href={nextPost?.url} disabled={!nextPost}>Next Post</a>
</nav>

<slot />

<style>
</style>
