<script>
	import Html5 from '$lib/components/icons/html5.svelte';
	import Css3 from '$lib/components/icons/css3.svelte';
	import CodeBracketsSquare from '$lib/components/icons/code-brackets-square.svelte';
	import DashboardSpeed from '$lib/components/icons/dashboard-speed.svelte';
	import LightBulbOn from '$lib/components/icons/light-bulb-on.svelte';
	import SmartphoneDevice from '$lib/components/icons/smartphone-device.svelte';
	import ProgressBar from '$lib/components/ProgressBar.svelte';
</script>

<div class="title-box">
	<h2>About Me</h2>
	<div class="row">
		<span class="col-5">
			<img
				src="https://avatars0.githubusercontent.com/u/9586453?s=460&u=aff94f5b839987bbbd427c2297a3d5aa5f2589b1&v=4"
				class="headshot-portrait"
				alt="headshot portrait"
			/>
		</span>
		<em class="col-7 flex-center text-center">
			I'm an experienced fullstack developer with an enthusiasm for creating user-friendly web
			applications.
		</em>
	</div>
</div>

<h3 class="flex-center">What I'm Good At</h3>
<div class="language-badges">
	<div class="row">
		<div class="col-4 flex-center flex-column">
			<h4>HTML</h4>
			<Html5 />
		</div>
		<div class="col-4 flex-center flex-column">
			<h4>CSS</h4>
			<Css3 />
		</div>
		<div class="col-4 flex-center flex-column">
			<h4>Javascript</h4>
			<CodeBracketsSquare />
		</div>
		<div class="col-4 flex-center flex-column">
			<h4>Fast</h4>
			<DashboardSpeed />
		</div>
		<div class="col-4 flex-center flex-column">
			<h4>Mobile Friendly</h4>
			<SmartphoneDevice />
		</div>
		<div class="col-4 flex-center flex-column">
			<h4>Creative</h4>
			<LightBulbOn />
		</div>
	</div>
</div>

<h3>Language Proficiency</h3>
<div class="language-proficiency">
	<h4>Frontend</h4>
	<div class="language-proficiency-group">
		<ProgressBar label="VUE" value="95" />
		<ProgressBar label="SVELTE" value="90" />
		<ProgressBar label="REACT" value="80" />
	</div>

	<h4>Backend</h4>
	<div class="language-proficiency-group">
		<ProgressBar label="PYTHON" value="95" />
		<ProgressBar label="NODE" value="90" />
		<ProgressBar label="PHP" value="75" />
	</div>

	<h4>Database</h4>
	<div class="language-proficiency-group">
		<ProgressBar label="FIREBASE" value="95" />
		<ProgressBar label="MY-SQL" value="90" />
		<ProgressBar label="ELASTIC SEARCH" value="85" />
	</div>
</div>

<h3>Timeline</h3>
<div class="timeline" />

<h3>Projects</h3>
<div class="projects" />

<style>
	.title-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: Segoe UI;
	}
	.title-box > .title-lead {
		gap: 10px;
		font-style: italic;
		font-family: Serif;
		text-align: center;
	}

	.headshot-portrait {
		/* border: 1px solid lightslategray; */
		box-shadow: 0 0 10px 0px lightslategray;
		border-radius: 100%;
		max-height: 200px;
		max-width: 200px;
		min-height: 50px;
		min-width: 50px;
		width: 100%;
	}
</style>
