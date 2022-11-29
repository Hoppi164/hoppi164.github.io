<script>
	/** @type {string} */
	export let label;

	/** @type {string} */
	export let value;
</script>

<div class="flex-center">
	<div class="background" style="--value: {value}%">
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
	}
	.foreground > label {
		padding-left: 20px;
		color: aliceblue;
		font-size: 8pt;
	}
</style>
