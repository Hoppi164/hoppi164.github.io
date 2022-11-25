<script>
	import NavBar from '$lib/components/NavBar.svelte';
</script>

<NavBar />
<div class="content">
	<slot />
</div>

<style>
	:global(body) {
		margin: 0px;
	}

	:global(a) {
		text-decoration: none;
		color: seagreen;
	}

	:global(a:hover) {
		color: forestgreen;
		background-color: lavender;
	}

	.content {
		border-top: 1px solid lightslategray;
	}
</style>
