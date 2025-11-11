import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		prerender: {
			entries: [
				'/',
				'/place-order',
				'/place-order/latte',
				'/place-order/americano',
				'/place-order/cold-brew',
				'/place-order/chai-latte',
				'/place-order/dirty-chai-latte',
				'/place-order/london-fog',
				'/place-order/hot-chocolate',
				'/place-order/iced-tea'
			]
		},
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			pages: '../docs',
			assets: '../docs',
			fallback: null
		}),
		paths: {
			base: '/hebrews-coffee-site',
			relative: false
		}
	}
};

export default config;
