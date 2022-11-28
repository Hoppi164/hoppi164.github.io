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

	:global(h1) {
		text-decoration: none;
		color: darkgreen;
		font-size: 24pt;
	}
	:global(h2) {
		text-decoration: none;
		color: black;
		font-size: 16pt;
	}
	:global(h3) {
		text-decoration: none;
		color: seagreen;
		font-size: 12pt;
	}
	:global(h4) {
		text-decoration: none;
		color: lightslategray;
		font-size: 12pt;
	}
	:global(h5) {
		text-decoration: none;
		color: aliceblue;
		font-size: 8pt;
	}
	:global(h6) {
		text-decoration: none;
		color: lightslategray;
		font-size: 8pt;
	}

	:global(a) {
		text-decoration: none;
		user-select: none;
		color: seagreen;
	}
	:global(li) {
		text-align: left;
	}
	:global(a:hover) {
		color: forestgreen;
		background-color: rgb(175, 211, 178);
		transition: 0.7s;
	}

	:global(.flex-center) {
		display: flex;
		justify-content: center;
		align-items: center;
		align-self: center;
	}
	:global(.text-center) {
		text-align: center;
		vertical-align: middle;
	}

	:global(.flex-column) {
		display: flex;
		flex-direction: column;
	}

	:global(.row) {
		display: flex;
		flex-wrap: wrap;
	}

	:global(.col-1) {
		flex: 0 0 8.333333%;
		max-width: 8.333333%;
	}
	:global(.col-2) {
		flex: 0 0 16.666667%;
		max-width: 16.666667%;
	}
	:global(.col-3) {
		flex: 0 0 25%;
		max-width: 25%;
	}
	:global(.col-4) {
		flex: 0 0 33.333333%;
		max-width: 33.333333%;
	}
	:global(.col-5) {
		flex: 0 0 41.666667%;
		max-width: 41.666667%;
	}
	:global(.col-6) {
		flex: 0 0 50%;
		max-width: 50%;
	}
	:global(.col-7) {
		flex: 0 0 58.333333%;
		max-width: 58.333333%;
	}
	:global(.col-8) {
		flex: 0 0 66.666667%;
		max-width: 66.666667%;
	}
	:global(.col-9) {
		flex: 0 0 75%;
		max-width: 75%;
	}
	:global(.col-10) {
		flex: 0 0 83.333333%;
		max-width: 83.333333%;
	}
	:global(.col-11) {
		flex: 0 0 91.666667%;
		max-width: 91.666667%;
	}
	:global(.col-12) {
		flex: 0 0 100%;
		max-width: 100%;
	}

	.content {
		padding: 16px;
	}
</style>
