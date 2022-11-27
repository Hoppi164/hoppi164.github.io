<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>Welcome to My Blog</h1>
<div>
	<ul>
		{#each data.allPosts as post}
			<li>
				<a href={post.url}>{post.title}</a>
			</li>
		{/each}
	</ul>
</div>
