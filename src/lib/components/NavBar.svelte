<script>
	import { toggleDarkMode } from '$lib/stores/MainStore';
	import { isDarkMode } from '$lib/stores/MainStore';
</script>

<header>
	<div class="title-box">
		<a href="/">
			<img src="/favicon.ico" alt="Site Icon" />
		</a>
		<div>
			<h1 class="site-name">
				<a href="/">Andrew Hopkins</a>
			</h1>
			<em class="site-description">A Software Developer You Can Rely On</em>
		</div>
	</div>

	<nav>
		<a href="/">Home</a>
		<a href="/blog">Blog</a>
		<a href="https://github.com/Hoppi164">Github</a>
		<!-- <button class="toggleDarkMode" on:click={toggleDarkMode}>toggle darkmode</button> -->
	</nav>
</header>

<style>
	/* Mobile Size */
	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 16px;
		font-family: Helvetica;
		font-size: 12pt;
	}

	nav > a {
		padding: 16px;
	}

	.title-box {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 8px;
		border-top: 4px solid forestgreen;
	}

	.site-name > a {
		color: darkgreen;
		font-size: 16pt;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}

	.site-name {
		margin: 0;
	}

	.site-description {
		font-size: 12pt;
		color: lightslategray;
	}

	header {
		display: flex;
		flex-direction: column;
		box-shadow: 0px 0 4px seagreen;
	}

	/* Medium + Large Screen Size Only */
	@media only screen and (min-width: 900px) {
		header {
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;
			padding-bottom: 8px;
		}
	}
</style>
