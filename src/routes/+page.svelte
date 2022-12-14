<script>
	import Icon from '$lib/components/Icon.svelte';
	import ProgressBar from '$lib/components/ProgressBar.svelte';
</script>

<section class="title-box">
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
</section>

<h3 class="flex-center">What I'm Good At</h3>
<section class="language-badges">
	<div class="row">
		<div class="col-4 flex-center flex-column">
			<h4>HTML</h4>
			<Icon iconName="Html5" />
		</div>
		<div class="col-4 flex-center flex-column">
			<h4>CSS</h4>
			<Icon iconName="Css3" />
		</div>
		<div class="col-4 flex-center flex-column">
			<h4>Javascript</h4>
			<Icon iconName="CodeBracketsSquare" />
		</div>
		<div class="col-4 flex-center flex-column">
			<h4>Fast</h4>
			<Icon iconName="DashboardSpeed" />
		</div>
		<div class="col-4 flex-center flex-column">
			<h4>Mobile Friendly</h4>
			<Icon iconName="SmartphoneDevice" />
		</div>
		<div class="col-4 flex-center flex-column">
			<h4>Creative</h4>
			<Icon iconName="LightBulbOn" />
		</div>
	</div>
</section>

<h3 class="text-center">Language Proficiency</h3>
<section class="language-proficiency">
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
</section>

<h3 class="text-center">Projects</h3>
<section class="projects">
	<div class="project">
		<h4>Hangman</h4>
		<img src="/images/hangman.avif" alt="A game of hangman" />
		<p>
			A web based rendition of the classic childrens game "Hangman". Guess the word correctly or the
			man dies.
		</p>
	</div>

	<div class="project">
		<h4>Random DND Town Generator</h4>
		<img src="/images/towngen.avif" alt="A game of hangman" />
		<p>
			A random generator for when your Dungeons & Dragons Party ventures into a new town you haven't
			fleshed out yet.
		</p>
	</div>

	<div class="project">
		<h4>Todo App</h4>
		<img src="/images/todo_list.avif" alt="A game of hangman" />
		<p>A Sample TODO webapp to exhibit Alpine JS.</p>
	</div>

	<div class="project">
		<h4>Zombie Chase Game</h4>
		<img src="/images/zombiechase.avif" alt="A game of hangman" />
		<p>A "running from zombies simulator" game. You have no weapon, and no goal except: Escape.</p>
	</div>
</section>

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
	.projects {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 32px;
	}
	.project {
		box-shadow: 0 0 8px 0px seagreen;
		text-align: center;
		width: 100%;
		padding: 16px;
	}

	@media only screen and (min-width: 900px) {
		.project {
			width: 40%;
		}
	}
	img {
		width: 100%;
		height: auto;
	}

	section {
		margin-bottom: 64px;
	}
</style>
