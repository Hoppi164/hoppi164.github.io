<script>
	import { json } from '@sveltejs/kit';

	/** @type {import('./$types').PageData} */
	export let data;
	const allPosts = Object.values(data);
</script>

<div>
	<h2 class="text-center">Welcome to My Blog</h2>
	<div class="gallery">
		{#each allPosts as post}
			<a href={`/blog/${post.slug}`}>
				<article>
					<h3 class="text-center">
						{post.title}
					</h3>
					<p class="text-center post-summary">{@html post.summary}</p>
				</article>
			</a>
		{/each}
	</div>
</div>

<style>
	.gallery {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 16px;
	}
	a {
		border: 1px solid seagreen;
		max-width: 350px;
		min-width: 100px;
		border-radius: 5px;
	}
	article {
		list-style: none;
		padding: 12px;
		height: auto;
	}

	.post-summary {
		color: darkslategray;
	}
</style>
