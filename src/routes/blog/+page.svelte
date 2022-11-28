<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div>
	<h2 class="text-center">Welcome to My Blog</h2>
	<div class="gallery">
		{#each data.allPosts as post}
			<a href={post.url}>
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
		padding-left: 0px;
	}
	a {
		border: 1px solid seagreen;
		margin-bottom: 16px;
		margin-right: 5px;
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
