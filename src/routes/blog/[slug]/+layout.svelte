<script>
	/** @type {import('./$types').PageData} */
	export let data;

	function findCurrentIndex(allPosts, currentSlug) {
		return allPosts.findIndex((post) => post.slug === currentSlug);
	}

	$: currentIndex = findCurrentIndex(data.allPosts, data.slug);
	$: previousPost = data.allPosts[currentIndex - 1] || null;
	$: nextPost = data.allPosts[currentIndex + 1] || null;
</script>

<link rel="stylesheet" href="/prism.css" data-noprefix />
<nav>
	<a href={`/blog/${previousPost?.slug}`}>
		{#if previousPost}Previous Post{/if}
	</a>
	<a href={`/blog/${nextPost?.slug}`}>
		{#if nextPost}Next Post{/if}
	</a>
</nav>

<slot />

<style>
	nav {
		display: flex;
		justify-content: space-between;
	}
</style>
