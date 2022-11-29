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
<!-- 
<h3>Timeline</h3>
<div class="timeline">
	<div class="timeline-entry">
		<h4>High School Certificate</h4>
		<time>2012</time>
		<p>
			Graduated from South Grafton High School. High achieving student, with severalextra-curricular
			activities.
		</p>
	</div>

	<div class="timeline-entry">
		<h4>Started University</h4>
		<time>2014</time>
		<p>
			During university I was nominated treasurer of the Griffith Cubing Association, and was an
			active member of the Outdoor Adventure Club
		</p>
	</div>

	<div class="timeline-entry">
		<h4>University Tutor</h4>
		<time>2014</time>
		<p>During university I worked as a private tutor for students studying Software Development.</p>
	</div>

	<div class="timeline-entry">
		<h4>PASS Leader</h4>
		<time>2015</time>
		<p>
			Working for Griffith University as "PASS Leader" I would Teach & Facilitate group workshops,
			for software development courses.
		</p>
	</div>

	<div class="timeline-entry">
		<h4>Technology Intern</h4>
		<time>2017</time>
		<p>
			I interned with the Commonwealth Games where I Designed and implemented a database, managing
			the recruitment of 4000 security guards.
		</p>
	</div>

	<div class="timeline-entry">
		<h4>Graduated University</h4>
		<time>2017</time>
		<p>
			I Graduated Griffith University with a major in Software Development, Throughout my studies I
			was a constant high achiever.
		</p>
	</div>

	<div class="timeline-entry">
		<h4>Logistics Specialist</h4>
		<time>2018</time>
		<p>
			After interning with the Commonwealth Games, I was offered employment assisting with the
			logistical operations of the security department.
		</p>
	</div>

	<div class="timeline-entry">
		<h4>Software Developer</h4>
		<time>2018</time>
		<p>I started working as a Fullstack Software Developer for "Insane Technologies".</p>
		<ul>
			<li>Python</li>
			<li>Flask</li>
			<li>Vue Js</li>
			<li>Google App Engine</li>
			<li>Google Firebase</li>
			<li>Machine Learning</li>
		</ul>
	</div>

	<div class="timeline-entry">
		<h4>Lead Developer</h4>
		<time>2019</time>
		<p>
			The business drastically expanded, and i was promoted to Lead Developer over a small project
			team, creating a data management platform for investigating data breaches
		</p>
	</div>

	<div class="timeline-entry">
		<h4>Database Admin</h4>
		<time>2020</time>
		<p>
			After completing the project with Insane Technologies, I was hired by Bond University. Where i
			assisted with the integration of a fundraising database.
		</p>
	</div>

	<div class="timeline-entry">
		<h4>Data Analyst</h4>
		<time>2020</time>
		<p>
			After completing the project Bond University i started a 10 month contract with Coca-Cola,
			doing data analysis.
		</p>
	</div>

	<div class="timeline-entry">
		<h4>Full Stack Developer</h4>
		<time>2021</time>
		<p>
			After completing the contract with Coca-Cola, I was hired by Focus Products. Where i created a
			web application that assisted the warehouse logistics operations.
		</p>
	</div>

	<div class="timeline-entry">
		<h4>Fullstack Developer</h4>
		<time>2022</time>
		<p>Created a phone app that helps people overcome their fears and phobias.</p>
	</div>
</div>
-->

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
	/* 
	.timeline {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
	.timeline-entry:nth-of-type(odd) {
		border-right: 4px solid seagreen;
	}
	.timeline-entry:nth-of-type(even) {
		border-left: 4px solid seagreen;
	}
	.timeline-entry:nth-of-type(odd)::after {
		content: '';
		width: 0px;
		height: 0px;
		position: relative;
		border-style: solid;
		border-width: 32px;
		border-color: transparent transparent transparent seagreen;
		bottom: 50%;
		left: 100%;
	}

	.timeline-entry {
		width: 40%;
		padding: 32px;
	} */
</style>
