<script>
	import Html5 from '$lib/components/icons/html5.svelte';
	import Css3 from '$lib/components/icons/css3.svelte';
	import CodeBracketsSquare from '$lib/components/icons/code-brackets-square.svelte';
	import DashboardSpeed from '$lib/components/icons/dashboard-speed.svelte';
	import LightBulbOn from '$lib/components/icons/light-bulb-on.svelte';
	import SmartphoneDevice from '$lib/components/icons/smartphone-device.svelte';
</script>

<div class="title-box">
	<h1>About Me</h1>
	<div class="title-lead">
		<span>
			<img
				src="https://avatars0.githubusercontent.com/u/9586453?s=460&u=aff94f5b839987bbbd427c2297a3d5aa5f2589b1&v=4"
				alt="headshot portrait"
			/>
		</span>
		<em class="flex-center">
			I'm an experienced fullstack developer with an enthusiasm for creating user-friendly web
			applications.
		</em>
	</div>
</div>

<h2 class="flex-center">What I'm Good At</h2>
<div class="language-badges">
	<div class="row">
		<div class="col-4 flex-center flex-column">
			<h3>HTML</h3>
			<Html5 />
		</div>
		<div class="col-4 flex-center flex-column">
			<h3>CSS</h3>
			<Css3 />
		</div>
		<div class="col-4 flex-center flex-column">
			<h3>Javascript</h3>
			<CodeBracketsSquare />
		</div>
		<div class="col-4 flex-center flex-column">
			<h3>Fast</h3>
			<DashboardSpeed />
		</div>
		<div class="col-4 flex-center flex-column">
			<h3>Mobile Friendly</h3>
			<SmartphoneDevice />
		</div>
		<div class="col-4 flex-center flex-column">
			<h3>Creative</h3>
			<LightBulbOn />
		</div>
	</div>
</div>

<h2>Language Proficiency</h2>
<div class="language-proficiency">
	<h3>Frontend</h3>
	<div class="language-proficiency-group" />

	<h3>Backend</h3>
	<div class="language-proficiency-group" />

	<h3>Database</h3>
	<div class="language-proficiency-group" />
</div>

<h2>Timeline</h2>
<div class="timeline" />

<h2>Projects</h2>
<div class="projects" />

<style>
	.title-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: Segoe UI;
	}
	.title-box > .title-lead {
		display: flex;
		justify-content: space-around;
		gap: 10px;
		font-style: italic;
		font-family: Serif;
		text-align: center;
	}

	img {
		border: 1px solid lightslategray;
		border-radius: 100%;
		max-height: 300px;
		max-width: 300px;
		min-height: 50px;
		min-width: 50px;
		width: 100%;
	}
</style>
