import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(

			{
				pages: 'build',
				assets: 'build',
				fallback: null
			}
		), appDir: 'app',


	},
	compilerOptions: {
		warningFilter: w=>{
			if (w.code.includes("a11y")){
				return false;
			}
			return true;
		}
	}
};

export default config;
