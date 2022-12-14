<script>
	import { onMount } from 'svelte';
	/** @type {string} */
	export let label;

	/** @type {string} */
	export let value;

	let el;
	let currentValue = '0';

	// create an intersection observer that updates the "currentValue" when this element is visible in the viewport
	onMount(async () => {
		const options = {
			rootMargin: '-10%'
		};
		const observer = new IntersectionObserver((entries) => {
			const isIntersecting = entries[0].isIntersecting;
			currentValue = isIntersecting ? value : '0';
		}, options);
		observer.observe(el);
	});
</script>

<div class="flex-center" bind:this={el}>
	<div class="background" style="--value: {currentValue}%">
		<div class="foreground">
			<label for="meter{label}">{label}</label>
		</div>
	</div>
</div>

<style>
	.background {
		width: 100%;
		height: 20px;
		background-color: aliceblue;
		border: 1px solid lightslategray;
		border-radius: 5px;
		margin-bottom: 5px;
	}
	.foreground {
		display: flex;
		align-items: center;
		background-color: forestgreen;
		width: var(--value);
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
		height: 100%;
		transition: width 1s ease-in-out;
	}
	.foreground > label {
		padding-left: 20px;
		color: aliceblue;
		font-size: 8pt;
	}
</style>
