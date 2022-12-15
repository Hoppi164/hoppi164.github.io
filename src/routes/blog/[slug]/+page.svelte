<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>{data.title}</h1>
<date>{new Date(data.date).toDateString()}</date>
<svelte:component this={data.content} />
