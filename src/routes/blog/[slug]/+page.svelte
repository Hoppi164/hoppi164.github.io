<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>{data.title}</h1>
<date>{data.date}</date>
<svelte:component this={data.content} />
