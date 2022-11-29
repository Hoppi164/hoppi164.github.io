import { sveltekit } from '@sveltejs/kit/vite';
import { visualizer } from 'rollup-plugin-visualizer';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		visualizer({
			emitFile: true,
			file: 'stats.html',
			template: 'sunburst'
		})
	]
};

export default config;
