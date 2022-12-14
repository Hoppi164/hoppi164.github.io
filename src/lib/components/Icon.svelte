<script>
	import { onMount } from 'svelte';
	const allIcons = {
		Html5: () => import('$lib/components/icons/html5.svelte'),
		Css3: () => import('$lib/components/icons/css3.svelte'),
		CodeBracketsSquare: () => import('$lib/components/icons/code-brackets-square.svelte'),
		DashboardSpeed: () => import('$lib/components/icons/dashboard-speed.svelte'),
		LightBulbOn: () => import('$lib/components/icons/light-bulb-on.svelte'),
		SmartphoneDevice: () => import('$lib/components/icons/smartphone-device.svelte')
	};
	export let iconName;

	let el;
	let isInViewport = false;

	// create an intersection observer that adds a class "isInViewport" when this element is visible in the viewport
	onMount(async () => {
		const options = {
			rootMargin: '-10%'
		};
		const observer = new IntersectionObserver((entries) => {
			isInViewport = entries[0].isIntersecting;
		}, options);
		observer.observe(el);
	});
</script>

<div class="icon" class:isInViewport bind:this={el}>
	{#await allIcons[iconName]() then Icon}
		<svelte:component this={Icon.default} />
	{/await}
</div>

<style>
	.icon {
		min-height: 75px;
		opacity: 0;
		transition: all 0.5s ease-in-out;
	}
	.isInViewport {
		transform: scale(1.5);
		opacity: 1;
	}
</style>
